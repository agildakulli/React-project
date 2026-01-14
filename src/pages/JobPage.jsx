import { useLoaderData } from "react-router-dom";
import jobs from "../jobs.json";

export const jobLoader = ({ params }) => {
  const jobId = Number(params.id);
  return jobs.find((job) => job.id === jobId);
};

const JobPage = () => {
  const job = useLoaderData();

  if (!job) {
    return <div className="p-6">Job not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <div className="text-gray-600 mb-4">{job.type}</div>
      <p className="mb-4">{job.description}</p>
      <div className="text-indigo-500 font-semibold">{job.salary}</div>
    </div>
  );
};

export default JobPage
