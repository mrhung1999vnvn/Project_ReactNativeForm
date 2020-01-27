import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GridComponent=props=>{
    return(
        <View style={{...style.grid,...props.style}}>
            {props.children}
        </View>
    );
}


const style=StyleSheet.create({
    grid:{
        marginVertical:10,
        paddingHorizontal:10,
        width:'100%'
    }
});
export default GridComponent;