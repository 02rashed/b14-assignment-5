import React from 'react';

const Technology = ({technologies}) => {
    return (
        <div>
            {technologies.map((technology) => {
                       return <div>{technology.name}</div>;
                    })}
        </div>
    );
};

export default Technology;