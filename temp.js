import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Topbar, SearchBar} from './';
import {fuzzySearch} from '../services/fuzzy'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'apsl-react-native-button';

export class ExerciseList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      matchingExercises: ds.cloneWithRows([]),
    };
  }

    handleSearch = (searchTerm) => {
        let newState;
        if(!searchTerm || searchTerm.length < 3) {
            newState = this.state.matchingExercises.cloneWithRows([])
        } else {
            newState = this.state.matchingExercises.cloneWithRows(
                fuzzySearch(searchTerm, this.props.exercises, 'name')
            )
        }
        this.setState({matchingExercises: newState })
    }

    closeModal = () => {
        this.setState({matchingExercises: this.state.matchingExercises})
        this.props.closeModal()
    }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#efefef'}}>
        <Topbar style={{padding: 0}}>
          <LinearGradient
            colors={['#87fc70', '#0bd318']}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.topbar}>
            <SearchBar
              placeholder={'search for exercise'}
              autoFocus
              containerStyle={styles.searchBar}
              style={styles.input}
              onTextChange={this.handleSearch.bind(this)}
            />
            <View style={{flex: 0.1}}>
              <Button
                onPress={this.closeModal}
                textStyle={styles.close}
                style={styles.closeButton}
                children={<Icon name="cancel" size={40} />}
              />
            </View>
          </LinearGradient>
        </Topbar>
        <ListView
          dataSource={this.state.matchingExercises}
          renderRow={exercise => (
            <View style={styles.row}>
              <Text style={styles.rowName}>{exercise.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    flex: 0.9,
    borderColor: 'grey',
    borderRadius: 1,
    borderWidth: 1,
    height: 35,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 20,
  },
  topbar: {
    flexDirection: 'row',
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    fontSize: 20,
  },
  close: {
    fontSize: 34,
  },
  closeButton: {
    borderWidth: 0,
  },
  row: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  rowName: {
    fontSize: 30,
  },
});


