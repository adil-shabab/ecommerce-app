import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LogoFont, PrimaryColor } from '../../contant/Constant';
import { getItem } from '../../utils/AsyncStorage';

const Plain = ({ navigation }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = async () => {
        const loginStatus = await getItem("LoginStatus");
        setIsLoggedIn(loginStatus === 'true');
    }

    useEffect(() => {
        checkLoginStatus();

        const redirectTimer = setTimeout(() => {
            if (isLoggedIn) {
                // User is already logged in, redirect to Home screen
                navigation.replace('Home');
            } else {
                // User is not logged in, redirect to Login screen
                navigation.replace('Signup');
            }
        }, 1000);

        return () => clearTimeout(redirectTimer);
    }, [isLoggedIn, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.head_txt}>StoreHub</Text>
        </View>
    );
}

export default Plain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: PrimaryColor,
        alignContent: 'center',
    },
    head_txt: {
        fontSize: 60,
        fontFamily: LogoFont,
        color: 'white',
        textAlign: 'center',
    }
});
