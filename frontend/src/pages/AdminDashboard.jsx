import Header from "../components/Header.jsx";

import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <>
      <Header/>
      <div className="admin-dashboard">
        <button className="register-a-user-btn">Register a user</button>
      </div>
    </>
  );
}
