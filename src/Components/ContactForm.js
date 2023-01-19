import React from "react";
import './ContactForm.css';




export default function ContactForm()
{
    return (
        <>
    

        <h1 className='sign-up' >CONTACT US</h1>
       
        
        <div class="row" id="contatti">
<div class="container">

      <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.669149381217!2d76.90400857407286!3d12.518597622058223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0dafa8e534d%3A0x7d5ddda2d71b3d5f!2scoconut%20Gaurden!5e0!3m2!1sen!2sin!4v1670945260594!5m2!1sen!2sin" width="100%" height="400px" title="This is a unique title" alt="maps"  ></iframe>
<div>
    <div>
        <div>
            <br/>
        </div>
    </div>
</div>
        <form action="">
   
       
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder="FIRST NAME" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder="LAST NAME" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="email" class="form-control mt-2" placeholder="Email" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="tel" class="form-control mt-2" placeholder="PHONE NUMBER" required/>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="COMMENT HERE" rows="3" required></textarea>
              </div>
            </div>
            <div class="col-12">
            <div class="form-group">
              <div class="form-check">
               
              </div>
            </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary btn-lg active" type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
        <div class="text-black">
        <h3 class="text-uppercase mt-4 font-weight-bold">OFFICE INFO</h3>

        <i class="fas fa-phone mt-3"></i> <a href="tel:+">(+91) 9019108181</a><br/>
       

        <i class="fa fa-envelope mt-3"></i> <a href="">kco@gmail.com</a><br/>
        <i class="fas fa-globe mt-3"></i> #13th Cross HalaHalli kere , Ramanagaram<br/>
       
        {/* <div class="my-4">
        <a href="/"><i class="fab fa-facebook fa-3x pr-4"></i></a>
        <a href="/"><i class="fab fa-linkedin fa-3x"></i></a>
        </div> */}
        </div>
      </div>

    </div>
</div>



      



          </>
    )
}

