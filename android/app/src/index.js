import React, {Component} from 'react';
import {Text} from 'react-native';

export default class myAppConEstilos extends Component{
    render(){
        return(
            <Text style= {{ fontSize:16, color:(0, 47, 255) , fontStyle:bold, fontFamily: Serif }}> Texto con estilos</Text>
        );
    }
}