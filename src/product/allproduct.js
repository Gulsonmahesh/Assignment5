import React, { Fragment, useState, useEffect} from 'react';
import Productlist from './productlist';


const ShowError = (props) => {
  return(
    (props.error) && 
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {<button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      <span className="sr-only">Close</span>
      </button> }
      <strong><i className="fas fa-exclamation-triangle"></i> Unable to retrieve Products dur to some Issue</strong>
    </div>
  )
}

const MainProduct = (props) => {
  const tableHeader = ['ID', 'Product Name', 'Quantity', 'Price'];
  return (
    <Fragment>
      <div className="row">
          <div className="col-xs-1-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Product List ( Using Functional Components )</h1>
                  <div className="mt-4 ml-auto">
                    <Productlist header={tableHeader} rows={props.rows}/>
                  </div>
                </div>
              </div>
          </div>  
        </div>
    </Fragment>
  );
}

function Assignment2() {
  const [product,setProduct] = useState([]);
  const [hasError,setError] = useState(false);  
  let productTag = '';

  async function fetchData() {
    await fetch("http://localhost:3001/models")
      .then(res => res.json())
      .then(res => {setProduct(res)})
      .catch(err => {
        setError(true);
      });
  }
  useEffect(() => { fetchData() },[]);

  if(product.length) {
    productTag = <MainProduct rows={product}/>;
  }
  return (
    <Fragment>
      <ShowError error={hasError}/> 
      { productTag }
    </Fragment>
  )
}

export default Assignment2;
