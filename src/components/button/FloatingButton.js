import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PrimaryColor, bodyFontMedium,} from '../../contant/Constant'

const FloatingButton = ({ txt, onClick }) => { // Corrected destructuring of props
  return (
    <View style={styles.floating_btn}>
        <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text style={styles.btn_txt}>{txt}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    floating_btn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingVertical: 15,
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 15
    },
    btn: {
        width: '100%',
        paddingHorizontal: 6,
        backgroundColor: PrimaryColor,
        paddingVertical: 13,
        borderRadius: 5, 
        width: '100%'
    },
    btn_txt: {
        fontFamily: bodyFontMedium,
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
})
