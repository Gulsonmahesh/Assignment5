import React, {Fragment} from 'react';

const Product = (props) => {
    return (
        <Fragment>
            {
                props.product.map((item, index) => 
                <tr key={index}><td>{index + 1}</td><td>{item.productname}</td>
                <td>{item.quantity}</td><td>{item.price}</td></tr>
              )
            }
        </Fragment>
    )
}
export default Product;
