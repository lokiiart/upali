import React from 'react';
import { Link } from 'react-router';
import Home from './Home';
import Widget from './Widget';

const App = ({ children}) => (
  <div>
        <header>
        <div className="top">
        <Link to="/">
            <img className="logo" src="dist/images/top1.jpg" />
        </Link>

        </div>
        <ul className="nav">
        <li>
        <Link to="/">
        <img src="dist/images/index_ico.png" />
        <p>首页</p>
        </Link>
        </li>
        <li>
        <Link to="/product">
        <p>产品</p>
        </Link>
        </li>
        <li>
        <Link to="/brand">
        <p>品牌</p>
        </Link>
        </li>
        <li>
        <Link to="/example">
        <p>案例</p>
        </Link>
        </li>
        <li>
        <Link to="/order">
        <p>订购</p>
        </Link>
        </li>
        <li>
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=10366129&userId=23057437">
        <p>咨询</p>
        </a>
        </li>
        </ul>
    </header>
        <Widget />
    <section>
        {children}
    </section>
    <footer className="clearfix">
        <p className="footer-2"><img src="dist/images/m2_33.jpg" width="136" height="137" /></p>
           <p className="footer-1">美国优波粒制药集团（广州）<br/>
        联系电话:4000-963-983<br/>
        京ICP证040350号 京公网安备110301000336号<br/></p>
    </footer>
  </div>
);

App.propTypes = { children: React.PropTypes.object};

export default App;
