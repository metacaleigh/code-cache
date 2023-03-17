import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { ErrorContext } from "../context/error";
import { useHistory } from "react-router-dom";

function NewFolderForm({ onFormSubmit }) {
  let history = useHistory();

  function exitForm() {
    history.push("/");
  }

  const [user, setUser] = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, user_id: user.id }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newFolder) => {
          onFormSubmit(newFolder);
          setFormData({});
          history.push("/");
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create a New Folder</h1>
            <p className="py-6"> Create folders for languages, frameworks, projects, and more!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
            <div className="card-body">
                <div className="card-actions justify-end">
                <button
                  className="btn btn-square btn-sm"
                  onClick={exitForm}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                </div>
              <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Folder Name:</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Folder Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description:</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    placeholder="Description (Optional)"
                    class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL:</span>
                  </label>
                  <input
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Image URL (Optional)"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewFolderForm;


//  <>
// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto flex flex-wrap">
//     <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
//       <img
//         alt="feature"
//         class="object-cover object-center h-full w-full"
//         src="https://dummyimage.com/460x500"
//       />
//     </div>
//     <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
//       <div class="flex flex-col mb-10 lg:items-start items-center">
//         <div class="flex-grow">
//           <div className="card w-96 bg-primary shadow-xl">
//             <div className="card-body">
//               <div className="card-actions justify-end">
//                 <span>
//                   <h1 className="card-title">Create a New Folder</h1>
//                 </span>
//                 <button
//                   className="btn btn-square btn-sm"
//                   onClick={exitForm}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   type="text"
//                   placeholder="Folder Name"
//                   className="input input-bordered input-primary w-full max-w-xs"
//                 />
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleFormChange}
//                   placeholder="Description (Optional)"
//                   class="textarea textarea-bordered textarea-xs w-full max-w-xs"
//                 ></textarea>
//                 <input
//                   name="image_url"
//                   value={formData.image_url}
//                   onChange={handleFormChange}
//                   type="text"
//                   placeholder="Image URL (Optional)"
//                   className="input input-bordered input-primary w-full max-w-xs"
//                 />
//                 <button
//                   type="submit"
//                   className="btn btn-active btn-secondary"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </> 

