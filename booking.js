import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Booking from '../views/booking';

const BookingDrawerItem = StackNavigator({
  Playground: { screen: Booking }
},
  {
    headerMode: 'none'
  }
);

BookingDrawerItem.navigationOptions = {
  drawerLabel: 'Booking',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="list"
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

export default BookingDrawerItem;
