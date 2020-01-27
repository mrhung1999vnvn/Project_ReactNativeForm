import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BodyText from './BodyText';
import GridComponent from './Grid';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '../styles/Colors';





const InputPasswordComponent = props => {

    const [stt, setStt] = useState(true);
    const [iconPassword, setIconPassword] = useState('md-eye-off');

    const showPassword = () => {
        if (stt) {
            setStt(false);
            setIconPassword('md-eye');

        }
        else {
            setStt(true);
            setIconPassword('md-eye-off');
        }
    }


    return (
        <View style={style.container}>
            <View style={style.icon}>
                <Ionicons name={props.icon} size={30} color={Colors.accent}></Ionicons>
            </View>
            <View style={style.input}>
                <BodyText style={style.inputTitle}>{props.title}</BodyText>
                <View style={style.inputFill}>
                    <TextInput maxLength={100} secureTextEntry={stt} blurOnSubmit={true} style={style.inputText} placeholder={'Enter here'} />
                    <TouchableOpacity activeOpacity={0.2} onPress={showPassword} style={style.iconShow} >
                        <Ionicons name={iconPassword} size={30}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};


const style = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    //Icon
    icon: {
        width: '15%',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },


    //Text input password
    input: {
        width: '80%',
        flexDirection: 'column',
    },
    inputTitle: {
        color: Colors.primary,
        fontSize: 15,
        width: '100%',
        backgroundColor: '#fff'
    },
    inputFill: {
        width: '100%',
    },
    inputText: {
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        marginVertical: 10,
        zIndex: 999,
        fontSize: 16,
        paddingRight:30

    },
    iconShow: {
        position: 'absolute',
        top: 5,
        right: 0,
        zIndex:999
    }
});

export default InputPasswordComponent;