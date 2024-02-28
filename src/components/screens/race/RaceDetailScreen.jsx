import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import RaceDetailCard from './RaceDetailCard';

export default function RaceDetailScreen({ route }) {

    const { session } = route.params;

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        getDrivers();
    }, []);

    const getDrivers = async () => {
        try {
            const res = await axios.get("https://api.openf1.org/v1/position?meeting_key=" + session.meeting_key);
            setDrivers(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>
                    {session.session_name} - {session.location}, {session.country_name}
                </Text>

                <FlatList
                    data={drivers}
                    keyExtractor={(item, id) => id.toString()}
                    renderItem={({ item }) => (
                        <RaceDetailCard data={item} />
                    )}
                >
                </FlatList>
            </View>

        </SafeAreaView>
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
