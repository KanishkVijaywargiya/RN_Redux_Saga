import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import styles from './Styles.js';
import GridLayout from './GridLayout.js';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { loadImages } from '../../actions';
import { connect } from 'react-redux';

import Stats from '../Stats';

const { width } = Dimensions.get('window');
// const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
// const URL = 'https://api.unsplash.com/photos/';

class ImageGrid extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         images: [],
    //     }
    // }

    response = async () => await fetch(
        `${URL}${KEY}&per_page=5&page=1`
    )
        .then(response => response.json())
        .then(images => {
            this.setState({
                images
            })
            console.log('responseJson::', this.state.images[0].alt_description);
        })
        .catch(error => {
            this.setState({ images: [] });
            console.log(error, '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        });

    componentDidMount() {
        // this.response()
        this.props.loadImages()
    }

    render() {

        const { images, error, isLoading, loadImages, imageStats, nextPage } = this.props;

        return (
            <View style={[styles.container]}>
                {images.length > 0 ?
                    <ScrollView style={[styles.scrollView]} showsVerticalScrollIndicator={false}>
                        <View style={[styles.image]}>
                            {images.map((item, index) => (
                                <View key={index} >
                                    <Stats stats={imageStats[item.id]} />
                                    <GridLayout image={{ uri: item.urls.small }} width={width / 2 - 10} />
                                </View>
                            ))}
                        </View>
                        <View style={{ height: 200 }}></View>
                    </ScrollView>
                    :
                    <Text style={[styles.text]}>Yoo People! this is Kanishk</Text>
                }
                <TouchableOpacity style={{ backgroundColor: '#121212', width: hp('30%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 20, position: 'absolute', top: hp('80%'), elevation: 10, shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } }}
                    onPress={() => loadImages()}
                >
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>
                        {isLoading ? 'Loading...' : 'Load More'}
                    </Text>
                </TouchableOpacity>
                {error && <View style={[styles.error]}>{JSON.stringify(error)}</View>}
                <View><Text>{nextPage}</Text></View>
            </View>
        )
    }
}
const mapStateToProp = ({ isLoading, images, error, nextPage, imageStats }) => ({
    isLoading,
    images,
    error,
    nextPage,
    imageStats
})

const mapDispatchToProp = (dispatch) => ({
    loadImages: () => dispatch(loadImages())
})

export default connect(mapStateToProp, mapDispatchToProp)(ImageGrid)