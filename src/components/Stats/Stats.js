import React from 'react';
import { View, Text } from 'react-native';
import './Style.js';
const Stats = ({ stats }) => {
    if (!stats) {
        // loading not yet started
        return <Text style={{ position: 'absolute', right: 10, top: -10, borderRadius: 2, zIndex: 10 }}>Loading...</Text>;
    }
    return (
        <View style={{ position: 'absolute', right: 10, top: -10, borderRadius: 2, zIndex: 10 }}>
            <Text style={{ color: '#0A79DF', fontSize: 15, fontWeight: 'bold' }}>{stats.error && '🤯 Error!'}</Text>
            <Text style={{ color: '#0A79DF', fontSize: 15, fontWeight: 'bold' }}>{stats.isLoading && '🙄 Loading...'}</Text>
            <Text style={{ color: '#0A79DF', fontSize: 15, fontWeight: 'bold' }}>{stats.downloads !== null && `🤘 ${stats.downloads}`}</Text>
        </View>
    );
};

export default Stats;