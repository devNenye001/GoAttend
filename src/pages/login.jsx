// pages/Login.jsx
import './styles/login.css';
import Button from '../components/button';
import PasswordInput from '../components/passwordEye';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon-box">
          <img src="/GoAttend-Logo.png" alt="Logo" />
        </div>
        <h2>Hi, Welcome</h2>
        <p>Manage student attendance with precision.</p>

        <input type="email" placeholder="Email" className="input-field" />
        <PasswordInput />

        <Button label="Log In" />
      </div>
    </div>
  );
};

export default Login;
