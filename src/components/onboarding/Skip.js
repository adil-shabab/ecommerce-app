import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeadFontMedium } from '../../contant/Constant'

const Skip = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.skip_txt}>Skip</Text>
    </View>
  )
}

export default Skip

const styles = StyleSheet.create({
    skip_txt: {
        color: '#627fc2',
        fontSize: 20,
        fontFamily: HeadFontMedium
    }

})