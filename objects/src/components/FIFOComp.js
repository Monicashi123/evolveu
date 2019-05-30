import React from 'react';
import FIFO from './FIFO';

class FIFOComp extends React.Component{
    constructor() {
    	super();
    	this.state={ 
    		array: new FIFO(),
    		show: '',
            enter: '',
      
    	}
       
    }
    onInsert = () => {
        console.log('enter');
        let aa = this.state.array;
        aa.insert(this.state.enter);
        console.log(aa);
        this.setState({
            array: aa,
            show:''
        })
    }
     screen = () => {
        return (
           <div id='insertinfo' >
               <input className='CreateAcct' onChange={this.onChange} id= 'enteritem' type='text' placeholder='please Enter a new Item'></input>
               <button className='CreateAcct' onClick={this.onInsert}>Press Button </button>
           </div>
        )
    }
    onChange = (e) => {
        if(e.target.id === 'enteritem') {
            console.log('changing', e.target.value);
            this.setState({
                enter: e.target.value
            })
        }
    }
    onStateChange = () => {
		this.setState({
			show: 'add'
		})
    }

    onFifo = () => {
        console.log('delete FIFO');
        let aa = this.state.array;
        aa.delF();
        console.log(aa);
        this.setState({
            array: aa
        })
    }

    onLifo = () => {
        console.log('delete LIFO');
        let aa = this.state.array;
        aa.delO();
        console.log(aa);
        this.setState({
            array: aa
        })
    }

    render() {
    	    const renderList = this.state.array.arr.map((item,i) => {
            return <li key={i}>{item}</li>
             })
       
             return(
                <div>
                        <div>
                                {this.state.show === 'add' && this.screen()}
                        </div>
                                
                        <div className='CreateAcct'> {renderList}  </div> 


                        <div>
                        <button  className='CreateAcct'  onClick={this.onStateChange}>Insert</button>
                        </div>
                      
                        <button  className='CreateAcct' onClick={this.onFifo}>F-OUT</button>
                        <button className='CreateAcct' onClick={this.onLifo}>L-OUT</button>
                </div>
        )
    }
}

export default FIFOComp