import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load profile");
    }
  };

  if (!user) {
    return (
      <div className="profile-bg d-flex justify-content-center align-items-center">
        <h3 className="text-white">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="profile-bg">
      <div className="container py-5">

        <div className="text-center mb-4">
          <h1 className="text-white fw-bold">👤 My Profile</h1>
          <p className="text-light">Manage your account details</p>
        </div>

        <div className="profile-card shadow-lg">

          <div className="profile-avatar">
            {user.fullName.charAt(0).toUpperCase()}
          </div>

          <h3 className="mt-3">{user.fullName}</h3>

          <div className="profile-info mt-4">

            <div className="info-item">
              <span>ID</span>
              <p>{user.id}</p>
            </div>

            <div className="info-item">
              <span>Email</span>
              <p>{user.email}</p>
            </div>

            <div className="info-item">
              <span>Role</span>
              <p>
                <span className="badge bg-success px-3 py-2">
                  {user.role}
                </span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;