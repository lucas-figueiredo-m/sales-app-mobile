import React from 'react';
import { StatusBar, View } from 'react-native';
import '@salesapp/locales';
import { Router } from '@salesapp/navigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@salesapp/utils';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Router />
      <Toast config={toastConfig} />
    </View>
  );
};

export default App;
