import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screen/onboarding/OnboardingScreen';
import HomeScreen from '../screen/home/HomeScreen';
import { getItem } from '../utils/AsyncStorage';
import Plain from '../screen/home/Plain';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/Signup';


const Stack = createNativeStackNavigator()


const MainNavigation = () => {

    const [showOnboarding, setShowOnboarding] = useState(true);

    const checkOnboardingState = async () => {
        const OnboardingCompleted = await getItem("OnboardingCompleted")
        console.log(OnboardingCompleted)
        if(OnboardingCompleted === 'true'){
            setShowOnboarding(false)
        }else{
            setShowOnboarding(true)
        }
    }
    useEffect(() => {
      checkOnboardingState()
    }, []);




    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!showOnboarding ? 'Onboarding' : 'Plain'} screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Onboarding'
                    options={{headerShown: false}}
                    component={OnboardingScreen}
                />
                <Stack.Screen 
                    name='Plain' 
                    options={{headerShown: false}}
                    component={Plain} 
                />
                <Stack.Screen 
                    name='Home' 
                    options={{headerShown: false}}
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    name='Login' 
                    options={{headerShown: false}}
                    component={Login} 
                />
                <Stack.Screen 
                    name='Signup' 
                    options={{headerShown: false}}
                    component={Signup} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation