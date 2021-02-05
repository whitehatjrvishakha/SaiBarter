import React from 'react';
import { StyleSheet, Text, Modal ,View , TextInput , TouchableOpacity, Alert ,Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import  Signup from './SignUp';

export default class LoginSreen extends React.Component {
    constructor(){
        super();
        this.state = {
        emailId : "",
        password : "",
     




       }
    }

    userlogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
         this.props.navigation.navigate('ThirdScreen')
        })
       .catch((error)=>{
       var errorcode=error.code; 
       var errorMessage=error.message; 
       return Alert.alert(errorMessage)
       
         })
      }
   
      usersignup=(emailId,password)=>{
       firebase.auth().createUserWithEmailAndPassword(emailId,password)
       .then((response)=>{
           return Alert.alert('user has signed up')
       })
      .catch((error)=>{
      var errorcode=error.code; 
      var errorMessage=error.message; 
      return Alert.alert(errorMessage)
        })
     }

    render(){
     return (
       
        <View>

       <TextInput          style={styles.loginBox}
      placeholder = " plzEntertheGmail@gmail.com"
      keyboardType = "email-address"
      onChangeText = {(text)=> {
      this.setState({
        emailId : text

      })
      }}
      
      />


      
      <TextInput          style={styles.loginBox}
      placeholder = "Password"
      secureTextEntry = {true}
      onChangeText = {(text)=> {
      this.setState({
        password : text

      })
      }}
      
      />
 

     <View>
          <TouchableOpacity  
           style={styles.button}
          onPress = {()=>{
           <Signup/>
       }}>
      <Text>  Sign Up </Text>
      </TouchableOpacity>
     

      <TouchableOpacity 
       style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
      onPress = {()=>{
           this.userlogin(this.state.emailId,this.state.password)
       }}>
      <Text>  log in  </Text>
      </TouchableOpacity>

       </View>

     </View>




    )
   }
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8BE85",
      alignItems: "center",
      justifyContent: "center",
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    },

    profileContainer: 
    { flex: 1, 
      justifyContent: "center",
       alignItems: "center",
    },
    title: {
      fontSize: 65,
      fontWeight: "300",
      paddingBottom: 30,
      color: "#ff3d00",
    },
    loginBox: {
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor: "#ff8a65",
      fontSize: 20,
      margin: 10,
      paddingLeft: 10,
    },
    KeyboardAvoidingView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalTitle: {
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 30,
      color: "#ff5722",
      margin: 50,
    },
    modalContainer: {
      flex: 1,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffff",
      marginRight: 30,
      marginLeft: 30,
      marginTop: 80,
      marginBottom: 80,
    },
    formTextInput: {
      width: "75%",
      height: 35,
      alignSelf: "center",
      borderColor: "#ffab91",
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
      padding: 10,
    },
    registerButton: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 30,
    },
    registerButtonText: {
      color: "#ff5722",
      fontSize: 15,
      fontWeight: "bold",
    },
    cancelButton: {
      width: 200,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
    },
  
    button: {
      width: 300,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "#ff9800",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10,
    },
    buttonText: {
      color: "#ffff",
      fontWeight: "200",
      fontSize: 20,
    },
  });