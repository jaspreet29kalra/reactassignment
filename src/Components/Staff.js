import React from "react";

  
function Staff(){
    const onButtonClick=()=>{
        fetch('Jaspreet-resume.pdf').then(response =>{
            response.blob().then(blob=>{
                const fileURL =window.URL.createObjectURL(blob);
                let alink= document.createElement('a');
                alink.href=fileURL;
                alink.download='Jaspreet-resume.pdf';
                alink.click();
            })
        })
    }
    return(
        <>
        <h1 className="logheading">Student Details</h1>
        <br/>
        <br/>
        <table class="table table-hover">
    
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No.</th>
      <th scope="col">Date and Time</th>
      <th scope="col">Resume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jaspreet Kaur</td>
      <td>Kalrajaya29@gmail.com</td>
      <td>9536319773</td>
      <td>Sun Dec 11 2022 4:56:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mansi Thukral</td>
      <td>mansit12@gmail.com</td>
      <td>9653819773</td>
      <td>mon Dec 5 2022 5:53:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ritu Arora</td>
      <td>ritu34@gmail.com</td>
      <td>9653814356</td>
      <td>Tues Dec 6 2022 10:53:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Manvi Arora</td>
      <td>manvi12@gmail.com</td>
      <td>9653865483</td>
      <td>Fri Dec 9 2022 2:05:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Manan Kalra</td>
      <td>kalramanan@gmail.com</td>
      <td>7500966345</td>
      <td>Thu Dec 1 2022 4:07:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
      </tr>
      <tr>
      <th scope="row">6</th>
      <td>Apurva Pandey</td>
      <td>appu45@gmail.com</td>
      <td>9983814765</td>
      <td>Tues Nov 29 2022 10:34:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">7</th>
        <td>Vani Joshi</td>
      <td>Vani67@gmail.com</td>
      <td>9653654356</td>
      <td>Mon Dec 12 2022 10:53:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>

    <tr>
      <th scope="row">8</th>
        <td>Simar Arora</td>
      <td>arorasimar@gmail.com</td>
      <td>9653654897</td>
      <td>Mon Dec 12 2022 5:09:45</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">9</th>
        <td>Preeti Lohani</td>
      <td>pialoh45@gmail.com</td>
      <td>9667564356</td>
      <td>Mon Dec 5 2022 7:53:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>
    <tr>
      <th scope="row">10</th>
        <td>Mitushi Thakur</td>
      <td>mish56@gmail.com</td>
      <td>9653657878</td>
      <td>sun Nov 27 2022 6:45:56</td>
      <td><button className="btn btn-secondary" onClick={onButtonClick}>Download Pdf</button></td>
    </tr>



  </tbody>

        </table>
        </>
    )
}
export default Staff;