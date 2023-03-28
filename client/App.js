import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
const App = () =>{
  let openImagePickerAsync = async () =>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted == false){
      alert('Permission to access galery is required')
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult)
  }
  return (
  <View style={styles.container}>
    <Text style={styles.title}>ola mundo</Text>
    <Image style={styles.img} source={{uri:'https://picsum.photos/200/200/'}}></Image>
    <TouchableOpacity style={styles.button} 
    onPress={() => openImagePickerAsync()}>
      <Text >BOTON</Text>
    </TouchableOpacity>
  </View>
  );
};
const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:"#292929"},
  title:{fontSize:40, color:'wheat'},
  img:{height:200,width:200, borderRadius:20},
  button:{backgroundColor:'wheat', padding:10, borderRadius:30}

})
export default App;