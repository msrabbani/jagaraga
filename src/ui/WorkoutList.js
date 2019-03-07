import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons'

export class WorkoutList extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
                <View style={styles.addExercise}>
                    <Text style={styles.textAddExercise}>Add Exercise</Text>
                    <Button
                        style={styles.plusButton}
                        textStyle={styles.plus}
                        onPress={() => this.props.setModalVisibility(true)}
                        children={<Icon name="add" size={50} color="white" />}
                    />
                </View>
        )
    }

}

const styles = StyleSheet.create({
    addExercise: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textAddExercise:{
        color: 'white',
        fontSize: 20 
    }
})
