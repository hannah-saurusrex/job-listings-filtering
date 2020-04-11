import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if(filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if(languages) {
        tags.push(...languages); 
    }

    if(tools) {
        tags.push(...tools); 
    }

    return filters.every(filter => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    // this avoides adding the tag twice
    if(filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };
  
  const filteredJobs = jobs.filter(filterFunc);
  
  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg-images" />
      </header>

      <div 
        className="container m-auto">
        {filters.length > 0 && (
          <div 
            className={`flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative`} 
          >
            {filters.map((filter) => (
              <span 
                className="cursor-pointer font-bold mr-4 mb-4 rounded lg:mb-0"
                onClick={() => handleFilterClick(filter)}>
                  <span 
                    className="text-teal-500 bg-teal-100 p-2">
                  {filter}
                  </span>
                  <span 
                    className="bg-teal-500 text-teal-100 font-bold p-2 hover:bg-gray-800 hover:text-white">
                      &times;
                  </span>
              </span>
            ))}
            <button
              onCilck={() => clearFilters()}
              className="font-bold text-gray-700 ml-auto cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
            filteredJobs.map((job) => (
              <JobBoardComponent 
                job={job} 
                key={job.id} 
                handleTagClick={handleTagClick}
              />
            ))
          )
        }
      </div>
    </div>
  );
}

export default App;
