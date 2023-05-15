import { Colors2, ColorsType } from '@salesapp/theme';
import { Fonts, FontTypes } from '@salesapp/theme/fonts';
import { Spacings, SpacingType } from '@salesapp/theme/spacing';
import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

type NamedStyles<T> = {
  [key in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type AppearanceProviderParams = {
  colors: ColorsType;
  width: number;
  height: number;
  fonts: FontTypes;
  spacing: SpacingType;
};

type AppearanceProvider<T> = ({
  colors,
  width,
  height,
  fonts,
  spacing,
}: AppearanceProviderParams) => T;

type ThemedStyleSheet<T> = {
  dark: T;
  light: T;
};

export function useThemedStyles<T>(styles: ThemedStyleSheet<T>) {
  return styles['dark'];
}

export function createThemedStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: AppearanceProvider<T>,
): ThemedStyleSheet<T> {
  const { width, height } = Dimensions.get('window');
  const light = StyleSheet.create(
    styles({
      colors: Colors2.light,
      width,
      height,
      fonts: Fonts,
      spacing: Spacings,
    }),
  );
  const dark = StyleSheet.create(
    styles({
      colors: Colors2.dark,
      width,
      height,
      fonts: Fonts,
      spacing: Spacings,
    }),
  );

  return { light, dark };
}
