import { StyleSheet } from 'react-native';

export enum FontFamily {
  Montserrat = 'Montserrat',
}

export enum FontSize {
  xxs = 8,
  xs = 10,
  sm = 12,
  md = 14,
  default = 16,
  lg = 18,
  xl = 20,
  xxl = 24,
  xxxl = 26,
  xxxxl = 30,
  title = 32,
}

export default {
  family: StyleSheet.create({
    Montserrat: {
      fontFamily: FontFamily.Montserrat,
    },
  }),
  size: StyleSheet.create({
    xxs: { fontSize: FontSize.xxs },
    xs: { fontSize: FontSize.xs },
    sm: { fontSize: FontSize.sm },
    md: { fontSize: FontSize.md },
    default: { fontSize: FontSize.default },
    lg: { fontSize: FontSize.lg },
    xl: { fontSize: FontSize.xl },
    xxl: { fontSize: FontSize.xxl },
    xxxl: { fontSize: FontSize.xxxl },
    xxxxl: { fontSize: FontSize.xxxxl },
    title: { fontSize: FontSize.title },
  }),
  weight: StyleSheet.create({
    black: { fontWeight: '900' },
    extraBold: { fontWeight: '800' },
    bold: { fontWeight: '700' },
    semibold: { fontWeight: '600' },
    medium: { fontWeight: '500' },
    regular: { fontWeight: '400' },
    thin: { fontWeight: '300' },
    light: { fontWeight: '200' },
    extraLight: { fontWeight: '100' },
  }),
  alignment: StyleSheet.create({
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    justify: { textAlign: 'justify' },
  }),
  transform: StyleSheet.create({
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    none: { textTransform: 'none' },
  }),
};

type FontWeight =
  | '900'
  | '800'
  | '700'
  | '600'
  | '500'
  | '400'
  | '300'
  | '200'
  | '100';

type TextAlign = 'center' | 'left' | 'right' | 'justify';
type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type FontFamilyTypes = 'Montserrat';

export type FontTypes = {
  family: { [key in FontFamilyTypes]: FontFamily };
  size: { [key: string]: FontSize };
  weight: { [key: string]: FontWeight };
  alignment: { [key: string]: TextAlign };
  transform: { [key: string]: TextTransform };
};

export const Fonts: FontTypes = {
  family: {
    Montserrat: FontFamily.Montserrat,
  },
  size: {
    xxs: FontSize.xxs,
    xs: FontSize.xs,
    sm: FontSize.sm,
    md: FontSize.md,
    default: FontSize.default,
    lg: FontSize.lg,
    xl: FontSize.xl,
    xxl: FontSize.xxl,
    xxxl: FontSize.xxxl,
    xxxxl: FontSize.xxxxl,
    title: FontSize.title,
  },
  weight: {
    black: '900',
    extraBold: '800',
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400',
    thin: '300',
    light: '200',
    extraLight: '100',
  },
  alignment: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
  transform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none',
  },
};
