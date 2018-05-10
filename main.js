import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

//import Component from './src/drawer/components';
import AfterCare from './src/drawer/afterCare';
import Contact from './src/drawer/contact';
import Login from './src/drawer/login';
import ArtistProfile from './src/drawer/artistProfile';
import Consult from './src/drawer/consult';
import Booking from './src/drawer/booking';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./src/images/banner1.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);


const MainRoot = DrawerNavigator(
  {
    Login: {
      path: '/login',
      screen: Login,
    },
    Booking: {
      path: '/booking',
      screen: Booking,
    },
    Consult: {
      path: '/consult',
      screen: Consult,
    },
    //Component: {
     // path: '/components',
      //screen: Component,
    //},
    ArtistProfile: {
      path: 'artistProfile',
      screen: ArtistProfile,
    },
    Contact: {
      path: '/contact',
      screen: Contact,
    },
    AfterCare: {
      path: '/afterCare',
      screen: AfterCare,
    },
  },
  {
    initialRouteName: 'AfterCare',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/bg_screen1.jpg'),
      require('./assets/images/bg_screen2.jpg'),
      require('./assets/images/bg_screen3.jpg'),
      require('./assets/images/bg_screen4.jpg'),
      require('./assets/images/user-cool.png'),
      require('./assets/images/user-hp.png'),
      require('./assets/images/user-student.png'),
      require('./assets/images/avatar1.jpg'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          // onError={console.warn}
        />
      );
    }

    return (
      <MainRoot />
    );
  }
}

Expo.registerRootComponent(AppContainer);
