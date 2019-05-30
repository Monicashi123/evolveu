import React from 'react'
import CityController from './CityController'
import CityList from "./CityList"
import './AccountsComp.css'

class CreateCity extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	comm:  new CityController(),
        	name:null,
        	latitude: null, 
            longitude: null, 
            population:0,
        	mostNorthern: '',
        	mostSouthern: '',
        	totPop: 0,
            output: null,
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick (event) {          
        if(event.target.id ==="name"){
                this.setState({
                    name: event.target.value
                });     
                console.log("this account",this.state.name)         
        }

        else if(event.target.id ==="latitude") {
            this.setState({
                latitude: event.target.value
            });
        }  
        else if(event.target.id ==="longitude") {
                this.setState({
                longitude: event.target.value
            });
        } 
        else if(event.target.id ==="population") {
                this.setState({
                population:  Number(event.target.value)
            });
        } 
        
    }

    onMovedIn = (id, amount) => {
        console.log('onMovein', id)
        const arr = this.state.comm;
        arr.commMovedIn(id, amount);
        this.setState({
          comm: arr,
        })
      }

    onMovedOut = (id, amount) => {
  
        const  arr = this.state.comm;
        arr.commMovedOut(id, amount);
        this.setState({
          comm: arr,
        })
    }

    onCreate = ()=> {
        const commObj= this.state.comm;
        commObj.add(this.state.name,this.state.latitude, this.state.longitude, this.state.population)
        console.log("oncreate log", commObj)
        // console.log('most Southern:',this. state.mostSouthern )
        this.setState({
            counter: this.state.counter + 1,
            mostNorthern: commObj.getMostNorthern(),
            mostSouthern: commObj.getMostSouthern(), 
            totPop: commObj.getPopulation(),           
      })         
    }        

    popStatus = () => {
        const commObj= this.state.comm;
        this.setState({
     
            totPop: commObj.getPopulation(),  
        })
     

    }

    handleDelete =(id) => {         
        const commObj= this.state.comm;       
        commObj.deleteCity(id);
        this.setState({
          comm: commObj,
        })
        this.popStatus()
                      
    }

    onShowInfo = (id) => {
        const commObj= this.state.comm;       
        let info = commObj.showInfo(id);
        console.log(info);
        this.setState({
            output: info,
        })
        
    }

    render() {
        const cityHolder = this.state.comm.cityArray;
        const renderList = cityHolder.map(item => {
            return <CityList key={item.id}
                             commObj={item}
                             delete= {this.handleDelete}
                             updatePop ={this.popStatus}
                             onMovedin = {this.onMovedIn} 
                             onMovedOut = {this.onMovedOut}  
                             onShowInfo = {this.onShowInfo}
                             output = {this.state.output}
                    />
        })

      return (
            <div>
              <h2 id="BtnCreateAcct" className="CreateAcct">
              Create a new community now 

              </h2>
                <div className='cardContainer'>                  
                    <div  className= 'typeSelect' >                         
                        <form>City Name: 
                            <input className= 'input'
                                id="name"
                                name="cityName"                                                                          
                                placeholder="Please enter the city name" 
                                onChange={this.handleClick}                             
                            />
                            <br/>                                                                           
                            Latitude:
                            <input className= 'input'
                                id="latitude"
                                name="latitude" 
                                type="number"                        
                                placeholder="Please enter the latitude" 
                                onChange={this.handleClick}  
                            />         
                            <br/>                                                                           
                            Longitude:
                            <input className= 'input'
                                id="longitude"
                                name="longitude" 
                                type="number"                        
                                placeholder="Please enter the longitude" 
                                onChange={this.handleClick}  
                            />    
                            <br/>                                                                           
                            Population:
                            <input className= 'input'
                                id="population"
                                name="population" 
                                type="number"                        
                                placeholder="Please enter the population" 
                                onChange={this.handleClick}  
                            />                                                             
                        </form>                  
                            <button id="BtnCreateCity" onClick={this.onCreate}  className="Button" > Create New City </button>   
                        
                    </div>   
                        <div>   
                            <p>Most southern city: {this.state.mostSouthern}</p>            
                            <p>Most northern city: {this.state.mostNorthern}</p>
                            <p>Total population: {this.state.totPop}</p>
                        </div>           
                </div>
               {renderList}
            </div>
        )
    }

}

export default CreateCity;