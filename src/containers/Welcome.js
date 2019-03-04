import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button'

export const Welcome = (props) => (
  <View style={{flex: 5}}>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Jagaraga</Text>
    </View>

    <View style={styles.logContainer}>
      <Text style={styles.logTitle}>Log your Fitness</Text>
    </View>

    <View style={{padding: 100}}>
        <Button
            onPress={props.StartWorkout}
            style={styles.button}
            children={'Start Workout'}
        />
    </View>

  </View>
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
    fontSize: 45,
    fontWeight: '400',
    color: 'blue',
    textAlign: 'center',
  },
  logContainer: {
    flex: 0.3,
  },
  logTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'silver',
  },
  button: {
    borderColor: '#EADCDC',
    backgroundColor: 'grey',
    padding: 20,
    alignItems: 'center',
  },
});
