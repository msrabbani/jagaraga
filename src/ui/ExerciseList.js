import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableWithoutFeedback } from 'react-native';
import { fuzzySearch } from '../services/fuzzy';
import LinearGradient from 'react-native-linear-gradient';
import { Topbar } from './Topbar';
import { SearchBar } from './SearchBar';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class ExerciseList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      matchingExercises: ds.cloneWithRows([])
    };
  }
  
  closeModal = () => {
    this.setState({matchingExercises: this.state.matchingExercises});
    this.props.closeModal();
  }

  handleSearch = (searchTerm) => {
    let newState;
    if (!searchTerm || searchTerm.length < 3) {
      newState = this.state.matchingExercises.cloneWithRows([]);
    } else {
      newState = this.state.matchingExercises.cloneWithRows(
        fuzzySearch(searchTerm, this.props.exercises, 'name')
      );
    }
    this.setState({matchingExercises: newState});
  }

    handlePress = (exercise) => {
        this.props.addExercise(exercise)
        this.props.closeModal()
    }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#efefef'}}>
        <Topbar style={{padding: 0}}>
          <LinearGradient
            start={{x:0.0, y:0.5}} end={{x:1.0, y:0.5}}
            locations={[0.0, 1.0]}
            colors={['#87FC70', '#0BD318']}
            style={styles.topbar}
          >
            <SearchBar
              placeholder={'search for exercise'}
              autoFocus
              containerStyle={styles.searchBar}
              style={styles.input}
              onTextChange={this.handleSearch}
            />
            <View style={{flex: 0.1}}>
              <Button
                onPress={this.closeModal}
                textStyle={styles.close}
                style={styles.closeButton}
                children={<Icon name="cancel" size={34} />}
              />
            </View>
          </LinearGradient>
        </Topbar>
        <ListView
          dataSource={this.state.matchingExercises}
          renderRow={exercise => (
              <TouchableWithoutFeedback onPress={()=>this.handlePress(exercise)}>
              <View style={styles.row}>
                <Text style={styles.rowName}>
                  {exercise.name}
                </Text>
              </View>
              </TouchableWithoutFeedback>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    flex: 0.9,
    borderColor: 'grey',
    borderRadius: 0.5,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 30
  },
  topbar: {
    flexDirection: 'row',
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: 'black',
    fontSize: 18
  },
  close: {
    fontSize: 30
  },
  closeButton: {
    borderWidth: 0
  },
  row: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  rowName: {
    fontSize: 25
  }
})

