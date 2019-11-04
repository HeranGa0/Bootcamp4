import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		let id = this.props.id;
		let data = this.props.data;
		let obj = data.find(x => x.id == id);
		console.log(obj);

			let infoFunc = obj=> {
				if(!obj)
					return;
				let info = '';
				let array = [];
			for (var property in obj) {
				if(property==='coordinates') {
					info = property + ": " + "latitude: "+obj[property].latitude+" \nlongitude: "+obj[property].longitude;
				}
				else
					info = property + ': ' + obj[property];
				array.push(<p key={property}>{info}</p>);
			}
			return array;
		};
				 //obj.code+"/n"+obj.name+"/n"+obj.coordinates+"/n"+obj.address;

		return (
			<div>
				<div>
					{
						infoFunc(obj)
					}
					<i>Click on a name to view more information</i>
				</div>
			</div>
		);
	}
}
export default ViewBuilding;
