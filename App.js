import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, resizeMode, ImageBackground } from 'react-native';

class App extends Component {
  render(){
  return (
    <ImageBackground source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9e_4xzxk--nNCIqJxTpMZ_Nx1_obutxKSg&usqp=CAU'}} style={styles.backgroundStyle}>
      <View style={styles.someContainer}>
        <Text style={styles.textStyle}>Hello World!</Text>
      </View>
    </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
  someContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  backgroundStyle: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
});

export default App;