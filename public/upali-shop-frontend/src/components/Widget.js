import React from 'react';
import { Link } from 'react-router';

const Widget = () => (
        <div className="widget">
        <a href="http://pgt.zoosnet.net/LR/Chatpre.aspx?id=PGT57696928&lng=cn">
        <img src="dist/images/widget_1.jpg" />
        </a>
        <Link to="/order">
        <img src="dist/images/widget_2.jpg" />
        </Link>
        </div>
);

export default Widget;
