import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPostings from "@/pages/JobPostings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobPostings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
