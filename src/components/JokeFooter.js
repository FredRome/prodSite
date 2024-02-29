import React, { useState, useEffect } from 'react';

const JokeFooter = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/jokes?limit=1');
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
    <footer>
      <p>{joke}</p>
    </footer>
  );
};

export default JokeFooter;
