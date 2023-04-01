import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const comboBoxDriver = {
  getComboBoxWrapper() {
    return screen.getByTestId('combobox-wrapper');
  },
  getComboBox() {
    return screen.getByRole('combobox');
  },

  typeInComboBox(value: string) {
    userEvent.type(this.getComboBox(), value);
  },

  getComboBoxAriaExpanded() {
    return this.getComboBox().getAttribute('aria-expanded');
  },

  getLabelByText(text: string | RegExp) {
    return screen.getByText(text);
  },

  clickComboBox() {
    userEvent.click(this.getComboBox());
  },

  getComboBoxList() {
    return screen.getByRole('listbox');
  },

  getComboBoxListItems() {
    return screen.getAllByRole('option');
  },

  clickComboBoxListItem(index: number) {
    userEvent.click(this.getComboBoxListItems()[index]);
  },
};
