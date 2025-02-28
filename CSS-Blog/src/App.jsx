import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import ProfilePage from "./pages/ProfilePage"
import NewPostPage from "./pages/NewPostPage"
import Header from "./components/Header"

import posts from "./data/posts.json"

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/new" element={<NewPostPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

