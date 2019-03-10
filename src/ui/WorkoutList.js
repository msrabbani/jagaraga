import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class WorkoutList extends Component {

  render() {
    return (
      <View style={styles.addExercise}>
        <Text style={styles.textAddExercise}>Add Exercise</Text>
        <Button
          onPress={() => this.props.setModalVisibility(true)}
          style={styles.plusButton}
          textStyle={styles.plus}
          children={<Icon name="add" size={40} color="white" />}
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
});
