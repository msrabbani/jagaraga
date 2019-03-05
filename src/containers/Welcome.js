import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button'
import LinearGradient from 'react-native-linear-gradient'

export const Welcome = (props) => (
    <LinearGradient 
        colors={['#ef456a', '#1e1e1e']}
        style={{flex: 1}}>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Jagaraga</Text>
    </View>

    <View style={styles.logContainer}>
      <Text style={styles.logTitle}>Log your Fitness</Text>
    </View>

    <View style={{padding: 50}}>
        <Button
            onPress={props.StartWorkout}
            style={styles.button}
            textStyle={styles.buttonText}
            children={'Start Workout'}
        />
    </View>

</LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: '400',
    color: '#F3F3F3',
    textAlign: 'center',
  },
  logContainer: {
      flex: 0.3,
      alignItems:'center'
  },
  logTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: '#F3F3F3',
  },
  button: {
    borderColor: '#EADCDC',
      padding: 10,
      borderRadius: 10
  },
    buttonText: {
        color: '#EADCDC'
    }
});
