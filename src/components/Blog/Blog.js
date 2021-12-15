import React, { Fragment , useState , useEffect } from 'react'
import News from './News'

const Blog = () => {
	const [blogs, setblog] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(data => data.json())
		.then(data => setblog(data))
	}, [])
    return (
        <Fragment>
            <div class="latest-news pt-150 pb-150">
		<div class="container">

			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">	
						<h3><span class="orange-text">Our</span> News</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div class="row">

				{
					blogs.map((blog) => 
					   <News news={blog}/>
					)
				}

		
				
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<a href="news.html" class="boxed-btn">More News</a>
				</div>
			</div>
		</div>
	</div>
        </Fragment>
    )
}

export default Blog
