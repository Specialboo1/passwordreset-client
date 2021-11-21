import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import ForgetPassword from './components/forgetpassword';
import PasswordReset from './components/passwordreset'

function App() {
  return (
    <Router>      
      <Routes>   
          <Route path="/" element={<SignIn/>} exact/>  
          <Route path="/signup" element={<SignUp/>} exact/>
          <Route path="/forgetpassword" element={<ForgetPassword/>} exact/> 
          <Route path="/passwordreset/:userId/:token" element={<PasswordReset/>} exact/>         
      </Routes>
    </Router> 
  );
}

export default App;
