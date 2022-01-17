// import { useState, useEffect} from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            { error && <div>{error}</div> } 
            { isPending && <div>Loading...</div> }
            { blogs &&<BlogList blogs={blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Home;