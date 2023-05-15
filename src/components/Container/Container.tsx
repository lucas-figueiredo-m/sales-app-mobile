import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  flexBottom: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
});

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={[styles.fullScreen, styles.flexBottom]}>
      {children}
    </KeyboardAvoidingView>
  );
};
