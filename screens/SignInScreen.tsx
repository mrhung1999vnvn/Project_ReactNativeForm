import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Colors from '../styles/Colors';
import BodyText from '../components/BodyText';
import ButtonComponent from '../components/Button';
import GridComponent from '../components/Grid';
import InputTextComponent from '../components/Input';
import InputPasswordComponent from './../components/InputPassword';
import { Button } from 'react-native';


const SignInScreen = props => {
    return (
        <View style={style.screen}>
            <GridComponent style={style.header}>
                <BodyText style={style.headerText}>Welcome Back</BodyText>
                <BodyText style={style.hintText}>Glad to see you back my buddy</BodyText>
            </GridComponent>
            <GridComponent style={style.content}>
                <InputTextComponent icon={'md-mail'} type='email' title='EMAIL'></InputTextComponent>
                <InputPasswordComponent icon={'ios-lock'} type='password' title='PASSWORD'></InputPasswordComponent>
            </GridComponent>
            <GridComponent style={style.groupButton}>
                <ButtonComponent style={style.buttonSignIn}>
                    <Text style={style.buttonText}>SIGN IN</Text>
                </ButtonComponent>
                <ButtonComponent style={style.buttonForgot}>
                    <Text style={style.textForgot}>FORGOT PASSWORD?</Text>
                </ButtonComponent>
            </GridComponent>
            <GridComponent style={style.footer}>
                <BodyText style={style.textFooter}>Don't have any account ? 
                    <Text style={style.highlightText} onPress={props.Screen.bind(this,true)}>Sign Up</Text>
                </BodyText>
            </GridComponent>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.accent,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },

    //Header
    header:{
        marginTop:40,
        width:'100%'
    },
    headerText: {
        color: Colors.primary,
        fontSize: 27,
        width: '100%',
    },
    hintText: {
        color: Colors.hint,
        fontSize: 16
    },

    //Form
    content:{
        flexDirection:'column',
        marginTop:40,
        width:'100%',
    },

    groupButton:{
        width:'100%',
        justifyContent:'center',
    },

    buttonSignIn:{
        width:'100%',
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        marginVertical:10,
        borderRadius:35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    buttonText:{
        color:Colors.accent,
        fontSize:15,
    },


    buttonForgot:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    textForgot:{
        color:Colors.primary,
        fontSize:15,
        fontWeight:'700',
    },



    footer:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    textFooter:{
        color:Colors.hint
    },
    highlightText:{
        color:Colors.primary,
        fontWeight:'100'
    }
});


export default SignInScreen;