import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';
import {Topbar} from './Topbar';
import {SearchBar} from './SearchBar'
import {ExerciseList} from './ExerciseList'
import {fuzzySearch} from '../services/fuzzy'

export class ExerciseModal extends Component {
    constructor(props){
        super()
        this.state = {
            foundExercises:[]
        }
    }

    handleTextChange = (text) => {
        this.setState({
            foundExercises:fuzzySearch(text, this.props.exercises, "name")
        })


    };

  render() {
    return (
      <Modal
        style={{flex: 1}}
        animationType={'slide'}
        visible={props.visible}
        onRequestClose={props.closeModal}>
        <View>
          <Topbar>
            <LinearGradient
              colors={['#87fc70', '#0bd318']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}>
              <SearchBar onTextChange={this.handleTextChange} />
            </LinearGradient>
          </Topbar>
          <ExerciseList
              exercises={this.state.foundExercises}
          />
        </View>
      </Modal>
    );
  }
}
