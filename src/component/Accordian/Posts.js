import React from 'react';
import useFetch from './useFetch';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

export default function Posts() {
    const posts = useFetch('https://localhost/wordpress5/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
        <Grid key={index}>
        <Card>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}