import React from 'react';

class BuilingList extends React.Component {
	evenHandler = (event)=> {
		let v = event.target.parentElement;
		this.props.selectedUpdate(v.id);
	};
	render() {

		//console.log('This is my directory file', this.props.data);
		const {data,filterText,selectedUpdate} = this.props;

		const buildingList =
	data.filter(name => {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase())>=0
		}).map(directory => {
			return (
				<tr key={directory.id} id = {directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody onClick={this.evenHandler.bind(this)}>{buildingList}</tbody>;
	}
}
export default BuilingList;
