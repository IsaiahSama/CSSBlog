import React from "react"
import { useNavigate } from "react-router-dom"

const BlogSnippet = ({ id, title, author, date, content }) => {

  let navigator = useNavigate();

  return (

    <div className="card" onClick={() => navigator("/post/" + id.toString())}>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6"> {author} on {date}</p>
          </div>
        </div>

        <div className="content snippet">
          {content}
        </div>
      </div>
    </div>
  )
}
export default BlogSnippet
