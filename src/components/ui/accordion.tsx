'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openItems: string[];
  setOpenItems: (value: string[]) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItems: [],
  setOpenItems: () => {},
  type: 'single',
  collapsible: true,
});

const AccordionItemContext = React.createContext<string | null>(null);

const useAccordionItem = () => {
  const value = React.useContext(AccordionItemContext);
  if (!value) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }
  return value;
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion = ({
  children,
  className,
  type = 'single',
  collapsible = true,
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <AccordionContext.Provider
      value={{ openItems, setOpenItems, type, collapsible }}
    >
      <div className={cn('space-y-1', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div data-value={value} className={className}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { openItems, setOpenItems, type, collapsible } =
    React.useContext(AccordionContext);
  const itemValue = useAccordionItem();
  const isOpen = openItems.includes(itemValue);

  const toggleItem = () => {
    if (type === 'multiple') {
      setOpenItems(
        isOpen
          ? openItems.filter(item => item !== itemValue)
          : [...openItems, itemValue]
      );
      return;
    }
    if (isOpen) {
      setOpenItems(collapsible ? [] : [itemValue]);
      return;
    }
    setOpenItems([itemValue]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleItem}
        className={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-text w-full text-left',
          isOpen && 'text-text',
          className
        )}
      >
        {children}
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 transition-transform duration-200 ml-4',
            isOpen && 'rotate-180'
          )}
        />
      </button>
    </div>
  );
};

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { openItems } = React.useContext(AccordionContext);
  const itemValue = useAccordionItem();
  const isOpen = openItems.includes(itemValue);

  return (
    <div
      className={cn(
        'overflow-hidden transition-all',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        className
      )}
    >
      <div className="pb-4 pt-0 text-sm text-text-muted/80">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
