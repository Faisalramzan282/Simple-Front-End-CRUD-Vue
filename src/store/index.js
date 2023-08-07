import { createStore } from 'vuex'
// import VuexPersist from 'vuex-persistedstate';

export default createStore({
  state: {
    userData: []
  },
  
  mutations: {
    CREATE_USER(state, payload)
    {
      state.userData = payload;
    }
  },
  actions: {
    createUser({commit}, form)
    {
     commit('CREATE_USER', form)
     console.log(form.password);
    localStorage.setItem('userEmail', form.email);
    localStorage.setItem('userPassword', form.password);
    // console.log(userData);
    }, 
    validateUser({commit},loginForm)
    {
      commit('CREATE_USER', loginForm);
    //  const emailVal = localStorage.getItem('userEmail');
    //  const passval = localStorage.getItem('userPassword');
     
     
    }
  },
  getters: {
    getUser(state)
    {
      return state.userData;
    }
  },
})


