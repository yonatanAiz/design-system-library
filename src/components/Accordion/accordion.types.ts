export interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps {
  children: React.ReactNode | ((isExpanded: boolean) => React.ReactNode);
  renderTitle: (isExpanded: boolean) => React.ReactNode;
}

export interface AccordionContextProps {
  activeItemId: string | null;
  onItemExpand: (id: string) => void;
}

export interface AccordionContextProviderProps {
  children: React.ReactNode;
}
