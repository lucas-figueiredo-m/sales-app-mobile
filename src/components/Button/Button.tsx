import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Label } from '@salesapp/components';
import { Colors } from '@salesapp/theme';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { Translation } from '@salesapp/types';
import Animated from 'react-native-reanimated';
import { useAnimatedButton } from './hooks';

interface ButtonProps extends PressableProps {
  backgroundColor: Colors;
  t: Translation;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelColor?: Colors;
  loading?: boolean;
}

const ButtonBase: React.FC<ButtonProps> = ({
  backgroundColor,
  t,
  labelStyle,
  labelColor,
  style,
  loading = false,
  ...props
}) => {
  const { onPressIn, onPressOut, animatedStyle } = useAnimatedButton();

  const onPressedIn = (event: GestureResponderEvent) => {
    if (props.onPressIn) {
      props.onPressIn(event);
    }
    onPressIn();
  };

  const onPressedOut = (event: GestureResponderEvent) => {
    if (props.onPressOut) {
      props.onPressOut(event);
    }
    onPressOut();
  };
  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        {...props}
        onPressIn={onPressedIn}
        onPressOut={onPressedOut}
        style={[style, { backgroundColor }]}>
        {loading ? (
          <ActivityIndicator size="small" color={labelColor} />
        ) : (
          <Label.H3 t={t} color={labelColor} style={labelStyle} />
        )}
      </Pressable>
    </Animated.View>
  );
};

const Large: React.FC<ButtonProps> = props => {
  const styles = useThemedStyles(themedStyles);
  return <ButtonBase {...props} style={styles.largeButton} />;
};

const themedStyles = createThemedStyles(({ spacing }) => ({
  root: {},
  largeButton: {
    width: '100%',
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: spacing.sm,
  },
}));

export const Button = {
  Large,
};
