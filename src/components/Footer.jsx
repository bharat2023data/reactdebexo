import React from 'react';
import  "./footer.css";
function Footer(){
    return(
        <div className='footer' >
<div class="footer" >
  <div class="column">
    <p class="text_heading" > Contact Details</p>
    <p  class="text_description">
      Name: Dr. K Mohanavelu, Scientist-'F'  <br />
      Email: debexo24@gmail.com
       </p>
</div>
<div class="column">
    <p  class="text_heading" >Address</p>
    <p class="text_description">Defence Bioengineering & Electromedical Laboratory(DEBEL), DRDO, ADE Campus,  CV Raman Nagar, Bengaluru, Karnataka- 560075<br/></p>
</div>
<div class="column">
    <p  class="text_heading" >Visit Us</p>
    <p class="text_description">Website: <a href="https://www.drdo.gov.in/labs-and-establishments/defence-bio-engineering-electro-medical-laboratory-debel" target="_blank"> DEBEL</a>
    </p>
</div>

<div></div> 
<div class="pdfbutton">
 <a href="./images/COA.pdf" target="_blank" ><button>Download Brochure</button></a>
</div>
</div>

        </div>
    );
}
export default Footer;