import { StyleSheet, ScrollView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { HeadFontMedium, LogoFont, PrimaryColor, bodyFont } from '../../contant/Constant'
import Button from '../../components/button/Button';
import Facebook from '../../assets/img/facebook.png'
import Apple from '../../assets/img/apple.png'
import Google from '../../assets/img/google.png'
import Toast from '../../components/toast/Toast';


const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);


    const showToast = (msg, type) => {
        console.log("Hai", msg)
        setMessage({ msg, type });
    };
    

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleNameChange = (text) => {
        setName(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const OnSignIn = () => {
        console.log("Signin Button Clicked");
        showToast('Signup Successfully', 'success')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.description}>
                Discover shopping possibilities ! Sign up now
            </Text>

            <View style={styles.login_form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    value={name}
                    placeholder='Enter your Name'
                    onChangeText={handleNameChange}
                    style={styles.input}
                    placeholderTextColor='#666666c7'
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    placeholder='Enter your Email'
                    onChangeText={handleEmailChange}
                    style={styles.input}
                    placeholderTextColor='#666666c7'
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='#666666c7'
                    onChangeText={handlePasswordChange}
                    style={styles.input}
                />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    value={confirmPassword}
                    placeholder='Confirm Password'
                    placeholderTextColor='#666666c7'
                    secureTextEntry
                    onChangeText={handleConfirmPasswordChange}
                    style={{...styles.input, marginBottom: 30}}
                />

                <Button txt="Sign Up" onClick={OnSignIn} />


                <View style={styles.line_parent}>
                    <View style={styles.line} />
                    <Text style={styles.line_txt}>Or signin with</Text>
                </View>


                <View style={styles.social_icon}>
                    <TouchableOpacity style={{...styles.icon_view, marginRight: 15}}>
                        <Image style={styles.icon} source={Google} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.icon_view, marginRight: 15}}>
                        <Image style={styles.icon} source={Apple} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon_view}>
                        <Image style={styles.icon} source={Facebook} />
                    </TouchableOpacity>
                </View>


                <View style={styles.bt_txt_view}>
                    <Text style={styles.bt_txt}>Already have an account?</Text> 
                    <TouchableOpacity onPress={()=>{
                        props.navigation.navigate("Login")
                    }}>
                        <Text style={styles.signup_txt}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {message && <Toast setMessage={setMessage} message={message.msg} type={message.type} />}
        </ScrollView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingBottom: 70,
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 45,
        marginBottom: 10,
        marginTop: 60,
        fontFamily: LogoFont
    },
    description: {
        fontSize: 14,
        fontFamily: bodyFont,
        color: 'black',
        width: '100%',
        textAlign: 'center'
    },
    login_form: {
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 45
    },
    input: {
        borderWidth: 1,
        borderColor: '#abcb',
        borderRadius: 5,
        paddingVertical: 9,
        paddingHorizontal: 15,
        fontFamily: bodyFont,
        color: 'black',
        fontSize: 13,
        marginBottom: 15,
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: '#484848f0',
        marginBottom: 6,
        fontFamily: bodyFont,
        marginLeft: 2
    },
    forgot_password: {
        marginBottom: 25
    },
    forgot_password_txt: {
        fontSize: 14,
        fontFamily: bodyFont,
        textAlign: 'right',
        color: PrimaryColor,
        textDecorationLine: 'underline'
    },
    line_parent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        position: 'relative',
    },
    line_txt: {
        color: '#666666c7',
        fontFamily: bodyFont,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    line: {
        width: '100%',
        position: 'absolute',
        height: 1,
        backgroundColor: '#66666678'
    },
    social_icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 45
    }, 
    icon_view: {
        borderWidth: 1,
        borderColor: '#66666621',
        padding: 12,
        borderRadius: 33, 
    },
    icon: {
        width: 30, 
        height: 30,
        resizeMode: 'contain',
    },
    bt_txt_view: {
        marginTop: 35,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    bt_txt: {
        color: 'gray',
        fontFamily: bodyFont,
        fontSize: 15,
    },
    signup_txt: {
        color: PrimaryColor,
        fontFamily: HeadFontMedium,
        fontSize: 15,
        marginLeft: 8
    }

    
});
