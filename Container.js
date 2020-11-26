import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
const Container = (props) => {

    return (
        <View style={[styles.container, { ...props.style }]}>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle='dark-content'
            />
            {props.children}
        </View>
    );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // paddingHorizontal: '7%',
        elevation: 5,
    },

});
