import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogShow() {

    const {id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetch(`/blogs/${id}`)
        .then(r => r.json())
        .then((a) => setArticle(a))
    }, [])

    // console.log(article)

    let cat = article?.category?.toUpperCase()


    return(
        <>
        <section className="text-gray-300 body-font overflow-x-auto">
        <div className="container py-24 mx-auto">
            <div className="flex flex-wrap justify-center -m-12">
            <div className="p-12 md:w-3/5 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-pink-50 text-primary text-xs font-medium tracking-widest">{cat}</span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-primary mt-4 mb-4">{article.title}</h2>
                <p className="leading-relaxed mb-8 whitespace-normal">
                    <pre className="whitespace-pre-wrap">{article.article}</pre>
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                </div>
                <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-primary">Caleigh S.</span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">{article.date}</span>
                </span>
                </a>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default BlogShow;

          {/* <a class="text-pink-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
          {/* <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span> */}