import React from 'react';
import { Link } from 'react-router';

const Widget = () => (
        <div className="widget">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10366129&userId=23057437">
        <img src="dist/images/widget_1.jpg" />
        </a>
        <Link to="/order">
        <img src="dist/images/widget_2.jpg" />
        </Link>
        </div>
);

export default Widget;
