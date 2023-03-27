import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

const App = () =>{
  return (
  <View style={styles.container}>
    <Text style={styles.title}>ola mundo</Text>
    <Image style={styles.img} source={{uri:'https://picsum.photos/200/200/'}}></Image>
  </View>
  );
};
const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:"#292929"},
  title:{fontSize:40, color:'wheat'},
  img:{height:200,width:200, borderRadius:20}
})
export default App;