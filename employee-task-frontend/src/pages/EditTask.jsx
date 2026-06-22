import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/taskService";

function EditTask() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {

    loadTask();

  }, []);

  const loadTask = async () => {

    try {

      const response = await getTaskById(id);

      setTitle(response.data.title);
      setDescription(response.data.description);
      setStatus(response.data.status);

    } catch (error) {

      console.error(error);

    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateTask(id, {
        title,
        description,
        status
      });

      alert("Task Updated Successfully");

      navigate("/tasks");

    } catch (error) {

      console.error(error);

      alert("Update Failed");
    }
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4"
        style={{
          width: "500px",
          borderRadius: "20px",
          border: "none",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">
            Edit Task ✏️
          </h2>
  
          <p className="text-muted">
            Update your task details
          </p>
        </div>
  
        <form onSubmit={handleSubmit}>
  
          {/* Title */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Task Title
            </label>
  
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>
  
          {/* Description */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Description
            </label>
  
            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              required
            />
          </div>
  
          {/* Status */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Status
            </label>
  
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="PENDING">
                ⏳ Pending
              </option>
  
              <option value="COMPLETED">
                ✅ Completed
              </option>
            </select>
          </div>
  
          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Update Task
            </button>
  
            <button
              type="button"
              className="btn btn-secondary w-100 py-2 fw-semibold"
              onClick={() => navigate("/tasks")}
            >
              Cancel
            </button>
          </div>
  
        </form>
      </div>
    </div>
  );
}

export default EditTask;