import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "./assets/A_New_Design_-_Made_with_PosterMyWall__3_-removebg-preview.png";
import phone from './assets/phone.png'
import axios  from "axios";

export default function App() {

  const [name,setName] = useState('')
  const [phoneNum,setPhoneNum] = useState('')
  const [location,setLocation] = useState('')
  const [item,setItem] = useState('')
  const [loading,setLoading] = useState(false)

  const submit = ()=>{
    // alert(`${name}, ${phoneNum}, ${location}, ${item}`)
    setLoading(true)
    if(name !=''&& phoneNum !=''&& location !=''&& item !=''){
    axios({
      method:'POST',
      url:'http://chafua.co.ke/merylStacy/pushOrders.php',
      data:{
        name:name,
        phone:phoneNum,
        location:location,
        item:item
      }
    }).then((res)=>{
      alert(res.data)
      setLoading(false)
      setName('')
      setPhoneNum('')
      setLocation('')
      setItem('')
    }).catch(()=>{
      alert('Error, Check network connection')
      setLoading(false)
    })}else{
      alert('You have left a field empty')
      setLoading(false)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View
          style={styles.circle}
        ></View>
        <ImageBackground style={styles.logo} source={logo} />
      </View>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
      }}>
        <ImageBackground 
        style={{
          height:20,
          width:20
        }}
        source={phone}
        />
        <Text style={{
          fontSize:12,
          marginLeft:5
        }}>0740653094</Text>
      </View>
      <View style={{
        marginTop:20,
      }}>{loading?
      <Text style={{
        fontSize:12,
        marginLeft:'30%',
        marginBottom:-5
      }}>loading...</Text>:<></>}
        <TextInput 
        onChangeText={(text)=>{
          setName(text)

        }}  name='name' style={styles.inputs} placeholder="Your name e.g Sam Doe" />
        <TextInput 
        onChangeText={(text)=>{
          setPhoneNum(text)

        }}
        keyboardType='phone-pad'
        name='phone'
          style={styles.inputs}
          placeholder="Phone number e.g 0701234567"
        />
        <TextInput 
        onChangeText={(text)=>{
          setLocation(text)

        }}
        name='location'
          style={styles.inputs}
          placeholder="Location e.g Hostel C82"
        />
        <TextInput 
        onChangeText={(text)=>{
          setItem(text)

        }} name='item' style={styles.inputs} placeholder="Item and amount e.g Mandazi(6)" />

        <TouchableOpacity style={[styles.inputs,{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          backgroundColor:'rgb(163,117, 0)',
          borderWidth:0,
          marginTop:40
        }]}
        onPress={submit}
        >
          <Text style={{
            color:'white', 
            fontWeight:'bold'
          }}>Book</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop:40
      }}>
        <Text style={{
          letterSpacing:5,
          fontSize:10
        }}>¶~Shelton.</Text>
        <Text 
        style={{
          fontSize:8,
          marginLeft:5
        }}
        >sheltonnito@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "75%",
    borderBottomWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor:'rgb(163,117, 0)',
    overflow:'hidden',
    paddingTop:20
  },
  logo: {
    height: 250,
    width: 250,
    bottom: -35,
  },
  circle: {
    height: 220,
    width: 220,
    backgroundColor: "rgba(127,148, 0, 0.13)",
    borderRadius:400,
    marginBottom:-300, 
    borderWidth:0
  },
  inputs: {
    borderWidth: 1,
    borderColor:'rgb(163,117, 0)',
    marginTop:10,
    height:35,
    fontSize:12,
    paddingLeft:5,
    paddingRight:5,
    borderRadius:10,
    width:250
  },
});
