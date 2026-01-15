import jobs from "../jobs.json";

const STORAGE_KEY = "jobs";
const DELETED_KEY = "jobs:deleted";

const readJson = (key, fallback) => {
  if (typeof window === "undefined") {
    return fallback;
  }
  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getStoredJobs = () => readJson(STORAGE_KEY, []);

export const getDeletedJobIds = () => readJson(DELETED_KEY, []);

export const getAllJobs = () => {
  const storedJobs = getStoredJobs();
  const deletedIds = new Set(getDeletedJobIds());
  const merged = new Map();

  jobs.forEach((job) => {
    if (!deletedIds.has(job.id)) {
      merged.set(job.id, job);
    }
  });
  storedJobs.forEach((job) => {
    if (!deletedIds.has(job.id)) {
      merged.set(job.id, job);
    }
  });

  return Array.from(merged.values());
};

const getNextId = () => {
  const storedJobs = getStoredJobs();
  const deletedIds = getDeletedJobIds();
  const allIds = [
    ...jobs.map((job) => job.id),
    ...storedJobs.map((job) => job.id),
    ...deletedIds,
  ];
  const maxId = allIds.reduce((max, id) => {
    const idNumber = Number(id);
    if (Number.isNaN(idNumber)) {
      return max;
    }
    return Math.max(max, idNumber);
  }, 0);
  return maxId + 1;
};

export const addJob = (newJob) => {
  const storedJobs = getStoredJobs();
  const job = { ...newJob, id: String(getNextId()) };
  storedJobs.push(job);
  writeJson(STORAGE_KEY, storedJobs);
  return job;
};

export const updateJob = (updatedJob) => {
  const storedJobs = getStoredJobs();
  const index = storedJobs.findIndex(
    (job) => String(job.id) === String(updatedJob.id)
  );
  if (index === -1) {
    storedJobs.push(updatedJob);
  } else {
    storedJobs[index] = updatedJob;
  }
  writeJson(STORAGE_KEY, storedJobs);
  return updatedJob;
};

export const deleteJob = (id) => {
  const storedJobs = getStoredJobs();
  const nextStored = storedJobs.filter(
    (job) => String(job.id) !== String(id)
  );
  writeJson(STORAGE_KEY, nextStored);

  const deletedIds = new Set(getDeletedJobIds());
  deletedIds.add(String(id));
  writeJson(DELETED_KEY, Array.from(deletedIds));
};
