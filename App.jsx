
import React, { useState, useEffect } from 'react';
import './App.css'; // Import App.css

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts.slice(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetchData().then(posts => setData(posts));
  }, []);

  return (
    <div className="app-container">
      <h1>Your App</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <p>{post.title}</p>

            {post.comments && (
              <ul>
                {post.comments.map(comment => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
