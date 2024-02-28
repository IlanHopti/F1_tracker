import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import RaceCard from './RaceCard';

export default function RaceScreen() {

    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        getSessions();
    }, []);

    const getSessions = async () => {
        try {
            const res = await axios.get("https://api.openf1.org/v1/sessions");
            setSessions(res.data);
            console.log(res.data)
        } catch (error) {
            console.error('ERROR', error);
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <Text>Liste des sessions :</Text>
                <FlatList
                    data={sessions}
                    keyExtractor={(item, id) => id.toString()}
                    renderItem={({ item }) => (
                        <RaceCard {...item}/>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',   
        alignItems: 'center',
        backgroundColor: 'white',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

});
