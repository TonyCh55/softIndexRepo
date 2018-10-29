import React from 'react';
import {connect} from 'react-redux';
import {firstNameSort, lastNameSort, phoneSort, ageSort} from '../../redux/actions/userArrActions';
import styles from './Table.css'
import Tr from './Tr'

const Tadble = (props) => {
    return (
        <table className={styles.user_table}>
            <thead>
                <tr>
                    <th>First Name
                        <button onClick={props.firstNameSort}>Sort</button>
                    </th>
                    <th>Last Name
                        <button onClick={props.lastNameSort}>Sort</button>
                    </th>
                    <th>Phone number
                        <button onClick={props.phoneSort}>Sort</button>
                    </th>
                    <th>Age
                        <button onClick={props.ageSort}>Sort</button>
                    </th>
                    <th> </th>
                </tr>
            </thead>

            <tbody>
                {props.userArr.map(el => <Tr 
                    firstName={el.firstName}
                    lastName={el.lastName}
                    phone={el.phone}
                    age={el.age}
                    id={el.id}
                    key={el.id}/>)}
            </tbody>
        </table>
    );
};

const MSTP = state => {
    return {
        userArr: state.userArr
    }
}

const MDTP = dispatch => {
    return {
        firstNameSort:function() {
            dispatch(firstNameSort())
        },
        lastNameSort: function(){
            dispatch(lastNameSort())
        },
        phoneSort: function() {
            dispatch(phoneSort())
        },
        ageSort: function() {
            dispatch(ageSort())
        }
    }
}


export default connect(MSTP, MDTP)(Tadble);