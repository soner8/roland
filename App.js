/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, Button, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ImagePicker from 'react-native-image-picker'; // remove PROVIDER_GOOGLE import if not using Google Maps




export default class App extends Component{
  state = {
    pickedImage: null
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }
  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });

      }
    });
  }

  resetHandler = () =>{
    this.reset();
  }
  render() {
    const { region } = this.props;
                
    return (
      <View>
      <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude:44.842682,
                longitude: -0.570240,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
            </MapView>
      </View>
      <View style={styles.containertwo}>
        <Text style={styles.textStyle}>Pick Image From Camera and Gallery </Text>
          <View style={styles.placeholder}>
            <Image source={this.state.pickedImage} style={styles.previewImage} />
          </View>
          <View style={styles.button}>

            <Button title="Pick Image" onPress={this.pickImageHandler} />

            <Button title="Reset" onPress={this.resetHandler} />

          </View>
    </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 400,
    alignItems: 'center',
    justifyContent: "center"
  },
  map: {
    height: 300,
    width: 400,
  },
  containertwo: {
    alignItems:"center",
    height: 600,
  },
  textStyle: {
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    color:"red",
    marginTop:10
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "70%",
    height: 280,
    marginTop:50,
  },
  button: {
    width: "80%",
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around"
  },
  previewImage: {
      width: "100%",
      height: "100%",

  }
});