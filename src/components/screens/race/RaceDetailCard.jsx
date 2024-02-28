import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';

export default function RaceDetailCard({ data }) {

    const [driverDetails, setDriverDetails] = useState(null);

    useEffect(() => {
        getDriverDetails();
    }, [])

    const getDriverDetails = async () => {
        try {
            const res = await axios.get("https://api.openf1.org/v1/drivers?driver_number=" + data.driver_number);
            setDriverDetails(res.data[0]);
        } catch (error) {
            console.error('ERROR', error);
        }
    }

    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>Position: {data.position}</Text>
            {driverDetails && (
                <React.Fragment>
                    <Text style={styles.subtitle}>Driver Name: {driverDetails.full_name}</Text>
                    <Text>Country: {driverDetails.country_code}</Text>
                    <Text>Team: {driverDetails.team_name}</Text>
                    <Image source={{ uri: driverDetails.headshot_url }} style={styles.image} />
                </React.Fragment>
            )}
            <Text>Date: {data.date}</Text>
        </TouchableOpacity>
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
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
    },
});
