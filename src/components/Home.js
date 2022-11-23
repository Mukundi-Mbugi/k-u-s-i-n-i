import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

function Home() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">K U S I N I</Navbar.Brand>
            </Container>

        </Navbar>
    </div>
  )
}

export default Home