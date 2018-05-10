import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Contact from '../views/contact';

const ContactDrawerItem = StackNavigator({
  Playground: { screen: Contact}
},
{
  headerMode: 'none'
}
);

ContactDrawerItem.navigationOptions = {
  drawerLabel: 'Contact',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
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

export default ContactDrawerItem;
