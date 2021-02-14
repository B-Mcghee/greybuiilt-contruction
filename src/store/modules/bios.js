import axios from 'axios';

const state = {
    bios: [
        {
          name: "Aaron Witt",
          title: "Founder/ Co-Owner"
        },
        {
          name: "Bilal Powell",
          title: "Co-Owner"
        },
        {
          name: "Kelsey Witt",
          title: '"New Home" Consultant / Designer'
        },
        {
          name: "Jessi Powell",
          title: '"New Home" Consultant / Designer'
        }
      ]
}
const getters = {
    allBios : state => state.bios
  };
  
  const actions = {
     async fetchBios({ commit }){
      const response = await axios.get('../static/bios.json')
      .then(response => {
  
        commit('setBios', response.data.bios);
  
    });
      // console.log('setBios',response.data)
  
    }
  
  
  };
  
  const mutations = {
    setBios:(state, bios) => (state.bios = bios)
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
  