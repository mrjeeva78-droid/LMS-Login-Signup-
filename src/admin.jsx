import React from "react";
import './admin.css'


function Admin(){

    return(
        <>
       
  
  <div class="main-content">

    <div class="top-bar">
      <h1>Welcome Admin</h1>
    </div>

    <div class="admin-card">
      <h3>Teacher Management</h3>

      <p>
        Admin can manage teachers, students, attendance,
        and school information from this dashboard.
      </p>

      <a href="/teacherSign" class="btn">
        Add New Teacher
      </a>
    </div>

  </div>

        </>
    )
}

export default Admin