import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import api from '../services/api'

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

    return (
        <>
            <ScrollView style={styles.main}>
                {ideas.map(idea => (
                    <View key={idea._id} style={styles.ideaContainer}>
                        <Image style={styles.ideaImage} source={{ uri: idea.img_url }} />
                        <Text style={styles.label}>Title: {idea.name}</Text>
                        <Text style={styles.label}>Description: </Text>
                        <Text style={styles.label} > {idea.description}</Text>
                        <Text style={styles.label}>Tags: {idea.type}</Text>
                        <View style={styles.optionsButtons}>
                        <TouchableOpacity style={styles.edit}>
                            <Text>Edit Idea</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.delete}>
                            <Text>Delete Idea</Text>
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
        backgroundColor: '#036',
        borderRadius: 10

    },
    label:{
        color: '#FFF'
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
    optionsButtons:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        width: 300
    }
})


export default List
