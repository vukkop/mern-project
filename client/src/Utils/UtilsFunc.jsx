import axios from "axios";

export const deleteById = (id) => {
  axios
    .delete(`http://localhost:8000/api/pirates/${id}`)
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};


