// src/components/TestManagement.js
import React, { useEffect, useState } from "react";
import { fetchTests, uploadTestFile } from "../apiService";

const TestManagement = () => {
  const [tests, setTests] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTests();
  }, []);

  const loadTests = async () => {
    setLoading(true);
    try {
      const data = await fetchTests();
      if (data.success) {
        setTests(data.data);
      } else {
        console.error("Failed to load tests", data);
        alert("Failed to load tests.");
      }
    } catch (err) {
      console.error("Failed to load tests", err);
      alert("Failed to load tests.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file!");

    try {
      await uploadTestFile(file);
      alert("✅ Upload successful!");
      loadTests();
    } catch (err) {
      console.error("Upload error:", err);
      alert("❌ Upload failed.");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Test Management</h1>

      <div className="upload-section">
        <h4>Upload Test Excel File</h4>
        <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <div className="tests-section">
        <h3>All Test Questions</h3>
        <table>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Age</th>
              <th>Objective</th>
              <th>Question</th>
              <th>Option 1</th>
              <th>Points 1</th>
              <th>Option 2</th>
              <th>Points 2</th>
              <th>Option 3</th>
              <th>Points 3</th>
              <th>Option 4</th>
              <th>Points 4</th>
            </tr>
          </thead>
          <tbody>
            {tests.length > 0 ? (
              tests.map((t, i) => (
                <tr key={t.id || i}>
                  <td>{t.quarter}</td>
                  <td>{t.age}</td>
                  <td>{t.objective}</td>
                  <td>{t.question}</td>
                  <td>{t.option1}</td>
                  <td>{t.points1}</td>
                  <td>{t.option2}</td>
                  <td>{t.points2}</td>
                  <td>{t.option3}</td>
                  <td>{t.points3}</td>
                  <td>{t.option4}</td>
                  <td>{t.points4}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center">No test questions available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestManagement;
