import './FormComponent.css';
import { useState } from 'react';

const FormComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');

  const [usernameColor, setUsernameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [rePasswordColor, setRePasswordColor] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (username.length >= 8) {
      setErrorUsername('');
      setUsernameColor('green');
    } else {
      setErrorUsername('Username must be atleast 8 characters');
      setUsernameColor('red');
    }

    //console.log(validateEmail(email));
    if (validateEmail(email) != null) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('Please enter a valid email address.');
      setEmailColor('red');
    }

    if (password.length >= 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('Password must be atleast 8 characters');
      setPasswordColor('red');
    }

    if (rePassword !== '' && rePassword === password) {
      setErrorRePassword('');
      setRePasswordColor('green');
    } else {
      setErrorRePassword('The password confirmation does not match.');
      setRePasswordColor('red');
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={validateForm}>
        <h2>Register Form</h2>
        <div className='form-control'>
          <label htmlFor=''>Username</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderColor: usernameColor }} />
          <small style={{ color: usernameColor }}>{errorUsername}</small>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Email</label>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: emailColor }} />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Password</label>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: passwordColor }} />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className='form-control'>
          <label htmlFor=''>Confirm Password</label>
          <input type='text' value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={{ borderColor: rePasswordColor }} />
          <small style={{ color: rePasswordColor }}>{errorRePassword}</small>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
