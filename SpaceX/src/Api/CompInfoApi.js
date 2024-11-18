import React, { useEffect, useState } from 'react';

const CompanyInfoApi = () => {
    const [companyInfo, setCompanyInfo] = useState(null);

    const fetchCompanyInfo = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/info');
            if (!response.ok) {
                throw new Error('Failed');
            }
            const data = await response.json();
            setCompanyInfo(data);
        } catch (error) {
            console.error('Error:', error);
            setCompanyInfo(null);
        }
    };

    useEffect(() => {
        fetchCompanyInfo();
    }, []);

    return { companyInfo };
};

export default CompanyInfoApi;

  