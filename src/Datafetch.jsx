import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetch = () => {
    // State to hold the fetched data
    const [data, setData] = useState(null);
    // State for loading and error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from your backend when the component mounts
      axios.get('http://localhost:5000/api/data')  // Replace with your backend API URL
        .then((response) => {
          // Set the data to the state
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          // Handle error
          setError(err.message);
          setLoading(false);
        });
    }, []);  // Empty array to run only once on component mount
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h1>Data from Backend</h1>
        {/* Display fetched data */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  
  export default DataFetch;
  