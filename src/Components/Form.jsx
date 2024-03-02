import React, { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

function Form() {

  let navigate = useNavigate();
  const [formdata,setFormdata] = useState({
    fname:'',
    mname:'',
    lname:'',
    number:'',
    email:'',
    file:'',
    cletter:''
  })

  const onchange = (e)=>{
      setFormdata(()=>({
        ...formdata,
        [e.target.name]: e.target.value 
      }))
  }
  const submit = ()=>{
    navigate('/preview')
    console.table(formdata)
  }

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
          </label>
          <br />
          <input
            type="text"
            name="fname"
            onChange={onchange}
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
            name="mname"
            onChange={onchange}
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
            name="lname"
            onChange={onchange}
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
            name="number"
            onChange={onchange}
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
            name="email"
            onChange={onchange}
            className="border-2 mt-2 w-full outline-none p-1 px-3 items-center rounded-md"
          />
        </div>
        <div className="font-semibold mt-7">Upload Resume :</div>

        <div className="flex items-center mt-2">
          <MdDriveFolderUpload className="h-7 w-8" />
          <div className=" w-max min-h-max  border-2">
            <input type="file" files="file" onChange={onchange}/>
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
            name="cletter"
            onChange={onchange}
            className=" border-2 outline-none w-full p-3 px-5 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-center m-6">
          <input
            type="submit"
            value="Submit"
            onClick={submit}
            className=" bg-blue-700 text-white px-5 text-lg m-2 rounded-full cursor-pointer p-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
