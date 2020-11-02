import React, { Component } from 'react'
import styles from "./Skill.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {createSkill} from "../../actions/SkillAction"

 class AddSkill extends Component {
     constructor(){
         super()
         this.state = {
             skillname: "",
             subname: "",
             proficiency: "",
             rating: "",
             errors:{}
         }
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
     }

     UNSAFE_componentWillReceiveProps(nextProps){
         if(nextProps.errors){
             this.setState({errors: nextProps.errors})
         }
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value})
     }

     onSubmit(e){
         e.preventDefault();
         const newSkill = {
            skillname: this.state.skillname,
            subname: this.state.subname,
            proficiency: this.state.proficiency,
            rating: this.state.rating
         }
         this.props.createSkill(newSkill, this.props.history)
     }
    render() {
        const {errors} = this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Skills</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.skillname ? styles.invalid : styles.input}
                          placeholder="Skill Name"
                          name="skillname"
                          value = {this.state.skillname}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.skillname}</p>
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.subname ? styles.invalid : styles.input}
                          placeholder="Sub-Name"
                          name="subname"
                          value = {this.state.subname}
                          onChange={this.onChange}
                        />
                        <p  className={styles.invalid}>{errors.subname}</p>
                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.proficiency ? styles.invalid : styles.input}
                          placeholder="Proficiency"
                          name="proficiency"
                          value = {this.state.proficiency}
                          onChange={this.onChange}
                        >
                        <option value={0}>Novice</option>
                        <option value={1}>Beginner</option>
                        <option value={2}>Intermidiate</option>
                        <option value={3}>Expert</option>
                        <option value={4}>GodFather</option>
                        </select>
                        <p className={styles.invalid}>{errors.proficiency}</p>

                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.rating ? styles.invalid : styles.input}
                          placeholder="rating"
                          name="rating"
                          value = {this.state.rating}
                          onChange={this.onChange}
                        >
                        <option value={0}>0</option>
                        <option value={1}>25</option>
                        <option value={2}>50</option>
                        <option value={3}>75</option>
                        <option value={4}>100</option>
                        </select>
                        <p className={styles.invalid}>{errors.rating}</p>
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

AddSkill.propTypes = {
    createSkill: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {createSkill})(AddSkill)