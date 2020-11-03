import { StyleSheet, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: hp('5%'),
        height: '100%'
    },
    scrollView: {
        marginTop: hp('1%'),
        marginBottom: hp('1%')
    },
    image: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    text: {
        margin: hp('2%')
    },
    error: {
        backgroundColor: 'lightsalmon',
        padding: 10,
        borderRadius: 4,
        borderColor: 'tomato',
        borderWidth: 1,
    }
})

export default styles;