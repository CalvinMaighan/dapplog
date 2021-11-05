import React from 'react';
import { _slider, _item } from './Slider.styled';

const Slider = ({ children }) => {
  return (
    <_slider>
      <_item>{children}</_item>
    </_slider>
  );
};

export default Slider;
