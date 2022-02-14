import axios from 'axios';
const apiRoot = 'http://localhost:8081/api';

const getUsers = async () => {
  try {
    const { data: users } = await axios.get(`${apiRoot}/users`);
    return users;
  } catch (err) {
    console.error(err);
  }
};

const registerUser = async (user) => {
  try {
    await axios.post(`${apiRoot}/users`, user);
  } catch (err) {
    console.error(err);
  }
};

const loginUser = async (loginDetails) => {
  try {
    const { data: user } = await axios.post(`${apiRoot}/login`, loginDetails);
    return user;
  } catch (err) {
    console.error(err);
  }
};

const getCategories = async () => {
  try {
    const { data: categories } = await axios.get(`${apiRoot}/categories`);
    return categories;
  } catch (err) {
    console.error(err);
  }
};

const getQuizzesByCategoryName = async (categoryName) => {
  try {
    const { data: quizzes } = await axios.post(`${apiRoot}/quizzes`, {
      categoryName,
    });
    return quizzes;
  } catch (err) {
    console.error(err);
  }
};

const getQuizById = async (quizId) => {
  try {
    const { data: quiz } = await axios.post(`${apiRoot}/quiz-name`, {
      quizId,
    });
    return quiz;
  } catch (err) {
    console.error(err);
  }
};

const getQuestionsByQuizId = async (quizId) => {
  try {
    const { data: questions } = await axios.post(`${apiRoot}/questions`, {
      quizId,
    });
    return questions;
  } catch (err) {
    console.error(err);
  }
};

export {
  getUsers,
  registerUser,
  loginUser,
  getCategories,
  getQuizzesByCategoryName,
  getQuizById,
  getQuestionsByQuizId,
};
