/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

/** Device Height */
const windowHeight = Dimensions.get('window').height;

/** Black square inside the upper container */
function BlackSquare(){
  return <View style={styles.blackSquare}/>
}


const App = () =>{
  return(
<>  
      {/* Main outside container */}
      <View style={styles.mainContainer}>
      {/* inside middle container */}
        <View style={styles.insideContainer}>
      {/* inside middle upper container background one container */}
          <View style={styles.upperHalfOutsideContainer}>
      {/* inside middle upper container main one container */}
            <View style={styles.upperHalfInsideContainer}>
              <BlackSquare/>
              <Text style={styles.textStyle}>{'Name'}</Text>
              <BlackSquare/>
            </View>
          </View>
      {/* inside middle lower container background one container */}
          <View style={styles.lowerHalfOutsideContainer}>
      {/* inside middle lower container main one container */}
            <View style={styles.lowerHalfInsideContainer}>
              <Text style={styles.textStyle}>{'Balance'}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0F1C23',
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideContainer: {
    height: windowHeight * 0.3,
    width: windowHeight * 0.3
  },
  blackSquare:{
    height:  windowHeight * 0.05, 
    width:  windowHeight * 0.05, 
    borderRadius: 5, 
    backgroundColor: '#0F1C23', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  upperHalfOutsideContainer:{
    backgroundColor: '#F4F5FB',
    height: '50%',
    borderTopRightRadius:30, 
    borderTopLeftRadius:30,
  },
  upperHalfInsideContainer:{
    backgroundColor: '#fff', 
    height: '100%',
    borderTopRightRadius:windowHeight * 0.04, 
    borderTopLeftRadius:windowHeight * 0.04,
    borderBottomLeftRadius: windowHeight * 0.04, 
    flexDirection: 'row', 
    paddingHorizontal: '5%', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  lowerHalfInsideContainer:{
    backgroundColor: '#F4F5FB', 
    height: '100%',
    borderBottomRightRadius:windowHeight * 0.04, 
    borderBottomLeftRadius:windowHeight * 0.04, 
    borderTopRightRadius: windowHeight * 0.04, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  lowerHalfOutsideContainer:{
    backgroundColor: '#fff', 
    height: '50%',
    borderBottomRightRadius:windowHeight * 0.04, 
    borderBottomLeftRadius:windowHeight * 0.04,
  },
  textStyle:{
    fontSize:16
  }
});

export default App;
