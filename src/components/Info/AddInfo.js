import React, { Component } from 'react'
import styles from "./Info.module.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createInfo} from "../../actions/InfoActions"

class AddInfo extends Component {

    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            occupation: "",
            phone: "",
            email: "",
            summary: "",
            created: "",
            lastUpdated: "",
            street: "",
            city: "",
            state: "",
            country:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //Life cycle hooks
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({errors: nextProps.errors})
      }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
       
    }
    
    
    onSubmit(e){
        e.preventDefault();
        const newInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            occupation: this.state.occupation,
            phone: this.state.phone,
            email: this.state.email,
            summary: this.state.summary,
            created: this.state.created,
            lastUpdated: this.state.lastUpdated,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country:this.state.country,
            image: this.state.image
        }

        this.props.createInfo(newInfo, this.props.history)
  
    }
  
    render() {
      const {errors} =this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create User Info</h4>
                    <hr />
                    <form onSubmit={this.onSubmit} >
                    <div className={styles.row}>
                      <input type="file" onChange={this.fileselectedHandler} />
                    
                      </div>
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
                          onChange={this.onChange}
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
                        type="text"
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
                      
                      
                      <h4>Start Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="created"
                          value = {this.state.created}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>Estimated End Date</h4>
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

AddInfo.propTypes = {
  createInfo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})
export default connect(mapStateToProps, {createInfo})(AddInfo);