import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getAllJobs } from "../utils/jobsStorage.js";

export const jobLoader = ({ params }) => {
  const jobId = String(params.id);
  return getAllJobs().find((job) => String(job.id) === jobId);
};

const JobPage = ({ deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDelete = async () => {
    if (!job) {
      return;
    }
    const confirmed = window.confirm("Delete this job?");
    if (!confirmed) {
      return;
    }
    await deleteJob(job.id);
    navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <Link to="/jobs" className="text-indigo-500 hover:text-indigo-600">
          Back to Job Listings
        </Link>
      </div>

      <div className="container m-auto py-10 px-6">
        {!job ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            Job not found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4">{job.location}</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Company Info</h3>
                <p className="text-lg">{job.company?.name}</p>
                <p className="text-gray-500 my-2">
                  {job.company?.description}
                </p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company?.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company?.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  type="button"
                  onClick={onDelete}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobPage
