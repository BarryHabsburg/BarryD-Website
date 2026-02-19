import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import WebApps from './pages/WebApps';
import AcademicInterests from './pages/AcademicInterests';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Price_Option_App from './pages/Pricing_Option_App';
import Delta_Hedge_Simulation_App from './pages/Delta_Hedge_Simulation_App';
import Data_Exploration_of_simulated_Data_with_Microsift_Excel from './pages/Data_Exploration_of_simulated_Data_with_Microsift_Excel';
import Data_Analysis_On_Credit_Card_Approval_In_SAS from './pages/Data_Analysis_On_Credit_Card_Approval_In_SAS';
import SAS_SQL_Code_Review from './pages/SAS_SQL_Code_Review';
import BlackScholesModelExplain from './pages/BlackScholesModelExplained';
import BSMTest from './pages/BSMTest';
import Page404 from './pages/Page404';

function App() {
  


  return (
  <> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/WebApps" element={<WebApps />}/>
        <Route path="/AcademicInterests" element={<AcademicInterests />}/>
        <Route path="/donate" element={<Donate />}/>
        <Route path="/Contact" element={<Contact />}/>

        <Route path="/Pricing_Option_App" element={<Price_Option_App />} />
        <Route path="/Delta_Hedge_Simulation_App" element={<Delta_Hedge_Simulation_App/>} />
        <Route path="/Data_Exploration_of_simulated_Data_with_Microsift_Excel2" element={<Data_Exploration_of_simulated_Data_with_Microsift_Excel/>}/>
        <Route path="/Data_Analysis_On_Credit_Card_Approval_In_SAS" element={<Data_Analysis_On_Credit_Card_Approval_In_SAS/>}/>
        <Route path="/SAS_SQL_Code_Review" element={<SAS_SQL_Code_Review/>}/>
        <Route path="/Pricing_Option_App/BlackScholesModelExplained" element={<BlackScholesModelExplain/>}/>
        <Route path="/BSMTest" element={<BSMTest/>}/>
        <Route path="*" element={<Page404/>}/>
        
        <Route path="/Data_Exploration_of_simulated_Data_with_Microsift_Excel" 
        component = {() => { window.location.href = 
        "/Data_Exploration_of_simulated_Data_with_Microsift_Excel.html";
        return null;}}/>
        <Route path="/Barry_Daemi_Resume_2025_v2" 
        component = {() => { window.location.href = 
        "/Barry_Daemi_Resume_2025_v2pdf";
        return null;}}/>
      </Routes>
  </>
  );
}

export default App;
