import React, { Component } from 'react'
import Transactions from './Transactions'

class Block extends Component {
  constructor(props) {
    super(props)
  }

  value(val) {
    if (val === undefined) return true;
    else if (val === false) return false;
    else return true;
  }

  render() {
    const { data, filter, number, tableClass } = this.props

    return(
      <div>
        <h3>Block</h3>

        <table className={ tableClass }>
          <tbody>
            {this.value(filter.number) &&
              <tr>
                <td>Block Number</td>
                <td>{ number }</td>
              </tr>
            }
            {this.value(filter.hash) &&
              <tr>
                <td>Block Hash</td>
                <td>{ data.hash }</td>
              </tr>
            }
            {this.value(filter.time) &&
              <tr>
                <td>Received Time</td>
                <td>{ data.time }</td>
              </tr>
            }
            {this.value(filter.confirmations) &&
              <tr>
                <td>Confirmations</td>
                <td>{ data.confirmations } Confirmations</td>
              </tr>
            }
            {this.value(filter.gasLimit) &&
              <tr>
                <td>Gas Limit</td>
                <td>{ data.gasLimit } m/s</td>
              </tr>
            }
            {this.value(filter.gasUsed) &&
              <tr>
                <td>Gas Used</td>
                <td>{ data.gasUsed } m/s</td>
              </tr>
            }
          </tbody>
        </table>

        <br/>

        {this.value(filter.transactions) &&
          <Transactions
            filter={filter.transactions}
            data={data.transactions}
            tableClass={tableClass}
          />
        }
      </div>
    )
  }
}

export default Block
