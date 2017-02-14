import React from 'react';
import { Link } from 'react-router';

const Widget = () => (
        <div className="widget">
        <Link to="/order">
        <img src="dist/images/widget_2.jpg" />
        </Link>
        <a href="http://pgt.zoosnet.net/LR/Chatpre.aspx?id=PGT57696928&lng=cn">
        <img src="dist/images/widget_1.jpg" />
        </a>
        </div>
);

export default Widget;
