import { Form, Formik } from "formik";
import React, { useState } from "react";
import "./Addpodcast.css";

const Addpodcast = () => {

  const [selFile, setSelFile] = useState("")
  const [selThumbnail, setSelThumbnail] = useState("")
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  const addPodcastSubmit=async (formdata)=>{
             console.log(formdata);

            const response=await fetch("http://localhost:5000/podcast/add",{
              method: 'POST',
              body: JSON.stringify(formdata),
              headers:{
                "Content-Type": "application/json",
              },
            });
            console.log(response);
  }

  const uploadFile=(e)=>{
    const file=e.target.files[0];
    setSelFile(file.name)
     const fd=new FormData();
     console.log(fd);
     fd.append("myFile",file);
     console.log(fd);
     fetch("http://localhost:5000/util/uploadFile",{
      method:'POST',
      body:fd,
     })
     .then((res) => {
      if (res.status === 200) {
       console.log(res);
      }
    })
  .catch((err)=>{
    console.log(err);
  })
  }


  const uploadThumbnail=(e)=>{
    const file = e.target.files[0];
    setSelThumbnail(file.name);
    const fd = new FormData();
    fd.append("myuploadfile", file);
    fetch("http://localhost:5000/util/uploadThumbnail", {
      method: "POST",
      body: fd,
    }).then((result) => {
      if (result.status === 200) {
        console.log(result);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <>
      <div className="row mt-5  bg-primary" style={{ marginLeft:"15%",marginRight:"15%"}}>
        <div className="col-md-3 mt-5">
          <div
            style={{ marginTop: 50, marginLeft: 10 }}
            className="text-center"
          >
            <i
              id="animationDemo"
              data-mdb-animation="slide-right"
              data-mdb-toggle="animation"
              data-mdb-animation-reset="true"
              data-mdb-animation-start="onPress"
              data-mdb-animation-on-scroll="repeat"
              className="fas fa-3x fa-podcast text-white"
            />
            <h3 className="mt-3 text-white">Welcome</h3>
            <p className="white-text .font-italic">
              You are one step away to publish your podcast!
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-white btn-rounded back-button"
            >
              Create
            </button>
          </div>
        </div>
        <div className="col-md-9 justify-content-center">
          <div className="card card-custom pb-4">
            <div className="card-body mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: "#495057" }}>Podcast Details</h4>
              </div>
              {/* ,createdBy:currentUser._id,createdAt:new Date() */}
              <Formik  initialValues={{title:"",description:"",createdBy:currentUser._id,createdAt: new Date()}}
              onSubmit={addPodcastSubmit}>

                {({values,handleChange,handleSubmit})=>{
                  return(
                    <form className="mb-0" onSubmit={handleSubmit}>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="">
                          <input
                            type="title"
                            id="title"
                            value={values.title}
                            onChange={handleChange}
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="form9Example1">
                              Title
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="">
                          <input
                            type="description"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="form9Example2">
                            Description
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="">
                          <input
                            type="file"
                            id="form9Example3"
                            
                              onChange={uploadFile}
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="form9Example3">
                            Upload File
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="">
                          <input
                            type="file"
                            onChange={uploadThumbnail}
                            id="form9Example4"
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="form9Example4">
                            Upload Thumbnail
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="float-end ">
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded"
                        style={{ backgroundColor: "#0062CC" }}
                      >
                        Create Podcast
                      </button>
                    </div>
                  </form>
                  )
                }}
              </Formik>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpodcast;


  {/* <div className="row mb-4">
                      <div className="col">
                        <div className="">
                          <input
                            type="text"
                            id="form9Example6"
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="form9Example6">
                            Created By
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="">
                          <input
                            type="email"
                            id="typeEmail"
                            className="form-control input-custom"
                          />
                          <label className="form-label" htmlFor="typeEmail">
                            Created At
                          </label>
                        </div>
                      </div>
                    </div> */}