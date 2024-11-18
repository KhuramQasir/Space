import React, { useState, useEffect } from 'react';


const Missions = () => {
    const [events, setEvents] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const rowsPerPage = 5;

    
    const fetchMissionData = async (page, limit) => {
        const offset = (page - 1) * limit;
        const url = `https://api.spacexdata.com/v3/missions?limit=${limit}&offset=${offset}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error", error);
            return [];
        }
    };

   
    useEffect(() => {
        const getMissionData = async () => {
            const missionData = await fetchMissionData(currentPage, rowsPerPage);
            setEvents(missionData);
     
            setTotalItems(16); 
        };
        getMissionData();
    }, [currentPage]);

   
   
   
    const totalPages = Math.ceil(totalItems / rowsPerPage);

  
    const goToPage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    

    const filteredEvents = events.filter((event) =>
        event.mission_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="history-container">
            <div className="history">
                <h1 className="history-title">Missions</h1>
                <div className="history-search-sort">
                    <input
                        type="text"
                        placeholder="Search"
                        className="history-search"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1); 
                        }}
                    />
                    <select className="history-sort">
                        <option>Sort By Newest</option>
                        <option>Sort By Oldest</option>
                    </select>
                </div>
            </div>

            <div className="table-container">
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Mission Name</th>
                            <th>Manufacturers</th>
                            <th>Payloads</th>
                            <th>Links</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {filteredEvents.map((event) => (
                            <tr key={event.mission_id}>
                                <td>{event.mission_name}</td>
                                <td>{event.manufacturers.join(', ')}</td>
                                <td>{event.payload_ids.join(', ').substring(0, 40)}...</td>
                                <td>
                                    {event.website || event.twitter || event.wikipedia ? (
                                        <>
                                            {event.website && (
                                                <a
                                                    href={event.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src="src/assets/images/website.jpg"
                                                        alt="website"
                                                        className="icon"
                                                    />
                                                </a>
                                            )}
                                            {event.twitter && (
                                                <a
                                                    href={event.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src="src/assets/images/twitter.webp"
                                                        alt="twitter"
                                                        className="icon"
                                                    />
                                                </a>
                                            )}
                                            {event.wikipedia && (
                                                <a
                                                    href={event.wikipedia}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src="src/assets/images/wikipedia.png"
                                                        alt="Wikipedia"
                                                        className="icon"
                                                    />
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                                <td className="Status-btn">
                                    <button className="status-button active">Active</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
            <div className="pagination">
                <button className="pagination-button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
                </button>
                <span>Page {currentPage} of {totalPages}</span>
           
                <button className="pagination-button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
                </button>
            </div>
        </div>
    );
};

export default Missions;
