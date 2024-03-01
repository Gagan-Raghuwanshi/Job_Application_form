import React, { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";

function Form() {
  const submitform = (e) => {
    alert("Your Application Submitted ! successfully");
  };

  const [file, setFile] = useState();
  let uploadfile = (e) => {
    setFile(e.target.files[0]);
    console.log("file uploaded");
  };

  return (
    <div className="border-2 w-[90%]  m-auto shadow-2xl mt-4">
      <h1 className="text-center text-3xl font-bold m-auto mt-4">
        Apply for this Job
      </h1>
      <hr className=" mt-8" />
      <div className=" mx-20 mt-4">
        <div className="">
          <label htmlFor="" className="font-semibold">
            First Name :
          </label>{" "}
          <br />
          <input
            type="text"
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Middle Name :
          </label>
          <br />
          <input
            type="text"
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Last Name :
          </label>
          <br />
          <input
            type="text"
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Mobile No. :
          </label>
          <br />
          <input
            type="number"
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Email Address :
          </label>
          <br />
          <input
            type="email"
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="font-semibold mt-7">
                Upload Resume :
        </div>

        <div className="flex items-center mt-2">
              <MdDriveFolderUpload className="h-7 w-8" />
            <div className=" w-max min-h-max  border-2">
            <input type="file"/>
            </div>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Cover Letter :
          </label>
          <br />
          <textarea
            cols="50"
            rows="5"
            placeholder="Write Here"
            className=" border-2 outline-none w-full p-3 px-5 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-center m-6">
          <input
            type="submit"
            value="Submit"
            className=" bg-blue-700 text-white px-5 text-lg m-2 rounded-full cursor-pointer p-1"
            onClick={submitform}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
