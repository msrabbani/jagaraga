/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Welcome} from './src/containers/Welcome';

const Root = () => <Welcome />;

AppRegistry.registerComponent(appName, () => Root);
