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
        tools,
    },
}) => {

    const tags = [role, level]; // grab the role name and level name

    if(languages) {
        tags.push(...languages); // if languages are indicated, put them into the tags array
    }
    if(tools) {
        tags.push(...tools); // if tools are indicated, put them into the tags array
    }

    return (
        <div className="flex bg-white shadow-md m-4 p-6 rounded">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {company}
                    {isNew && (
                        <span className="text-teal-100 font-bold bg-teal-500 m-2 py-1 px-2 rounded-full">New!</span>
                    )}
                    {featured && (
                        <span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full">Featured</span>
                    )}
                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                {
                    tags ? (
                        tags.map(tag => (
                            <span className="bg-teal-100 font-bold text-teal-500 m-2 p-2 rounded">{tag}</span>
                        ))
                    ) : ( '' )
                } 
                {/* the about was originally written out twice, once for languages, once for tools. in an effort to not repeat ourselves, 
                or, to stay DRY, we created the variable above 'langAndTools', to push into a new array, any languages or tools that we may have */}
            </div>
        </div>
    )
};

export default JobBoardComponent;