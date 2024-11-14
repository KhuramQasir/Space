import React, { useEffect, useState } from 'react';
import HistoryApi from '../HistoryApi';

const History = () => {
    const { events } = HistoryApi();

    return (
        <div className="history-container">
            <div className="history">
                <h1 className="history-title">History</h1>
                <div className="history-search-sort">
                    <input type="text" placeholder="Search" className="history-search" />
                    <select className="history-sort">
                        <option>Sort By Newest</option>
                        <option>Sort By Oldest</option>
                    </select>
                </div>
            </div>

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
                <tbody className='tbody'>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{new Date(event.event_date_utc).toLocaleDateString()}</td>
                            <td className='Detail'>{event.details.substring(0, 40)}...</td>
                            <td>
                                {event.links.reddit || event.links.article || event.links.wikipedia ? (
                                    <>
                                        {event.links.reddit && (
                                            <a href={event.links.reddit} target="_blank" rel="noopener noreferrer">
                                                <img src="src/assets/images/Reddit.png" alt="Reddit" className="icon" />
                                            </a>
                                        )}
                                        {event.links.article && (
                                            <a href={event.links.article} target="_blank" rel="noopener noreferrer">
                                                <img src="src/assets/images/Article.png" alt="Article" className="icon" />
                                            </a>
                                        )}
                                        {event.links.wikipedia && (
                                            <a href={event.links.wikipedia} target="_blank" rel="noopener noreferrer">
                                                <img src="src/assets/images/wikipedia.png" alt="Wikipedia" className="icon" />
                                            </a>
                                        )}
                                    </>
                                ) : 'N/A'}
                            </td>

                            <td className='Status-btn'>
                                <button className="status-button active">Active</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button className="pagination-button">1</button>
                <button className="pagination-button">2</button>
                <button className="pagination-button">3</button>
         X </div>
        </div>
    );
};

export default History;



