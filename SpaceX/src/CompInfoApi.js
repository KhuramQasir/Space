export const fetchCompanyInfo = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/info');
      if (!response.ok) {
        throw new Error('Failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error', error);
      return null;
    }
    
    
  };
  