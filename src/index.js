// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';


class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{ this.props.cone ? 'Cone' : 'Cup' }</li>
          <li>{ this.props.size }</li>
          <li>{ this.props.scooops.length } scoops:
                { this.props.scoops.join(', ') }</li>
          <li> Ordered By
            { this.props.orderInfo.customerName } at { this.props.orderInfo.orderedAt }.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

// Validations
Order.propTypes = {
  cone: PropTypes.bool
  // Expect this to a boolean!
  size: PropTypes.string
  // Expect this to be a string!
  scoop: PropTypes.arrayOf(PropTypes.string).isRequired
  // Expect this to be an array!
  orderInfo: PropTypes.shape.isRequired({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
  // Expect this to be an object! Plus all these attributes must match as well!
};
