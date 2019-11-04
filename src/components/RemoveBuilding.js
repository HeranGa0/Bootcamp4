import React from 'react';

class RemoveBuilding extends React.Component {
    removeNewBuild = event=> {
        let code = document.getElementById('rmcode').value;
        this.props.data.findIndex(x=>x.code==code);
        this.props.data.splice(this.props.data.findIndex(x=>x.code==code),1);
        this.props.manualUpdate();

    }
    render() {
       return (
           <div>
           <input id='rmcode'/>
           <br/>
           <button onClick={this.removeNewBuild.bind(this)}>remove</button>
           </div>
       )
    }
}
export default RemoveBuilding;