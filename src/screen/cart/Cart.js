import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Toast from '../../components/toast/Toast';
import { PrimaryColor, bodyFont, bodyFontMedium } from '../../contant/Constant';
import Back from '../../assets/img/backBlack.png'

import WishList from '../../assets/img/wishList.png'
import Voucher from '../../components/voucher/Voucher';

import { CheckBox } from 'react-native-elements';


const Cart = props => {


  const [message, setMessage] = useState(null);
  const [checked, setChecked] = useState(false);


  const showToast = (msg, type) => {
    setMessage({ msg, type });
  };





  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <ScrollView style={styles.container}>


        <View style={styles.header_view}>
          <TouchableOpacity onPress={()=>{
              props.navigation.goBack()
          }}>
              <Image style={styles.back_btn} source={Back} />
          </TouchableOpacity>
          <Text style={styles.cart_head_txt}>My Cart</Text>
          <View style={styles.icon_view}>
            <TouchableOpacity onPress={()=>{
                  showToast('Liked this product', 'success')
              }} style={styles.icon_parent}>
                  <Image style={styles.icon} source={WishList} />
            </TouchableOpacity>
          </View>
        </View>


        <Voucher />



        <View>
          <CheckBox
            title='Click Here'
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </View>



      </ScrollView>

      {message && <Toast setMessage={setMessage} message={message.msg} type={message.type} />}

    </SafeAreaView>
  )
}

export default Cart

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
    paddingVertical: 10
  },
  back_btn: {
    width: 25,
    height: 25,
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
  cart_head_txt:{
    color: 'black',
    fontFamily: bodyFontMedium,
    fontSize: 19,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  }, 

  
})