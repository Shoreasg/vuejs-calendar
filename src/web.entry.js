import Vue from 'vue'
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }});

import App from './components/App.vue';

//let events = [
  //  { description: 'Random Event 1', date: moment('2021-05-26', 'YYYY-MM-DD')}];


let initialState = Object.assign({}, store.state, { events: window._INITIAL_STATE_ });
store.replaceState(initialState);

new Vue({
    el: '#app',
    data: {
        moment
    },
 
    components: {
        App
    },
    store
    
});
