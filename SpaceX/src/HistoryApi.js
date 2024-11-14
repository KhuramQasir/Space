import React, { useEffect, useState } from 'react'; 

const HistoryApi = () => {
    const [events, setEvents] = useState([]);

    const HistoryApiEvent = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/history');
            const data = await response.json();

            const formattedData = data.map(event => ({
                id: event.id,
                title: event.title,
                event_date_utc: event.event_date_utc,
               
              
                details: event.details,
                links: {
                    reddit: event.links.reddit,
                    article: event.links.article,
                    wikipedia: event.links.wikipedia
                }
            }));

            setEvents(formattedData);
        } catch (error) {
            console.error("Failed to fetch SpaceX history data:", error);
        }
    };

    useEffect(() => {
        HistoryApiEvent();
    }, []);

    return { events };
};

export default HistoryApi;
