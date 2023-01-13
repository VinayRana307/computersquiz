import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/Pages/MS_Word/MS_Word.js";
import HomePage from "../Components/Pages/HomePage/HomePage.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/computersquiz/msword" element={<WordQuiz />} />
          <Route path="/computersquiz" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
