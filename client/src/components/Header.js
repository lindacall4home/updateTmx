import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){

      switch (this.props.tmx) {
        case null:
          return 'no file';
        default:
          return 'got file';
      }

  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue darken-3">
          <a className="left brand-logo">
            Alteryx Translation Memory
          </a>
          <ul className="right">
            <li>

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ tmx }) {
  return { tmx };
}

export default connect(mapStateToProps)(Header);
