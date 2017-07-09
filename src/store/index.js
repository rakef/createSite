import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {

    isAddCompPopupShown: false,
    isEditorShown: false,

    cmpID: 0,

    currEditedCompId: null,

    defaultComponentData: [
      {
        type: 'title-cmpn',
        txt: 'YO YO YO',
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      },
      {
        type: 'cat',
        url: 'http://thecatapi.com/api/images/get?format=src&type=jpg',
        txt: 'Meow',
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      },
      {
        type: 'app-header',
        imgUrl: 'http://perinetti.legtux.org/__template3/images/pic01.jpg',
        title: 'give me a title',
        subtitle: 'give me a subtitle',
        style: {
          backgroundColor: 'white',
          color: 'black'
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
    },
    changeBgColor(state, {backgroundColor}) {
      let editPos = state.userComponentsData.findIndex(userCmp => userCmp.id === state.currEditedCompId);
      state.userComponentsData[editPos].style.backgroundColor = backgroundColor;
    },
    changeTxtColor(state, {color}) {
      let editPos = state.userComponentsData.findIndex(userCmp => userCmp.id === state.currEditedCompId);
      state.userComponentsData[editPos].style.color = color;
    },
    deleteUserCmp(state, { cmpId }) {
      let deletePos = state.userComponentsData.findIndex(userCmp => userCmp.id === cmpId);
      if (deletePos !== -1)
          state.userComponentsData.splice(deletePos, 1);
    },
    setCurrEditedComp(state, { cmpId }) {
      state.currEditedCompId = cmpId;
      // console.log('state.currEditedCompId',state.currEditedCompId);
    },
    setIsEditorShown(state, {shouldShow}) {
      state.isEditorShown = shouldShow;
    },
    
  }
})

export default store;