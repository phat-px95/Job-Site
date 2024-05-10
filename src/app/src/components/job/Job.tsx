import { useContext, useState } from 'react';
import styles from './Job.module.css';
import {FaMapMarked} from 'react-icons/fa'
import { IJobContext, JobContext } from '../../pages/jobs-page/JobsPage';

/* eslint-disable-next-line */
export interface JobProps {
  job: any
}

export function Job({job}: JobProps) {
  const contextValue = useContext<IJobContext>(JobContext);

  const [showFullDes, setShowFullDes] = useState(false);

  let description = job.description as string;
  if (!showFullDes) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2"><span className='text-gray-800'>{contextValue.type}</span> {job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>

      <div className="mb-5">
        {description}
      </div>

      <button className='text-indigo-500 mb-5 hover:text-indigo-600' onClick={() => setShowFullDes((preSate => !preSate))}> {showFullDes ? 'Less' : 'More'}</button>

      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <FaMapMarked className='inline text-lg mb-1 mr-1'/>
            {job.location}
        </div>
        <a
          href={`/jobs/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
        Read More
        </a>
      </div>
    </div>
  </div>
  );
}

export default Job;
