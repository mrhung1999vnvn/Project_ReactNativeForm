import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../styles/Colors';
import BodyText from './BodyText';
import ButtonComponent from './Button';
import { Ionicons } from '@expo/vector-icons';

const HeaderComponent = props => {


    return (
        <View style={style.containerHeader}>
            <ButtonComponent ><Ionicons name='ios-arrow-round-back' size={50} color="#fff"></Ionicons></ButtonComponent>
            <BodyText style={style.headerText}>{props.headerText}</BodyText>
        </View>
    );
};

const style = StyleSheet.create({
    containerHeader: {
        width: '100%',
        height: 150,
        paddingVertical: 36,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 25,
        color: '#fff',
        letterSpacing: 1
    }
});

export default HeaderComponent;