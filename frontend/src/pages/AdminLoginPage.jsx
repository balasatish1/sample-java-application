import Header from "../components/Header.jsx";
import '../styles/AdminLoginPage.css';

export default function AdminLoginPage() {
  return (
    <>
      <Header/>
      <div className="admin-login-container">
        <h1 className="admin-login-heading">Admin Login</h1>
        <form className="admin-login-form">
            <label >Username</label>
            <input
              type="text"
            />

            <label>Password</label>
            <input
              type="password"
            />

            <button className="admin-login-btn">Login in</button>
        </form>
      </div>
    </>
  );
}
