import { useToastMessage } from '@salesapp/hooks';
import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { DatabaseService } from '@salesapp/services';

export const HomeScreen: React.FC = () => {
  const { wifiDisconnected } = useToastMessage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
      <TouchableOpacity
        onPress={() => wifiDisconnected()}
        style={{ width: 100, height: 40, backgroundColor: 'yellow' }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => DatabaseService.sync()}
        style={{
          width: 100,
          height: 40,
          backgroundColor: 'yellow',
          marginTop: 50,
        }}>
        <Text>Sync</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
