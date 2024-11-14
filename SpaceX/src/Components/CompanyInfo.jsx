import React from 'react'

export default function Company() {
    return (
        <div className='MainContent'>
            <h3 className='companyinfo'>Company Info</h3>
            
            <div className='innerdiv'>
                <div className='innerdiva'>
                    <div className='innerdivimg'>
                    
                        <img src="src\assets\images\Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                        <p className='name'>name</p>
                        <h3  className='innertext'>Tesla</h3>
                        <p className='month'> <span className='color'>&uarr;   16%</span> this month</p>
                        </div>
                    </div>

                    <div className='innerdivimg'>
                        <img src="src\assets\images\ElonMusk.svg" alt="Icon" className="divaIocn" />
                        <div>
                        <p className='name'>Founder</p>
                        <h3 className='innertext'>Elon Musk</h3>
                        <p className='month'> <span className='color2'> &darr; 1% </span>this month</p>
                        </div>
                       
                    </div>

                    <div className='innerdivimg'>
                        <img src="src\assets\images\monitor.svg" alt="Icon" className="divaIocn" />
                        <div>
                        <p className='name'>Valuation</p>
                        <h3 className='innertext'>0000</h3>
                      
                        </div>
                     
                    </div>
                </div>

            </div>
            <div className='Headquartermaindiv'>
                <h1 className='Headquarter'>Headquarter</h1>
                <div className='Headquarterinnerdiv'>
                <div className='Headquarterinnerdiva'>
                    <div className='Headquarterinnerdivimg'>
                        <img src="src\assets\images\Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                        <p className='name'>City</p>
                        <h3  className='innertext'>Tesla</h3>
                    
                        </div>
                        
                    </div>

                    <div className='Headquarterinnerdivimg2'>
                        <img src="src\assets\images\Tesla.svg" alt="Icon" className="divaIocn" />
                        <div>
                        <p className='name'>State</p>
                        <h3  className='innertext'>Rocket Road</h3>
                        </div>
                        
                    </div>

                    
                  
                </div>

            </div>
            </div>
        </div>
    )
}
