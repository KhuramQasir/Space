import React, { useState, useEffect } from 'react';
import PaginationButton from '../Components/pagination-button';
import SocialLinks from './SocialLinks';

const Missions = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const rowsPerPage = 4;

   

    const fetchMissionData = async (page, limit) => {
        const offset = (page - 1) * limit;
        const url = `https://api.spacexdata.com/v3/missions?limit=${limit}&offset=${offset}`;
        console.log(`Fetching: ${url}`);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('Fetched Data:', data);
            return data;
        } catch (error) {
            console.error('Error fetching mission data:', error);
            return [];
        }
    };

   

    const getMissionData = async () => {
        const missionData = await fetchMissionData(currentPage, rowsPerPage);
        setEvents(missionData);
        setTotalItems(9); 
    };

    useEffect(() => {
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

                                    <SocialLinks
                                        links={{
                                            website: event.website,
                                            twitter: event.twitter,
                                            wikipedia: event.wikipedia,
                                        }}
                                        icons={{
                                            website: { src: 'src/assets/images/website.jpg', alt: 'Website' },
                                            twitter: { src: 'src/assets/images/twitter.webp', alt: 'Twitter' },
                                            wikipedia: { src: 'src/assets/images/wikipedia.png', alt: 'Wikipedia' },
                                        }}
                                    />
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
                onPageChange={goToPage}
            />
        </div>
    );
};

export default Missions;
