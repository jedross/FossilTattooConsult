import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Consult from '../views/consult';

const ConsultDrawerItem = StackNavigator({
  Consult: {
    screen: Consult,
    navigationOptions: ({ navigation }) => ({
      title: 'Consult',   
       header: null,
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  }, 

});
ConsultDrawerItem.navigationOptions = {
  drawerLabel: 'Consult',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
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

export default ConsultDrawerItem;
