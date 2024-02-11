import { View, Animated, Text, PanResponder, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Avatar from '../../assets/img/userAvatar.jpg'
import React, { useState, useRef } from 'react'
import CartIcon from '../../assets/img/cartBold.png'
import NotificationIcon from '../../assets/img/notificationBold.png'
import { PrimaryColor, bodyFont, bodyFontBold } from '../../contant/Constant'
import Toast from '../../components/toast/Toast'
import SearchIcon from '../../assets/img/seachGray.png'
import SearchIconWhite from '../../assets/img/searchWhite.png'
import Card from '../../components/product/Card'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecentCard from '../../components/product/RecentCard'
import OrderSuccessModal from '../../components/modal/OrderSuccessModal'

const HomeScreen = ({navigation}) => {

  const [message, setMessage] = useState(null);
  const [ordervisible, setOrderVisible] = useState(true);
  const panY = useRef(new Animated.Value(0)).current;


  const showToast = (msg, type) => {
    setMessage({ msg, type });
  };

  


  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0 && ordervisible) {
          panY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.timing(panY, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setOrderVisible(false));
        } else {
          Animated.timing(panY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;



  const handleBringBackfollowerModal = () => {
    setOrderVisible(true);
    Animated.timing(panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };





  const popularProducts = [
    {
      id: 1,
      name : 'Apple Watch 5',
      description : 'Apple Watch Series 5',
      price: '85899',
      image : require('../../assets/img/watch.png'),
      brand: 'Apple',
      liked: true
    },
    {
      id: 2,
      name : 'Headphone',
      description : 'Sony Headphone IX',
      price: '9899',
      image : require('../../assets/img/headphone.png'),
      brand: 'Sony',
      liked: false
    },
    {
      id: 3,
      name : 'Airpod',
      description : 'Apple Airpod with ANC',
      price: '3899',
      image : require('../../assets/img/earphone.png'),
      brand: 'Apple',
      liked: false
    },
    {
      id: 3,
      name : 'Alarm Clock',
      description : 'Royal Alarm Clock',
      price: '1899',
      image : require('../../assets/img/clock.png'),
      brand: 'Royal',
      liked: true
    },
  ]



  const recentlyViewedProduct = [
    {
      id: 1,
      name : 'Apple Watch 5',
      description : 'Apple Watch Series 5',
      price: '85899',
      image : require('../../assets/img/watch.png'),
      brand: 'Apple',
      liked: true,
      rating: 4.0
    },
    {
      id: 2,
      name : 'Headphone',
      description : 'Sony Headphone IX',
      price: '9899',
      image : require('../../assets/img/headphone.png'),
      brand: 'Sony',
      liked: false,
      rating: 4.8

    },
    {
      id: 3,
      name : 'Airpod',
      description : 'Apple Airpod with ANC',
      price: '3899',
      image : require('../../assets/img/earphone.png'),
      brand: 'Apple',
      liked: false,
      rating: 4.6

    },
    {
      id: 3,
      name : 'Alarm Clock',
      description : 'Royal Alarm Clock',
      price: '1899',
      image : require('../../assets/img/clock.png'),
      brand: 'Royal',
      liked: true,
      rating: 5
    },
  ]


  return (
    <SafeAreaView>
      <ScrollView style={{...styles.container}}>
        <View style={styles.header_view}>
          <TouchableOpacity onPress={()=>{
            showToast('Redirected to Profile', 'success')
          }}>
            <Image style={styles.user_avatar} source={Avatar} />
          </TouchableOpacity>
          <View style={styles.icon_view}>
            <TouchableOpacity onPress={()=>{
              showToast('Redirected to Cart', 'success')
            }} style={styles.icon_parent}>
              <View style={styles.txt_dot}>
                <Text style={styles.number}>1</Text>
              </View>
              <Image style={styles.icon} source={CartIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              showToast('Redirected to Notification', 'success')
            }} style={styles.icon_parent}>
              <View style={styles.dot} />
              <Image style={styles.icon} source={NotificationIcon} />
            </TouchableOpacity>
          </View>
        </View>



        <View style={styles.search_container}>
          <TextInput style={styles.search_input} placeholderTextColor='#666666c7' placeholder='Search your favorite products' />
          <Image style={styles.search_icon_placeholder} source={SearchIcon} />
          <TouchableOpacity onPress={()=>{
            showToast('Searched Successfully', 'info')
          }} style={styles.search_icon_view}>
            <Image style={styles.search_icon} source={SearchIconWhite} />
          </TouchableOpacity>
        </View>



        <View style={styles.popular_product_view}>
          <View style={styles.head_view}>
            <Text style={styles.head_txt}>Popular Products</Text>
            <TouchableOpacity onPress={()=>{
              showToast('Redirected to Product Page', 'success')
            }}>
              <Text style={styles.link_txt}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card_container}>
            {popularProducts?.map((item, index) => (
              <Card handleBringBackfollowerModal={handleBringBackfollowerModal} showToast={showToast} key={index} item={item} />
            ))}
          </View>
        </View>



        <View style={styles.recent_product}>
          <View style={styles.head_view}>
            <Text style={styles.head_txt}>Recently Viewed</Text>
            <TouchableOpacity onPress={()=>{
              showToast('Redirected to Product Page', 'success')
            }}>
              <Text style={styles.link_txt}>View All</Text>
            </TouchableOpacity>          
          </View>


          <View style={styles.recently_viewed_card_container}>
            {recentlyViewedProduct?.map((item, index) => (
              <RecentCard navigation={navigation} showToast={showToast} key={index} item={item} />
            ))}
          </View>  
        </View>


      </ScrollView>
      {message && <Toast setMessage={setMessage} message={message.msg} type={message.type} />}
      <OrderSuccessModal panY={panY} panResponder={panResponder} visible={ordervisible} setVisible={setOrderVisible}  />
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  header_view:{
    marginTop: 20,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  user_avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 10
  },
  icon_view: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon_parent: {
    position: 'relative',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: PrimaryColor,
    position: 'absolute',
    zIndex: 11,
    right: -2,
    top: -5
  },
  txt_dot: {
    position: 'absolute',
    right: -8,
    zIndex: 11,
    paddingVertical: 3,
    paddingHorizontal: 6.5,
    borderRadius: 10,
    top: -5,
    backgroundColor: PrimaryColor,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 25
  }, 
  number: {
    fontSize: 7,
    fontFamily: bodyFont,
    color: 'white'
  },
  search_container: {
    paddingHorizontal: 20,
    marginTop: 30,
    position: 'relative',
  },
  search_input:{
    backgroundColor: '#aeaeae2b',
    borderRadius: 30,
    height: 56,
    paddingHorizontal: 15,
    fontFamily: bodyFont,
    color: 'black',
    fontSize: 14,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 52,
    paddingRight: 65
  },
  search_icon_placeholder:{
    position: 'absolute',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    top: 15,
    left: 37,
  },
  search_icon_view:{
    position:'absolute',
    backgroundColor: PrimaryColor,
    height: 48,
    width: 48,
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 24,
  },
  search_icon:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  popular_product_view:{
    paddingHorizontal: 20,
    marginTop: 15,
  },
  head_view:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    flexDirection: 'row',
  },
  head_txt: {
    color: '#4c4a4ade', 
    fontFamily: bodyFontBold,
    fontSize: 23,
  },
  link_txt: {
    fontSize: 15,
    fontFamily: bodyFont,
    color: PrimaryColor,
  },
  card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between', 
    marginTop: 18
  },
  recently_viewed_card_container: {
    marginTop: 10
  },
  recent_product:{
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  }
  
})