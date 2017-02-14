import React from 'react';

let AreaSelector = React.createClass({
getInitialState: function() {
return {
prov: this.props.options.prov,
city: this.props.options.city,
county: this.props.options.county,
    province: ''

};
},
selectProv: function (evt) {
this.setState({
prov: evt.target.value,
city: '',
county: ''
});
},
selectCity: function(evt){
this.setState({
city: evt.target.value,
county: ''
});
},
selectCounty: function(evt){
    let province = this.props.data.provinces[this.state.prov];
    let city = this.props.data.provinces[this.state.prov].citys[this.state.city];
            let area=this.props.data.provinces[this.state.prov].citys[this.state.city].countys[evt.target.value];
this.setState({
    county: evt.target.value
});
    this.props.onProvinceChange(this.state.prov,this.state.city,evt.target.value);
},


render: function() {
var data = this.props.data,
    options = this.props.options;
var provs = [], citys = [], countys = [];
for(var i in data.provinces){
    provs.push([i,data.provinces[i].name]);
}
provs = provs.map(function(item){
    return (<option key={item[0]} id={item[0]} value={item[0]}>{item[1]}</option>);
});

if(this.state.prov){
for(var i in data.provinces[this.state.prov].citys){
    citys.push([i,data.provinces[this.state.prov].citys[i].name]);
}
citys = citys.map(function(item){
    return (<option key={item[1]}  value={item[0]}>{item[1]}</option>);
});
}
if(this.state.prov && this.state.city){
for(var i in data.provinces[this.state.prov].citys[this.state.city].countys){
    countys.push([i,data.provinces[this.state.prov].citys[this.state.city].countys[i].name]);
}
countys = countys.map(function(item){
    return (<option key={item[1]}  value={item[0]}>{item[1]}</option>);
});
}

    return (
            <div>
        <select class="J_area_prov" name="province"  value={this.state.prov}  onChange={this.selectProv}>
<option >{options.defaultText[0]}</option>
{provs}
</select>
        <select name="city" class="J_area_city"  value={this.state.city}  onChange={this.selectCity}>
<option >{options.defaultText[1]}</option>
{citys}
</select>
        <select class="J_area_county" name="area"  value={this.state.county} onChange={this.selectCounty}>
<option>{options.defaultText[2]}</option>
{countys}
</select>
            </div>
    );
}
});


export default AreaSelector;
