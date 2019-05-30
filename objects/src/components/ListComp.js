import React from 'react';
import LinkedList from './LinkedList';
class ListComp extends React.Component {
   constructor() {
       super();
      
       this.state = {
           list: new LinkedList(),
           view:'',
           Subject: null,
           Amount: '',
                  
       }
   }
   onChange = (e) => {
        if (e.target.id === 'subject') {
            console.log('changing subject', e.target.value);
            this.setState({
                Subject: e.target.value
            })
        } else if (e.target.id === 'add') {
            console.log('changing amount', Number(e.target.value));
            this.setState({
                Amount: Number(e.target.value)
           })
       }
   }
   onInsert = () => {
       console.log('insert');
       let list = this.state.list;
       list.insert(this.state.Subject,this.state.Amount);
       console.log(list);
       console.log(list.current)
       this.setState({
           list: list,
           view: '',
        
       })
    }
   onInsertDisplay = () => {
        return (
           <div id='insertinfo' className='insertinfo'>
               <input onChange={this.onChange} id='subject' type='text' className='inpt' placeholder='Enter Subject'></input>
               <input onChange={this.onChange} id='add' type='number' className='inpt' placeholder='Enter Amount'></input>
               <button className='inpt' onClick={this.onInsert}> Add</button>
           </div>
        )
    }
   onStateChange = () => {
        this.setState({
            view: 'addNew'
        })
   }
   onDelete = () => {
       console.log('delete');

       let list = this.state.list;

       list.delete();

       console.log(list)
       console.log(list.current)
        this.setState({
           list: list
       })
    }
    next = () => {
     let list = this.state.list;
     list.moveToNext();
     console.log(list);
     console.log(list.current)
      this.setState({
           list: list
       })

    }
    onFirst = () => {
        console.log('first'); 
        let list = this.state.list;
         list.jumpToHead();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
     }

     onLast = () => {
         console.log('last');
         let list = this.state.list;
         list.jumpToTail();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
     }
      onPrevious = () => {
        console.log('previous');
        let list = this.state.list;
        list.movePrevious();
        console.log(list);
        console.log(list.current);
        this.setState({
            list: list
        })
     }

        

   render() {
       return(
           <div className ='link'>
                  <h2> Hello from LinkedComp </h2>
                  <div>{this.state.view === 'addNew' && this.onInsertDisplay()}</div>
               <div>
            
                   <button  className= 'CreateAcct' onClick={this.onStateChange}>Enter a new item here</button>

                   <h3>Subject : {this.state.list.current.subject}</h3>
                   <h3>Amount  : {this.state.list.current.amount}</h3>


                    <button className= 'CreateAcct'  onClick={this.onStateChange}>Insert</button>
                    <button  className= 'CreateAcct' onClick={this.onDelete}>Delete</button>
                 
               </div>
               <div >

                     <button  className= 'CreateAcct'  onClick={this.onFirst}>First</button>

                     <button  className= 'CreateAcct' onClick={this.onPrevious}>Previous</button>
                                                     
                     <button  className= 'CreateAcct' onClick={this.next}>Next</button>

                     <button  className= 'CreateAcct' onClick={this.onLast}>Last</button>
                  
                     <br/>
                                         
                         
               </div>
           </div>
       )
   }
}
export default ListComp

