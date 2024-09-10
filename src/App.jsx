import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import WebApps from './pages/WebApps';
import AcademicInterests from './pages/AcademicInterests';
import Contact from './pages/Contact';
import Price_Option_App from './pages/Pricing_Option_App';
import Data_Exploration_of_simulated_Data_with_Microsift_Excel from './pages/Data_Exploration_of_simulated_Data_with_Microsift_Excel';
import Data_Analysis_On_Credit_Card_Approval_In_SAS from './pages/Data_Analysis_On_Credit_Card_Approval_In_SAS';
import SAS_SQL_Code_Review from './pages/SAS_SQL_Code_Review';
import BlackScholesModelExplain from './pages/BlackScholesModelExplained';
import BSMTest from './pages/BSMTest';

function App() {
  


  return (
  <> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/WebApps" element={<WebApps />}/>
        <Route path="/AcademicInterests" element={<AcademicInterests />}/>
        <Route path="/Contact" element={<Contact />}/>

        <Route path="/Pricing_Option_App" element={<Price_Option_App />} />
        <Route path="/Data_Exploration_of_simulated_Data_with_Microsift_Excel2" element={<Data_Exploration_of_simulated_Data_with_Microsift_Excel/>}/>
        <Route path="/Data_Analysis_On_Credit_Card_Approval_In_SAS" element={<Data_Analysis_On_Credit_Card_Approval_In_SAS/>}/>
        <Route path="/SAS_SQL_Code_Review" element={<SAS_SQL_Code_Review/>}/>
        <Route path="/BlackScholesModelExplained" element={<BlackScholesModelExplain/>}/>
        <Route path="/BSMTest" element={<BSMTest/>}/>
        
        <Route path="/Data_Exploration_of_simulated_Data_with_Microsift_Excel" 
        component = {() => { window.location.href = 
        "/Data_Exploration_of_simulated_Data_with_Microsift_Excel.html";
        return null;}}/>
        <Route path="/Barry_Daemi_Resume_2024_v4" 
        component = {() => { window.location.href = 
        "/Barry_Daemi_Resume_2024_v4.pdf";
        return null;}}/>
      </Routes>
  </>
  );
}

export default App
