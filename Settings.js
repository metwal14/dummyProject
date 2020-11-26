import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SettingAtomComponent from './settingAtomContainer'
const windowHeight = Dimensions.get('window').height;

const Settings = () => {
    const [modeValue, setModeValue] = useState(false); //for darkMode value
    const [notifyValue, setNotifyValue] = useState(false); // for notifyOn and off

    const onPressArrow = () => {
        //navigate to screen no need to give screenName to atomcomponent!
        console.log('navigateToScreen')
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.card}>
                <View style={{}}>
                     {/* can include map() for that */}
                    <View>
                        {/* For notification */}
                        <SettingAtomComponent
                            type='arrowNotification'
                            label='Notifications'
                            value={notifyValue}
                            image={require('./assests/notification.png')}
                            onPress={() => setNotifyValue(!notifyValue)}
                            imageBackgroundColor='orange'
                            screenName=''
                        />
                    </View>

                    {/* For dark mode */}
                    <View style={{ marginTop: '5%' }}>
                        <SettingAtomComponent
                            type='switchBtn'
                            label='Dark Mode'
                            value={modeValue}
                            image={require('./assests/notification.png')}
                            onPress={() => setModeValue(!modeValue)}
                            imageBackgroundColor='pink'
                            screenName=''
                        />
                    </View>

                    {/* For other screen navigation */}
                    <View style={{ marginTop: '5%' }}>
                        <SettingAtomComponent
                            type='arrow'
                            label='Privacy'
                            // value={modeValue}
                            image={require('./assests/notification.png')}
                            onPress={onPressArrow}
                            imageBackgroundColor='grey'
                            screenName=''
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    // White Card
    card: {
        marginTop: '10%',
        paddingVertical: '10%',
        backgroundColor: '#fff',
        borderRadius: windowHeight * 0.05,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: '7%',
        elevation: 5,

    }
})