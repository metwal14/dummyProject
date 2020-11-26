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
  Dimensions,
  StatusBar,

} from 'react-native';
import Settings from './Settings';
/** Device Height */
const windowHeight = Dimensions.get('window').height;

/** Black square inside the upper container */
function BlackSquare() {
  return <View style={styles.blackSquare} />
}


const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Settings />
    </View>

  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'grey'
  },

});

export default App;
