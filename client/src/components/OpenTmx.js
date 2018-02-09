import React, { Component } from 'react';
import { readFile } from '../actions';
import { connect } from 'react-redux';
var FileInput = require('react-simple-file-input').default;


class OpenTmx extends Component {

  render(){
    return(
      <div style={ {width: '90%', height: '90%' }}>
        <label >
          <FileInput
            readAs='text'
            style={ { display: 'none' } }
            onLoad={(event, file) => this.props.onSelectFile(event, file)}

          />
          <a className="waves-effect waves-light light-blue darken-3 center btn">Open TMX</a>
        </label>
      </div>
    );
  }
}

function mapStateToProps({ tmx }) {
  return { tmx };
}


const mapDispatchToProps = dispatch => {
  return {
    onSelectFile: (event, file) => {
      console.log("selected file: ", file);
      dispatch(readFile({file: file, fileContents: event.target.result}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTmx);
