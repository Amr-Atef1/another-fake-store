import React from "react";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
    
      <div className="row">
        <div className="col-4">
          <div className="card mt-1 w-1" style={{width:"18rem"}}>
            <img src="imgs/1.jpg" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
