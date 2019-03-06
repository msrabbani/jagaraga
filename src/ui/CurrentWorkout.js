import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Topbar} from './Topbar'

export const CurrentWorkout = () => (
    <View>
    <Topbar style={styles.topbar}>
        <Text style={styles.textbar}>Current Workout</Text>
    </Topbar>

    <Text>Current Workout...</Text>
    </View>
)

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white' 
    },
    textbar:{
        color: 'white',
        fontSize: 25 
    }
})
