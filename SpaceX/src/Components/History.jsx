import React, { useState } from 'react';
import HistoryApi from '../Api/HistoryApi';
import PaginationButton from '../Components/pagination-button';
import SocialLinks from './SocialLinks';

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
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
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
                                    <SocialLinks
                                        links={{
                                            reddit: event.links.reddit,
                                            article: event.links.article,
                                            wikipedia: event.links.wikipedia,
                                        }}
                                        icons={{
                                            reddit: { src: 'src/assets/images/Reddit.png', alt: 'Reddit' },
                                            article: { src: 'src/assets/images/Article.png', alt: 'Article' },
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
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default History;
