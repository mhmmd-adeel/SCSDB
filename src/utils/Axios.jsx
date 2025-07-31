import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGYxNWNkNGJiNzMwZjI5NTQ4MGM2NmIzNzQxYjM1YSIsIm5iZiI6MTcyODIxNzgyMC43ODM3MTYsInN1YiI6IjY3MDI3ZWQyNjdjNmZiMDlmZmY4N2I0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HPuLeqy5p2t4le0kuxpwRF5w5sz9gX8noPJn1VbwY50'
    }
  });
  
export default instance