import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';

export class ExerciseList extends Component {
  static defaultProps = {
    exercises: [],
  };
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChange: (r1, r2 => r1 !== r2)});
    this.state = {
      dataSource: ds.cloneWithRows(props.exercises),
    };
  }

  render() {
    const dataSource = this.state.cloneWithRows(this.props.exercises);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={exercise => (
          <View>
            <Text>{exercise.name}</Text>
          </View>
        )}
      />
    );
  }
}
