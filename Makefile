# Makefile for CerebraTechAI Web App Docker Operations

# Variables
IMAGE_NAME=cerebratechai-web
IMAGE_TAG=latest
CONTAINER_NAME=cerebratechai-web
PORT=3000

# Build Arguments
SITE_URL?=http://localhost:3000
API_URL?=http://localhost:7000/api
CONTENT_API_URL?=http://localhost:7010/api/content

.PHONY: help build run stop clean logs shell test

# Default target
help:
	@echo "========================================="
	@echo "CerebraTechAI Web - Docker Commands"
	@echo "========================================="
	@echo ""
	@echo "Available commands:"
	@echo "  make build          - Build Docker image"
	@echo "  make run            - Run container"
	@echo "  make stop           - Stop container"
	@echo "  make restart        - Restart container"
	@echo "  make logs           - View container logs"
	@echo "  make shell          - Open shell in container"
	@echo "  make clean          - Remove container and image"
	@echo "  make test           - Test the application"
	@echo "  make up             - Start with docker-compose"
	@echo "  make down           - Stop docker-compose"
	@echo "  make rebuild        - Rebuild and restart"
	@echo ""

# Build Docker image
build:
	@echo "Building Docker image..."
	docker build \
		--build-arg NEXT_PUBLIC_SITE_URL=$(SITE_URL) \
		--build-arg NEXT_PUBLIC_API_BASE_URL=$(API_URL) \
		--build-arg NEXT_PUBLIC_CONTENT_API_URL=$(CONTENT_API_URL) \
		-t $(IMAGE_NAME):$(IMAGE_TAG) \
		.
	@echo "✅ Build complete!"

# Build without cache
build-no-cache:
	@echo "Building Docker image (no cache)..."
	docker build --no-cache \
		--build-arg NEXT_PUBLIC_SITE_URL=$(SITE_URL) \
		--build-arg NEXT_PUBLIC_API_BASE_URL=$(API_URL) \
		--build-arg NEXT_PUBLIC_CONTENT_API_URL=$(CONTENT_API_URL) \
		-t $(IMAGE_NAME):$(IMAGE_TAG) \
		.
	@echo "✅ Build complete!"

# Run container
run:
	@echo "Starting container..."
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):3000 \
		-e NODE_ENV=production \
		$(IMAGE_NAME):$(IMAGE_TAG)
	@echo "✅ Container started on http://localhost:$(PORT)"

# Stop container
stop:
	@echo "Stopping container..."
	docker stop $(CONTAINER_NAME) || true
	@echo "✅ Container stopped"

# Restart container
restart: stop run

# View logs
logs:
	docker logs -f $(CONTAINER_NAME)

# Open shell
shell:
	docker exec -it $(CONTAINER_NAME) sh

# Clean up
clean: stop
	@echo "Cleaning up..."
	docker rm $(CONTAINER_NAME) || true
	docker rmi $(IMAGE_NAME):$(IMAGE_TAG) || true
	@echo "✅ Cleanup complete"

# Test the application
test:
	@echo "Testing application..."
	@curl -f http://localhost:$(PORT) > /dev/null 2>&1 && echo "✅ Frontend is running" || echo "❌ Frontend is NOT running"
	@curl -f http://localhost:$(PORT)/en > /dev/null 2>&1 && echo "✅ English route works" || echo "❌ English route failed"
	@curl -f http://localhost:$(PORT)/th > /dev/null 2>&1 && echo "✅ Thai route works" || echo "❌ Thai route failed"

# Docker Compose commands
up:
	@echo "Starting with docker-compose..."
	docker-compose up -d
	@echo "✅ Services started"

down:
	@echo "Stopping docker-compose..."
	docker-compose down
	@echo "✅ Services stopped"

up-prod:
	@echo "Starting production stack..."
	docker-compose -f docker-compose.production.yml up -d
	@echo "✅ Production services started"

down-prod:
	@echo "Stopping production stack..."
	docker-compose -f docker-compose.production.yml down
	@echo "✅ Production services stopped"

# Rebuild and restart
rebuild: clean build run

# View container status
status:
	@echo "Container status:"
	@docker ps -a | grep $(CONTAINER_NAME) || echo "Container not found"

# Health check
health:
	@echo "Checking container health..."
	@docker inspect $(CONTAINER_NAME) | grep -A 10 Health || echo "Container not running"

# Development build (faster)
dev-build:
	@echo "Building for development..."
	docker build -t $(IMAGE_NAME):dev .
	@echo "✅ Development build complete!"

dev-run:
	@echo "Starting development container..."
	docker run -d \
		--name $(CONTAINER_NAME)-dev \
		-p $(PORT):3000 \
		-v $(PWD)/src:/app/src \
		-e NODE_ENV=development \
		$(IMAGE_NAME):dev
	@echo "✅ Development container started"

# Production deployment
deploy: build
	@echo "Deploying to production..."
	@echo "⚠️  Make sure to configure production environment variables"
	docker-compose -f docker-compose.production.yml up -d
	@echo "✅ Deployed!"

