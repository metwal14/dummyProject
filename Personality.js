import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { dummyDataa } from './dummyDataa';
const windowHeight = Dimensions.get('window').height;


const Personality = () => {
    const [selectedIndex, setSelectedIndex] = useState(9999);
    const renderEachPersonaltiy = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: selectedIndex === index ? 'yellow' : '#fff',
                borderWidth: 1, borderRadius: 10, height: windowHeight * 0.1, width: '20%', marginBottom: '3%'
            }}>
                <TouchableOpacity
                    onPress={() => setSelectedIndex(index)}
                    style={{ height: windowHeight * 0.1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{}}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{'What is your personality type?'}</Text>
            </View>
            <View style={{ flex: 1, marginTop: '30%', flexDirection: 'row' }}>
                <FlatList
                    columnWrapperStyle={styles.flatListContainer}
                    numColumns={4}
                    keyExtractor={(item, index) => index.toString()}
                    data={dummyDataa}
                    renderItem={renderEachPersonaltiy}
                />
            </View>
        </View>
    )
}
export default Personality;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        marginTop: '10%',

    },
    flatListContainer: {
        flex: 1,
        justifyContent:'space-evenly'
    },
    textStyle: {
        fontSize: 17,
        fontWeight: '700'
    }
})
