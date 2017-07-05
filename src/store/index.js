import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {

    isAddCompPopupShown: false,

    cmpID: 0,

    defaultComponentData: [
      {
        type: 'title-cmpn',
        txt: 'YO YO YO',
        style: {
          bgColor: 'white',
          txtColor: 'black'
        }
      },
      {
        type: 'cat',
        url: 'http://thecatapi.com/api/images/get?format=src&type=jpg',
        txt: 'Meow',
        style: {
          bgColor: 'white',
          txtColor: 'black'
        }
      },
      {
        type: 'app-header',
        imgUrl: 'http://perinetti.legtux.org/__template3/images/pic01.jpg',
        title: 'give me a title',
        subtitle: 'give me a subtitle',
        style: {
          bgColor: 'white',
          txtColor: 'black'
        }
      }
    ],

    userComponentsData: [

    ]
  },

  mutations: {
    toggleAddCompPopup (state) {
      state.isAddCompPopupShown = !state.isAddCompPopupShown
    },
    addDataToUser(state, { cmpType }) {
      // console.log(cmpnType);
      let cmpData = state.defaultComponentData.find(data => data.type === cmpType);
      let userCmpData = JSON.parse(JSON.stringify(cmpData));
      userCmpData.id = state.cmpID++;
      state.userComponentsData.push(userCmpData);
    }
  }
})

export default store;