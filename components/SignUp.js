import React, {Component} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            pass: "",
            result: "...",
        }
    }

    onClick() {
        fetch("http://192.168.1.9/ReactNativeEx/register.php", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                "Name": this.state.name,
                "Username": this.state.username,
                "Pass": this.state.pass,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({result: responseJson.id})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <View style = {styleSheet.wrapper}>
                <TextInput 
                    style = {{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1  
                    }}
                    onChangeText = {(name) => this.setState({name})}
                    placeholder = "Name"
                    value = {this.state.name}
                />
                <TextInput 
                    style = {{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1  
                    }}
                    onChangeText = {(username) => this.setState({username})}
                    placeholder = "Username"
                    value = {this.state.username}
                />
                <TextInput 
                    style = {{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1  
                    }}
                    onChangeText = {(pass) => this.setState({pass})}
                    placeholder = "Password"
                    value = {this.state.pass}
                />
                <TouchableOpacity style = {styleSheet.plus}
                    onPress = {() => this.onClick()}>
                    <Text style = {styleSheet.plusText}>Register</Text>
                </TouchableOpacity>
                <View style = {styleSheet.result}>
                    <Text>{this.state.result}</Text>
                </View>
            </View>
        );
    }
}

var styleSheet = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: "yellow", 
        padding: 50,
    },
    plus: {
        padding: 30,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    plusText: {
        color: "white",
    },
    result: {
        padding: 30,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
});