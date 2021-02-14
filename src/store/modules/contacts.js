import axios from 'axios';

const state = {
    contacts: [
        {
          first_name: "Brandon",
          last_name: "McGhee",
          email: "bm@gmail.com",
          phone_number: "123-456-7890",
          call_time: "2021-02-11T03:16",
          price_range: '$200,000 - $300,000',
          sq_footage:  "2,000 - 2,500",
          contacted:false
        },
        {
            first_name: "John",
            last_name: "Smith",
            email: "bm@gmail.com",
            phone_number: "123-456-7890",
            call_time: "2021-02-11T03:16",
            price_range: '$200,000 - $300,000',
            sq_footage:  "2,000 - 2,500",
            contacted:false
          },
          {
            first_name: "Carl",
            last_name: "Lewis",
            email: "bm@gmail.com",
            phone_number: "123-456-7890",
            call_time: "2021-02-11T03:16",
            price_range: '$200,000 - $300,000',
            sq_footage:  "2,000 - 2,500",
            contacted:false
          },
          {
            first_name: "Hannibal",
            last_name: "Lector",
            email: "bm@gmail.com",
            phone_number: "123-456-7890",
            call_time: "2021-02-11T03:16",
            price_range: '$200,000 - $300,000',
            sq_footage:  "2,000 - 2,500",
            contacted:true
          }

      ]
}
const getters = {
    allContacts : state => state.contacts
  };
  
  const actions = {
     async fetchContacts({ commit }){
      const response = await axios.get('../static/contacts.json')
      .then(response => {
  
        commit('setContacts', response.data.contacts);
  
    });
      // console.log('setContacts',response.data)
  
    }
  
  
  };
  
  const mutations = {
    setContacts:(state, contacts) => (state.contacts = contacts)
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
  