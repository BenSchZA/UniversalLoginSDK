import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreatingIdView extends Component {
  render() {
    return (
      <div className="greeting-view">
        <div className="container">
          <div className="row">
            <div className="identicon-loading loading" />

            <div>
              <p className="user-id">
                Creating new {this.props.identityName} identity..
              </p>
              <p className="wallet-address">
                0x0000000000000000000000000000000000000000
              </p>
            </div>
          </div>
          <hr className="separator" />
          <div className="row">
            <span className="bonus-ico icon-user-plus" />
            <div>
              <strong>Creating a new account</strong>
              <p>
                You&#39;ll get 20 <em>kliks</em>
              </p>
            </div>
          </div>
          <hr className="separator" />
          <div className="row">
            <span className="bonus-ico icon-smartphone" />
            <div>
              <strong>Add a second device to increase security</strong>
              <p>
                You&#39;ll get 5 extra <em>kliks</em>
              </p>
            </div>
          </div>
          <hr className="separator" />
          <div className="row">
            <span className="icon-printer bonus-ico" />
            <div>
              <strong>Save a backup code</strong>
              <p>
                You&#39;ll get 10 extra <em>kliks</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreatingIdView.propTypes = {
  identityName: PropTypes.string
};

export default CreatingIdView;
