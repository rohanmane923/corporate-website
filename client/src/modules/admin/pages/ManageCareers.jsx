import { useEffect, useState } from "react";
import JobForm from "../../admin/components/JobForm";
import JobTable from "../../admin/components/JobTable";

import {
  getJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
} from "../../../services/jobService";

const AdminJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // fetch jobs
  const fetchJobs = async () => {
    const res = await getJobsAdmin();
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // filtered jobs
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // stats
  const totalJobs = jobs.length;
  const openJobs = jobs.filter((j) => j.status === "open").length;
  const closedJobs = jobs.filter((j) => j.status === "closed").length;

  // create / update
  const handleSubmit = async (data) => {
    if (selectedJob) {
      await updateJob(selectedJob._id, data);
    } else {
      await createJob(data);
    }

    setSelectedJob(null);
    setShowForm(false);
    fetchJobs();
  };

  // delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    await deleteJob(id);
    fetchJobs();
  };

  // edit
  const handleEdit = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <h1 className="text-2xl font-bold">Jobs Dashboard</h1>

        <button
          onClick={() => {
            setSelectedJob(null);
            setShowForm(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Job
        </button>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow border">
          <p className="text-gray-500">Total Jobs</p>
          <h2 className="text-2xl font-bold">{totalJobs}</h2>
        </div>

        <div className="bg-green-50 p-5 rounded-xl shadow border border-green-200">
          <p className="text-green-600">Open Jobs</p>
          <h2 className="text-2xl font-bold text-green-700">{openJobs}</h2>
        </div>

        <div className="bg-red-50 p-5 rounded-xl shadow border border-red-200">
          <p className="text-red-600">Closed Jobs</p>
          <h2 className="text-2xl font-bold text-red-700">{closedJobs}</h2>
        </div>

      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
              <h2 className="font-semibold text-lg">
                {selectedJob ? "Edit Job" : "Create Job"}
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-xl font-bold text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <JobForm
                onSubmit={handleSubmit}
                selectedJob={selectedJob}
                clearEdit={() => setSelectedJob(null)}
              />
            </div>

          </div>
        </div>
      )}

      {/* TABLE */}
      <JobTable
        jobs={filteredJobs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default AdminJobsPage;