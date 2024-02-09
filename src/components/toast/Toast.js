import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { HeadFontRegular } from '../../contant/Constant';

const animationSources = {
    success: require('../../assets/animations/tick.json'),
    error: require('../../assets/animations/error.json'),
    info: require('../../assets/animations/info.json'),
};

const Toast = ({ setMessage, message, type }) => {
  const [visible, setVisible] = useState(true);
  const translateX = new Animated.Value(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Animate the toast to the right before hiding it
      Animated.timing(translateX, {
        toValue: 1000, // Adjust the value as needed based on your screen width
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        setMessage(null);
      });
    }, 2000); // Change duration as needed

    return () => clearTimeout(timer);
  }, []);

  const messageStyles = {
    borderColor: type === 'error' ? '#f00a1d' : type === 'success' ? '#1f8503' : '#0077ed',
    paddingVertical: type === 'success' ? 2 : 6,
    paddingHorizontal: type === 'success' ? 5 : 10
  };

  const textStyles = {
    color: type === 'error' ? '#f00a1d' : type === 'success' ? '#1f8503' : '#0077ed',
  };

  const lottieStyles = {
    width: type === 'success' ? 38 : 28,
    height: type === 'success' ? 38 : 28,
  };

  return (
    <Animated.View style={[styles.container, visible ? styles.visible : styles.hidden, { transform: [{ translateX }] }]}>
      <View style={[styles.innerContainer, messageStyles]}>
        <LottieView
          source={animationSources[type]}
          autoPlay
          speed={0.8}
          loop={false}
          style={lottieStyles}
        />
        <Text style={[styles.text, textStyles]}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: '70%',
    opacity: 0,
    zIndex: 1000,
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    display: 'none',
  },
  innerContainer: {
    backgroundColor: 'white',
    borderLeftWidth: 3,
    borderWidth: 1,
    borderRadius: 4,
    display: 'flex',
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: HeadFontRegular,
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 8,
    marginTop: -3,
  },
});

export default Toast;
