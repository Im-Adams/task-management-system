  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";

  function TaskList() {

    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

      const fetchTasks = async () => {

        try {

          const token = localStorage.getItem("token");

          const response = await axios.get(
            "http://localhost:8080/tasks",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          setTasks(response.data);

        } catch (error) {
          console.error(error);
        }
      };

      fetchTasks();

    }, []);

    return (
      <div className="login-bg">
        <div className="container py-5">
    
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="text-white fw-bold">
                Task Management 📋
              </h1>
              <p className="text-white">
                Manage all your tasks here
              </p>
            </div>
    
            <Link
              to="/tasks/create"
              className="btn btn-success"
            >
              + Create Task
            </Link>
          </div>
    
          <div className="card shadow-lg p-4">
    
            <h4 className="mb-4">
              Task List
            </h4>
    
            <div className="table-responsive">
    
              <table className="table table-hover align-middle">
    
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
    
                <tbody>
    
                  {tasks.length > 0 ? (
    
                    tasks.map((task) => (
    
                      <tr key={task.id}>
                        <td>{task.id}</td>
    
                        <td>{task.title}</td>
    
                        <td>
                          <span
                            className={
                              task.status === "COMPLETED"
                                ? "badge bg-success"
                                : "badge bg-warning text-dark"
                            }
                          >
                            {task.status}
                          </span>
                        </td>
    
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => navigate(`/tasks/edit/${task.id}`)}
                          >
                            Edit
                          </button> 
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
    
                    ))
    
                  ) : (
    
                    <tr>
                      <td colSpan="4" className="text-center">
                        No Tasks Found
                      </td>
                    </tr>
    
                  )}
    
                </tbody>
    
              </table>
    
            </div>
    
          </div>
    
        </div>
      </div>
    );
  }

  export default TaskList;