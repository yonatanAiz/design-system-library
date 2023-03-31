import React from 'react';
import {
  ComboBoxContextProps,
  ComboBoxContextProviderProps,
} from './comboBox.types';

const ComboBoxContext = React.createContext<ComboBoxContextProps>({});

export const useComboBoxContext = () => React.useContext(ComboBoxContext);

const ComboBoxProvider = ({ children }: ComboBoxContextProviderProps) => {
  const value: ComboBoxContextProps = {};
  return (
    <ComboBoxContext.Provider value={value}>
      {children}
    </ComboBoxContext.Provider>
  );
};

export default ComboBoxProvider;
