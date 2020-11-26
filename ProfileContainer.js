import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Container from './Container';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import FastImage from 'react-native-fast-image'

const ProfileContainer = () => {
    return (
        <View style={{ flex: 1, marginHorizontal: '2%', marginVertical: '3%', marginTop: '10%' }}>
            <View style={{ marginBottom: '3%', flexDirection: 'row', }}>
                <Container style={styles.customContainerStyle}>
                    <TouchableOpacity
                        onPress={() => console.log('add')}
                    >
                        <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15 }}>Add Photo</Text>
                </Container>
                <Container style={{...styles.customContainerStyle,marginHorizontal: '2%',}}>
                    <Text>placeholder</Text>
                </Container>
                <Container style={{ flex: 1, width: windowWidth * 0.3, height: windowWidth * 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>placeholder</Text>
                </Container>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <Container style={styles.customContainerStyle}>
                    <FastImage
                        style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, }}
                        source={{
                            uri: 'https://unsplash.it/400/400?image=1',
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </Container>
                <Container style={{...styles.customContainerStyle,marginHorizontal: '2%',}}>
                    <FastImage
                        style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, }}
                        source={{
                            uri: 'https://unsplash.it/400/400?image=1',
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </Container>
                <Container styles={styles.customContainerStyle}>
                    <FastImage
                        style={{ width: windowWidth * 0.3, height: windowWidth * 0.3, }}
                        source={{
                            uri: 'https://unsplash.it/400/400?image=1',
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </Container>
            </View>
        </View>
    )
}
export default ProfileContainer;

const styles = StyleSheet.create({
    plusText: {
        fontSize: 40
    },
    customContainerStyle:{
        flex: 1, 
        width: windowWidth * 0.3, 
        height: windowWidth * 0.3, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }

});