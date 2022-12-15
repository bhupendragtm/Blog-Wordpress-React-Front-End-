import  { useState, useEffect } from "react";
import axios from "axios";

const Posts = () =>{
  const [items, setItems] = useState(['bhoj']);
  const getPosts = () => {
    axios
    .get("https://localhost/wordpress5/wp-json/wp/v2/posts")
    .then((response) => {
      // console.log('Response Is Here'+JSON.stringify(response));
      response.data.forEach((i) => {
        let c = i.title.rendered;
        console.log( 'This is I'+i);
        console.log( 'Links are Here'+i._links.about);
        console.log( i.title.rendered);
        
        console.log("Items are Here"+items);
        // return(i.title.rendered);
        setItems([...items, c]);
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