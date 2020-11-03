import React, { Component } from 'react';
import { SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Text, View, Image } from 'react-native';
import styles from './Styles.js';


import GridLayout from './GridLayout.js';

const { width } = Dimensions.get('window');

const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = 'https://api.unsplash.com/photos/';

export default class ImageGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

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
        this.response()
    }

    render() {

        const { images } = this.state;

        return (
            <View style={[styles.container]}>
                {images.length > 0 ?
                    <ScrollView style={[styles.scrollView]} showsVerticalScrollIndicator={false}>
                        <View style={[styles.image]}>
                            {images.map((item, index) => (
                                <GridLayout image={{ uri: item.urls.small }} width={width / 2 - 10} />
                            ))}
                        </View>
                    </ScrollView>
                    :
                    <Text>Yoo People!</Text>
                }
            </View>
        )
    }
}
