import React, { useState } from 'react';
import HistoryApi from '../HistoryApi';

const History = () => {
    const { events } = HistoryApi();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); 
    const rowsPerPage = 5;

    
    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.details.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredEvents.length / rowsPerPage);

    const currentRows = filteredEvents.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="history-container">
            <div className="history">
                <h1 className="history-title">History</h1>
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
                            <th>Title</th>
                            <th>Event Date</th>
                            <th>Details</th>
                            <th>Links</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {currentRows.map((event) => (
                            <tr key={event.id}>
                                <td>{event.title}</td>
                                <td>{new Date(event.event_date_utc).toLocaleDateString()}</td>
                                <td className="Detail">{event.details.substring(0, 40)}...</td>
                                <td>
                                    {event.links.reddit || event.links.article || event.links.wikipedia ? (
                                        <>
                                            {event.links.reddit && (
                                                <a
                                                    href={event.links.reddit}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src="src/assets/images/Reddit.png"
                                                        alt="Reddit"
                                                        className="icon"
                                                    />
                                                </a>
                                            )}
                                            {event.links.article && (
                                                <a
                                                    href={event.links.article}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src="src/assets/images/Article.png"
                                                        alt="Article"
                                                        className="icon"
                                                    />
                                                </a>
                                            )}
                                            {event.links.wikipedia && (
                                                <a
                                                    href={event.links.wikipedia}
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
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default History;
