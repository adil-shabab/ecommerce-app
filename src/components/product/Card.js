import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { PrimaryColor, bodyFont, bodyFontBold, bodyFontMedium } from '../../contant/Constant'
import Love from '../../assets/img/love.png'
import FilledLove from '../../assets/img/redLove.png'

const Card = ({item, handleBringBackfollowerModal, showToast}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.brand}> {item?.brand} </Text>
        <TouchableOpacity onPress={()=>{
          showToast('Liked Successfully', 'success')
        }} style={styles.love_view}>
          <Image style={item?.liked ? styles.liked_love : styles.love} source={item?.liked ? FilledLove:  Love } />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBringBackfollowerModal}>
          <Image style={styles.product_img} source={item?.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBringBackfollowerModal}>
          <Text style={styles.product_name}>{item?.name}</Text>
          <Text style={styles.product_description}>{item?.description}</Text>
          <Text style={styles.product_price}>&#x20B9; {item?.price}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    box: {
        width: '48%', 
        display: 'flex',
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
      product_img: {
        width: '100%',
        height: 110,
        resizeMode: 'contain'
    },
    brand: {
        fontSize: 12,
        color: PrimaryColor,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 10,
        fontFamily: bodyFontMedium,
        width: '55%',
        backgroundColor: 'rgba(207, 207, 207, 0.31)',
    },
    product_name: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        color: 'black', 
        fontFamily: bodyFontMedium,
        textAlign: 'left',
    },
    product_description: {
        fontSize: 12,
        color: '#4c4a4adf', 
        fontFamily: bodyFont,
        textAlign: 'left',
    },
    product_price: {
        fontSize: 15,
        color: PrimaryColor,
        marginTop: 5,
        fontFamily: bodyFontBold,
        textAlign: 'left',
    },
    love: {
      width: 20,
      height: 20,
    },
    liked_love: {
      width: 26,
      height: 26,
    },
    love_view:{
      right: 12,
      top: 15,
      position: 'absolute',

    }
})
