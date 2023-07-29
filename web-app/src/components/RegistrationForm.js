import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/RegistrationForm.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
import axios from "axios";
import SummaryPage from "./SummaryPage";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        zipCode: '',
        landline: '',
        cellPhone: '',
        infected: false,
        conditions: [],
    });

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (name, checked) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleMultiSelectChange = (name, selectedOptions) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedOptions,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);// Convert to JSON string
        console.log('JSON Data:::::::', jsonData); // Log the JSON data
        try {
            // Send the JSON data to the backend API
            const response = await axios.post('/api/registrations', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('New registration created:', response.data);
            // Handle success or redirect to another page, etc.
        } catch (error) {
            console.error('Error creating registration:', error);
            // Handle error, show error message, etc.
        }
        return <SummaryPage/>
    };
    return (
        <Container>
        <Card className="p-4 registration-form">
            <h2 className="mb-4">COVID-19 Vaccination Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        {/* First Name */}
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                required
                                placeholder="Enter your first name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {/* Last Name */}
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                required
                                placeholder="Enter your last name"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        {/* Date of Birth */}
                        <Form.Group className="mb-3" controlId="dateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {/* City */}
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                required
                                placeholder="Enter your city"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        {/* Address */}
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                required
                                placeholder="Enter your address"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {/* Zip Code */}
                        <Form.Group className="mb-3" controlId="zipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                placeholder="Enter your zip code"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        {/* Landline */}
                        <Form.Group className="mb-3" controlId="landline">
                            <Form.Label>Landline</Form.Label>
                            <Form.Control
                                type="text"
                                name="landline"
                                value={formData.landline}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                placeholder="Enter your landline number"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {/* Cell Phone */}
                        <Form.Group className="mb-3" controlId="cellPhone">
                            <Form.Label>Cell Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="cellPhone"
                                value={formData.cellPhone}
                                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                                placeholder="Enter your cell phone number"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Infected by COVID-19 */}
                <Form.Group className="mb-3" controlId="infected">
                    <Form.Check
                        label="Infected by COVID-19"
                        name="infected"
                        checked={formData.infected}
                        onChange={(e) => handleCheckboxChange(e.target.name, e.target.checked)}
                    />
                </Form.Group>

                <Form.Group controlId="conditions">
                    <Form.Label>Previous Conditions</Form.Label>
                    <Form.Control
                        as="select"
                        name="conditions"
                        multiple
                        value={formData.conditions}
                        onChange={(e) => {
                            const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                            handleMultiSelectChange(e.target.name, selectedOptions);
                        }}
                    >
                        <option value="diabetes">Diabetes</option>
                        <option value="cardio">Cardio-Vascular problems</option>
                        <option value="allergies">Allergies</option>
                        {/* Add more options here */}
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>

                {formData.conditions.includes('other') && (
                    <Form.Group controlId="otherCondition">
                        <Form.Label>Other Condition</Form.Label>
                        <Form.Control
                            type="text"
                            name="otherCondition"
                            value={formData.otherCondition}
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        />
                    </Form.Group>
                )}

                <Button type="submit" variant="primary" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Card>
    </Container>

    );
};

export default RegistrationForm;
