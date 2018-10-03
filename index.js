/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from "./components/Main";
import SignUp from "./components/SignUp"

AppRegistry.registerComponent(appName, () => SignUp);
