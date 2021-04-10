/**
 * @format
 */

if (__DEV__) {
  import('./configs/ReactotronConfig');
}

import {AppRegistry} from 'react-native';
// import App from './src';
import Main from './src/pages/Main'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
