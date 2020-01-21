import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import api from '../../services/api'
// import styles from './styles'

function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    async function createIdea() {
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
    ideaContainer: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dde',
        borderRadius: 10

    },
    label: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center'
    },
    ideaImage: {
        width: 250,
        height: 200,
        marginBottom: 20,
        borderRadius: 25
    },
    edit: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 16,
        backgroundColor: "#ff0",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        marginTop: 20,
    },
    delete: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 16,
        backgroundColor: "#f55",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16
    },
    optionsButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300
    }
})


export default Create
