import React from "react";

const Notifications = () => {
  return (
    <div className="content">
      <div className="panel-header">
        <div className="header text-center">
          <h2 className="title">Notifications</h2>
          <p className="category">
            Manage email and push notifications.
          </p>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Notification Styles</h4>
              </div>
              <div className="card-body">
                <div className="alert alert-info">This is an info notification.</div>
                <div className="alert alert-warning">This is a warning notification.</div>
                <div className="alert alert-danger">This is an error notification.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
