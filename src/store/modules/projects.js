import axios from 'axios';

const state = {
    projects: [
        {
          id: 1,
          title: "Corydon",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/side.jpg",
          images: [
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
            "/static/Images/sidewalk.jpg",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/sidewalk.jpg"
          ],
          sq_footage:'1,456',
          showProject: true
        },
        {
          id: 2,
          title: "Louisville",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/kelsey_jessie.JPG",
          images: [
            "/static/Images/sidewalk.jpg",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
          ],
          sq_footage:'1,956',
          showProject: true
        },
        {
          id: 3,
          title: "Sellersburg",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/aaron_bilal.JPG",
          images: [
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
          ],
          sq_footage:'3,456',
          showProject: true
        },
        {
          id: 4,
          title: "Louisville",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "static/Images/side.jpg",
          images: [
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg"
          ],
          sq_footage:'2,056',
          showProject: true
        },
        {
          id: 5,
          title: "Sellersburg",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/sidewalk.jpg",
          images: [
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg"
          ],
          sq_footage:'2,456',
          showProject: true
        },
        {
          id: 6,
          title: "Corydon",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/side.jpg",
          images: [
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
            "/static/Images/sidewalk.jpg",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/sidewalk.jpg"
          ],
          sq_footage:'1,456',
          showProject: true
        },
        {
          id: 7,
          title: "Louisville",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/kelsey_jessie.JPG",
          images: [
            "/static/Images/sidewalk.jpg",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
          ],
          sq_footage:'1,956',
          showProject: true
        },
        {
          id: 8,
          title: "Sellersburg",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/aaron_bilal.JPG",
          images: [
            "/static/Images/kelsey_jessie.JPG",
            "/static/Images/side.jpg",
            "/static/Images/aaron_bilal.JPG",
          ],
          sq_footage:'3,456',
          showProject: true
        },
        {
          id: 9,
          title: "Louisville",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "static/Images/side.jpg",
          images: [
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg"
          ],
          sq_footage:'2,056',
          showProject: true
        },
        {
          id: 10,
          title: "Sellersburg",
          description:
            "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
          cover_image: "/static/Images/sidewalk.jpg",
          images: [
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg",
            "static/Images/side.jpg"
          ],
          sq_footage:'2,456',
          showProject: true
        }
      ]
}
const getters = {
    allProjects : state => state.projects
  };
  
  const actions = {
     async fetchProjects({ commit }){
      // const response = await axios.get('../static/projects.json')
      // .then(response => {);
  
        commit('LOAD_PROJECTS', response.data.projects);
  
    

  
    },
    async addProject({commit}, project){
      let id = state.projects.length;
      project.id = id + 1;
      commit('ADD_PROJECT', project);
    }
    ,
    async deleteProject({commit}, projectId){
      commit('DELETE_PROJECT', projectId);
    },
    async updateProject({commit}, updatedProject){
      
      commit('UPDATE_PROJECT', updatedProject);
    }
  
  
  };
  
  const mutations = {
    LOAD_PROJECTS:(state, projects) => (state.projects = projects),
    ADD_PROJECT:(state, project) => (state.projects.unshift(project)),
    DELETE_PROJECT:(state,id ) => state.projects = state.projects.filter(project => project.id !== id),
    UPDATE_PROJECT:(state, updatedProject) => {
      const index = state.projects.findIndex(project => project.id === updatedProject.id);
      if(index !== -1){
        state.projects.splice(index,1,updatedProject);
      }
    }
  }
  export default {
    state,
    getters,
    actions,
    mutations
  }
  