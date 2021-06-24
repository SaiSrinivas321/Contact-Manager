import { ADD_CONTACT,DELETE_CONTACT} from "../components/constants";

export const addContact  = ({names,college,Email,phno, place}) =>{

    const action ={
        type:ADD_CONTACT,
        names,
        college,
        Email,
        phno,
        place

    }
    return action;

}

export const deleteContact  = (id) =>{

    const action ={
        type:DELETE_CONTACT,
        id
    }
    return action;

}
