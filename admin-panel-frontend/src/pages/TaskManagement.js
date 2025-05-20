// 📂 src/components/TaskManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskManagement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/api/task/get-all`);
      if (res.data.success) setData(res.data.data);
      else throw new Error("Failed to fetch content");
    } catch (err) {
      setError("Error loading data");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle File Change
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // ✅ Handle File Upload
  const handleFileUpload = async () => {
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/api/task/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message || "Upload successful!");
      fetchData();
    } catch (err) {
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>🚀 Task Management</h1>

      {/* ✅ File Upload */}
      <div className="card p-3 mb-4">
        <h4>📥 Upload Task Excel File</h4>
        <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
        <button onClick={handleFileUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* ✅ Data Table */}
      <div className="card p-3">
        <h3>📊 All Entries</h3>
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <table className="table table-bordered table-sm">
            <thead className="table-dark">
              <tr>
                <th>Week</th>
                <th>Task Owner</th>
                <th>Task</th>
                <th>MCQ 1</th>
                <th>MCQ 2</th>
                <th>MCQ 3</th>
                <th>MCQ 1 Option 1</th>
                <th>MCQ 1 Option 2</th>
                <th>MCQ 1 Option 3</th>
                <th>MCQ 1 Option 4</th>
                <th>MCQ 2 Option 1</th>
                <th>MCQ 2 Option 2</th>
                <th>MCQ 2 Option 3</th>
                <th>MCQ 2 Option 4</th>
                <th>MCQ 3 Option 1</th>
                <th>MCQ 3 Option 2</th>
                <th>MCQ 3 Option 3</th>
                <th>MCQ 3 Option 4</th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.week}</td>
                    <td>{row.task_owner}</td>
                    <td>{row.task}</td>
                    <td>{row.mcq1}</td>
                    <td>{row.mcq2}</td>
                    <td>{row.mcq3}</td>
                    <td>{row.mcq1_opt1}</td>
                    <td>{row.mcq1_opt2}</td>
                    <td>{row.mcq1_opt3}</td>
                    <td>{row.mcq1_opt4}</td>
                    <td>{row.mcq2_opt1}</td>
                    <td>{row.mcq2_opt2}</td>
                    <td>{row.mcq2_opt3}</td>
                    <td>{row.mcq2_opt4}</td>
                    <td>{row.mcq3_opt1}</td>
                    <td>{row.mcq3_opt2}</td>
                    <td>{row.mcq3_opt3}</td>
                    <td>{row.mcq3_opt4}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="18">No data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;
