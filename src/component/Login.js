import { Formik } from 'formik'
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const Login = () => {
     const navigate = useNavigate();
    const loginSubmit =async (formdata)=>{
       console.log("data come");
       console.log(formdata);

       const response=  await fetch("http://localhost:5000/user/login",{
        method:"post",
        body:JSON.stringify(formdata),
        headers:{
          'Content-Type':'application/json',
        }
       })
       if(response.status===200)
       {
        navigate('../addpodcast')
        console.log(response.status);
        const data= await response.json();
        sessionStorage.setItem('user',JSON.stringify(data))
       }
   }
  return (
    <>
<section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <Formik 
                initialValues={{email:"",password:""}} 
                onSubmit={loginSubmit}
                >
                    {({values,handleChange,handleSubmit})=>{
                        return (
                            <form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i
                                className="fas fa-cubes fa-2x me-3"
                                style={{ color: "#ff6219" }}
                              />
                              <span className="h1 fw-bold mb-0">Logo</span>
                            </div>
                            <h5
                              className="fw-normal mb-3 pb-3"
                              style={{ letterSpacing: 1 }}
                            >
                              Sign into your account
                            </h5>
                            <div className=" mb-4">
                            <label className="form-label" htmlFor="form2Example17">
                                Email address
                              </label>
                              <input
                               type="email"
                               id="email"
                               value={values.email}
                               onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                              
                            </div>
                            <div className=" mb-4">
                            <label className="form-label" htmlFor="form2Example27">
                                Password
                              </label>
                              <input
                               type="password"
                               id="password"
                               value={values.password}
                               onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                             
                            </div>
                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Login
                              </button>
                            </div>
                            <NavLink className="small text-muted" to="#!">
                              Forgot password?
                            </NavLink>
                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                              Don't have an account?{" "}
                              <NavLink to="#!" style={{ color: "#393f81" }}>
                                Register here
                              </NavLink>
                            </p>
                            <NavLink to="#!" className="small text-muted">
                              Terms of use.
                            </NavLink>
                            <NavLink to="#!" className="small text-muted">
                              Privacy policy
                            </NavLink>
                          </form>
                        )
                    }} 
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Login