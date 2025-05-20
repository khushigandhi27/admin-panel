import React from "react";

const UserProfile = () => {
  return (
    <div className="content">
      <div className="panel-header panel-header-sm"></div>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h5 className="title">Edit Profile</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-5 pr-1">
                  <div className="form-group">
                    <label>Company (disabled)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      placeholder="Company"
                      value="Creative Code Inc."
                    />
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
