'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/admin/header";
import Footer from "./components/admin/footer";
import Sidebar from "./components/admin/sidebar";
import Maincontent from "./components/admin/maincontent";

export const metadata = {
  title: 'Taknik Bharti',
  description: 'Taknik Bharti',
}

export default function Layout({ children }) {

  var isLoggedIn = false;
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    var getData = JSON.parse(localStorage.getItem('sb-anyijxohgwdjjomafoml-auth-token'))?.access_token;
    if (getData) {
      isLoggedIn = true;
    }
  }
  React.useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = '/login';

    }
  }, [isLoggedIn]);

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Taknik Bharti | Dashboard</title>
      <link
        href="vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <link href="css/sb-admin-2.min.css" rel="stylesheet" />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header></Header>
            <main>{children}</main>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer>
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
          <script src="js/sb-admin-2.min.js"></script>
          <script src="vendor/chart.js/Chart.min.js"></script>
          <script src="js/demo/chart-area-demo.js"></script>
          <script src="js/demo/chart-pie-demo.js"></script>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
