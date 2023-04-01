import React from 'react';
import type {
  ComboBoxButtonProps,
  ComboBoxProps,
  ComboBoxMenuProps,
  ComboBoxItemProps,
  ComboBoxLabelProps,
  ComboBoxInputProps,
} from './comboBox.types';
import * as S from './comboBox.styled';
import ComboBoxProvider, { useComboBoxContext } from './ComboBox.context';

function executeFunctionOrReturnPlain<T>(value: T, props: unknown): T {
  return typeof value === 'function' ? value(props) : value;
}

const ComboBoxLabel = ({ children, className }: ComboBoxLabelProps) => {
  const { getLabelProps, isOpen } = useComboBoxContext();

  return (
    <label
      className={executeFunctionOrReturnPlain(className, {
        isOpen,
      })}
      {...getLabelProps()}
    >
      {executeFunctionOrReturnPlain(children, {
        isOpen,
      })}
    </label>
  );
};

const ComboBoxInput = ({ className, onChange, value }: ComboBoxInputProps) => {
  const { getInputProps, isOpen, selectedValue } = useComboBoxContext();

  React.useEffect(() => {
    onChange(selectedValue || '');
  }, [selectedValue]);

  return (
    <input
      className={executeFunctionOrReturnPlain(className, {
        isOpen,
      })}
      {...getInputProps({
        onChange: (e) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onChange(e.target.value);
        },
        value,
      })}
    />
  );
};

const ComboBoxButton = ({ children, className }: ComboBoxButtonProps) => {
  const { getToggleButtonProps, isOpen } = useComboBoxContext();

  return (
    <button
      className={executeFunctionOrReturnPlain(className, {
        isOpen,
      })}
      {...getToggleButtonProps()}
    >
      {executeFunctionOrReturnPlain(children, {
        isOpen,
      })}
    </button>
  );
};

const ComboBoxList = ({ children, className }: ComboBoxMenuProps) => {
  const { isOpen, getMenuProps } = useComboBoxContext();

  return (
    <ul
      className={
        typeof className === 'function' ? className({ isOpen }) : className
      }
      {...getMenuProps()}
    >
      {isOpen && executeFunctionOrReturnPlain(children, { isOpen })}
    </ul>
  );
};

const ComboBoxItem = ({
  value,
  children,
  index,
  className,
}: ComboBoxItemProps) => {
  const { addItem, getItemProps, selectedValue, highlightedIndex, removeItem } =
    useComboBoxContext();

  const isSelected = selectedValue === value;
  const isHighlighted = highlightedIndex === index;

  React.useEffect(() => {
    if (value && !isNaN(index)) {
      addItem(value, index);
    }

    return () => {
      removeItem(index);
    };
  }, [value, index]);

  return (
    <li
      {...getItemProps({ item: value, index })}
      className={
        typeof className === 'function'
          ? className({ isSelected, isHighlighted })
          : className
      }
    >
      {typeof children === 'function'
        ? children({ isSelected, isHighlighted })
        : children}
    </li>
  );
};

const ComboBox = ({ className, onChange, value, children }: ComboBoxProps) => {
  return (
    <ComboBoxProvider onSelect={onChange} selectedValue={value}>
      <S.ComboBox data-testid="combobox-wrapper" className={className}>
        {children}
      </S.ComboBox>
    </ComboBoxProvider>
  );
};

ComboBox.Label = ComboBoxLabel;
ComboBox.Input = ComboBoxInput;
ComboBox.Button = ComboBoxButton;
ComboBox.List = ComboBoxList;
ComboBox.Item = ComboBoxItem;

export default ComboBox;
