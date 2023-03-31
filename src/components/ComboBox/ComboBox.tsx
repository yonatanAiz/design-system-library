import React from 'react';
import { ComboBoxProps } from './comboBox.types';
import * as S from './comboBox.styled';

const ComboBox = ({ className }: ComboBoxProps) => {
  return <S.ComboBox className={className}>ComboBox</S.ComboBox>;
};

export default ComboBox;
