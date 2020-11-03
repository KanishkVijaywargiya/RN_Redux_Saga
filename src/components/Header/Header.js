import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './Styles.js';


const Header = () => {
    return (
        <SafeAreaView>
            <View style={[styles.header]}>
                <Text style={[styles.headerText]}> What the splash! </Text>
            </View>
        </SafeAreaView>
    )
}
export default Header;