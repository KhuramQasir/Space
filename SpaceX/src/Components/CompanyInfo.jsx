import React from 'react';
import CompanyInfoApi from '../CompInfoApi'; 

const Company = () => {
    const { companyInfo } = CompanyInfoApi(); 

    if (!companyInfo) {
        return <p>Loading...</p>; 
    }

    

    return (
        <div className='MainContent'>
            <h3 className='companyinfo'>Company Info</h3>

            <div className='innerdiv'>
                <div className='innerdiva'>
                    <div className='innerdivimg'>
                        <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Name</p>
                            <h3 className='innertext'>{companyInfo.name}</h3>
                            <p className='month'><span className='color'>&uarr; 16%</span> this month</p>
                        </div>
                    </div>

                    <div className='innerdivimg'>
                        <img src="src/assets/images/ElonMusk.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Founder</p>
                            <h3 className='innertext'>{companyInfo.founder}</h3>
                            <p className='month'><span className='color2'>&darr; 1%</span> this month</p>
                        </div>
                    </div>

                    <div className='innerdivimg'>
                        <img src="src/assets/images/monitor.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Valuation</p>
                            <h3 className='innertext'>${companyInfo.valuation.toLocaleString()}</h3>
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
                                <h3 className='innertext'>{companyInfo.headquarters.city}</h3>
                            </div>
                        </div>

                        <div className='Headquarterinnerdivimg2'>
                            <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                            <div>
                                <p className='name'>State</p>
                                <h3 className='innertext'>{companyInfo.headquarters.state}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='Headquarterinnerdivimg3'>
                        <img src="src/assets/images/Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                            <p className='name'>Address</p>
                            <h3 className='innertext'>{companyInfo.headquarters.address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
