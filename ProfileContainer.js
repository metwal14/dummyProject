import React, { useState, useMemo } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Container from './Container';
import ImageBox from './ImageBox';
const windowWidth = Dimensions.get('window').width;

const ProfileContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const onDeleteBtn = () => {
        console.log('delete');
    }
    const onAddPhotos = () => {
        setIsLoading(true);
        console.log('add');
    }
    const renderImageBoxEmpty = useMemo(() => <ImageBox isLoading={isLoading} />, [isLoading]);
    const renderImageBoxImage = useMemo(() => <ImageBox imageStyle={styles.profileImageStyle}
        imageUrl={'https://unsplash.it/400/400?image=1'}
        onDelete={onDeleteBtn} />, []);


    return (
        <View style={styles.mainContainer}>
            <View style={styles.addPhotoContainer}>
                <Container style={styles.customContainerStyle}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onAddPhotos}
                    >
                        <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                </Container>
                <View style={styles.centerConatinerImage}>
                    <Container style={styles.customContainerStyle}>
                        {renderImageBoxEmpty}
                    </Container>
                </View>
                <Container style={styles.customContainerStyle}>
                    {renderImageBoxEmpty}
                </Container>
            </View>
            <View style={styles.imageContainer}>
                <Container styles={styles.customContainerStyle}>
                    {renderImageBoxImage}
                </Container>
                <View style={styles.centerConatinerImage}>
                    <Container styles={styles.customContainerStyle}>
                        {renderImageBoxImage}
                    </Container>
                </View>
                <Container styles={styles.customContainerStyle}>
                    {renderImageBoxImage}
                </Container>
            </View>
        </View>
    )
}
export default ProfileContainer;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: '2%',
        marginVertical: '3%',
        marginTop: '10%'
    },
    plusText: {
        fontSize: 40
    },
    customContainerStyle: {
        flex: 1,
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageStyle: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
    },
    addPhotoContainer: {
        marginBottom: '3%',
        flexDirection: 'row',
    },
    imageContainer: {
        flexDirection: 'row',

    },
    centerConatinerImage: {
        marginHorizontal: '3%'
    },
    addPhotoText: {
        fontSize: 15
    }

});