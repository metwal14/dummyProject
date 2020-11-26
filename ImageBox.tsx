import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image'

const windowHeight = Dimensions.get('window').height;

const ImageBox = (props: { imageStyle: any; onDelete: any; imageUrl: any; }) => {
    const { imageStyle, onDelete, imageUrl } = props;
    return (
        <View>
            {
                imageUrl ?
                    <View>
                        <TouchableOpacity
                            onPres={onDelete}
                            activeOpacity={0.8}
                            style={styles.crossContainer}
                        >
                            <Text>X</Text>
                        </TouchableOpacity>
                        <FastImage
                            style={imageStyle}
                            source={{
                                uri: imageUrl,
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    :
                    <Text>placeholder</Text>
            }
        </View>
    )
}
export default ImageBox;

const styles = StyleSheet.create({
    crossContainer: {
        // backgroundColor: 'red',
        height: windowHeight * 0.04,
        width: windowHeight * 0.04,
        borderRadius: windowHeight * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '8%',
        left: '70%',
        zIndex: 1,
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