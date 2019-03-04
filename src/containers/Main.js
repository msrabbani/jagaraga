import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';

export class Main extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabView
          tabBarTextStyle={{fontSize: 30}}
          tabBarPosition="overlayBottom"
      >
          <Text tabLabel="halo">halo</Text>
          <Text tabLabel="uhuy">uhuy</Text>
        </TabView>
      </View>
    );
  }
}
