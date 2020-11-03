import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './Styles.js';

const GridLayout = ({ image, width }) => {
    return (
        <View style={{
            width: width - 20,
            height: width - 20,
            marginVertical: 5,
            backgroundColor: '#fff',
            borderRadius: 10,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2
        }}>
            <Image source={image} style={{ borderRadius: 10, height: '100%', width: '100%' }} />
        </View>
    )
}
export default GridLayout;