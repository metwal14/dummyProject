import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import RightArrow from './assests/right-arrow.png';
import LeftArrow from './assests/left-arrow.png';
import Header from './header';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const FilterScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                {/* Header container */}
                <Header
                    imageLeft={LeftArrow}
                    textCenter='Looking For'
                />
                {/* body part*/}
                <View style={styles.genderPersonalityContainer}>
                    <View styles={{ flex: 1 }}>
                        <Text>Gender</Text>
                    </View>
                    <View styles={styles.flexContainer}>
                        <Image
                            style={styles.arrow}
                            source={RightArrow}
                        />
                    </View>
                </View>
                <View style={styles.genderPersonalityContainer}>
                    <View styles={styles.flexContainer}>
                        <Text>Personality Type</Text>
                    </View>
                    <View styles={styles.flexContainer}>
                        <Image
                            style={styles.arrow}
                            source={RightArrow}
                        />
                    </View>
                </View>
                <View style={styles.ageContainer}>
                    <Text>Age</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.saveBtn}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FilterScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '10%'
    },
    genderPersonalityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%',
        borderBottomWidth: 0.8,
        borderBottomColor: 'grey',
        paddingBottom: '4%'
    },
    arrow: {
        width: 15,
        height: 15,
    },
    ageContainer: {
        marginTop: '5%'
    },
    flexContainer:{
        flex: 1 
    },
    saveBtn: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
        height: '6%',
        width: '100%',
        borderRadius: windowHeight * 0.1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    }

});