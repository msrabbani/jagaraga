import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, Dimensions} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window')

export class WorkoutList extends Component {
  static defaultProps = {
    currentWorkout: [],
  };
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      workoutList: ds.cloneWithRows(props.currentWorkout),
    };
  }

  render() {
    const workoutList = this.state.workoutList.cloneWithRows(
      this.props.currentWorkout,
    );
    return (
      <View>
        <ListView
          style={styles.workoutList}
          dataSource={workoutList}
          renderFooter={() => (
            <View style={styles.addExercise}>
              <Text style={styles.textAddExercise}>Add Exercise</Text>
              <Button
                onPress={() => this.props.setModalVisibility(true)}
                style={styles.plusButton}
                textStyle={styles.plus}
                children={<Icon name="add" size={40} color="white" />}
              />
            </View>
          )}
          renderRow={exercise => (
            <View style={styles.workout}>
              <Text style={styles.workoutText}>{exercise.name}</Text>
            </View>
          )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  addExercise: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textAddExercise: {
    color: 'white',
    fontSize: 30,
  },
  plusButton: {
    borderStyle: null,
    borderWidth: 0,
  },
  plus: {
    color: 'black',
    fontSize: 50,
  },
  workoutList: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      width: width * .80
  },
  workout: {
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    padding: 10,
  },
  workoutText: {
    color: 'white',
    fontSize: 24,
  },
});
