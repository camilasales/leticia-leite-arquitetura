// import axios from '@/plugins/axios'

const state = {
  listProjects: [
    {
      id: "1",
      src: require("@/assets/img/projects/AM/AM_1.jpg"),
      name: "A | M",
      images: [
        require("@/assets/img/projects/AM/AM_1.jpg"),
        require("@/assets/img/projects/AM/AM_2.jpg"),
        require("@/assets/img/projects/AM/AM_3.jpg"),
        require("@/assets/img/projects/AM/AM_4.jpg"),
        require("@/assets/img/projects/AM/AM_5.jpg"),
        require("@/assets/img/projects/AM/AM_6.jpg"),
        require("@/assets/img/projects/AM/AM_7.jpg"),
        require("@/assets/img/projects/AM/AM_8.jpg"),
        require("@/assets/img/projects/AM/AM_9.jpg")
      ],
    },

    {
      id: "2",
      src: require("@/assets/img/projects/DL/DL_1.jpg"),
      name: "D | L",
      images: [
        require("@/assets/img/projects/DL/DL_1.jpg"),
        require("@/assets/img/projects/DL/DL_2.jpg"),
        require("@/assets/img/projects/DL/DL_3.jpg"),
        require("@/assets/img/projects/DL/DL_4.jpg")
      ],
    },

    {
      id: "3",
      src: require("@/assets/img/projects/RP/RP_1.jpg"),
      name: "R | P",
      images: [
        require("@/assets/img/projects/RP/RP_1.jpg"),
        require("@/assets/img/projects/RP/RP_2.jpg"),
        require("@/assets/img/projects/RP/RP_3.jpg"),
        require("@/assets/img/projects/RP/RP_4.jpg"),
        require("@/assets/img/projects/RP/RP_5.jpg"),
        require("@/assets/img/projects/RP/RP_6.jpg")
      ],
    },

    {
      id: "4",
      src: require("@/assets/img/projects/VB/VB_1.jpg"),
      name: "V | B",
      images: [
        require("@/assets/img/projects/VB/VB_1.jpg"),
        require("@/assets/img/projects/VB/VB_2.jpg"),
        require("@/assets/img/projects/VB/VB_3.jpg"),
        require("@/assets/img/projects/VB/VB_4.jpg"),
        require("@/assets/img/projects/VB/VB_4.jpg"),
        require("@/assets/img/projects/VB/VB_5.jpg"),
        require("@/assets/img/projects/VB/VB_6.jpg"),
        require("@/assets/img/projects/VB/VB_7.jpg"),
        require("@/assets/img/projects/VB/VB_8.jpg"),
        require("@/assets/img/projects/VB/VB_9.jpg"),
        require("@/assets/img/projects/VB/VB_10.jpg"),
        require("@/assets/img/projects/VB/VB_11.jpg"),
        require("@/assets/img/projects/VB/VB_12.jpg"),
        require("@/assets/img/projects/VB/VB_13.jpg"),
        require("@/assets/img/projects/VB/VB_14.jpg"),
        require("@/assets/img/projects/VB/VB_15.jpg"),
        require("@/assets/img/projects/VB/VB_16.jpg"),
        require("@/assets/img/projects/VB/VB_17.jpg"),
      ],
    },

    {
      id: "5",
      src: require("@/assets/img/projects/VP/VP_1.jpg"),
      name: "V | B",
      images: [
        require("@/assets/img/projects/VP/VP_1.jpg"),
        require("@/assets/img/projects/VP/VP_2.jpg"),
        require("@/assets/img/projects/VP/VP_3.jpg"),
        require("@/assets/img/projects/VP/VP_4.jpg"),
        require("@/assets/img/projects/VP/VP_4.jpg"),
        require("@/assets/img/projects/VP/VP_5.jpg"),
        require("@/assets/img/projects/VP/VP_6.jpg"),
        require("@/assets/img/projects/VP/VP_7.jpg"),
        require("@/assets/img/projects/VP/VP_8.jpg"),
        require("@/assets/img/projects/VP/VP_9.jpg"),
        require("@/assets/img/projects/VP/VP_10.jpg"),
        require("@/assets/img/projects/VP/VP_11.jpg"),
        require("@/assets/img/projects/VP/VP_12.jpg"),
        require("@/assets/img/projects/VP/VP_13.jpg"),
        require("@/assets/img/projects/VP/VP_14.jpg"),
        require("@/assets/img/projects/VP/VP_15.jpg"),
        require("@/assets/img/projects/VP/VP_16.jpg"),
        require("@/assets/img/projects/VP/VP_17.jpg"),
        require("@/assets/img/projects/VP/VP_18.jpg"),
        require("@/assets/img/projects/VP/VP_19.jpg"),
        require("@/assets/img/projects/VP/VP_20.jpg"),
      ],
    },
  ],
  project: [],
};
const getters = {
  listProjects: (state) => state.listProjects,
  selectProject: (state) => state.project,
};

// atribuir um valor, realizar alteração do estado
const mutations = {
  setListProjects(state, data) {
    return data;
  },
  pushProject(state, id) {
    state.project = [];
    state.listProjects.map((item) => {
      if (id == item.id) {
        state.project.push(item);
      }
      return state.project;
    });
  },
};

const actions = {
  // commit usa a atribuicao criada no mutations
  async getAllProjects({ commit, state }) {
    await setTimeout(() => {
      commit("setListProjects", state.listProjects);
    }, 1000);
  },
  async getProject({ commit }, id) {
    await setTimeout(() => {
      commit("pushProject", id);
    }, 1000);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
