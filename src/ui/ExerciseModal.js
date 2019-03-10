import React from 'react'
import {View, Text, Modal} from 'react-native'
import Button from 'apsl-react-native-button'

export const ExerciseModal = (props) => (
    <Modal
        style={{flex:1}}
        animationType={'slide'}
        visible={props.visible}
        onRequestClose={props.closeModal}
    >
        <View>
            <Text>Ini Modal!</Text>
            <Button 
                onPress={props.closeModal}
                children={'close'}
            />
        </View>
    </Modal>
)
