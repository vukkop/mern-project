import axios from "axios";

export const deleteById = (id) => {
  axios
    .delete(`http://localhost:8000/api/listing/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};


