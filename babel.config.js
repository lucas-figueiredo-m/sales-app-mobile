module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['babel-plugin-inline-import', { extensions: ['.svg'] }],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          '@salesapp/theme': ['./src/theme'],
          '@salesapp/screens': ['./src/screens'],
          '@salesapp/icons': ['./src/assets/icons'],
          '@salesapp/types': ['./src/types'],
          '@salesapp/hooks': ['./src/hooks'],
          '@salesapp/components': ['./src/components'],
          '@salesapp/services': ['./src/services'],
          '@salesapp/constants': ['./src/constants'],
          '@salesapp/database': ['./src/database'],
          '@salesapp/utils': ['./src/utils'],
          '@salesapp/navigator': ['./src/navigator'],
          '@salesapp/locales': ['./src/locales'],
          '@saleapp/journeys': ['./src/app'],
        },
      },
    ],
  ],
};
