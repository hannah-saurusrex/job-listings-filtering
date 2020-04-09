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
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'}`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 sm:mt-0" src={logo} alt={company} />
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
                <h2 className="font-bold text-xl my-2">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className="flex items-center flex-wrap mt-4 mx-4 pt-4 border-t border-gray-400 border-solid">
                {
                    tags ? (
                        tags.map(tag => (
                            <span className="bg-teal-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded">{tag}</span>
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