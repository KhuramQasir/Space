import React from 'react';

const SocialLinks = ({ links, icons }) => {
    return (
        <td>
            {Object.keys(links).length > 0 ? (
                <>
                    {Object.entries(links).map(([key, url]) =>
                        url ? (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={icons[key]?.src}
                                    alt={icons[key]?.alt}
                                    className="icon"
                                />
                            </a>
                        ) : null
                    )}
                </>
            ) : (
                'N/A'
            )}
        </td>
    );
};

export default SocialLinks;
