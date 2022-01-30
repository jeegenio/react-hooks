import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div>
      This is {username}{" "}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to About Page
      </button>
    </div>
  );
}

export default Profile;
