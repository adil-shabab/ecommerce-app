import { StyleSheet, TouchableOpacity, Animated, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Svg, { Circle } from 'react-native-svg';
import LottieView from 'lottie-react-native';


const NextButton = ({ percentage, onPress }) => {
  console.log("Percentage", percentage);

  const size = 65;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: percentage,
      duration: 250,
      useNativeDriver: true
    }).start();
  }, [percentage]);

  useEffect(() => {
    const strokeDashoffset = circumference * (1 - percentage / 100);

    if (progressRef.current) {
      progressRef.current.setNativeProps({
        strokeDashoffset
      });
    }

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, [percentage, circumference]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Svg style={{position: 'relative'}} width={size} height={size}>
        <Circle
          stroke="#E6E7E8"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#627fc2"
          fill="none"
          cx={center}
          cy={center}
          ref={progressRef}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <LottieView
        source={require("../../assets/animations/next.json")}
        autoPlay
        loop
        style={{ position: 'absolute', top: 1, left: 11, width: 45, height: 45, marginTop: 10 }}
      />
      </Svg>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    right: 25
  }
});
