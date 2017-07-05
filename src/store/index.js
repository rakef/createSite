import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {

    isAddCompPopupShown: false,
    // defaultCmpns
    txtComp: {
      id: null,
      txt: {
        header: 'Some Text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      style: {
        bgColor: 'white',
        txtColor: 'black'
      }
    },

    imgCmpn: {
      id: null,
      url: 'http://thecatapi.com/api/images/get?format=src&type=jpg',
      txt: {
        header: 'Some Text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      style: {
        bgColor: 'white',
        txtColor: 'black'
      }
    },

    bgColor: (function(){
      if (localStorage.bgColor) return localStorage.bgColor;
      else return 'white';
    })(),

    txtColor: (function(){
      if (localStorage.txtColor) return localStorage.txtColor;
      else return 'black';
    })(),

    isModalOpen: false
  },

  mutations: {
    setBgColor (state, payload) {
      state.bgColor = payload.bgColor;
    },
    setTxtColor (state, payload) {
      state.txtColor = payload.txtColor;
    },
    toggleModal (state) {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleAddCompPopup (state) {
      state.isAddCompPopupShown = !state.isAddCompPopupShown
    }
  }
})

export default store;