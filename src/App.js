import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'pink'} barStyle="dark-content"/>
            <View>
                <Text style={style.text}>Hello World</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1, //Expandindo a cor para a tela inteira
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    }
});