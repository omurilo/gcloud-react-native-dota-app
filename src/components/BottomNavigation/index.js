import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Heroes from '../../screens/Heroes';
import Builder from '../../screens/Builder';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'heroes',
        title: 'Heroes',
        icon: (
          <FontAwesome
            name="optin-monster"
            style={{ marginLeft: focused ? -3 : 0 }}
            color={color}
            size={focused ? 24 : 18}
          />
        ),
      },
      {
        key: 'teamBuilder',
        title: 'Team Builder',
        icon: (
          <FontAwesome
            name="cogs"
            color={color}
            style={{ marginLeft: focused ? -6 : 0 }}
            size={focused ? 24 : 18}
          />
        ),
      },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    heroes: Heroes,
    teamBuilder: Builder,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
