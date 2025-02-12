import axios from 'axios'

const API_URL = 'https://task-track-ayvs.onrender.com/api/goals/'
// const API_URL = 'https://task-tracker-6k3h.onrender.com/api/goals/';
  // "proxy": "https://task-track-ayvs.onrender.com", in package.json

// Create new goal
const createGoal = async (goalData,completeTime,priority, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, {text : goalData, completeTime, priority}, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  console.log(response);

  return response.data
}

// Update user goal
const updateGoal = async (goalId, goalData,completeTime,priority, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  console.log(goalData);
  // console.log(goalId);
  // console.log(token);

  const response = await axios.put(API_URL + goalId, {text : goalData, completeTime, priority}, config)

  console.log(response);

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal
}

export default goalService