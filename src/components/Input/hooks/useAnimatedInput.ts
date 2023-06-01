import { FontSize } from '@salesapp/theme/fonts';
import { Metrics } from '@salesapp/theme/spacing';
import {
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

import '@salesapp/extensions';

import { useColorScheme } from '@salesapp/hooks';
import { useEffect } from 'react';

export enum InputStatus {
  Blur,
  Focus,
  Error,
}

export function useAnimatedInput(initialInputValue: string) {
  const placeholderStatus = useSharedValue<InputStatus>(
    initialInputValue.isEmptyString() ? InputStatus.Blur : InputStatus.Focus,
  );

  useEffect(() => {
    if (!initialInputValue.isEmptyString()) {
      placeholderStatus.value = InputStatus.Focus;
    }
  }, [initialInputValue, placeholderStatus]);

  const Colors = useColorScheme();

  const containerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.Input.Blur, Colors.Input.Focused, Colors.Input.Error],
    );

    return { borderColor };
  });

  const placeholderStyle = useAnimatedStyle(() => {
    const fontColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.Input.Blur, Colors.Input.Focused, Colors.Input.Error],
    );

    const bottom = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [
        Metrics.xs,
        2 * Metrics.xs + FontSize.lg - FontSize.md / 2,
        2 * Metrics.xs + FontSize.lg - FontSize.md / 2,
      ],
    );

    const left = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.sm, 2 * Metrics.xxs, 2 * Metrics.xxs],
    );

    const fontSize = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [FontSize.md, FontSize.sm, FontSize.sm],
    );

    return {
      color: fontColor,
      bottom,
      left,
      fontSize,
    };
  });

  return { placeholderStyle, containerStyle, placeholderStatus };
}
