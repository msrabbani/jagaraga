import React from 'react'
import {View, Text, Modal} from 'react-native'

export const ExerciseModal = (props) => (
    <Modal
        style={{flex:1}}
        animationType={'slide'}
        visible={props.visible}
        onRequestClose={props.closeModal}
    >
        <View>
            <Text>ieu Modal lain Modol</Text>
        </View>
    </Modal>
)
