import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function RaceCard(session) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{session.session_name}</Text>
            <Text style={styles.subtitle}>{session.location}, {session.country_name}</Text>
            <Text>Date: {session.date_start}</Text>
            <Text>Heure de début: {session.date_start}</Text>
            <Text>Heure de fin: {session.date_end}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        color: '#888',
        marginBottom: 5,
    },
});
