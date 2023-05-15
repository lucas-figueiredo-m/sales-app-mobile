import { StyleSheet } from 'react-native'

export default {
  alignment: StyleSheet.create({
    center: { alignItems: 'center' },
    start: { alignItems: 'flex-start' },
    end: { alignItems: 'flex-end' }
  }),
  justify: StyleSheet.create({
    center: { justifyContent: 'center' },
    start: { justifyContent: 'flex-start' },
    end: { justifyContent: 'flex-end' },
    spaceAround: { justifyContent: 'space-around' },
    spaceBetween: { justifyContent: 'space-between' }
  }),
  direction: StyleSheet.create({
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    rowReverse: { flexDirection: 'row-reverse' },
    columnReverse: { flexDirection: 'column-reverse' }
  }),

  rows: StyleSheet.create({
    verticalCenter: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    verticalCenterBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }),

  columns: StyleSheet.create({
    horizontalCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }),

  sizes: StyleSheet.create({
    fill: { flex: 1 },
    fillCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    fullWidth: { width: '100%' },
    fullHeight: { height: '100%' },
    fullSize: {
      width: '100%',
      height: '100%'
    }
  })
}
