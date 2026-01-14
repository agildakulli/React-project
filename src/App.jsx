import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import {
  addJob as addStoredJob,
  deleteJob as deleteStoredJob,
  updateJob as updateStoredJob,
} from './utils/jobsStorage.js';

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    addStoredJob(newJob);
  };

  // Delete Job
  const deleteJob = async (id) => {
    deleteStoredJob(id);
  };

  // Update Job
  const updateJob = async (job) => {
    updateStoredJob(job);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'element={<JobPage deleteJob={deleteJob} />}loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
