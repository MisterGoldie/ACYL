import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TVPage from "./pages/TVPage";
import FilmPage from "./pages/FilmPage";
import RadioPage from "./pages/RadioPage";
import StreamPage from "./pages/StreamPage";
import ContributePage from "./pages/ContributePage";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/film" element={<FilmPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/stream" element={<StreamPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;