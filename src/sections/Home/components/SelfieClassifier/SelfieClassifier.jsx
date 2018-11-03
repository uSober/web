import * as React from 'react';
import './SelfieClassifier.css'
import Camera from 'react-html5-camera-photo';
import { Button } from 'antd';

import 'react-html5-camera-photo/build/css/index.css';

export class SelfieClassifier extends React.Component {
  state = {
    cameraOn: true,
    image: null
  }
  render() {
    const {cameraOn} = this.state
    const camera = cameraOn ? 
      <Camera onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri) } }/>:
      <>
        <div><img alt='' src={this.state.image}/></div>
        <Button 
          type="primary" 
          shape="circle" 
          icon="camera" 
          size='large' 
          onClick={this.toggleCamera}
        />
      </>
    return (
      <div>
        This is the SelfieClassifier
        
        <div className='cameraWindow'>{camera}</div>
      </div>
    )
  }
  toggleCamera = () => {
   const {cameraOn} = this.state
   this.setState({cameraOn: !cameraOn}) 
  }
  onTakePhoto = (dataUri) => {
    this.toggleCamera()
    console.log(dataUri)
    this.setState({image: dataUri})
  }

}

export default SelfieClassifier
