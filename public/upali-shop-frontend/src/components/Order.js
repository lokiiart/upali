import React from 'react';
import areaData from './areaData';
import AreaSelector from './AreaSelector';
import '../../node_modules/nanoajax/nanoajax.min.js';
//import {NotificationContainer, NotificationManager} from '../../node_modules/react-notifications';
import RadioGroup from '../../node_modules/react-radio-group';


let Order = React.createClass( {

    getInitialState: function(){
        return {
            form_status: '_blank',
            price:'538',
            originalprice:'672',
            payment: '支付宝',
            customer:'',
            phone:'',
            province:'',
            city:'',
            area:'',
            notes:'',
            address:''
        };
    },


    handleCustomer: function(e){
        e.preventDefault();
        this.setState({customer:e.target.value});
    },

    handlePhone: function(e){
        this.setState({phone:e.target.value});
    },

    handleProvince: function(province,city,area){
        this.setState({
            province:province,
            city:city,
            area:area
                      });
    },

    handleAddress: function(e){
        this.setState({address:e.target.value});
    },

    handlePayment: function(value){
        if(value=='支付宝'){
            this.setState({
                payment:value,
                form_status: '_blank'
            });
        }else if(value == '货到付款'){
            this.setState({
                payment:value,
                form_status: ''
            });
        }
    },

    handleNotes: function(e){
        this.setState({notes:e.target.value});
    },

    handleSubmit: function(e){
        e.preventDefault();
        if(this.state.payment=='支付宝'){
            let aplipay_form= document.querySelector(".orderForm");
            aplipay_form.submit();
        }else if(this.state.payment=="货到付款"){
            nanoajax.ajax({
                url:'/orders',
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state)
            },
                function(code,responseText,request){
                    console.log(code);
                    console.log(responseText);
                    if(code=='200' || code=='201'){
                        responseText=JSON.parse(responseText);
                        console.dir(responseText);
                        console.log(responseText);
                        console.log(responseText.error);
                        if(responseText.error){
                            alert(responseText.message);
                        }else{
                            alert("订购成功!!请确认您的手机号码为"+responseText.phone);
                        }
                    }
                });
        }
    },

    handlePrice: function(value){
        switch(value){
        case '672':
            this.setState({originalprice:'840',price:value});
            break;
        case '538':
            this.setState({originalprice:'672',price:value});
            break;
        case '428':
            this.setState({originalprice:'535',price:value});
            break;
        case '268':
            this.setState({originalprice:'336',price:value});
            break;
        }
    },

    render:function(){
        return (
                <div className="section">
                <div className="order-title">
                <img  src="dist/images/dg.jpg" />
                <p>
                支付说明：由于货到付款，顺丰快递要加收5%的服务费用，所以，如果选择货到付款购买我们产品，没有相关优惠。<em>本公司已与支付宝签订战略协议，选择支付宝付款，可享受8折优惠。如需其他支付方式（网银支付/转账汇款/微信支付等）可以我们<a href="http://pgt.zoosnet.net/LR/Chatpre.aspx?id=PGT57696928&lng=cn">在线客服</a>，索取转款账号。谢谢！</em>
                </p>
                <h3>关注公众号<em>upali4000963983</em>还可享受<br />折上折.</h3>
                <h3>注意: 本网站由于网络技术问题, 暂时不能够提供购买服务. 烦请移步微信公众号.</h3>
                </div>
                <form method="POST" action="/alipay_orders" className="pure-form orderForm" onSubmit={e=>this.handleSubmit(e)} target={this.state.form_status}>
                <fieldset>
                <legend>产品选择</legend>
                <RadioGroup name="price" selectedValue={this.state.price} onChange={this.handlePrice}>
                {Radio => (
                        <div>
                        <Radio value="672" />￥840 4个疗程8瓶装(买5送3) <em>支付宝付款：￥672</em><br />
                        <Radio value="538" />￥672 3个疗程6瓶装(买4送2) <em>支付宝付款：￥538</em><br />
                        <Radio value="428" />￥535 2个疗程4瓶装(买3送1) <em>支付宝付款：￥428</em><br />
                        <Radio value="268" />￥336 1个疗程2瓶装 <em>支付宝付款：￥268</em>
                        </div>
                )}
                </RadioGroup>
                </fieldset>
                <fieldset>
                <legend>联系方式</legend>
                <label>姓名<input type="text" name="customer" value={this.state.customer} onChange={this.handleCustomer}  /></label><br />
                <label>手机<input type="text" name="phone" value={this.state.phone} onChange={this.handlePhone}  /></label><br />
                <label>地址</label><AreaSelector data={data} options={AreaOptions} onProvinceChange={this.handleProvince} /><br />
                <label>详细地址<br /><input type="text" name="address" value={this.state.address} onChange={this.handleAddress} /></label>
                </fieldset>
                <fieldset>
                <legend>付款方式</legend>
                <RadioGroup name="payment" selectedValue={this.state.payment} onChange={this.handlePayment}>
                {Radio => (
                        <div>
                        <Radio value="货到付款" />货到付款<br />
                        <Radio value="支付宝" />支付宝
                        </div>
                )}
                </RadioGroup>
                </fieldset>
                <fieldset>
                <legend>备注信息</legend>
                <textarea className="form-textarea" name="notes" value={this.state.notes} onChange={this.handleNotes} />
                </fieldset>
                <div className="order-submit-wrapper">
                    <button className="order-submit" type="submit">提交</button>
                </div>
                </form>
                </div>
        );
    }
});

let AreaOptions= {
    defaultText:['省份','城市','区县']
};

let data = areaData;
export default Order;
