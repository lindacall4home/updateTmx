import React, { Component } from 'react';
import { readFile } from '../actions';
import { connect } from 'react-redux';
var FileInput = require('react-simple-file-input').default;


class OpenTmx extends Component {

  render(){
    return(
      <FileInput
        readAs='text'
        onLoad={(event, file) => this.props.onSelectFile(event, file)}

      />
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
