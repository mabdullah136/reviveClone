import Home from "../pages/customerPages/home";
import TextileWiper from "../pages/customerPages/textileWipers";
import Sustainability from "../pages/customerPages/sustainability";
import SocialResponsibilityPage from "../pages/customerPages/socialResponsibilityPage";
import Fibers from "../pages/customerPages/fibers";
import Fabric from "../pages/customerPages/fabric";
import ContactUs from "../pages/customerPages/contactUs";

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/textileWipers",
    element: <TextileWiper />,
  },

  {
    path: "/sustainability",
    element: <Sustainability />,
  },

  {
    path: "/socialResponsibility",
    element: <SocialResponsibilityPage />,
  },

  {
    path: "/fibers",
    element: <Fibers />,
  },

  {
    path: "/fabric",
    element: <Fabric />,
  },

  {
    path: "/contactUs",
    element: <ContactUs />,
  },
];

export default routes;
