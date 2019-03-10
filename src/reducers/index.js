import { combineReducers } from 'redux';
import { ui } from './ui';
import { exercises } from './exercises';
import { currentWorkout } from './currentWorkout';

export default combineReducers({
  exercises,
  ui,
  currentWorkout
});
