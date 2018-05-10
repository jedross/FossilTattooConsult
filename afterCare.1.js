import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AfterCare from '../views/afterCare';

const AfterCareDrawerItem = StackNavigator({
    Playground: { screen: AfterCare}
  },
  {
    headerMode: 'none'
  }
);

AfterCareDrawerItem.navigationOptions = {
  drawerLabel: 'AfterCare',
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

export default AfterCareDrawerItem;
