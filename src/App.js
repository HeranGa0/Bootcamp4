import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState( prevState => ({
        filterText: value,
        selectedBuilding:prevState.selectedBuilding
      }));
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log(id);
    this.setState( prevState => ({
      filterText: prevState.filterText,
      selectedBuilding:id
    }));
  }
  manualUpdate=()=>{
    this.setState( prevState => ({
      filterText: prevState.filterText,
      selectedBuilding:prevState.id
    }));
  };
  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
            filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  </tbody>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />

                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                  data={this.props.data}
                  id = {this.state.selectedBuilding}

              />
            </div>
            <div className={"column2"}>
              <p>Fill out below to add a new building: </p>
              <AddBuilding
                data = {this.props.data}
                manualUpdate = {this.manualUpdate.bind(this)}
              />
              <p>Put the code for the building to be removed: </p>
              <RemoveBuilding
                  data = {this.props.data}
                  manualUpdate = {this.manualUpdate.bind(this)}
              />
            </div>
          </div>

          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
