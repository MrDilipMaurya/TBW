
// "use client";
// import { useState } from 'react';
// import { login } from '../../api/login'
// import "./login.css";
// import Image from 'next/image';
// import logo from '../../public/assets/img/tb-logo-black.svg'
// import React from 'react'

// export default function page(){
//     const [email,changeEmail] = useState();
//     const [password,changePassword] = useState();
//     function updateEmail(event){
//         changeEmail(event.target.value);
//     }
//     function updatePassword(event){
//         changePassword(event.target.value);
//     }
//     async function loginWithMobilePassword() {
//         try {
           
//            const res = await login(email,password);
//            if(res.status==200){
//               window.location.href="/dashboard"
//            }
//            else{
//                  window.location.href="/login"

             
//            }
//         } catch (error) {
//           alert(error.message)
//         }
//       }
//     return (
//         <>
            // <section id="login">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-12">
            //                 <div className="login-form">
            //                     <Image
            //                         src={logo}
            //                         alt="Logo"
            //                         width="250"
            //                         height="61"
            //                     />
            //                     <form action="#">
            //                         <input
            //                             className="form-control"
            //                             id="form1"
            //                             type="email"
            //                             placeholder="Email Address"
            //                             onChange={updateEmail}
            //                         />
            //                         <input
            //                             className="form-control"
            //                             id="form2"
            //                             placeholder="Password"
            //                             onChange={updatePassword}
            //                             type="password"
            //                         />
            //                         <button className="login-btn "
            //                             onClick={loginWithMobilePassword}
            //                         >
            //                             Sign in
            //                         </button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
//         </>
//     )
// }


"use client";
import { useState } from 'react';
import { login } from '../../api/login'
import "./login.css";
export default function page() {
    const [email,changeEmail] = useState();
    const [password,changePassword] = useState();
    function updateEmail(event){
        changeEmail(event.target.value);
    }
    function updatePassword(event){
        changePassword(event.target.value);
    }
    async function loginWithMobilePassword() {
        try {
           
           const res = await login(email,password);
           if(res.status==200){
              window.location.href="/dashboard"
           }
           else{
                 window.location.href="/login"

             
           }
        } catch (error) {
          alert(error.message)
        }
      }
  return (
    <div  className="gradient-body" style={{height:'100vh'}}>
      <div className="gradient-form">
            <div
              className="m-auto w-50" style={{ paddingTop:'150px' }}
            >
                <img
                  src="img/tb-logo-black.svg"
                  style={{ width: "185px" }}
                  alt="logo"
                />

              <input
               className="form-control mb-2"
                id="form1"
                type="email"
                placeholder="enter your email"
                onChange={updateEmail}
              />
                <input
               className="form-control mb-2"
                id="form2"
                placeholder="enter your password"
                onChange={updatePassword}
                type="password"
              />

                <button className="fw-bold p-1 rounded mb-4 w-100 gradient-custom-2 border-0" onClick={loginWithMobilePassword}>
                  Sign in
                </button>
            </div>
    

          

      </div>
    </div>
  );
}
