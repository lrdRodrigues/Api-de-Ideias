import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Main({ navigation }) {

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title} >Idea API!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.button}>
                    <Text style={styles.buttonText}>Create Idea</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('List')} style={styles.button}>
                    <Text style={styles.buttonText}>List Ideas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        borderRadius: 25,
        marginBottom: 20
    },
    title: {
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: "bold",
    },
    button: {
        borderColor: '#ADF',
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 20,
        borderRadius: 25,
        backgroundColor: '#9AF',
        elevation: 10,

    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        color: '#FFF'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '100%'
    }
});

export default Main