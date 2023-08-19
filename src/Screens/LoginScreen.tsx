import React, { useState } from "react";
import { Button, Text, View, TextInput, Image, StyleSheet } from "react-native";
// import UIULogo from "../../assets/public/icons/uiu_logo.png";
import Logo from "../../assets/public/icons/uiu_logo.png";
import { AuthContext, IAuthProvider } from "../providers/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LoginScreen=(props:any)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const match = {
        'email' : 'aa',
        'password': 'aa'
    }

    const handleOnSubmit = (authData: IAuthProvider)=>{
        if(email === match['email'] && password === match['password'])
        {
            console.log("SUCCESSFULL")
            authData.setIsLoggedIn(true)
            // props.navigation.navigate("Counter")
        }
        else
        {
            console.log("FAILED")
        }
    }

    const handleEmailInput = (emailInput:string) =>{
        // console.log(emailInput)
        setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
        // console.log(passInput)
        setPassword(passInput)
    }
    return(
        <AuthContext.Consumer>
        {(auth)=><View style={styles.mainContainer}>
            <Image source={require('../../assets/public/icons/bag_icon.png')}/>
            <Text style={{fontSize: 30, color: 'blue'}}>Create Account</Text>
            <TextInput placeholder="  Name" style={styles.inputStyles}></TextInput>
            <TextInput placeholder="  Email" style={styles.inputStyles}></TextInput>
            <TextInput placeholder="  Password" style={styles.inputStyles}></TextInput>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 7}}>Already have an account? </Text>
            <TouchableOpacity >
                <Text style={{color: 'blue'}}>Login</Text>
            </TouchableOpacity>
        </View>}
        </AuthContext.Consumer>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        // display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles:{
        height: 100,
        width: 100,
        margin: 40
    },
    inputContainer:{
        display: 'flex',
        margin: 10
    },
    inputStyles:{
        width: 300,
        height: 60,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 20
    },
    buttonStyle:{
        marginTop: 25,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 125,
        paddingLeft: 125,
        backgroundColor: 'blue',
        borderRadius: 5,
    }
})
export default LoginScreen;