import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'

import employees from '../data/users.json'
import { User } from "../types/user";
import { UserFields } from "../utils/constants";
import { DataContext } from "../context/data-context";

export const Employees = () => {
    const { handleShow } = useContext(DataContext)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                    <tr>
                        {UserFields.map((userField) => <th>{userField}</th>)}
                    </tr>
            </thead>
            <tbody>
                {(employees as User[]).map((employeeObject) => (
                    <tr onClick={() => handleShow(employeeObject.id)}>
                        {Object.values(employeeObject).map((employeeDetail) => {
                            if (employeeDetail && typeof employeeDetail === 'object') {
                                if ('link' in employeeDetail) {
                                    return <td ><Image fluid src={employeeDetail.link}/></td>
                                }
                                return <td>{employeeDetail.id}</td>
                            }
                            return <td>{employeeDetail ?? '-'}</td>
                        })}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
