import React, { useState, useEffect } from 'react';
import { fetchCompanyInfo } from '../CompInfoApi';

const Company = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const companyInfo = await fetchCompanyInfo();
                setData(companyInfo);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return null;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='MainContent'>
            <h3 className='companyinfo'>Company Info</h3>

            <div className='innerdiv'>
                <div className='innerdiva'>
                    <div className='innerdivimg'>
                        <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Name</p>
                            <h3 className='innertext'>{data.name}</h3>
                            <p className='month'><span className='color'>&uarr; 16%</span> this month</p>
                        </div>
                    </div>

                    <div className='innerdivimg'>
                        <img src="src/assets/images/ElonMusk.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Founder</p>
                            <h3 className='innertext'>{data.founder}</h3>
                            <p className='month'><span className='color2'>&darr; 1%</span> this month</p>
                        </div>
                    </div>

                    <div className='innerdivimg'>
                        <img src="src/assets/images/monitor.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Valuation</p>
                            <h3 className='innertext'>${data.valuation.toLocaleString()}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Headquartermaindiv'>
                <h1 className='Headquarter'>Headquarter</h1>
                <div className='Headquarterinnerdiv'>
                    <div className='Headquarterinnerdiva'>
                        <div className='Headquarterinnerdivimg'>
                            <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                            <div>
                                <p className='name'>City</p>
                                <h3 className='innertext'>{data.headquarters.city}</h3>
                            </div>
                        </div>

                        <div className='Headquarterinnerdivimg2'>
                            <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                            <div>
                                <p className='name'>State</p>
                                <h3 className='innertext'>{data.headquarters.state}</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className='Headquarterinnerdivimg3'>
                            <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                            <div>
                                <p className='name'>address</p>
                                <h3 className='innertext'>{data.headquarters.address}</h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
