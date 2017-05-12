import React from 'react';
import {Link} from 'react-router';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            <LinkContainer to='/chat'>
                                <NavItem>chat</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

export default App;
