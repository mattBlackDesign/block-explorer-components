import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Transaction from './Transaction'

class Transactions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, filter } = this.props

    return(
      <div>
        <h3>Transactions</h3>
        {data.map((item, i) => {
          return <Transaction filter={filter} data={item} i={i} />
        })}
      </div>
    )
  }
}

export default Transactions
