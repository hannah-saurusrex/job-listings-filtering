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
    handleTagClick,
}) => {

    const tags = [role, level]; // grab the role name and level name

    if(languages) {
        tags.push(...languages); // if languages are indicated, put them into the tags array
    }
    if(tools) {
        tags.push(...tools); // if tools are indicated, put them into the tags array
    }

    return (
        <div 
            className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row lg:my-4`}>
            <div>
                <img 
                    className="-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0" 
                    src={logo} 
                    alt={company} 
                />
            </div>
            <div 
                className="flex flex-col justify-between ml-4">
                <h3 
                    className="font-bold text-teal-500">
                    {company}
                    {isNew && (
                        <span 
                            className="text-teal-100 bg-teal-500 m-2 py-1 px-2 rounded-full uppercase text-sm"
                        >
                            New!
                        </span>
                    )}
                    {featured && (
                        <span 
                            className="bg-gray-800 text-white py-1 px-2 rounded-full uppercase text-sm"
                        >
                            Featured
                        </span>
                    )}
                </h3>
                <h2 
                    className="font-bold text-xl my-2 hover:text-teal-500 cursor-pointer"
                >
                    {position}
                </h2>
                <p 
                    className="text-gray-700"
                >
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div 
                className="flex items-center flex-wrap mt-4 mx-4 pt-4 border-t border-gray-400 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {tags ? (
                        tags.map(tag => (
                            <span 
                                onClick={() => handleTagClick(tag)} 
                                className="cursor-pointer bg-teal-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded lg:mb-0 hover:bg-teal-500 hover:text-teal-100"
                            >
                                {tag}
                            </span>
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