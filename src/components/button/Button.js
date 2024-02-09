import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LogoFont, PrimaryColor, bodyFont, bodyFontBold } from '../../contant/Constant'

const Button = ({ txt, onClick }) => { // Corrected destructuring of props
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <Text style={styles.btn_txt}>{txt}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 6,
        backgroundColor: PrimaryColor,
        paddingVertical: 13,
        borderRadius: 5, 
        width: '100%'
    },
    btn_txt: {
        fontFamily: LogoFont,
        fontSize: 22,
        textAlign: 'center'
    }
})
