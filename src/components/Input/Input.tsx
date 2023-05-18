import {
  createThemedStyles,
  useThemedStyles,
  useTranslation,
} from '@salesapp/hooks';

import React, { useRef } from 'react';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  View,
  Pressable,
  ViewStyle,
  Text,
} from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';
import { Translation } from '@salesapp/types';
import { useAnimatedInput, InputStatus } from './hooks';
import { FieldError } from 'react-hook-form';

interface InputState {
  value: string;
  error?: string | FieldError;
}

type Props = Omit<TextInputProps, 'placeholder'> & {
  state: InputState;
  placeholder: Translation;
  required?: boolean;
  customContainerStyle?: StyleProp<ViewStyle>;
  customInputStyle?: StyleProp<TextStyle>;
};

export const Input: React.FC<Props> = ({
  state,
  placeholder,
  customInputStyle,
  customContainerStyle,
  required,
  ...props
}) => {
  const { containerStyle, placeholderStyle, placeholderStatus } =
    useAnimatedInput();
  const t = useTranslation();

  const styles = useThemedStyles(themedStyles);

  const InputRef = useRef<TextInput>(null);

  return (
    <View style={[styles.root, customContainerStyle]}>
      <Animated.View style={[styles.content, containerStyle]}>
        <TextInput
          style={[styles.input, customInputStyle]}
          ref={InputRef}
          onFocus={() =>
            (placeholderStatus.value = withTiming(InputStatus.Focus, {
              duration: 200,
            }))
          }
          onBlur={() =>
            (placeholderStatus.value = withTiming(InputStatus.Blur, {
              duration: 200,
            }))
          }
          value={state.value}
          {...props}
        />
        <Pressable onPress={() => InputRef.current?.focus()}>
          <Animated.Text style={[styles.placeholder, placeholderStyle]}>
            {required ? t(placeholder) + '*' : t(placeholder)}
          </Animated.Text>
        </Pressable>
      </Animated.View>
      {state.error && <Text>{state.error.toString()}</Text>}
    </View>
  );
};

const themedStyles = createThemedStyles(({ colors, fonts, spacing }) => ({
  root: {
    paddingVertical: spacing.xs,
  },
  content: {
    borderRadius: 5,
    borderWidth: 1,
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: colors.Input.Background,
    fontFamily: fonts.family.Montserrat,
    fontWeight: fonts.weight.semibold,
    paddingHorizontal: spacing.xs,
  },
  input: {
    fontFamily: fonts.family.Montserrat,
    fontSize: fonts.size.md,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
}));
