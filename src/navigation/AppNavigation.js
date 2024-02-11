import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screen/onboarding/OnboardingScreen';
import HomeScreen from '../screen/home/HomeScreen';
import { getItem } from '../utils/AsyncStorage';
import Plain from '../screen/home/Plain';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import Cart from '../screen/cart/Cart';
import Profile from '../screen/account/Profile';
import Notification from '../screen/notification/Notification';
import HomeIcon from '../assets/img/homeIcon.png'
import CartIcon from '../assets/img/cartIcon.png'
import ProfileIcon from '../assets/img/profileIcon.png'
import NotificationIcon from '../assets/img/notificationIcon.png'
import HomeIconWhite from '../assets/img/homeIconWhite.png'
import CartIconWhite from '../assets/img/cartIconWhite.png'
import ProfileIconWhite from '../assets/img/profileIconWhite.png'
import NotificationIconWhite from '../assets/img/notificationIconWhite.png'
import { PrimaryColor } from '../contant/Constant';
import ProductDetail from '../screen/product/ProductDetail';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const CustomTabIcon = ({ image, focused, whiteImage }) => (
  <View
    style={[
      styles.tabIcon,
      focused && styles.focusedTabIcon,
      { backgroundColor: focused ? PrimaryColor : 'white' }
    ]}>
    <Image source={focused ? whiteImage : image } style={styles.tabIconImage} />
  </View>
);
const MyTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarStyle: { height: 62 },
          headerShown: false,
          
          tabBarIcon: ({ focused }) => {
            return <CustomTabIcon whiteImage={HomeIconWhite} image={HomeIcon} focused={focused} />;
          }
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarStyle: { height: 62 },
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <CustomTabIcon whiteImage={CartIconWhite} image={CartIcon} focused={focused} />;
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: { height: 62 },
          tabBarIcon: ({ focused }) => {
            return <CustomTabIcon whiteImage={ProfileIconWhite} image={ProfileIcon} focused={focused} />;
          }
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: { height: 62 },
          tabBarIcon: ({ focused }) => {
            return <CustomTabIcon whiteImage={NotificationIconWhite} image={NotificationIcon} focused={focused} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};


const MainNavigation = () => {
    const [showOnboarding, setShowOnboarding] = useState(true);
    const [loading, setLoading] = useState(true);

    const checkOnboardingState = async () => {
        const OnboardingCompleted = await getItem("OnboardingCompleted");
        setShowOnboarding(OnboardingCompleted !== 'true');
        setLoading(false)
    };
    
    useEffect(() => {
        checkOnboardingState();
    }, [showOnboarding]);

    if (loading) {
        return <Plain />;
    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!showOnboarding ? 'Plain' : 'Onboarding'} screenOptions={{headerShown: false}}>
                <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Tab' component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name='Plain' component={Plain} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;



const styles = StyleSheet.create({
    tabIcon: {
      borderRadius: 90,
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginTop: 20
    },
    tabIconImage: {
      width: 24,
      height: 24,
      resizeMode: 'contain'
    },
    focusedTabIcon: {
      marginTop: -22,
      borderWidth: 6,
      borderColor: 'white'
    }
  });
  