import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/Pages/MS_Word/MS_Word";
import HomePage from "../Components/Pages/HomePage/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/msword" element={<WordQuiz />} />
          <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}