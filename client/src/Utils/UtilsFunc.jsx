import axios from "axios";

export const deleteById = (id) => {
  axios
    .delete(`http://${process.env.API_URL}:8000/api/listing/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};


