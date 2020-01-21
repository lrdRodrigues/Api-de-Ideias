import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import api from '../../services/api'

function List() {
    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        async function loadIdeas() {
            const response = await api.get('/idea')
            console.log('ideas', response.data)
            setIdeas(response.data)
        }
        loadIdeas()
    }, [])

    async function deleteIdea(id){
        const response = await api.delete(`/idea/${id}`)
        console.log('Resultado', response.data) 
        Alert.alert('Result', 'Idea Successfully Deleted!')
        setIdeas( ideas.filter(idea => idea._id !== id))
    }

    async function editIdea(id){

    }

    return (
        <>
            <ScrollView style={styles.main}>
                {ideas.map(idea => (
                    <View key={idea._id} style={styles.ideaContainer}>
                        <Image style={styles.ideaImage} source={{ uri: idea.img_url }} />
                        <Text style={styles.label}>Title: {idea.name}</Text>
                        <Text style={styles.label}>Description: {idea.description} </Text>
                        <Text style={styles.label}>Tags: {idea.type}</Text>
                        <View style={styles.optionsButtons}>
                        <TouchableOpacity onPress={() => editIdea(idea._id)} style={styles.edit}>
                            <Text style={styles.buttonText}>Edit Idea</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteIdea(idea._id)} style={styles.delete}>
                            <Text style={styles.buttonText}>Delete Idea</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    ideaContainer:{
        marginTop: 10, 
        marginBottom: 10, 
        paddingVertical: 40, 
        paddingHorizontal: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#dde',
        borderRadius: 10

    },
    label:{
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
    buttonText:{
        fontSize: 16
    },
    optionsButtons:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        width: 300
    }
})


export default List
