import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screen/onboarding/OnboardingScreen';
import HomeScreen from '../screen/home/HomeScreen';
import { getItem } from '../utils/AsyncStorage';


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
            <Stack.Navigator initialRouteName={!showOnboarding ? 'Onboarding' : 'Home'} screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Onboarding'
                    options={{headerShown: false}}
                    component={OnboardingScreen}
                />
                <Stack.Screen 
                    name='Home' 
                    options={{headerShown: false}}
                    component={HomeScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation