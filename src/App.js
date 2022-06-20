import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
    return <View style={style.container}>
        <Text style={style.text}>Hello World</Text>
    </View>;
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