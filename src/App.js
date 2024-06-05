import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import ResetPassword from "./components/ResetPassword";
import OtpForm from "./components/OtpForm";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
      <Route path="/otpform" element={<OtpForm/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>
    </Routes>

   </Router>
  );
}

export default App;
