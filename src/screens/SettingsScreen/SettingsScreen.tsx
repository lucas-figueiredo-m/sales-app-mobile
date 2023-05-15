import React, { useEffect, useState } from 'react';
import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { SafeAreaView } from 'react-native';
import { SwitchItem } from './components';
import { BiometricStorage, Keychain } from '@salesapp/services';

export const SettingsScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const [isActivated, setActivated] = useState(false);

  useEffect(() => {
    const getBiometryState = async () => {
      const data = await BiometricStorage.getBiometricState();

      if (data) setActivated(data.isUsing);
      else setActivated(false);
    };

    getBiometryState();
  }, []);

  const onValueChange = async (newValue: boolean) => {
    await BiometricStorage.setBiometricState(newValue);
    setActivated(newValue);
    if (!newValue) {
      await Keychain.clearToken();
      setActivated(false);
    }

    const result = await Keychain.setToken();
    if (!result) setActivated(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      <SwitchItem value={isActivated} onValueChange={onValueChange} />
    </SafeAreaView>
  );
};

const themedStyles = createThemedStyles(({ colors, spacing }) => ({
  root: {
    flex: 1,
    marginTop: spacing.sm,
  },
  switch: {},
}));
