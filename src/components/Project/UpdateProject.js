import React, { Component } from 'react'
import styles from "./Project.module.css"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {getStoredProject, createProject} from "../../actions/ProjectActions"

class UpdateProject extends Component {

    constructor(){
        super()
        this.state = {
            id: "",
            projectIdentifier: "",
            projectTitle: "",
            keyRole: "",
            projectSummary: "",
            progress: "",
            progressrate: 0,
            startDate: null,
            endDate: null,
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.error){
            this.setState({errors: nextProps.errors})
        }
        const{
            id,
            projectIdentifier,
            projectTitle,
            keyRole,
            projectSummary,
            progress,
            progressrate,
            startDate,
            endDate,
        } = nextProps.project

        this.setState({
            id,
            projectIdentifier,
            projectTitle,
            keyRole,
            projectSummary,
            progress,
            progressrate,
            startDate,
            endDate,
        })
    }

    componentDidMount(){
        const{id} = this.props.match.params;
        this.props.getStoredProject(id, this.props.history)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const updateProject = {
            id: this.state.id,
            projectIdentifier: this.state.projectIdentifier,
            projectTitle: this.state.projectTitle,
            keyRole: this.state.keyRole,
            projectSummary: this.state.projectSummary,
            progress: this.state.progress,
            progressrate: this.state.progressrate,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        }
        this.props.createProject(updateProject, this.props.history)
    }

    render() {
        const {errors} = this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Update Project</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.projectIdentifier ? styles.invalid : styles.input}
                          placeholder="Project Identifier"
                          name="projectIdentifier"
                          value = {this.state.projectIdentifier}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.projectIdentifier}</p>
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.projectTitle ? styles.invalid : styles.input}
                          placeholder="Project Title"
                          name="projectTitle"
                          value = {this.state.projectTitle}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.projectTitle}</p>
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.keyRole ? styles.invalid : styles.input}
                          placeholder="Key Role"
                          name="keyRole"
                          value = {this.state.keyRole}
                          onChange={this.onChange}
                        />
                        <p  className={styles.invalid}>{errors.keyRole}</p>
                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.progress ? styles.invalid : styles.input}
                          placeholder="Progress"
                          name="progress"
                          value = {this.state.progress}
                          onChange={this.onChange}
                        >
                        <option value={0}>Not Started</option>
                        <option value={1}>Started</option>
                        <option value={2}>In Progress</option>
                        <option value={3}>Completed</option>
                        </select>
                        <p className={styles.invalid}>{errors.progress}</p>

                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.progressrate ? styles.invalid : styles.input}
                          placeholder="progressrate"
                          name="progressrate"
                          value = {this.state.progressrate}
                          onChange={this.onChange}
                        >
                        <option value={0}>0</option>
                        <option value={1}>25</option>
                        <option value={2}>50</option>
                        <option value={3}>75</option>
                        <option value={3}>100</option>
                        </select>
                        <p className={styles.invalid}>{errors.progressrate}</p>

                      </div>
                      <div className={styles.row}>
                        <textarea
                        type="text"
                          className={errors.projectSummary ? styles.invalid : styles.input}
                          placeholder="Project Summary"
                          name="projectSummary"
                          value = {this.state.projectSummary}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{errors.projectSummary}</p>
                      </div>
                                  
                      
                      <h4>Start Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="startDate"
                          value = {this.state.startDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>Estimated End Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="endDate"
                          value = {this.state.endDate}
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

UpdateProject.propTypes = {

    getStoredProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
})

export default connect(mapStateToProps, {getStoredProject, createProject})(UpdateProject)