import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useAnimatedButton = () => {
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        opacity.value,
        [0.3, 1],
        [0.3, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const onPressIn = () =>
    (opacity.value = withTiming(0.3, {
      duration: 80,
    }));

  const onPressOut = () =>
    (opacity.value = withTiming(1, {
      duration: 80,
    }));

  return { animatedStyle, onPressIn, onPressOut };
};
