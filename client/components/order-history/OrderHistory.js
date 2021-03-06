import React from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../../store/orderhistory'
import {SingleOrder} from './SingleOrder'

export class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.userId && this.props.getOrderHistory(this.props.userId)
  }

  render() {
    const allOrders = this.props.orderHistory
    return (
      <div>
        <h3>Order History</h3>
        {allOrders &&
          allOrders.map(order => {
            return <SingleOrder key={order.id} order={order} />
          })}
      </div>
    )
  }
}

const mapState = reduxState => ({
  userId: reduxState.user.id,
  orderHistory: reduxState.orderHistory
})
const mapDispatch = dispatch => ({
  getOrderHistory: userId => dispatch(fetchOrderHistory(userId))
})

export default connect(mapState, mapDispatch)(OrderHistory)
