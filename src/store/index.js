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
        title: 'Give me a title',
        subtitle: 'Subtitle',
        txt: 'YO YO YO',
        style: {
          backgroundColor: 'white',
          color: 'black', 
        }
      }, 
      {
        type: 'app-text',
        title: 'About Farming',
        txt:`Vegetable farming is the growing of vegetables for human consumption.
             The practice probably started in several parts of the world over ten thousand years ago,
             with families growing vegetables for their own consumption.`
            
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
        imgUrl: 'https://photos-4.dropbox.com/t/2/AAD_rog0bpq7jntYxzPDZ-05cXuSILVtufUbKXohRhwxHA/12/16224430/png/32x32/1/_/1/2/transparent.png/ENrOiwwYh8gEIAIoAg/hocVlmucM6YKnEZs8gGXF1xSHMq4QQCfaY8ixNwr6R0?size=1600x1200&size_mode=3',
        title: 'Give me a title',
        subtitle: 'Give me a subtitle',
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      },
      {
        type: 'carousel',
        imgUrls: [
          'https://s-media-cache-ak0.pinimg.com/originals/f6/b0/ed/f6b0ed852c763dc4d2fd57fd638a3bb5.jpg',
          'http://allswalls.com/images/cat-grass-wallpaper-1.jpg',
          'https://stuffwhitepeoplelike.files.wordpress.com/2010/03/830161744_bce0da8cc4.jpg',
          'http://www.njfamily.com/PickYourOwnFruit.png',
          'http://il6.picdn.net/shutterstock/videos/2890054/thumb/1.jpg',

        ],
        title: 'give me a title',
        subtitle: 'give me a subtitle',
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      },
      {
        type: 'mapComp',
        marker: {lat: 32.956638, lng: 35.739718}
      }
    ],

    userComponentsData: [

    ]
  },
  getters: {
    getEditedCompIdx: state => {
      return state.userComponentsData.findIndex(userCmp => 
                      userCmp.id === state.currEditedCompId);
    }
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
      let editPos = store.getters.getEditedCompIdx;
      state.userComponentsData[editPos].style.backgroundColor = backgroundColor;
    },
    changeTxtColor(state, {color}) {
      let editPos = store.getters.getEditedCompIdx;
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
    setNewImgUrl(state, payload) {
      let editPos = store.getters.getEditedCompIdx;
      state.userComponentsData[editPos].imgUrls.splice([payload.imgNum - 1], 1 ,payload.imgUrl);
    },
    setNewCoords(state, {marker}) {
      let editPos = store.getters.getEditedCompIdx;
      // console.log('marker', marker);
      state.userComponentsData[editPos].marker = marker;
    }
    
  }
})

export default store;