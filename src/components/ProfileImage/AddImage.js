import React, { Component } from 'react'

import styles from "./profileImage.module.css"
import Axios from 'axios';
 

class AddImage extends Component {

  constructor(){
    super();
    this.state = {
      file: " ",
      imagePreviewUrl: ""
    }
  }
  
  addData(data){
    Axios.request({
      method: "POST",
      url: "http://localhost:8080/uploadFile",
      data: data
    }).then(res=>{
      this.props.history.push('/')
    }).catch(err=>console.log(err));
  }

  onAddSubmit(e){
    e.preventDefault();
    const imgPrev = this.state.imagePreviewUrl.split(',')[1];
    var raw = window.btoa(decodeURIComponent(imgPrev));
    var rawLength = raw.length
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for(var i=0; i<rawLength; i++){
      array[i] = raw.charCodeAt(i);
    }
    var imge = [];
    for(var i =0; i<rawLength; i++){
      imge.push((array[i]));
    }

    const data = {
      image: imge

    }
    this.addData(data)
  }
  
  _handleImageChange(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
  }


    render() {
      let image = 'data:image/jpeg;base64,  '+this.state.image;
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Project Undertaken</h4>
                    <hr />
                    <img src={image} alt="car" />
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                    
                    <div className={styles.row}>
                        <input
                          type="file"
                          className={styles.input}
                          placeholder="profile Image"
                         accept="image/*"
                      
                          onChange={(e)=>this._handleImageChange}
                         
                        />
                  
                      </div>
                      <div>
                          <button type="submit" value="save">Upload</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default AddImage
