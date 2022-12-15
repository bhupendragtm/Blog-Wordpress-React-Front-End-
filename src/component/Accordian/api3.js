import  { useState } from "react";
import axios from "axios";

const Posts = () => {
  const [items, setItems] = useState(['']);
    console.log('here'+items);
      axios
        .get("https://localhost/wordpress5/wp-json/wp/v2/posts")
        .then((response) => {
          setItems(response.data)
          // console.log(response.data);
          response.data.forEach((i) => {
            console.log( i.title.rendered);
          });
          setItems();
        })
        .catch((error) => {
          console.log(error);
        });
}

export default Posts;