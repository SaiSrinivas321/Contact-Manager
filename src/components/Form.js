import React, { Component } from 'react';

class Form extends Component{

    render(){

        const props =this.props;

        return (
          
            <div>
             
             <form className=" row p-2 form-group Cform" onSubmit={props.addContact}>

              <div className="col-auto">
              <input type="text" required className="form-control input" id="names" placeholder="Name"
              onChange={props.handleChange} />
              </div>
              <div className="col-auto">
              <input type="text" className="form-control input" id="college" placeholder="University" 
              onChange={props.handleChange} />
              </div>
              <div className="col-auto">
              <input type="email" className="form-control input" id="Email" placeholder="Email" 
              onChange={props.handleChange} />
              </div>
              <div className="col-auto">
              <input type="text"  className="form-control input" id="phno" placeholder="Phone Number"  
              onChange={props.handleChange}/>
              </div>
              <div className="col-auto">
              <input type="text" className="form-control input" id="place" placeholder="Place" 
              onChange={props.handleChange} />
              </div>
              <div className="row m-auto p-2" style={{justifyContent:"center"}}> 

             {
                 props.state.update ? (
                  <button type="submit" className="btn btn-success subbtn my-3" >
                       Update Contact</button>
                 ):( <button type="submit" className="btn btn-primary subbtn my-3">
                     Add Contact</button>)
             }
             
              </div>
          </form>
              
          </div>
      )
    }
       
    }

export default Form;