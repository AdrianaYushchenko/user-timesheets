import React from 'react';
import Form from 'react-bootstrap/Form';

import { MONTHS } from "../utils/constants";

export const FilterByMonth = ({handleChange}: {handleChange: (month: number) => void}) => {
    return (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Filter By Month</Form.Label>
            <Form.Control
                as="select"
                onChange={(e) => {
                    handleChange(Number(e.target.value) + 1)
                }}
            >
                <option value="default">Choose month</option>
                {MONTHS.map((month, index) => <option value={index}>{month}</option>)}
            </Form.Control>
        </Form.Group>
    );
};
