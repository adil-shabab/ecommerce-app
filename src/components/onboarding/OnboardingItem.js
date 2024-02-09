import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const OnboardingItem = ({ item }) => {
  const { width, height } = useWindowDimensions(); // Get screen dimensions

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.img_view}>
      <Text style={[styles.text, styles.head_txt]}>StoreHub</Text>
        <LottieView
          source={item.image}
          autoPlay
          loop
          style={{ width: 220, height: 220, marginTop: 80 }}
        />
      </View>
      <View style={styles.text_view}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={[styles.text, styles.description]}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  head_txt: {
    fontFamily: 'Carphe-Regular',
    fontSize: 45,
    color: '#4562a6',
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontFamily: 'ZillaSlab-Medium'
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Satoshi-Regular',
    marginBottom: 25
  },
  text:{
    color: 'black',
  },
  img_view: {
    flex: 0.3, // Adjust the flex values as needed
    justifyContent: 'space-between',
    paddingTop: 0,
    alignItems: 'center',
  },
  text_view: {
    flex: 0.5, // Adjust the flex values as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
});
