import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import roadmapApp from '../reducers/roadmapApp';

const store = createStore(roadmapApp, devToolsEnhancer());
export default store;