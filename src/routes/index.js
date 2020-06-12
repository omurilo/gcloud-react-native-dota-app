import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { store, types } from '../store/context';

import Heroes from '../screens/Heroes';
import Hero from '../screens/Hero';
import Builder from '../screens/Builder';

import * as Styled from './styles';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HeroesTabs = () => (
  <Tab.Navigator
    initialRouteName="Heroes"
    activeColor="#ffffff"
    inactiveColor="#EAE8E6"
    barStyle={{ backgroundColor: '#f4511e' }}
    shifting
  >
    <Tab.Screen
      name="Team Builder"
      component={Builder}
      options={{
        tabBarIcon: function tabBarIcon({ color }: String) {
          return (
            <FontAwesome
              name="cogs"
              color={color}
              style={{ marginLeft: -6 }}
              size={24}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Heroes"
      component={Heroes}
      options={{
        tabBarIcon: function tabBarIcon({ color }: String) {
          return (
            <FontAwesome
              name="optin-monster"
              style={{ marginLeft: -3 }}
              color={color}
              size={24}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

const Router = () => {
  const globalState = React.useContext(store);
  const { dispatch } = globalState;

  const [order, setOrder] = React.useState('name');

  const handleOrder = (orderBy) => {
    setOrder(orderBy);
    dispatch({ type: types.ORDER_HEROES, payload: { orderType: orderBy } });
  };

  const getHeaderTitle = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Heroes';

    switch (routeName) {
      case 'Heroes':
        return 'Dota Heroes';
      case 'Team Builder':
        return 'Team Builder';
      default:
        return 'Heroes';
    }
  };

  const getHeaderRight = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Heroes';

    if (routeName === 'Heroes') {
      return function orderButton() {
        return (
          <Styled.OrderHeroes
            onPress={() => handleOrder(order === 'name' ? 'rank' : 'name')}
          >
            <Styled.Icon name={order === 'name' ? 'sort-by-alpha' : 'sort'} />
          </Styled.OrderHeroes>
        );
      };
    }

    return null;
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Heroes"
            component={HeroesTabs}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerRight: getHeaderRight(route),
              ...TransitionPresets.SlideFromRightIOS,
            })}
          />
          <Stack.Screen
            name="Hero"
            component={Hero}
            options={({ route }) => ({
              headerTitle: route.params.hero.name,
              ...TransitionPresets.SlideFromRightIOS,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
