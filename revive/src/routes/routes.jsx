import Home from "../pages/customerPages/home";
import TextileWiper from "../pages/customerPages/textileWipers";

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/textileWipers",
    element: <TextileWiper />,
  },
];

export default routes;
