import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPostPage from "./pages/NewPostPage"
import Header from "./components/Header"

import posts from "./data/posts.json"

function App() {

  return (
    <BrowserRouter>

      <Header />

      <section className="section">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/post/:id" element={<PostPage posts={posts} />} />
          <Route path="/post/new" element={<NewPostPage />} />
        </Routes>
      </section>

    </BrowserRouter>
  )
}

export default App

