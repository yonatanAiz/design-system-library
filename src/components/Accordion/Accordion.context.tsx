import React from 'react';
import {
  AccordionContextProps,
  AccordionContextProviderProps,
} from './accordion.types';

const AccordionContext = React.createContext<AccordionContextProps>({
  activeItemId: null,
  onItemExpand: () => {
    return;
  },
});

export const useAccordionContext = () => React.useContext(AccordionContext);

const AccordionProvider = ({ children }: AccordionContextProviderProps) => {
  const [activeItemId, setActiveItemId] = React.useState<string | null>(null);

  const onItemExpand = (id: string) => {
    setActiveItemId((prevActiveItemId) =>
      prevActiveItemId === id ? null : id,
    );
  };

  return (
    <AccordionContext.Provider value={{ activeItemId, onItemExpand }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;
