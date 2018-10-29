import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import {addUser} from '../../redux/actions/userArrActions';
import styles from './Form.css'



const required = value => value ? null : 'Required'

///VALIDATION
const nameValidation = (value) => {
    const reg = /^[a-z '-]+$/i.test(value)
    return reg ? null : 'Invalid names'
}

const phoneValidation = (value) => {
    const reg = /^\d{10}$/.test(value)
    return reg ? null : 'Invalid phone'
}

const ageValidation = (value) => {
    const reg = /^[1-9]\d{0,2}$/.test(value)
    return (value > 0 && reg) ? null : 'Invalid age' 
}

///RENDER INPUT
const renderInput = ({ input, label, type, meta: {error} }) => {
    const checking = (error) => {
        if(input.value === ''){
            return styles.empty_field
        }
        else {
            return typeof(error) === 'undefined' ? styles.valid : styles.invalid
        }
    }
    return (
        <Fragment>
            <input {...input} placeholder={label} type={type}
            className={checking(error)}/>
        </Fragment>
    )
}










class Form extends Component {

    submit(e) {
        e.preventDefault()

        const {firstName, lastName, phone, age} = this.props.inputs.values

        this.props.addUser(firstName, lastName, phone, age)

        this.props.reset('Form')
    }
    
    render() {
        const {invalid} = this.props

    return (
        <form className={styles.create_form} onSubmit={(e) => this.submit(e)}>

            <Field name='firstName' 
                label='First name'
                type='text' 
                component={renderInput} 
                validate={[required, nameValidation]}/>

            <Field name='lastName' 
                label='Last name'
                type='text' 
                component={renderInput} 
                validate={[required, nameValidation]}/>

            <Field name='phone' 
                label='Phone like 0932296739'
                type='number' 
                component={renderInput}
                validate={[required, phoneValidation]}/>

            <Field name='age'
                label='Age' 
                type='number' 
                component={renderInput}
                validate={[required, ageValidation]}/>

            <button type='submit' disabled={invalid}>Add</button>

        </form>
    )
    }
}

const MSTP = state => {
    return {
        inputs:state.form.Form,
    }
}

const MDTP = dispatch => {
    return {
        addUser: function(firstName, lastName, phone, age) {
            dispatch(addUser(firstName, lastName, phone, age))
        }
    }
}

const component = connect(MSTP, MDTP)(Form)

export default reduxForm({
    form: 'Form' // a unique identifier for this form
})(component)