import React from "react";
import { Row, Col, Card, Input, Button } from 'react-materialize';

import UserProfile from '../user_profile/userProfile';

const Contact = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5>Entre em contato</h5>
            <Card>
                <Row>
                    <Input placeholder="Seu email vai aqui" type="email" label="Email" s={12} />
                    <Input placeholder="Me manda uma mensagem legal ai " label="Message" s={12} />
                    <Col s={12} m={12}>
                        <Button waves='light' className="right grey darken-2">GO !</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
);

export default Contact;