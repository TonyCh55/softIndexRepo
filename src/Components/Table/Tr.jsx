import React from 'react';
import {connect} from 'react-redux';
import {deleteUser} from '../../redux/actions/userArrActions';
import styles from './Table.css';

const Tr = (props) => {

    const del = () => {
        props.deleteUser(props.id)
    }

    return (
        <tr>
            <td>{props.firstName}</td>         
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.age}</td>
            <td>
                <button className={styles.delete} onClick={del}>Delete</button>
            </td>  
       </tr>
    );
};

const MDTP = dispatch => {
    return {
        deleteUser: function(id) {
            dispatch(deleteUser(id))
        }
    }
}

export default connect(null, MDTP)(Tr);