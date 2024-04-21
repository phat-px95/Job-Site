import { useState, useEffect } from 'react';
import Job from '../job/Job';
import styles from './JobListing.module.css';
/* eslint-disable-next-line */
export interface JobListingProps {
  isHome: boolean
}

export interface Job {
  "id": string,
  "title": string,
  "type": string,
  "description": string,
  "location": string,
  "salary": string,
  "company": {
    "name": string,
    "description": string,
    "contactEmail": string,
    "contactPhone": string,
  }
}

export function JobListing({isHome = false}: JobListingProps) {

  const [jobs, setJobs] = useState([] as Job[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8800/jobs');
        const data = await res.json() as Job[];
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [])
  const jobListing = isHome ? jobs : jobs.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          {jobListing.map(job => (
            <Job key={job.id} job={job}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListing;
