import { useState } from "react";
import api from "../services/api";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        description,
        status,
      });

      alert("Task Created Successfully");

      setTitle("");
      setDescription("");
      setStatus("Pending");

    } catch (error) {
      console.error(error);
      alert("Failed to Create Task");
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
          <h2 className="fw-bold text-success">
            Create New Task 🚀
          </h2>
          <p className="text-muted">
            Add task details below
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
            />
          </div>

          {/* Status */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Status
            </label>

            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">⏳ Pending</option>
              <option value="Completed">✅ Completed</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-success w-100 py-2 fw-semibold"
          >
            Create Task
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateTask;