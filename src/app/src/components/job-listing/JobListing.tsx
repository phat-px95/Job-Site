import { useState, useEffect } from 'react';
import Job from '../job/Job';
import styles from './JobListing.module.css';
import Spinner from '../spinner/Spinner';
import { IJob } from '../../models/job.model';
import { TransitionGroup } from 'react-transition-group';
/* eslint-disable-next-line */
export interface JobListingProps {
  isHome: boolean
}

export function JobListing({isHome = false}: JobListingProps) {

  const [jobs, setJobs] = useState([] as IJob[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs' : '/api/jobs?_limit=3';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json() as IJob[];
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
    <TransitionGroup
      transitionName="fade"
      transitionAppear
      transitionEnter
      trasitionAppearTimeout={500}
    >
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

    </TransitionGroup>
  );
}

export default JobListing;
