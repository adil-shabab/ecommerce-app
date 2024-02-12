import { SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartIcon from '../../assets/img/cartIcon.png'
import Like from '../../assets/img/love.png'
import Liked from '../../assets/img/redLove.png'
import Back from '../../assets/img/backBlack.png'
import { PrimaryColor, bodyFont, bodyFontBold, bodyFontMedium } from '../../contant/Constant'
import Toast from '../../components/toast/Toast'
import Star from '../../assets/img/star.png';
import FloatingButton from '../../components/button/FloatingButton'


const product = {
    name: 'sony headphone',
    price: '14999',
    rating: 4.8,
    reviews: 545,
    brand: 'Sony',
    description: "The Sony headphones offer an immersive audio experience with crystal-clear sound quality. Designed for comfort and style, these headphones provide a perfect blend of performance and aesthetics. With advanced features such as noise cancellation and ergonomic design, they are perfect for music enthusiasts and audiophiles alike. Whether you're listening to your favorite music or enjoying a movie, the Sony headphones deliver an unparalleled audio experience that will elevate your entertainment.",
    color: [
      { color: 'silver', image: require('../../assets/img/headphone.png') },
      { color: 'rgb(66,107,174)', image: require('../../assets/img/blueHeadphone.png') },
      { color: 'black', image: require('../../assets/img/blackHeadphone.png') },
      { color: '#DFE1E4', image: require('../../assets/img/whiteHeadphone.png') },
    ],
    size: [
        { size: 'S'},
        { size: 'M'},
        { size: 'L'},
        { size: 'XL'},
    ]
  }

const ProductDetail = ({navigation}) => {

  const [message, setMessage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);



  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddToCart = () => {
    showToast('Added to cart', 'success')
  }

  useEffect(() => {
    setSelectedColor(product?.color[0])
    setSelectedSize(product?.size[0])
  }, []);

  const showToast = (msg, type) => {
    setMessage({ msg, type });
  };

  return (

    <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <ScrollView style={styles.container}>


            <View style={styles.header_view}>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                }}>
                    <Image style={styles.back_btn} source={Back} />
                </TouchableOpacity>
                <View style={styles.icon_view}>

                    <TouchableOpacity onPress={()=>{
                        showToast('Liked this product', 'success')
                    }} style={styles.icon_parent}>
                        <Image style={styles.icon} source={Like} />
                        {/* <Image style={styles.liked_icon} source={Liked} /> */}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                    showToast('Redirected to Cart', 'success')
                    }} style={styles.icon_parent}>
                    <View style={styles.txt_dot}>
                        <Text style={styles.number}>1</Text>
                    </View>
                    <Image style={styles.icon} source={CartIcon} />
                    </TouchableOpacity>

                </View>
            </View>



            <View style={styles.product_detail_view}>
                <View style={styles.product_img_view}>
                    <Image source={selectedColor.image} style={styles.product_img} />
                </View>
                <View style={styles.name_view}>
                    <Text style={styles.product_name}>{product.name}</Text>
                    <Text style={styles.product_price}>&#x20B9; {product.price}</Text>
                </View>
                <View style={styles.name_view}>
                    <Text style={styles.product_sub}>By <Text style={styles.product_brand}>{product.brand}</Text> </Text>
                    <View style={styles.rating_view}>
                        <Image source={Star} style={styles.star_img} />
                        <Text style={styles.rating_txt}>{product.rating}</Text>
                        <Text style={styles.rating_desc}>( {product.reviews} Reviews )</Text>
                    </View>
                </View>


                
                {/* Color options */}
                <View style={styles.spec_flex}>
                    <View style={styles.spec_box}>
                        <Text style={styles.spec_head}>Color</Text>
                        <View style={styles.color_flex}>
                        {product?.color?.map((item, index) => (
                            <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedColor(item)}
                            style={[
                                styles.color_circle_view,
                                { borderColor: item.color === selectedColor.color ? PrimaryColor : 'transparent' }
                            ]}
                            >
                            <View style={[styles.color_circle, { backgroundColor: item.color }]} />
                            </TouchableOpacity>
                        ))}
                        </View>
                    </View>
                    
                    
                    <View style={styles.spec_box}>
                        <Text style={styles.spec_head}>Size</Text>
                        <View style={styles.color_flex}>
                        {product?.size?.map((item, index) => (
                            <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedSize(item)}
                            style={[
                                styles.size_circle_view,
                                { backgroundColor: item.size === selectedSize.size ? PrimaryColor : '#E4EDFB' }
                            ]}
                            >
                             <Text style={[
                                styles.text_size,
                                {color: item.size === selectedSize.size ? 'white' : PrimaryColor}
                            ]}>{item?.size}</Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                    </View>
                </View>


                <Text style={styles.about_head}>About</Text>
                <TouchableOpacity onPress={handleToggleDescription}>
                    <Text style={styles.about_description}>
                        {showFullDescription ? product.description : `${product.description.slice(0, 255)}...`}
                        {' '}
                        <Text style={styles.read_more}>
                            {showFullDescription ? 'Read less' : 'Read more'}
                        </Text>
                    </Text>
                </TouchableOpacity>

                <Text style={styles.offer_txt}>Offer 20%</Text>

            </View>



        </ScrollView>
        {message && <Toast setMessage={setMessage} message={message.msg} type={message.type} />}
        <FloatingButton onClick={handleAddToCart} txt='Add to cart' />


    </SafeAreaView>
  )
}

export default ProductDetail

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
    liked_icon: {
        width: 29,
        height: 29,
        resizeMode: 'contain',
        marginLeft: 25
    }, 
    number: {
        fontSize: 7,
        fontFamily: bodyFont,
        color: 'white'
    },
    product_detail_view:{
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 25
    },
    product_img_view:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    product_img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    name_view:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8
    },
    product_name: {
        fontSize: 20,
        fontFamily: bodyFontMedium,
        textTransform: 'uppercase',
        color: 'black',
    },
    product_price: {
        fontSize: 20,
        fontFamily: bodyFontBold,
        color: 'black',
    },
    rating_view:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    star_img:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    rating_txt: {
        fontSize: 13,
        marginLeft: 8,
        fontFamily: bodyFontMedium,
        color: 'black',
        marginTop: 2.5
    },
    rating_desc: {
        fontSize: 12,
        marginLeft: 8,
        fontFamily: bodyFontMedium,
        color: 'gray',
        marginTop: 2.5
    },
    product_sub: {
        fontSize: 14,
        color: 'gray',
        fontFamily: bodyFont
    },
    product_brand:{
        color: 'black',
        fontSize: 15,
        fontFamily: bodyFontMedium
    },
    spec_flex: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },
    spec_box: {
        width: '48%',
    },
    spec_head:{
        fontSize: 16,
        color: 'black',
        fontFamily: bodyFontMedium
    },
    color_flex:{
        display: 'flex',
        marginTop: 8,
        flexDirection: 'row',
    },
    color_circle_view:{
        padding: 2,
        width: 25,
        height: 25,
        marginTop: 3,
        borderWidth: 3,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: PrimaryColor,
        marginRight: 4
    },
    color_circle:{
        width: '100%',
        height: '100%',
        backgroundColor:'gray',
        borderRadius: 25,
    },
    size_circle_view:{
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 5,
        marginTop: 3,
        borderRadius: 5
    },
    text_size: {
        fontSize : 13,
        color: 'white', 
        fontFamily: bodyFontMedium
    },
    about_head:{
        fontSize: 18,
        color: 'black',
        fontFamily: bodyFontMedium,
        marginTop: 45
    },
    about_description:{
        fontSize: 14,
        color: 'gray',
        fontFamily: bodyFont,
        marginTop: 10,
    },
    read_more:{
        color: PrimaryColor,
        fontFamily: bodyFontMedium
    },
    offer_txt:{
        backgroundColor: '#E4EDFB',
        color: PrimaryColor,
        fontFamily: bodyFontMedium,
        marginTop: 30,
        width: '35%',
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 120, // to remove
    }

})