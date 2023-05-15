import { Label } from '@salesapp/components';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes, MainStackNavigation } from '@salesapp/types';
import { BiometricStorage, Keychain } from '@salesapp/services';

type SplashNavigation = MainStackNavigation<MainRoutes.Splash>;

export const SplashScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles);

  const { navigate } = useNavigation<SplashNavigation>();

  useEffect(() => {
    const verifyKeychainForCredentials = async () => {
      const data = await BiometricStorage.getBiometricState();

      if (!data?.isUsing)
        return setTimeout(() => navigate(MainRoutes.Login), 3000);

      const result = Keychain.getToken();
      if (!result) return setTimeout(() => navigate(MainRoutes.Login), 3000);

      return setTimeout(() => navigate(MainRoutes.Tabs), 3000);
    };

    verifyKeychainForCredentials();
  }, [navigate]);

  return (
    <View style={styles.root}>
      <Label.H3 t="Splash Screen placeholder" />
    </View>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    backgroundColor: colors.Input.Focused,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
}));
