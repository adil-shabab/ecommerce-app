import { View, StyleSheet, FlatList, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import slides from './slides';
import OnboardingItem from '../../components/onboarding/OnboardingItem';
import Paginator from '../../components/onboarding/Paginator';
import NextButton from '../../components/onboarding/NextButton';
import Skip from '../../components/onboarding/Skip';
import { setItem } from '../../utils/AsyncStorage';

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const flatListRef = useRef(null);


  const handleSkip = () => {
      setItem('OnboardingCompleted', 'true');
      navigation.navigate("Home")
  };

  const handleNext = async () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ animated: true, index: currentIndex + 1 });
    } else {
      setItem('OnboardingCompleted', 'true');
      navigation.navigate("Home")
    }
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={({ viewableItems }) => setCurrentIndex(viewableItems[0].index)}
        viewabilityConfig={viewConfig}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        data={slides}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      />

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        percentage={((currentIndex + 1) * 100) / slides.length}
        onPress={handleNext}
      />
      <TouchableOpacity style={styles.skip_button} onPress={handleSkip}>
        <Skip />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip_button: {
    position: 'absolute',
    bottom: 40,
    left: 25,
  }
});
