import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Next from '../../assets/img/nextBlue.png'
import VoucherIcon from '../../assets/img/voucherBlue.png'
import { PrimaryColor, bodyFont } from '../../contant/Constant'

const Voucher = () => {
  return (
    <View style={styles.voucher_view}>
        <Image source={VoucherIcon} style={styles.voucher_img} />
            <Text style={styles.voucher_txt}>You hav a discount voucher for the  first order</Text>
        <Image style={styles.next_icon} source={Next} />
    </View>

  )
}

export default Voucher

const styles = StyleSheet.create({
    voucher_view:{
        backgroundColor: 'rgba(66,107,174, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginTop: 20
      },
      voucher_img: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
      },
      next_icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
      },
      voucher_txt:{
        fontFamily: bodyFont,
        fontSize: 13,
        color: PrimaryColor,
      }
})