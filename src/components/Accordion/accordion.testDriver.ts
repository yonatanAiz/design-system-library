import { screen, within, fireEvent } from '@testing-library/react';

const accordionItemDriver = (item: HTMLLIElement) => ({
  getHeader() {
    return within(item).getByRole('tab');
  },

  getPanel() {
    return within(item).getByRole('tabpanel', { hidden: true });
  },

  clickOnHeader() {
    fireEvent.click(this.getHeader());
  },

  getHeaderAriaExpanded() {
    return this.getHeader().getAttribute('aria-expanded');
  },

  getPanelAreaHidden() {
    return this.getPanel().getAttribute('aria-hidden');
  },
});

export const accordionDriver = {
  getAccordion: () => {
    return screen.getByTestId('accordion-container');
  },

  getAccordionItems: () => {
    return screen.getAllByTestId('accordion-item') as HTMLLIElement[];
  },

  getAccordionItem: (index: number) => {
    return accordionDriver.getAccordionItems()[index];
  },

  getAccordionItemDriver: (index: number) => {
    return accordionItemDriver(accordionDriver.getAccordionItem(index));
  },
};
