import axios from "axios";

export default axios.create({
  baseURL: "http://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ4NzdiOGY2Y2Q5NjNhNjU5NGQ2OTFjNzdkMjc4MyIsInN1YiI6IjY0YWY2NWY3M2UyZWM4MDE0ZjRhZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY3Kb416Ey4F3SVm5FeHosO8eD9AdDYOYbw4N_jieUE ",
  },
});
