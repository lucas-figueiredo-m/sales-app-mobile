import { HeaderBackButtonProps } from '@react-navigation/elements';
import { SVG } from '@salesapp/components';
import { ChevronLeft } from '@salesapp/icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const HeaderLeft: React.FC<HeaderBackButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <SVG xml={ChevronLeft} color={props.tintColor} width={40} height={40} />
    </TouchableOpacity>
  );
};
