import React, { useEffect, useState } from 'react';

const Profile = () => {
  const api = 'http://localhost:8000/api/authors';
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(api); // Fetch data from the API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error for non-2xx responses
        }
        const data = await response.json(); // Parse response as JSON
        setData(data); // Store the data in the state
        console.log(data); // Log data to the console
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors that occur during fetch
      }
    };

    fetchData(); // Call the async function
  }, [api]); // Run effect only once on mount or when `api` changes

  return (
    <div>
      hello
      {/* Optionally render data to verify fetching */}
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Profile;
