import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ButtonComponent = props => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={{...style.button,...props.style}}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    button:{
        backgroundColor:'transparent',
    }
});

export default ButtonComponent;