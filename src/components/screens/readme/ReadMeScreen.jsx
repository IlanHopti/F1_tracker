import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ReadMeScreen() {
    return (
        <SafeAreaProvider>
            <View style={styles.screen}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Comment ça marche akhy ?</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            Bienvenue sur l'application F1_Tracker. 
                            Cette application vous permet de consulter les informations des pilotes et des circuits de la saison 2023 de Formule1.
                            Vous pouvez consulter les informations des pilotes, les circuits, les équipes et les résultats des courses.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            Pour accéder à l'application, vous devez vous connecter ou vous inscrire.
                            Suite à cela, vous pourrez consulter TOUTES les informations de sur la Formule 1.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            1. Les pilotes sont classés par équipe et par nombre de points.
                            Vous pouvez consulter les détails de chaque pilote en cliquant sur le pilote de votre choix.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            2. Les circuits sont classés par pays et par date de la course.
                            Vous pouvez consulter les détails de chaque circuit en cliquant sur le circuit de votre choix.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            3. Vous pouvez consulter les résultats des courses en cliquant sur la course de votre choix.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>
                            4. Vous pouvez consulter les détails de chaque équipe en cliquant sur l'équipe de votre choix.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121212',
    },
    contentContainer: {
        padding: 10,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontStyle: 'italic',
    },
    section: {
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
