import { StyleSheet } from 'react-native';
import { Colors } from '@mobile/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },

  card: {
    backgroundColor: Colors.Aqua,
  },

  add: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 50,
    alignSelf: 'center',
    backgroundColor: Colors.Yellow,
  },

  content: {},
});
