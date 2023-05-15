import { FontSize } from '@salesapp/theme/fonts';
import { Metrics } from '@salesapp/theme/spacing';
import {
  useAnimatedStyle,
  interpolateColor,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

import { useColorScheme } from '@salesapp/hooks';

export enum InputStatus {
  Blur,
  Focus,
  Error,
}

export function useAnimatedInput() {
  const placeholderStatus = useSharedValue<InputStatus>(InputStatus.Blur);

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
      color: String(fontColor),
      bottom,
      left,
      fontSize,
    };
  });

  return { placeholderStyle, containerStyle, placeholderStatus };
}
