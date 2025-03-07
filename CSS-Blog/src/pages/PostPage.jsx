import { useParams } from "react-router-dom";


const PostPage = ({ posts }) => {

	let { id } = useParams();

	let currentPost = null;

	for (let post of posts) {

		if (post.id == id) {
			currentPost = post;
			break;
		}
	}

	if (currentPost == null) {
		return <h2 className="subtitle"> No Post with this ID exists </h2>
	}

	return (
		<>
			<h1 className="title">{currentPost.title}</h1>
			<h2 className="subtitle">Written by {currentPost.author}</h2>
			<span>Written on {currentPost.date}</span>
			<p className="content">{currentPost.content}</p>
		</>
	);
}

export default PostPage;
