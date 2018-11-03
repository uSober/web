import * as React from 'react';
import './SelfieClassifier.css'
import Camera from 'react-html5-camera-photo';
import { Button } from 'antd';

import 'react-html5-camera-photo/build/css/index.css';

export class SelfieClassifier extends React.Component {
  state = {
    cameraOn: false
  }
  render() {
    const {cameraOn} = this.state
    const camera = cameraOn ? 
      <Camera onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri) } }/> : 
      <Button type="primary" shape="circle" icon="camera" size='large' onClick={this.toggleCamera}/>
    return (
      <div>
        This is the SelfieClassifier
        <div>{camera}</div>
      </div>
    )
  }
  toggleCamera = () => {
   const {cameraOn} = this.state
   this.setState({cameraOn: !cameraOn}) 
  }
  onTakePhoto = (dataUri) => {
    this.toggleCamera()
    // Do stuff with the dataUri photo...
  }

}

export default SelfieClassifier
