import React, { PureComponent } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export class Footer extends PureComponent {
  render() {
    return (
      
        <footer> 
            <Container>
                <Row>
                    <Col className="text-center py-3">
                    Copyright &copy; Tradispline

                    </Col>
                </Row>

            </Container>
            
        </footer>
        
    )
  }
}

export default Footer