import { HeaderButtonProps } from '@react-navigation/elements';
import { SVG } from '@salesapp/components';
import { X } from '@salesapp/icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const HeaderRight: React.FC<
  HeaderButtonProps & { onPress: () => void }
> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <SVG xml={X} color={props.tintColor} width={26} height={26} />
    </TouchableOpacity>
  );
};
