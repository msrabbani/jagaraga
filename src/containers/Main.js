import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient'
import {Container} from './CurrentWorkout'

export class Main extends Component {
  render() {
    return (
        <LinearGradient 
            colors={['#880E4F','#4A148C']}
            style={{flex: 1}}>
        <TabView
          tabBarTextStyle={{fontSize: 30}}
          tabBarPosition="overlayBottom"
      >
          <Container tabLabel="+"/>
          <Text tabLabel="uhuy">uhuy</Text>
        </TabView>
      </LinearGradient>
    );
  }
}
