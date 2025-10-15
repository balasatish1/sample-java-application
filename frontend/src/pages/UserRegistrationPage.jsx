
import Header from '../components/Header.jsx';
import '../styles/UserRegistrationPage.css';

export default function UserRegistrationPage() {

  return (

    <>
      <Header />
      <div className='user-registration-container'>
        <h1>User Registration</h1>
        <form className='user-registration-form'>
          <label >Name</label>
          <input
            type="text"
          />

          <label>Email</label>
          <input
            type="email"
          />


          <label>Mobile</label>
          <input
            type="number"
          />

         <div className='user-type-input-box'>
           <label>User type :</label>
          <input type="radio" name='user-type' value="driver" /><label>Driver</label>
          <input type="radio" name='user-type' value="passanger" /><label>Passanger</label>

         </div>

          <label >Username</label>
          <input
            type="text"
          />


          <label >Username</label>
          <input
            type="text"
          />

          <label>Password</label>
          <input
            type="password"
          />
        </form>
      </div>
    </>
  );
}

