// Temporary in-memory DB (no MongoDB required)

export const localDB = {
  users: [],           // { id, name, email, password, role }
  quizSubmissions: []  // store quiz results
};
