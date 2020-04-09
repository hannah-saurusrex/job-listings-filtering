import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12 bg-repeat w-full">
        <img src="/images/bg-header-desktop.svg" alt="bg-images" />
      </header>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map(job => (
            <JobBoardComponent job={job} key={job.id} />
          ))
        )
      }
    </div>
  );
}

export default App;

// ToDos
// 1. study the design & data ✅
// 2. create job board component (we have an array of objects) ✅
// 3. pull in the data fron the JSON file ✅
// 4. pass down the data from the job board component ✅
// 5a. style it ✅
// 5b. style mobile
// 6. filter component
// 7. filter data