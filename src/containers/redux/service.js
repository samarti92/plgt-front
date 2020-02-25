const API_URL = 'https://plgt-backend-rails.herokuapp.com';
//const API_URL = 'http://localhost:3000';

export const fetchUsers = () => fetch(`${API_URL}/users.json`);

export const createUser = ({ user }) =>
  fetch(`${API_URL}/users.json`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
