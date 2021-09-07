
import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const MainLayout = ({children}) => {
    useEffect(async () => {
       
    }, []);
    return(
        <section className="layout">
            <Container fluid>
                <Row>
                    <Col xl={{span: 12}}  md={{span: 9}} className="p-0">
                        <div className="admin-container">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default MainLayout