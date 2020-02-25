export const mapUsersResponse = users =>
  users.map(({ id, attributes: { email, city } }) => ({
    name: email,
    city,
    id: parseInt(id)
  }));
