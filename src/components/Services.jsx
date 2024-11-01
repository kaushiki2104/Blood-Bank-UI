import React from 'react';
import helpImage from '../assets/image/help.png';

const Services=()=> {
  return (
  <div className="container">
    <div className="row">
    <div className="col-3 text-container">
    <div class="card" style={{marginLeft:'10px'}}>
  <img class="card-img-top" src="helpImage" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Service 1</h5>
    
  </div>
</div> 
    </div>
    <div className="col-3 text-container">
    <div class="card"   >
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Service 2 </h5>
    
  </div>
</div> 
    </div>
    <div className="col-3 text-container">
    <div class="card"  >
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Service 3</h5>
   
  </div>
</div> 
    </div>
    <div className="col-3 text-container">
    <div class="card"   >
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Service 4</h5>
    
  </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Services
