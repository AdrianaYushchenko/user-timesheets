import React, { useContext, useEffect, useState } from 'react';
import { ListGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

import timesheets from '../data/timesheets.json'
import { Timesheets } from "../types/user";
import { DataContext } from "../context/data-context";
import { transformDate, transformTime } from "../helpers/transform-date";

import { FilterByMonth } from "./Filter";

export const TimesheetsModal = () => {
    const { show, userId, handleClose } = useContext(DataContext);
    const [userTimesheets, setUserTimesheets] = useState<Timesheets[]>([]);

    useEffect(() => {
        setUserTimesheets(timesheets.filter((timesheet: Timesheets) => userId === timesheet.userId));
    }, [userId]);

    const handleChange = (month: number) => {
        if (month) {
            setUserTimesheets(timesheets.filter((timesheet: Timesheets) => userId === timesheet.userId && month === new Date(timesheet.startTime).getMonth() + 1));
        } else {
            setUserTimesheets(timesheets.filter((timesheet: Timesheets) => userId === timesheet.userId));
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Logged Timesheets</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{maxHeight: 'calc(100vh - 210px)',overflowY: 'auto'}}>
                <FilterByMonth handleChange={handleChange} />
                <hr />

                {userTimesheets.map(({assessment, breakMinutes, minutes, startTime, endTime}) => (
                    <>
                        <h4>{transformDate(new Date(startTime))}</h4>
                        <ListGroup>
                            <ListGroup.Item><strong>Start Time</strong>: {transformTime(new Date(startTime))}</ListGroup.Item>
                            <ListGroup.Item><strong>End Time</strong>: {transformTime(new Date(endTime))}</ListGroup.Item>
                            <ListGroup.Item><strong>Assessment</strong>: {assessment}</ListGroup.Item>
                            <ListGroup.Item><strong>Break Minutes</strong>: {breakMinutes}</ListGroup.Item>
                            <ListGroup.Item><strong>Minutes</strong>: {minutes}</ListGroup.Item>
                        </ListGroup>
                    </>
                ))}
                {!userTimesheets.length && <h4>No timesheets</h4>}
            </Modal.Body>
        </Modal>
    );
};
