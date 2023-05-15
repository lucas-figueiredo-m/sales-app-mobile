import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@salesapp/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },

  delete: {
    backgroundColor: Colors.DarkRed,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  deleteText: {
    fontWeight: '600',
    color: Colors.White,
  },
});
