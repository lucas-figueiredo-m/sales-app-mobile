import { Label, SVG } from '@salesapp/components';
import { defaultHitSlop } from '@salesapp/constants';
import React from 'react';
import { View, Pressable } from 'react-native';
import { Translation } from '@salesapp/types';
import { Colors } from '@salesapp/theme';
import { useTheme } from '@salesapp/hooks';

interface Props {
  onLeftPress: () => void;
  label: Translation;
  icon?: string;
}

export const Header: React.FC<Props> = ({ onLeftPress, label, icon }) => {
  const { Font, Layout } = useTheme();

  return (
    <View style={Layout.rows.verticalCenter}>
      {icon && (
        <Pressable onPress={onLeftPress} hitSlop={defaultHitSlop}>
          <SVG xml={icon} width={30} height={30} color={Colors.Black} />
        </Pressable>
      )}
      <Label.H3 t={label} style={Font.transform.uppercase} />
    </View>
  );
};
