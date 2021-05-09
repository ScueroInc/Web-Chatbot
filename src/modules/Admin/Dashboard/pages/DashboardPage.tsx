import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { SatisfactionPage } from "./SatisfactionPage";
import { UsabilityPage } from "./UsabilityPage";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss"
import { UserAgePage } from "./UserAgePage";
import { RetentionPage } from "./RetentionPage";
import { FAQPage } from "./FAQPage";

export const DashboardPage: React.FC = () => {
  
  return (
    <Router>
      <div className="flex">
      <Sidebar/>
      <Route path="/dashboard/usability" exact = {true} component={UsabilityPage}/>
      <Route path="/dashboard/satisfaction" exact = {true} component={SatisfactionPage}/>
      <Route path="/dashboard/userage" exact = {true} component={UserAgePage}/>
      <Route path="/dashboard/retentionrate" exact = {true} component={RetentionPage}/>
      <Route path="/dashboard/faq" exact = {true} component={FAQPage}/>
        

      
      </div>
      
    </Router>



    
  );
};
