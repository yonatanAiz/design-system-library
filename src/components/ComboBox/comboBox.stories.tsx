import React from 'react';
import ComboBox from './ComboBox';

export default {
  title: 'Atoms/ComboBox',
  component: ComboBox,
};

export const Default = () => <ComboBox />;

export const SnapTest = () => (
  <div>
    <Default />
  </div>
);
