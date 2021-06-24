import React from 'react'

const RenderContacts = props =>{
    const {contacts}=props.contacts;
    return(
        <div className="row contacts">
            {
                contacts.map(contact=>{
                    return(
                        <div key={contact.id} className="card contact col-sm-3">
                            <div className="card-body"> 
                                <h3 className="title text-center"><i className="fas fa-user icon"></i>{contact.names}</h3>
                                <li ><i className="fas fa-university icon" title="University" ></i>{contact.college}</li>
                                <li><i className="fas fa-envelope icon" title="Email" style={{color:"red"}}></i><a href={"mailto:" + contact.Email}>{contact.Email}</a></li>
                                <li><i className="fas fa-phone icon" title="PhNo" style={{color:"green"}} ></i><a href ={"tel:+91"+contact.phno}>{contact.phno}</a></li>
                                <li><i className="fas fa-map-marker-alt icon" title="Place" style={{color:"tomato"}}></i>{contact.place}</li>
                                <li>
                
                                    <button 
                                    onClick={()=>props.updateContact(contact)}
                                    className="btn btn-outline-success me-2 Cbtns float-start">
                                    Update
                                    </button>
                                    <button 
                                    onClick={()=>props.deleteContact(contact.id)}
                                    className="btn btn-outline-danger ms-1 Cbtns float-end">
                                        Delete
                                    </button>
                                </li>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}
 export default RenderContacts;