import React, { Component } from "react";
import { connect } from "react-redux";
import {addContact,deleteContact} from "../actions/Actions";
import LOGO from "../data/logo.png";
import Form from  "./Form";
import RenderContacts from "./RenderContacts";

class App extends Component{

    state={
        contact:{
            names:null,
            college:null,
            Email:null,
            phno:null,
            place:null,
        },
        update:false
    }
    //To Add a new Contact
    addContact=(event)=>{

        if(this.state.update){
            this.setState({
                update : ! this.state.update
            });
        }
        //Dispatch the action to add contact
        this.props.addContact(this.state.contact); 
        // Local state of contact properties is being set to null after adding a contact
        let scontact = this.state.contact;
        for (const item in this.state.contact) {
            
            scontact[item] = null;
           
          } 
          this.setState({
                contact:scontact
        })

    }

    // To Delete a existing  contact

    deleteContact=(id)=>{

        this.props.deleteContact(id);  //Dispatch the action to delete contact
        
    }

    // To update a existing contact
    updateContact =(contact)=>{
        this.setState({
            update : ! this.state.update
        });
        for (const item in contact) {
            if(item==="id") continue;
            document.getElementById(item).value=contact[item];
          }
          
        let scontact = {};
        for (const item in contact) {
            if(item==="id") continue;
            scontact[item]=document.getElementById(item).value;
          }
        
        this.setState({
            contact :scontact
        })
        this.props.deleteContact(contact.id); 
    }

    // Storing the input data in the local state
    handleChange= event =>{

            let item=event.target.id;
            let scontact = this.state.contact;
            scontact[item]=event.target.value;
            this.setState({
                contact :scontact
            })
            
        }
  
    render(){
        return(
            <div className=" App m-auto container-fluid">
                <img src={LOGO} alt="" className="img-fluid logo"/>
                <Form 
                addContact={this.addContact} 
                handleChange={this.handleChange}
                state={this.state}
                 />
                <RenderContacts 
                contacts={this.props} 
                deleteContact={this.deleteContact} 
                updateContact={this.updateContact}
                />    
            </div>
        )
    }

}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
function mapStateToProps(state){
  
    return {
        contacts : state
    }
}

export default connect(mapStateToProps,{addContact,deleteContact})(App);