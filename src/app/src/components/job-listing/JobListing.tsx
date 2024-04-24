import { useState, useEffect } from 'react';
import Job from '../job/Job';
import styles from './JobListing.module.css';
import Spinner from '../spinner/Spinner';
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
      const apiUrl = isHome ? '/api/jobs' : '/api/jobs?_limit=3';
      try {
        const res = await fetch(apiUrl);
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
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
          {/* <!-- Job Listing 1 --> */}
          {loading ? <Spinner loading={loading}/>
          : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map(job => (
                <Job key={job.id} job={job}/>
              ))}
            </div>
          }
      </div>
    </section>
  );
}

export default JobListing;
