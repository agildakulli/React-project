import { useState } from "react";


const JobListing = ({ job }) => {
  const [showFullDescrption, setShowFullDescription] = useState(false);
    let description = job.description;
    if (!showFullDescrption ) {
      description = description.substring(0, 90) + '...';
    }


    return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
        </div>
        <div className="mb-5">{description}</div>
        <button onClick={()=> setShowFullDescription ((prevState)=> !pre)}
          className="text-indigo-500 mb-5 hover:text-indigo-600 ">
            { showFullDescrption ? 'Less': 'More'}</button>
        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-gray-600">{job.location}</div>
        </div>
        <a
          href={`/job/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-center text-sm"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default JobListing;
