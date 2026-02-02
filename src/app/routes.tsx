import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Company from "../pages/Company/Company";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ/FAQ";
import TeamSupport from "../pages/TeamSupport/TeamSupport";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/Terms&Conitions/TermsConditions";
import TechnicalSupport from "../pages/TechnicalSupport/TechnicalSupport";
import CustomerSupport from "../pages/CustomerSupport/CustomerSupport";
import BusinessSupport from "../pages/BusinessSupport/BusinessSupport";
import CompanyOverView from "../pages/CompanyOverView/CompanyOverView";
import Trust from "../pages/Trust/Trust";
import DontsellMyInfo from "../pages/DontsellMyInfo/DontsellMyInfo";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/company" element={<Company />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/team-support" element={<TeamSupport />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/technical-support" element={<TechnicalSupport />}/>
      <Route path="/customer-support" element={<CustomerSupport/>}/>
      <Route path="/business-support" element={<BusinessSupport/>}/>
      <Route path="/company-overview" element={<CompanyOverView />}/>
      <Route path="/trust" element={<Trust />}/>
      <Route path="/donotsellmyinfo" element={<DontsellMyInfo/>}/>

    </Routes>
  );
};

export default AppRoutes;
