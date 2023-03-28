import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import BlogShow from "./BlogShow";

function BlogItem({ title, description, id, category, date }) {

    const match = useRouteMatch()
  return (
    <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-primary">{category}</span>
          <span class="mt-1 text-gray-500 text-sm">{date}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-base-content title-font mb-2">{title}</h2>
          <p class="leading-relaxed">{description}</p>
          <NavLink to={`/blogs/${id}`}>
          <a class="text-primary inline-flex items-center mt-4">Read
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </NavLink>
        </div>
      </div>
  )
}

export default BlogItem;

 // <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
    //   <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-primary mb-5 flex-shrink-0">
    //     {/* <svg
    //       fill="none"
    //       stroke="currentColor"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="2"
    //       class="w-10 h-10"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    //       <circle cx="12" cy="7" r="4"></circle>
    //     </svg> */}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       class="w-10 h-10"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="#FF86D9"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    //       <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
    //     </svg>
    //   </div>
    //   <div class="flex-grow">
    //     <h2 class="text-primary text-lg title-font font-medium mb-3">
    //       {title}
    //     </h2>
    //     <p class="leading-relaxed text-base">{description}</p>
    //     <NavLink to={`article/${id}`}>
    //     <a class="mt-3 text-primary inline-flex items-center">
    //       Read
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         class="w-4 h-4 ml-2"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </a>
    //     </NavLink>
    //   </div>
    // </div>