import { Link } from "react-router-dom";

function Dashboard() {
  const totalTasks = 10;
  const pendingTasks = 4;
  const completedTasks = 6;

  return (
    <div className="login-bg">
      <div className="container py-5">

        {/* Header */}
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
      <div>
        <h1 className="fw-bold text-white">
          Task Dashboard 📊
        </h1>
        <p className="text-white mb-0">
          Welcome Jose 👋
        </p>
      </div>
        <Link
          to="/profile"
          className="btn btn-light"
        >
          👤 Profile
        </Link>
      </div>
        {/* Statistics Cards */}
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg text-center p-4">
              <h5>Total Tasks</h5>
              <h2 className="display-5 fw-bold text-primary">
                {totalTasks}
              </h2>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg text-center p-4">
              <h5>Pending Tasks</h5>
              <h2 className="display-5 fw-bold text-warning">
                {pendingTasks}
              </h2>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg text-center p-4">
              <h5>Completed Tasks</h5>
              <h2 className="display-5 fw-bold text-success">
                {completedTasks}
              </h2>
            </div>
          </div>

        </div>

        <div className="text-center mb-4">
        <Link
          to="/tasks/create"
          className="btn btn-success btn-lg me-3"
        >
          Create Task
        </Link>

        <Link
          to="/tasks"
          className="btn btn-primary btn-lg"
        >
          View Tasks
        </Link>

      </div>



        {/* Recent Activity */}
        <div className="card shadow-lg p-4 mt-4">
          <h4 className="mb-3">Recent Activity</h4>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              ✅ Task "Employee Report" completed
            </li>

            <li className="list-group-item">
              📝 New task assigned
            </li>

            <li className="list-group-item">
              👤 Profile updated
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;