import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import Topbar from './ui/Topbar'

export class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
        <LinearGradient
          colors={['#52EDC7', '#5AC8FB']}
          style={styles.container}
        >
          <Topbar style={styles.topbar}>
            <Text style={styles.topbarText}>
              Current Workout
            </Text>
          </Topbar>
          <View style={styles.currentWorkout}>
          </View>
        </LinearGradient>
        <ExerciseModal
        />
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
