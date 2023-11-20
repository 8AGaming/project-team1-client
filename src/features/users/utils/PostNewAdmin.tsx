import { FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface post {
  email: string;
  password: string;
}

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostNewAdmin: FC<post> = ({ email, password }) => {
  const navigate = useNavigate();
  axios
    .post(baseURL, { body: email, password })
    .then(() => {
      console.log("Successfully added to the site");
    })
    .catch(() => {
      console.log("Error connecting to the site");
      navigate("*");
    });

  return null;
};

export default PostNewAdmin;
