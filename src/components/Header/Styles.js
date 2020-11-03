import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        color: '#424242',
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginTop: 30,
        zIndex: 10
    },
    headerText: {
        fontSize: 18,
        color: '#424242',
    }
})

export default styles;