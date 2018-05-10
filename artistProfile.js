import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ArtistProfile from '../views/artistProfile';

const ArtistDrawerItem = StackNavigator({
    Playground: { screen: ArtistProfile }
  },
  {
    headerMode: 'none'
  }
);

ArtistDrawerItem.navigationOptions = {
  drawerLabel: 'ArtistProfile',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="person"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ArtistDrawerItem;
