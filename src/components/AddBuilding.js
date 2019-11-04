import React from 'react';

class AddBuilding extends React.Component {
    addNewBuild = event=> {
        let code = document.getElementById('code').value;
        console.log(code);
        let name = document.getElementById('name').value;
        let latitude = document.getElementById('latitude').value;
        let longitude = document.getElementById('longitude').value;
        let coordinates = {'latitude':latitude,'longitude':longitude};
        let address = document.getElementById('address').value;
        let newBuild = {
            'id':this.data.length+1,
            'code':code,
            'name':name,
            'coordinates':coordinates,
            'address':address
        };
        console.log(newBuild);
        this.props.data.push(newBuild);
        this.props.manualUpdate();
    };
    render() {
        this.data = this.props.data;
        //this.props.data.
        return (<div>
            <text >code:</text>
            <input id='code'/>
            <br/>
            <text>name:</text>
            <input id='name'/>
            <br/>
            <text>latitude:</text>
            <input id='latitude'/>
            <br/>
            <text>longitude:</text>
            <input id='longitude'/>
            <br/>
            <text>address:</text>
            <input id='address'/>
            <br/>
            <button onClick={this.addNewBuild.bind(this)}>Add New</button>
        </div>);
    }
}
export default AddBuilding;