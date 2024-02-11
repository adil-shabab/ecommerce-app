import { StyleSheet, Text, TouchableOpacity, Image, View, Platform } from 'react-native';
import React from 'react';
import { PrimaryColor, bodyFont, bodyFontBold, bodyFontMedium } from '../../contant/Constant';
import Love from '../../assets/img/love.png';
import FilledLove from '../../assets/img/redLove.png';
import Star from '../../assets/img/star.png';

const RecentCard = ({ item, showToast, navigation }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("ProductDetail")
      }} style={styles.product_img_view}>
        <Image source={item?.image} style={styles.product_img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("ProductDetail")
      }} style={styles.txt_view}>
        <Text style={styles.product_name}>{item?.name}</Text>
        <Text style={styles.product_description}>{item?.description}</Text>
        <View style={styles.rating_view}>
          <Image source={Star} style={styles.star_img} />
          <Text style={styles.rating_txt}>{item?.rating}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        showToast('Liked Successfully', 'success')
      }} style={styles.love_view}>
        <Image style={item?.liked ? styles.liked_love : styles.love} source={item?.liked ? FilledLove : Love} />
        <Text style={styles.product_price}>&#x20B9; {item?.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecentCard;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  product_img_view: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  txt_view: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
  },
  love_view: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  product_img: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
  },
  star_img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  liked_love: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  love: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  product_name:{
    color: 'black',
    fontFamily: bodyFontMedium,
    marginBottom: 5,
    fontSize: 17
  },
  product_description:{
    color: 'black',
    fontFamily: bodyFont,
    fontSize: 13,
    marginBottom: 5,
  },
  rating_view:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rating_txt: {
    fontSize: 13,
    marginLeft: 8,
    fontFamily: bodyFontMedium,
    color: 'black',
    marginTop: 2.5
  },
  product_price:{
    fontSize: 14,
    marginTop: 10,
    fontFamily: bodyFontBold,
    color: PrimaryColor,
}

});
