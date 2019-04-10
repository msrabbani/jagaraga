import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import {Topbar, WorkoutList, ExerciseModal} from '../ui';
import {setExerciseModalVisibility, addExercise} from '../actions/actions';
import { fetchCurrentWorkout, addExerciseToCurrentWorkout } from '../actions/actionCreators'

const mapStateToProps = (state) => ({
    currentWorkout: state.currentWorkout,
    exerciseModal: state.ui.exerciseModal,
    exercises: state.exercises
});

const mapActionsToProps = (dispatch) => ({
  setModalVisibility(visible) {
    return dispatch(setExerciseModalVisibility(visible));
  },
  addExercise(exercise) {
    return dispatch(addExerciseToCurrentWorkout(exercise))
  },
    fetchCurrentWorkout(){
        return dispatch(fetchCurrentWorkout()) 
    }
});

class _CurrentWorkout extends Component {
  static defaultProps = {
    currentWorkout: [],
    exercises:[]
  };

    componentDidMount() {
        this.props.fetchCurrentWorkout()
    }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#52EDC7', '#5AC8FB']}
          style={styles.container}>

          <Topbar style={styles.topbar}>
            <Text style={styles.topbarText}>
              Current Workout
            </Text>
          </Topbar>
          <View style={styles.currentWorkout}>
              <WorkoutList 
                  setModalVisibility={this.props.setModalVisibility}
                  currentWorkout={this.props.currentWorkout}
              />
          </View>
        </LinearGradient>
        <ExerciseModal
              exercises={this.props.exercises}
              addExercise={this.props.addExercise}
              visible={this.props.exerciseModal}
              closeModal={() => this.props.setModalVisibility(false)}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height: 60
  },
  topbarText: {
    color: 'white',
    fontSize: 26,
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CurrentWorkout = connect(mapStateToProps, mapActionsToProps)(_CurrentWorkout);
