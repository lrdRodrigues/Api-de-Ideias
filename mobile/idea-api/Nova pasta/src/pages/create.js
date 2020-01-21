import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import api from '../services/api'

function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    async function createIdea(){
        const idea = {
            title, 
            description, 
            tags, 
            imageUrl 
        }

        console.log('idea', idea)

        const response = await api.post('/idea', {
            name: idea.title, 
            description, 
            type: tags, 
            img_url: imageUrl
        })
        // const response = await api.get('/idea')
        console.log('response.data', response.data) 
        Alert.alert('Success!', `The idea ${idea.title} was successfully created!`)
    }

    return (
        <>
            <View style={styles.formGroup}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Title: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Tell your idea title'
                        value={title}
                        onChangeText={setTitle}
                    />

                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Description: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Describe your idea'
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Tags: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='What kind of idea is this one?'
                        value={tags}
                        onChangeText={setTags}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Image URL: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Do you have an image that represents it?'
                        value={imageUrl}
                        onChangeText={setImageUrl}
                    />
                </View>

                <TouchableOpacity onPress={createIdea} style={styles.submit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    formGroup: {

    },
    inputGroup: {
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        backgroundColor: "#FFF",
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },
    submit: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 16,
        backgroundColor: "#9af",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        marginTop: 20,
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default Create
