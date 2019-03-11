import React from 'react'
import {View, Text, Modal} from 'react-native'
import Button from 'apsl-react-native-button'
import LinearGradient from 'react-native-linear-gradient';
import { Topbar } from './Topbar'
import { SearchBar } from './SearchBar'

export const ExerciseModal = (props) => (
    <Modal
        style={{flex:1}}
        animationType={'slide'}
        visible={props.visible}
        onRequestClose={props.closeModal}
    >
        <View>
            <Topbar>
                <LinearGradient
                    colors={['#87fc70','#0bd318']}
                    start={[0.0, 0.5]}
                    end={[1.0, 0.5]}
                    locations={[0.0, 1.0]}
                >
                    <SearchBar/>
                </LinearGradient>
            </Topbar>
        </View>
    </Modal>
)
