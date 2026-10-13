import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from 'react-hot-toast'


const App = () => {
  return (
    <div
      data-theme="forest"
      className="relative min-h-screen bg-base-100"
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 60%, #00FF9D80 100%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
