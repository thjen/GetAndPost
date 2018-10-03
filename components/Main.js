import React, {Component} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: "",
            text2: "",
            result: "...",
        }
    }

    onClick() {
        fetch("http://192.168.1.9/ReactNativeEx/ex2Post.php", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                "number1": this.state.text1,
                "number2": this.state.text2,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({result: responseJson.Result})
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
                    onChangeText = {(text1) => this.setState({text1})}
                    value = {this.state.text1}
                />
                <TextInput 
                    style = {{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1  
                    }}
                    onChangeText = {(text2) => this.setState({text2})}
                    value = {this.state.text2}
                />
                <TouchableOpacity style = {styleSheet.plus}
                    onPress = {() => this.onClick()}>
                    <Text style = {styleSheet.plusText}>Plus</Text>
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