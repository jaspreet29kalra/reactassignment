import React from "react";
 
function Student(){
    const submitfun=(e)=>{
        e.preventDefault();
        alert("Form Submitted");
    }
    return(
        <>
<h1 className="logheading">Student Details</h1>
<br/>
<br/>
        <div className="formcenter">
            
        <form className="needs-validation" novalidate  onSubmit={submitfun}>
        <div class="mb-3">
    <label for="text" class="form-label">Name</label>
    <input type="text" class="form-control" id="text" placeholder="Enter Name" aria-label="First name" required />
      </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder ="Enter Email" aria-describedby="emailHelp" required/>
   </div>
   <div class="mb-3">
    <label for="number" class="form-label">Contact Number</label>
    <input type="number" class="form-control" id="number" placeholder="Enter Contact Number" required/>
    
  </div>
  
<div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required  accept="application/pdf"/>
    <div class="invalid-feedback">Choose Any File</div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        
       
       
        </>
    )
}
export default Student;