import React, { Component } from 'react'
import classes from "./Work.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {createWork} from "../../actions/WorkActions"


class AddWork extends Component {

    constructor(){
        super()
        this.state = {
        companyName: "",
        identifier: "",
        jobTitle: "",
        jobDescription: "",
        city: "",
        state: "",
        country: "",
        startDate: "",
        endDate: "",
        errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newWork = {
        companyName: this.state.companyName,
        jobTitle: this.state.jobTitle,
        jobDescription: this.state.jobDescription,
        identifier: this.state.identifier,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        }
        this.props.createWork(newWork, this.props.history)
    }

    render() {
        const {errors} = this.state
        return (
            <div>
                 <div className={classes.info}>
              <div className={classes.container}>
                <div className={classes.cover}>
                  <div className={classes.col}>
                    <h4>Create Work Experience</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.identifier ? classes.invalid : classes.input}
                          placeholder="identifier"
                          name="identifier"
                          value = {this.state.identifier}
                          onChange={this.onChange}
                         
                        />
                         <p className={classes.invalid}>{errors.companyName}</p>
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.companyName ? classes.invalid : classes.input}
                          placeholder="Company Name"
                          name="companyName"
                          value = {this.state.companyName}
                          onChange={this.onChange}
                         
                        />
                         <p className={classes.invalid}>{errors.companyName}</p>
                      </div>

                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.jobTitle ? classes.invalid : classes.input}
                          placeholder="Job Title"
                          name="jobTitle"
                          value = {this.state.jobTitle}
                          onChange={this.onChange}
                        />
                        <p  className={classes.invalid}>{errors.jobTitle}</p>
                      </div>
                      <div className={classes.row}>
                        <textarea
                          type="textarea"
                          className={errors.phone ? classes.invalid : classes.input}
                          placeholder="Job Description"
                          name="jobDescription"
                          value = {this.state.jobDescription}
                          onChange={this.onChange}
                        />
                        <p className={classes.invalid}>{errors.jobDescription}</p>

                      </div>
                     
                      <h4>Address</h4>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="City"
                          name="city"
                          value = {this.state.city}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="State"
                          name="state"
                          value = {this.state.state}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="Country"
                          name="country"
                          value = {this.state.country}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <h4>Start Date</h4>
                      <div className={classes.row}>
                        <input
                          type="date"
                          className={classes.input}
                          name="startDate"
                          value = {this.state.startDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>End Date</h4>
                      <div className={classes.row}>
                        <input
                          type="date"
                          className={classes.input}
                          name="endDate"
                          value = {this.state.endDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <input
                        type="submit"
                        className={classes.button}
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
AddWork.propTypes = {
    createWork: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, {createWork}) (AddWork)