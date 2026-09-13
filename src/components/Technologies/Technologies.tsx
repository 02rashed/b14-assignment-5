import React, { use } from 'react';  
import type {ITechnology} from '../../types/technologyType' 
import Technology from './Technology'; 
interface TechnologiesProps{
    technologiesPromise: Promise<ITechnology[]>
}
const Technologies = ({technologiesPromise}:TechnologiesProps ) => {
        const technologies = use(technologiesPromise);
    return (
        <div className="container mx-auto p-4">
            <div>
                <h2 className="text-4xl font-bold">Explore The <span className="bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Technologies</span> </h2>
                <p>Pick one Technology per Catagory to build your ideal Stack.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Technology technologies={technologies} />
            </div>
        </div>
    );
};

export default Technologies;