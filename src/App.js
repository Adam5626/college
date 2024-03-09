import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import SignupNext from './Components/SignupNext';
import CropImage from './Components/CropImage';
import UserState from './Components/userContext/UserState';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from './Components/UserProfile';
import ProviderProfile from './Components/ProviderProfile';
import ViewProvider from './Components/ViewProviders';
import Review from './Components/Review';
import UserInbox from './Components/UserInbox';
import FindJobs from './Components/FindJobs';
import ApplyJob from './Components/ApplyJob';

function App() {
  return (
    <>
    <BrowserRouter>
    <UserState>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = '/signupnext' element = {<SignupNext />}></Route>
      <Route path = '/userProfile' element = {<UserProfile />}></Route>
      <Route path = '/cropper' element = {<CropImage />}></Route>
      <Route path = '/review' element = {<Review />}></Route>
      <Route path = '/providerProfile' element = {<ProviderProfile />}></Route>
      <Route path = '/viewProviders' element = { <ViewProvider /> }></Route>
      <Route path = "/userInbox" element = { <UserInbox />}></Route>
      <Route path = "/findJobs" element = { <FindJobs/> }></Route>
      <Route path = "/apply" element = { <ApplyJob/> }></Route>
    </Routes>
    </UserState>
    </BrowserRouter>
    </>
  );
}

export default App;
