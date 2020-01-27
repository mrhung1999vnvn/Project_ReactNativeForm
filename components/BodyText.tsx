import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const BodyText=props=>{
    return(
        <Text style={{...style.text,...props.style}}>{props.children} </Text>
    );
};

const style=StyleSheet.create({
    text:{
        fontFamily:'open-sans-bold'
    }
});

export default BodyText;