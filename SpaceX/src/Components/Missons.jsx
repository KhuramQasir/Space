import React, { useState, useEffect } from 'react';
import fetchMissionData from '../Api/MissionsApi'; 
import PaginationButton from '../Components/pagination-button';

const Missions = () => {
    const [events, setEvents] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const rowsPerPage = 5;

    
    useEffect(() => {
        const getMissionData = async () => {
            const missionData = await fetchMissionData();
            setEvents(missionData);
        };
        getMissionData();
    }, []);  

    const filteredEvents = events.filter((event) =>
        event.mission_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredEvents.length / rowsPerPage);

    const currentRows = filteredEvents.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

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
                        {currentRows.map((event) => (
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
                                                        src="src\assets\images\website.jpg"
                                                        alt="Reddit"
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
                                                        src="src\assets\images\twitter.webp"
                                                        alt="Article"
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

            <PaginationButton
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Missions;
