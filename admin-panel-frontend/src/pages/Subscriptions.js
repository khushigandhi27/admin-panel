// 📂 src/components/SubscriptionManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🚀 Fetch All Subscriptions
  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/subscriptions/get-all`);
      if (res.data.success) setSubscriptions(res.data.data);
    } catch (err) {
      console.error("Failed to load subscriptions", err);
      alert("Failed to load subscriptions.");
    } finally {
      setLoading(false);
    }
  };

  // 🚀 Load Subscriptions on Page Load
  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div className="container-fluid mt-4" style={{ maxWidth: "100%", padding: "0 15px" }}>
      <h2 className="mb-3">🚀 Subscription Management</h2>

      {/* 📋 Subscription List */}
      <div className="card p-3" style={{ width: "100%", maxWidth: "100%" }}>
        <h4>📊 All Subscriptions</h4>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="table table-bordered table-sm" style={{ width: "100%", minWidth: "600px" }}>
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Plan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.length > 0 ? (
                  subscriptions.map((sub) => (
                    <tr key={sub.id}>
                      <td>{sub.id}</td>
                      <td>{sub.userId}</td>
                      <td>{sub.plan}</td>
                      <td>{sub.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No subscriptions available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionManagement;
