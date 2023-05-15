import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { line, curveBasis } from 'd3';
import { Colors } from '@salesapp/theme';
import { Tab } from './Tab';
import { Plus } from '@salesapp/icons';
import { MainRoutes } from '@salesapp/types';
import { SVG } from '@salesapp/components';

const lineGenerator = line()
  .x(([x]) => x)
  .y(([, y]) => y);

const { width } = Dimensions.get('window');

const TAB_HEIGHT = 80;
const CAVITY_WIDTH = 60;
const SMALL_CURVE = CAVITY_WIDTH / 2;
const TAB_WIDTH = (width - CAVITY_WIDTH - 2 * SMALL_CURVE) / 4;

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 0,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: Colors.Flame,
    borderRadius: 30,
    bottom: TAB_HEIGHT / 2 + 20,
    alignSelf: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  tabContainer: {
    width,
    height: TAB_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },

  left: {
    width: 2 * TAB_WIDTH + SMALL_CURVE,
    flexDirection: 'row',
  },

  right: {
    width: 2 * TAB_WIDTH + SMALL_CURVE,
    flexDirection: 'row',
  },
});

export const TabBar: React.FC<BottomTabBarProps> = ({
  descriptors,
  state,
  navigation,
}) => {
  const d = useMemo(() => {
    const left = lineGenerator([
      [0, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, TAB_HEIGHT],
      [TAB_WIDTH * 2, TAB_HEIGHT],
      [TAB_WIDTH * 2, TAB_HEIGHT],
      [0, TAB_HEIGHT],
    ]);

    const center = lineGenerator.curve(curveBasis)([
      [TAB_WIDTH * 2, TAB_HEIGHT],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2 + SMALL_CURVE, TAB_HEIGHT / 8],
      [TAB_WIDTH * 2 + SMALL_CURVE, TAB_HEIGHT / 4],
      [TAB_WIDTH * 2 + SMALL_CURVE + CAVITY_WIDTH / 2, TAB_HEIGHT / 2],
      [width / 2 + CAVITY_WIDTH / 2, TAB_HEIGHT / 4],
      [width / 2 + CAVITY_WIDTH / 2, TAB_HEIGHT / 8],
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, 0],
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, 0],
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, 0],
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, TAB_HEIGHT],
    ]);

    const right = lineGenerator([
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, 0],
      [width, 0],
      [width, 0],
      [width, 0],
      [width, TAB_HEIGHT],
      [width, TAB_HEIGHT],
      [width, TAB_HEIGHT],
      [width / 2 + CAVITY_WIDTH / 2 + SMALL_CURVE, TAB_HEIGHT],
    ]);

    return `${left} ${right} ${center}`;
  }, []);

  return (
    <View>
      <Svg style={styles.tab} height={80} color="yellow" width="100%">
        <Path fill={Colors.White} {...{ d }} />
      </Svg>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate(MainRoutes.AddOrder)}>
        <SVG
          xml={Plus}
          color={Colors.White}
          width={35}
          height={35}
          strokeWidth={2}
        />
      </TouchableOpacity>

      <View style={styles.tabContainer}>
        <View style={styles.left}>
          {state.routes.slice(0, 2).map((route, i) => (
            <Tab
              key={route.key}
              options={descriptors[route.key].options}
              navigation={navigation}
              isFocused={state.index === i}
              routeKey={route.key}
              routeName={route.name}
            />
          ))}
        </View>

        <View style={styles.right}>
          {state.routes.slice(2, 4).map((route, i) => (
            <Tab
              key={route.key}
              options={descriptors[route.key].options}
              navigation={navigation}
              isFocused={state.index === i + 2}
              routeKey={route.key}
              routeName={route.name}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
