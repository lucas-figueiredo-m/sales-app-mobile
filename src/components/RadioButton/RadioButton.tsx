import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Translation } from '@salesapp/types';
import { useTheme } from '@salesapp/hooks';
// import { RadioOn, RadioOff } from '@sales-app/icons/index';
import { Label } from '@salesapp/components';
import { Colors } from '@salesapp/theme';

type RadioButtonItemProps = {
  label: Translation;
  selected: boolean;
  color: Colors;
};

// TODO: check this component

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  label,
  selected,
}) => {
  const { Layout } = useTheme();
  return (
    <View style={[Layout.rows.verticalCenter]}>
      {selected ? (
        <View />
      ) : (
        // <RadioOn
        //   width={20}
        //   height={20}
        //   color={color}
        //   fill={selected ? color : Colors.Transparent}
        // />
        <View />
        // <RadioOff
        //   width={20}
        //   height={20}
        //   color={color}
        //   fill={selected ? color : Colors.Transparent}
        // />
      )}
      <Label.H3 t={label} />
    </View>
  );
};

type RadioButtonProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const RadioButtonComponent: React.FC<RadioButtonProps> & {
  Item: React.ComponentType<RadioButtonItemProps>;
} = ({ style, children }) => {
  return <View style={style}>{children}</View>;
};

RadioButtonComponent.Item = RadioButtonItem;

export const RadioButton = RadioButtonComponent;
