import React from 'react';
import { renderWithTheme } from '../../utils/test/renderWithTheme';
import ComboBox from './ComboBox';
import { ComboBoxProps } from './comboBox.types';
import { comboBoxDriver } from './comboBox.testDriver';

const renderComboBox = (props?: ComboBoxProps) =>
  renderWithTheme(<ComboBox {...props} />);

describe('ComboBox', () => {
  it('should render', () => {
    renderComboBox();
    expect(comboBoxDriver.getComboBox()).toBeInTheDocument();
  });
});
