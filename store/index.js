import { getCategories, getUsers } from '../services/service';

export const state = () => ({
  categories: [],
  users: [],
  currentUser: null,
  isQuizOver: false,
});

export const getters = {
  getCategories(state) {
    return state.categories;
  },
  getUsers(state) {
    return state.users;
  },
  getCurrentUser(state) {
    return state.currentUser;
  },
  getUsernames(state) {
    const usernames = [];
    state.users.forEach((user) => {
      usernames.push(user.username);
    });
    return usernames;
  },
  getUserByUsername: (state) => (username) => {
    return state.users.find((user) => user.username === username);
  },
};

export const mutations = {
  loadCategories(state, categories) {
    state.categories = categories;
  },
  loadUsers(state, users) {
    state.users = users;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  setIsQuizOver(state, isOver) {
    state.isQuizOver = isOver;
  },
};

export const actions = {
  async loadCategories({ commit }) {
    const categories = await getCategories();
    commit('loadCategories', categories);
  },
  async loadUsers({ commit }) {
    const users = await getUsers();
    commit('loadUsers', users);
  },
  async setCurrentUser({ commit }, user) {
    commit('setCurrentUser', user);
  },
  async setIsQuizOver({ commit }, isOver) {
    commit('setIsQuizOver', isOver);
  },
};
