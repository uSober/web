import * as React from 'react';
import './Description.css'

export class Description extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1>Disclaimer</h1>
        <img className="logo" src='icons/logo-circular.svg' alt="Logo"/>
        <div className='instructions'>
          <p className='instruction'>
          uSober has made every attempt to ensure the accuracy and reliability of the information provided by this application. However,
          the information is provided "as is" without warranty of any kind. uSober does not accept any responsibility or liability for the accuracy,
          completeness or reliability of the information contained in this application.
          </p>
          <p className='instruction'>
          No warranties, promises and/or representations of any kind, expressed or implied, are given as to the nature, standard, accuracy or otherwise of the information provided in this application
          nor to the suitability or otherwise of the information to your particular circumstances.
          </p>
          <p className='instruction'>We shall not be liable for any loss or damage of whatever nature (direct, indirect, consequential, or other) whether arising in contract, tort or otherwise,
          which may arise as a result of your use of (or inability to use) this application,
          or from your use of (or failure to use) the information provided by the application.
          </p>
        </div>
      </div>
    )
  }
}

export default Description
