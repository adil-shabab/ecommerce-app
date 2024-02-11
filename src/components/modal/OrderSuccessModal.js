import { Animated, Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PrimaryColor, bodyFont, bodyFontMedium } from '../../contant/Constant';
import LottieView from 'lottie-react-native';
import Tick from '../../assets/animations/blueTick.json'



const OrderSuccessModal = ({visible, panResponder, panY, setVisible}) => {




  return (
    <TouchableOpacity onPress={()=>{
      setVisible(false)
    }} activeOpacity={1} style={{...styles.main_container, bottom: visible ? 0 : -15052,}}>
    <Animated.View
    style={[
      {
        ...styles.modalContainer,
        bottom: visible ? 0 : -552,
      },
      {transform: [{translateY: panY}]},
    ]}
    {...panResponder.panHandlers}>
    <View style={{...styles.d_flex_full, marginBottom: 0}}>
      <View style={styles.top_line}></View>

      <LottieView
        source={Tick}
        autoPlay
        loop={false}
        speed={0.5}
        style={{ width: 120, height: 120, marginTop: 40}}
      />
      <Text style={styles.head_txt}>Thanks for your order</Text>
      <Text style={styles.description_txt}>You'll receive your parcel shortly from our delivery partner. Thanks again for choosing us.</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_txt}>Track Order</Text>
      </TouchableOpacity>
    </View>
    
  </Animated.View>
  </TouchableOpacity>
  )
}

export default OrderSuccessModal

const styles = StyleSheet.create({
  main_container:{
    flex: 1,
    height: 1500,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000073',
    position: 'absolute',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    bottom: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingBottom: 60
  },
  d_flex_full:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  top_line: {
    width: 100,
    marginTop: 15,
    height: 6,
    backgroundColor: PrimaryColor,
    borderRadius: 15,
  },
  head_txt:{
    color: 'black',
    fontSize: 27,
    marginTop: 30,
    fontFamily: bodyFontMedium
  },
  description_txt:{
    color: 'gray',
    fontSize: 18,
    marginTop: 15,
    fontFamily: bodyFont,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  btn:{
    width: '100%',
    backgroundColor: PrimaryColor,
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 40
  },
  btn_txt: {
    fontSize: 18,
    fontFamily: bodyFontMedium,
    color: 'white',
    textAlign: 'center',
  }
  
})