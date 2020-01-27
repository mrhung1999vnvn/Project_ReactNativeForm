import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BodyText from './BodyText';
import GridComponent from './Grid';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '../styles/Colors';


const InputTextComponent = props => {
    return (
        <View style={style.container}>
            <View style={style.icon}>
                <Ionicons name={props.icon} size={30} color={Colors.accent}></Ionicons>
            </View>
            <View style={style.input}>
                <BodyText style={style.inputTitle}>{props.title}</BodyText>
                <View style={style.inputFill}>
                    <TextInput blurOnSubmit={true} autoCompleteType={props.type} style={style.inputText}  placeholder={'Enter here'} />
                </View>
            </View>
        </View>

    );
};


const style = StyleSheet.create({
    container: {
        marginVertical:20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    //Icon
    icon: {
        width: '15%',
        borderRadius: 14,
        justifyContent:'center',
        alignItems:'center',
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


    //Text input
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
        fontSize: 16

    }
});

export default InputTextComponent;