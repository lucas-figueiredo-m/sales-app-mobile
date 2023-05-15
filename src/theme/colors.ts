export enum Colors {
  White = '#FFFFFF',
  Black = '#000000',
  Aqua = 'aqua',
  Yellow = 'yellow',
  DarkRed = '#991111',
  Flame = '#DE541E',
  Transparent = 'transparent',
  MediumGrey = '#666666',
}

const Pallete = {
  White: '#FFFFFF',
  Black: '#000000',
  Transparent: 'transparent',
  Flame: '#DE541E',
  DarkRed: '#991111',
  Aqua: 'aqua',
  Yellow: 'yellow',
  MediumGrey: '#666666',
};

const CommonColors = {
  White: Pallete.White,
  Black: Pallete.Black,
  Transparent: Pallete.Transparent,
};

type ColorsThemeLight = typeof Colors2.light;
type ColorsThemeDark = typeof Colors2.dark;

export type ColorsType = ColorsThemeDark & ColorsThemeLight;

export const Colors2 = {
  dark: {
    CommonColors,
    Input: {
      Focused: Pallete.Flame,
      Error: Pallete.DarkRed,
      Blur: Pallete.MediumGrey,
      Background: Pallete.White,
    },
    Cards: {
      Background: Pallete.White,
    },
    Header: {
      Tint: Pallete.Black,
    },
  },
  light: {
    CommonColors,
    Input: {
      Focused: Pallete.Flame,
      Error: Pallete.DarkRed,
      Blur: Pallete.MediumGrey,
      Background: Pallete.White,
    },
    Cards: {
      Background: Pallete.White,
    },
    Header: {
      Tint: Pallete.Black,
    },
  },
};
