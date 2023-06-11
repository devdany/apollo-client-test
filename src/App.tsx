import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const POST_QUERY = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(POST_QUERY, {
    variables: {
      id: 'post-1'
    }
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data || error) {
    return <div>Error!</div>
  }
  return (
    <div className="App">
      my post title is {data.post.title}
    </div>
  );
}

export default App;
