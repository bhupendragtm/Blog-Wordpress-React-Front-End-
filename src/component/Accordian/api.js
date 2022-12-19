import  { useState, useEffect } from "react";
import axios from "axios";

const Posts = () =>{
  let itemss = [];
  const [items, setItems] = useState([]);
  const getPosts = () => {
    axios
    .get("https://localhost/wordpress5/wp-json/wp/v2/posts")
    .then((response) => {
      // console.log('Response Is Here'+JSON.stringify(response));
      response.data.forEach((i) => {
        console.log( 'This is I'+i);
        console.log( 'Links are Here'+i._links.about);
        console.log( i.title.rendered);
        itemss.push(i.title.rendered);
        console.log("Items are Here"+items);
        // return(i.title.rendered);
        setItems([itemss]);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  useEffect(() => {
    getPosts();
  }, []);
  
  return items;
}

export default Posts;