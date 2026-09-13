import React from 'react';

const Technology = ({ technologies }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology) => (
                <div key={technology.name} className="container mx-auto p-4 border rounded-lg shadow-md">
                    <div className="flex items-center gap-4">
                        <div>{technology.icon}</div>
                        <div>{technology.badge}</div>
                    </div>
                    <div>
                        <h3>{technology.name}</h3>
                        <p>{technology.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>{technology.category}</p>
                        <p>{technology.difficulty}</p>
                        <p>{technology.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Technology;