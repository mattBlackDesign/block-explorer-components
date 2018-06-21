import React, { Component } from 'react'
import Block from '../../components/Block'
import { Grid, Row, Col } from 'react-bootstrap'

class BlockDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blockData: {
        number: 2500875,
        hash: "0x689517e99a460ca4fbab475f3603c58492d042755784fa1632e794ac92ce496b",
        time: "Thu, 21 Jun 2018 12:13:31 GMT",
        confirmations: 5,
        gasLimit: 7506122,
        gasUsed: 1318322,
        transactions: [
          {
            hash: "0x724ffe215cfaef1d459da45f9cb458f2379f41f8f189d3f57dbc30111e721b18",
            from: "0x49293a856169d46dbf789c89b51b2ca6c7d1c4f5",
            to: "0x49293a856169d46dbf789c89b51b2ca6c7d1c4f5",
            contractAddress: "",
            gas: 30860,
            input: "494e6761676548756220446967657374206537343837663964363766326565363832643261613865653162643262323834353064336331363261663931386538303535386531383536323434343065373130313936313032393830396361336361366536383666303134663739656231323538373862323231653763633337303636313132323637626666383031303133",
            value: 0
          },
          {
            hash: "0x724ffe215cfaef1d459da45f9cb458f2379f41f8f189d3f57dbc30111e721b18",
            from: "0x49293a856169d46dbf789c89b51b2ca6c7d1c4f5",
            to: "0x49293a856169d46dbf789c89b51b2ca6c7d1c4f5",
            contractAddress: "",
            gas: 30860,
            input: "494e6761676548756220446967657374206537343837663964363766326565363832643261613865653162643262323834353064336331363261663931386538303535386531383536323434343065373130313936313032393830396361336361366536383666303134663739656231323538373862323231653763633337303636313132323637626666383031303133",
            value: 0
          }
        ]
      },
      blockDataFilter: {
        confirmations: false,
        transactions: {
          hash: false
        }
      }
    }
  }

  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Block filter={this.state.blockDataFilter} number={this.props.params.number} data={this.state.blockData} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BlockDisplay
