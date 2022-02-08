const apiRoot = 'http://localhost:8081/api';

export const state = () => ({
  categories: [],
});

export const getters = {
  getCategories(state) {
    return state.categories;
  },
};

export const mutations = {
  loadCategories(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  async loadCategories({ commit }) {
    try {
      const { data: categories } = await this.$axios.get(
        `${apiRoot}/categories`
      );
      commit('loadCategories', categories.data);
    } catch (err) {
      commit('loadCategories', []);
    }
  },
};
