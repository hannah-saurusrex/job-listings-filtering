import React from 'react';

const JobBoardComponent = ({ 
        job: {
            id,
            company,
            logo, 
            isNew,
            featured,
            position, 
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
        },
    }) => (
    <div className="flex bg-white shadow-md m-4 p-4">
        <div>
            <img src={logo} alt={company} />
        </div>
        <div className="flex flex-col ml-4">
            <h3 className="font-bold text-teal-500">{company}</h3>
            <h2 className="font-bold text-xl">{position}</h2>
            <p className="text-gray-700">
                {postedAt} · {contract} · {location}
            </p>
        </div>
        <div></div>
    </div>
);

export default JobBoardComponent;