import React, {Component}from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';

export class Socket extends Component { 
    componentDidMount() {
        const socket = io("http://192.168.0.3:3000");
        // console.log(socket);
    }
    constructor(props) {
        super(props);   
               
        this.socket = io("http://192.168.0.3:3000");

       
        this.socket.on('connect', ()=> {
            console.log('socket server connected');
        });
        this.socket.emit('channel1', 'Hi Server, This is my first message from react native');
        this.socket.on('channel2', (data) => {
            console.log('data recived from server' + data);  
        });
    }
// click method
    Trigger = () => {
        const dataObj = {
            action: 'click'
        } 
        this.socket.emit('channel2', dataObj);
        // console.log(dataObj);
    }

    render() {
        return(
            <View>
                <Text>Welcome to Socket Io welcome</Text>
                <TouchableOpacity 
                onPress = {() => this.Trigger} 
                ><Text>Send</Text></TouchableOpacity>
            </View>
        )
    }
}