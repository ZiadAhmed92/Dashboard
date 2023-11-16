import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Team from "./Pages/Team/Team";
import Contacts from "./Pages/Contacts/Contacts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Invoices from "./Pages/Invoices/Invoices";
import Form from "./Pages/Form/Form";
import Calendar from "./Pages/Calendar/Calendar";
import FAQ from "./Pages/FAQ/FAQ";
import BarChart from "./Pages/BarChart/BarChart";
import PieChart from "./Pages/PieChart/PieChart";
import LineChart from "./Pages/LineChart/lineChart/LineChart";
import Geography from "./Pages/Geography/Geography";
import NotFound from "./Pages/notFound/NotFound";

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //     errorElement: <Contacts />,
  //     children: [
  //       {
  //         path: "/contacts",
  //         element: <Contacts/>,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Routes>
        <Route path="/" element={<HomePage />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
    </Routes>
{/* <RouterProvider router={router} /> */}

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
