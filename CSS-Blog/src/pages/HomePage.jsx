import BlogSnippet from "../components/BlogSnippet"

const HomePage = ({ posts }) => {

	return (
		<>
			<div className="is-flex is-justify-content-space-between py-2">

				<h1 className="title">Latest Post</h1>

				<div>
					<p>Welcome Isaiah</p>
					<input type="text" className="input" placeholder="Search" />
				</div>
			</div>

			{posts.map((post) => <BlogSnippet {...post} key={post.id} />)}
		</>
	)

}



export default HomePage
