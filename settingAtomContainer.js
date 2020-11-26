import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Switch,
    TouchableOpacity
} from 'react-native'

const settingAtomComponent = (props) => {
    console.log(props);
    const 
        {   
            image, 
            imageBackgroundColor, 
            label, 
            value, 
            type, 
            onPress 
        } = props;
    return (
        <View style={styles.mainContainer}>
            {/* left Container Notification and image */}
            <View style={styles.leftContainer}>
                {/* static value of width and height */}
                <View style={{ ...styles.bannerContainer, backgroundColor: imageBackgroundColor, }}>
                     {/* static value of width and height */}
                    <Image
                        source={image}
                        style={{ width: 15, height: 15 }}
                    />
                </View>
                <View>
                    {/* label */}
                    <Text>{label}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                {
                    // to check the arrowNotification or not
                    type === 'arrowNotification' && (<TouchableOpacity onPress={onPress}><Text style={{}}>{value ? 'ON' : 'OFF'}</Text></TouchableOpacity>)
                }
                {
                    // to check the arrow type btn
                    (type === 'arrowNotification' || type === 'arrow') ?
                        <Image
                            style={{ width: 15, height: 15, marginLeft: 10 }}
                            source={require('./assests/right-arrow.png')}
                        /> :
                        <Switch
                            //can change the size of switch
                            // style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }], }}
                            trackColor={{ false: "grey", true: "green" }}
                            thumbColor={'#fff'}
                            ios_backgroundColor="grey"
                            onValueChange={onPress}
                            value={value}
                        />
                }
            </View>
        </View>
    )
}
export default settingAtomComponent;

const styles = StyleSheet.create({
    //main outside container
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    //leftContainer styling
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //rightContainer styling
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //image of bell btn conatiner styling
    bannerContainer: {
        justifyContent: 'center',
        marginRight: '10%',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 35
    }
})