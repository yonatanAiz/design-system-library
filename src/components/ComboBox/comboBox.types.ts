import type { UseComboboxReturnValue } from 'downshift';

export interface ComboBoxProps {
  value: string | null;
  onChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export interface ComboBoxContextProps {
  selectedValue: string | null;
  className?: string;
  getInputProps: UseComboboxReturnValue<string>['getInputProps'];
  getToggleButtonProps: UseComboboxReturnValue<string>['getToggleButtonProps'];
  getLabelProps: UseComboboxReturnValue<string>['getLabelProps'];
  getMenuProps: UseComboboxReturnValue<string>['getMenuProps'];
  getItemProps: UseComboboxReturnValue<string>['getItemProps'];
  isOpen: boolean;
  highlightedIndex: number;
  addItem: (item: string, index: number) => void;
  removeItem: (index: number) => void;
}

interface ComboBoxTriggerProps {
  className?: ((props: ComboBoxTriggerProps) => string) | string;
  children:
    | ((props: ComboBoxTriggerProps) => React.ReactNode)
    | React.ReactNode;
}

export type ComboBoxLabelProps = ComboBoxTriggerProps;

export type ComboBoxInputProps = {
  className?: ((props: ComboBoxInputProps) => string) | string;
  value: string;
  onChange: (value: string) => void;
};

export type ComboBoxButtonProps = ComboBoxTriggerProps;

export interface ComboBoxMenuStateProps {
  isOpen: boolean;
}
export interface ComboBoxMenuProps {
  children:
    | ((props: ComboBoxMenuStateProps) => React.ReactNode)
    | React.ReactNode;
  className?: ((props: ComboBoxMenuStateProps) => string) | string;
}

interface ItemStateProps {
  isSelected: boolean;
  isHighlighted: boolean;
}
export interface ComboBoxItemProps {
  children: ((props: ItemStateProps) => React.ReactNode) | React.ReactNode;
  value: string;
  index: number;
  className?: ((props: ItemStateProps) => string) | string;
}

export interface ComboBoxContextProviderProps {
  children: React.ReactNode;
  selectedValue: string | null;
  onSelect: (value: string) => void;
}
