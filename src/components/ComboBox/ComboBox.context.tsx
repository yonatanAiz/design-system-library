import { useCombobox } from 'downshift';
import React from 'react';
import {
  ComboBoxContextProps,
  ComboBoxContextProviderProps,
} from './comboBox.types';

const ComboBoxContext = React.createContext<ComboBoxContextProps>({
  addItem: () => {
    return;
  },
  getLabelProps: () => ({}),
  getInputProps: () => ({}),
  getToggleButtonProps: () => ({}),
  getMenuProps: () => ({}),
  getItemProps: () => ({}),
  isOpen: false,
  highlightedIndex: 0,
  selectedValue: '',
  removeItem: () => {
    return;
  },
});

export const useComboBoxContext = () => React.useContext(ComboBoxContext);

const ComboBoxProvider = ({
  children,
  onSelect,
  selectedValue,
}: ComboBoxContextProviderProps) => {
  const [itemsMap, setItemsMap] = React.useState<
    Record<
      number,
      {
        value: string;
        index: number;
      }
    >
  >({});

  const addItem = (item: string, index: number) => {
    setItemsMap((prevItems) => ({
      ...prevItems,
      [index]: {
        value: item,
        index,
      },
    }));
  };

  const items = Object.values(itemsMap).map((item) => item.value);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem: _selectedItem,
  } = useCombobox({
    items,
    selectedItem: selectedValue,

    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        onSelect(selectedItem);
      }
    },
  });

  const removeItem = (index: number) => {
    setItemsMap((prevItems) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [index]: _, ...rest } = prevItems;

      return rest;
    });
  };

  return (
    <ComboBoxContext.Provider
      value={{
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedValue: _selectedItem,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ComboBoxContext.Provider>
  );
};

export default ComboBoxProvider;
