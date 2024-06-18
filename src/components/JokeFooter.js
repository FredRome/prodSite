import React, { useState, useEffect } from 'react';
import './JokeFooter.css'; // Import the CSS file
const JokeFooter = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const apiKey = 'lsxtPyNLQyTuKuITNYlabCLpANc4TgW87zdW87Y9'; // Replace 'your-api-key' with your actual API key
        const headers = {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json', // Adjust content type as per API requirements
        };

        const response = await fetch('https://api.api-ninjas.com/v1/jokes', {
          method: 'GET',
          headers: headers,
        });

        const data = await response.json();

        // Assuming the API response structure is consistent
        const jokeText = data[0]?.joke || 'No joke available';

        setJoke(jokeText);
      } catch (error) {
        console.error('Error fetching joke:', error.message);
      }
    };

    fetchJoke();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <footer className="joke-footer">
      <p>{joke}</p>
    </footer>
  );
};

export default JokeFooter;
