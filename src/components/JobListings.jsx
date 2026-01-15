
import JobListing from "./JobListing.jsx";
import { getAllJobs } from "../utils/jobsStorage.js";

const JobListings = ({ limit }) => {
  const jobs = getAllJobs();
  const shouldLimit = Number.isFinite(limit) && limit > 0;
  const jobsToShow = shouldLimit ? jobs.slice(0, limit) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobsToShow.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
