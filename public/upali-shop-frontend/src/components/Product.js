import React from 'react';
import { Link } from 'react-router';

const Product = () => {
    return(
        <div className="product  section">
            <img src="dist/images/pr_1.jpg" />
            <Link to="/order">
            <img src="dist/images/pr_2.jpg" />
            </Link>
            <img src="dist/images/pr_3.jpg" />
            <img src="dist/images/pr_4.jpg" />
            <img src="dist/images/pr_5.jpg" />
            <img src="dist/images/pr_6.jpg" />
            <img src="dist/images/pr_7.jpg" />
            <img src="dist/images/pr_8.jpg" />
            <img src="dist/images/pr_9.jpg" />
            <img src="dist/images/pr_10.jpg" />
            <img src="dist/images/pr_11.jpg" />
            <img src="dist/images/pr_12.jpg" />
            <img src="dist/images/pr_13.jpg" />
        </div>
    );
};

export default Product;
