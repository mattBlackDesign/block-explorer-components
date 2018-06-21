import React, { Component } from 'react'

class Transaction extends Component {
  constructor(props) {
    super(props)
  }

  value(val) {
    if (val === undefined) return true;
    else if (val === false) return false;
    else return false;
  }

  render() {
    const { data, filter, tableClass, i } = this.props

    return(
      <div>
        <p><b>Transaction #{i}</b></p>
        <table className={ tableClass } >
          <tbody>
            {this.value(filter.hash) &&
              <tr>
                <td>Hash</td>
                <td>{ data.hash }</td>
              </tr>
            }
            {this.value(filter.from) &&
              <tr>
                <td>From</td>
                <td>{ data.from }</td>
              </tr>
            }
            {this.value(filter.to) &&
              <tr>
                <td>To</td>
                <td>{ data.to }</td>
              </tr>
            }
            {this.value(filter.contractAddress) &&
              <tr>
                <td>Contract Address</td>
                <td></td>
              </tr>
            }
            {this.value(filter.gas) &&
              <tr>
                <td>Gas</td>
                <td>{ data.gas }</td>
              </tr>
            }
            {this.value(filter.input) &&
              <tr>
                <td>Input</td>
                <td>{ data.input }</td>
              </tr>
            }
            {this.value(filter.value) &&
              <tr>
                <td>Value</td>
                <td>{ data.value }</td>
              </tr>
            }
          </tbody>
        </table>
        <br/>
      </div>
    )
  }
}

export default Transaction
