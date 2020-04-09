import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs);

  return (
    <div className="App">
      <h1 className="text-4xl">Hello</h1>
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
// 5. style it
// 6. filter component
// 7. filter data