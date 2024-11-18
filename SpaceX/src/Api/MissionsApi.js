// src/Api/missionApi.js

const fetchMissionData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions'); // Replace with your actual API URL
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching mission data:", error);
      return []; // Return an empty array in case of an error
    }
  };
  
  export default fetchMissionData;
  