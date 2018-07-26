import Parse from 'parse'
import ParseReact from 'parse-react'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const ParseComponent = ParseReact.Component(React)
mixins: [ParseReact.Mixin]


class HeaderNav extends ParseComponent {

  observe() {
    console.log('observing')
    const query = new Parse.Query('Todo')
    // query.equalTo('user', Parse.User.current())
    query.ascending('updatedAt')
    query.find().then(hello => {
      console.log(hello)
    })
    return {
      todos: query,
    }
  }

  render() {
    return (
    <Container>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
    </Container>
    )
  }
}

export default HeaderNav
