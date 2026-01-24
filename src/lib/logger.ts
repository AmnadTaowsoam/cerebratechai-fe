/**
 * Structured logging utility
 * Provides consistent logging format across the application
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  requestId?: string;
  userId?: string;
  path?: string;
  method?: string;
  statusCode?: number;
  duration?: number;
  error?: Error | string;
  [key: string]: any;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  /**
   * Generate a unique request ID
   */
  generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Log a message with structured context
   */
  private log(level: LogLevel, message: string, context?: LogContext) {
    const timestamp = new Date().toISOString();

    const logEntry = {
      timestamp,
      level,
      message,
      ...context,
    };

    // In development, use console with colors
    if (this.isDevelopment) {
      const colors = {
        debug: '\x1b[36m', // Cyan
        info: '\x1b[32m', // Green
        warn: '\x1b[33m', // Yellow
        error: '\x1b[31m', // Red
      };
      const reset = '\x1b[0m';

      console.log(
        `${colors[level]}[${level.toUpperCase()}]${reset} ${timestamp} - ${message}`,
        context ? context : ''
      );
      return;
    }

    // In production, output JSON for log aggregation
    if (this.isProduction) {
      // Sanitize error objects
      if (logEntry.error instanceof Error) {
        logEntry.error = {
          name: logEntry.error.name,
          message: logEntry.error.message,
          stack: logEntry.error.stack,
        } as any;
      }

      console.log(JSON.stringify(logEntry));
      return;
    }

    // Default: simple console.log
    console.log(logEntry);
  }

  /**
   * Debug level logging
   */
  debug(message: string, context?: LogContext) {
    if (!this.isDevelopment) return; // Only log debug in development
    this.log('debug', message, context);
  }

  /**
   * Info level logging
   */
  info(message: string, context?: LogContext) {
    this.log('info', message, context);
  }

  /**
   * Warning level logging
   */
  warn(message: string, context?: LogContext) {
    this.log('warn', message, context);
  }

  /**
   * Error level logging
   */
  error(message: string, context?: LogContext) {
    this.log('error', message, context);
  }

  /**
   * Log HTTP request
   */
  logRequest(method: string, path: string, context?: LogContext) {
    this.info(`${method} ${path}`, {
      ...context,
      method,
      path,
      type: 'request',
    });
  }

  /**
   * Log HTTP response
   */
  logResponse(
    method: string,
    path: string,
    statusCode: number,
    duration: number,
    context?: LogContext
  ) {
    const level =
      statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';

    this.log(level, `${method} ${path} ${statusCode} ${duration}ms`, {
      ...context,
      method,
      path,
      statusCode,
      duration,
      type: 'response',
    });
  }

  /**
   * Sanitize sensitive data from logs
   * Remove passwords, tokens, API keys, etc.
   */
  sanitize(data: any): any {
    if (!data || typeof data !== 'object') return data;

    const sensitiveKeys = [
      'password',
      'token',
      'secret',
      'apiKey',
      'api_key',
      'authorization',
      'cookie',
      'session',
      'csrf',
    ];

    const sanitized = { ...data };

    for (const key of Object.keys(sanitized)) {
      const lowerKey = key.toLowerCase();

      if (sensitiveKeys.some(sensitive => lowerKey.includes(sensitive))) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof sanitized[key] === 'object') {
        sanitized[key] = this.sanitize(sanitized[key]);
      }
    }

    return sanitized;
  }
}

// Export singleton instance
export const logger = new Logger();

// Export for testing
export { Logger };
