import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/navbar";
import Home from "./components/pages/home";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* <Route path="/signup" component={Signup} /> */}
        </Route>
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}
