import React, { Component } from 'react'
import styles from "./Info.module.css"
import {getStoredInfo, createInfo} from "../../actions/InfoActions"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import errorReducer from '../../reducers/errorReducer'



class UpdateInfo extends Component {

    constructor(){
        super()
          this.state = { 
            id: "",
            firstName: "",
            lastName: "",
            occupation: "",
            email: "",
            phone: "",
            summary: "",
            created: "",
            lastUpdated: "",
            street: "",
            city: "",
            state: "",
            country:"",
            errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
    const { 
    id,
    firstName,
    lastName,
    occupation,
    email,
    summary,
    created,
    lastUpdated,
    street,
    phone,
    city,
    state,
    country,
    } = nextProps.info;

    this.setState({
    id,
    firstName,
    lastName,
    occupation,
    email,
    summary,
    created,
    phone,
    lastUpdated,
    street,
    city,
    state,
    country,
    })
}


    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getStoredInfo(id, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const updateInfo = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            occupation: this.state.occupation,
            email: this.state.email,
            phone: this.state.phone,
            summary: this.state.summary,
            created: this.state.created,
            lastUpdated: this.state.lastUpdated,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country:this.state.country,
        };
        this.props.createInfo(updateInfo, this.props.history)
    }
    render() {
        const {errors} =this.state
        return (
            <div>
               <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Update User Info</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.firstName ? styles.invalid : styles.input}
                          placeholder="First Name"
                          name="firstName"
                          value = {this.state.firstName}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.firstName}</p>
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.lastName ? styles.invalid : styles.input}
                          placeholder="Last Name"
                          name="lastName"
                          value = {this.state.lastName}
                          onChange={this.onChange}
                        />
                        <p  className={styles.invalid}>{errors.lastName}</p>
                      </div>
                   <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.phone ? styles.invalid : styles.input}
                          placeholder="Phone Number"
                          name="phone"
                          value = {this.state.phone}
                          disabled

                        />
                        <p className={styles.invalid}>{errors.phone}</p>

                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.email ? styles.invalid : styles.input}
                          placeholder="Email"
                          name="email"
                          value = {this.state.email}
                          onChange={this.onChange}
                        />
                         <p className={styles.invalid}>{errors.email}</p>
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.occupation ? styles.invalid : styles.input}
                          placeholder="Job Title"
                          name="occupation"
                          value = {this.state.occupation}
                          onChange={this.onChange}
                      
                        />
                        <p className={styles.invalid}>{errors.occupation}</p>
                      </div>
                      <div className={styles.row}>
                        <textarea
                        type="textarea"
                          className={errors.summary ? styles.invalid : styles.input}
                          placeholder="Job Description"
                          name="summary"
                          value = {this.state.summary}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{errors.summary}</p>
                      </div>
                      <h4>Address</h4>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Street"
                          name="street"
                          value = {this.state.street}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="City"
                          name="city"
                          value = {this.state.city}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="State"
                          name="state"
                          value = {this.state.state}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Country"
                          name="country"
                          value = {this.state.country}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      
                      
                      <h4>Date Created</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="created"
                          value = {this.state.created}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>Date Updated</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="lastUpdated"
                          value = {this.state.lastUpdated}
                          onChange={this.onChange}
                        />
                      </div>
                      <input
                        type="submit"
                        className={styles.button}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
    }
}

UpdateInfo.propTypes = {
    getStoredInfo: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    createInfo: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    info: state.info.info,
    errors: state.errors
})

export default connect(mapStateToProps, {getStoredInfo, createInfo}) (UpdateInfo)