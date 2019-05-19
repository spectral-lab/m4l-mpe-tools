/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Utilities from '../src/components/Utilities';
import Loading from '../src/components/Loading';
import Messages from '../src/components/Messages';
import Modal from '../src/components/Modal';
import Slider from '../src/components/Slider';
import Main from '../src/components/Main';
import PostForm from '../src/components/PostForm';

import Instruction from '../src/pages/Instruction';
import OpenFile from '../src/pages/OpenFile';
import Viewer from '../src/pages/Viewer';

import Vue from 'vue';
import eventHub from '../src/utils/eventHub';
Vue.prototype.$eventHub = eventHub;
import Vuex from 'vuex';
import store, {InitialState, mutations, actions} from '../src/store';

// store mock for storybook. you can pass Initial state what you want
const createStore = (state) => new Vuex.Store({
  state: {...InitialState, ...state}, 
  // just inject log for storybook into mutations
  mutations: Object.keys(mutations).reduce((acc, key) => ({...acc, [key]: (state, mut) => {action(key)(mut);}}), {}),
  actions
});

storiesOf('Components', module)
 .add('Slider', () => ({
    components: { Slider },
    template: '<Slider />',
  }))
  .add('PostForm', () => ({
    components: { PostForm },
    store: createStore(),
    template: '<PostForm />',
  }))
 .add('Modal', () => ({
    components: { Modal },
    template: '<Modal />',
  }))
 .add('Messages', () => ({
    components: { Messages },
    methods: {openModal: action("openModal")},
    template: '<Messages v-bind:onClick="openModal" nextButtonActive=true text="hogehoge"/>',
  }))
  .add('Loading', () => ({
    components: { Loading },
    template: '<Loading />',
  }))
  .add('Utilities', () => ({
    components: { Utilities },
    store: createStore({fileName: "test-file.wav"}),
    template: '<Utilities @click="action">Hello Button</Utilities>',
    methods: { action: action('clicked') },
  }));

storiesOf('Pages', module)
  .add('Instruction', () => ({
    components: { Instruction },
    store: createStore(),
    template: '<Instruction />',
  }))
  .add('Viewer', () => ({
    components: { Viewer },
    store: createStore(),
    template: '<Viewer />',
  }))
  .add('OpenFile', () => ({
    components: { OpenFile },
    store,
    template: '<OpenFile @click="action">Hello Button</OpenFile>',
    methods: { action: action('clicked') },
  }));


/* eslint-enable react/react-in-jsx-scope */
