import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import ScheduleTable from '../../../Components/ScheduleTable';
import './styles.scss';

export default function SDSchedule() {

    const [roomAFriday, setRoomAFriday] = useState([]);
    const [roomASaturday, setRoomASaturday] = useState([]);
    const [roomASunday, setRoomASunday] = useState([]);
    const [roomBFriday, setRoomBFriday] = useState([]);
    const [roomBSaturday, setRoomBSaturday] = useState([]);
    const [roomBSunday, setRoomBSunday] = useState([]);
    const [roomCFriday, setRoomCFriday] = useState([]);
    const [roomCSaturday, setRoomCSaturday] = useState([]);
    const [roomCSunday, setRoomCSunday] = useState([]);


    useEffect(() => {
        axios.get("https://sheet.best/api/sheets/d62476f3-97dc-4dde-b7d9-4a7440dd422f/tabs/Workshops-a")
        .then(response => {
            setRoomAFriday(response.data.filter((workshop) => {
               return workshop.Room === 'A' && workshop.Day === 'Friday'
            }))
            setRoomASaturday(response.data.filter((workshop) => {
               return workshop.Room === 'A' && workshop.Day === 'Saturday'
            }))
            setRoomASunday(response.data.filter((workshop) => {
               return workshop.Room === 'A' && workshop.Day === 'Sunday'
            }))
            setRoomBFriday(response.data.filter((workshop) => {
               return workshop.Room === 'B' && workshop.Day === 'Friday'
            }))
            setRoomBSaturday(response.data.filter((workshop) => {
               return workshop.Room === 'B' && workshop.Day === 'Saturday'
            }))
            setRoomBSunday(response.data.filter((workshop) => {
               return workshop.Room === 'B' && workshop.Day === 'Sunday'
            }))
            setRoomCFriday(response.data.filter((workshop) => {
               return workshop.Room === 'C' && workshop.Day === 'Friday'
            }))
            setRoomCSaturday(response.data.filter((workshop) => {
               return workshop.Room === 'C' && workshop.Day === 'Saturday'
            }))
            setRoomCSunday(response.data.filter((workshop) => {
               return workshop.Room === 'C' && workshop.Day === 'Sunday'
            }))
            console.log(response.data);
        })
    }, [])

    return (
        <>
        
        <Container className='scheduleContainer'>
            <div className='pageHeader'>
                <h1>BIG San Diego 2023 Workshop Schedule</h1>
            </div>
            <Row>
                <h3>Friday Schedule</h3>
                <div className="roomTitle col-sm-4">
                    <h6>Room A</h6>
                    <ScheduleTable data={roomAFriday} />
               </div>
               <div className="roomTitle col-sm-4">
                    <h6>Room B</h6>
                    <ScheduleTable data={roomBFriday} />
                </div>
                <div className="roomTitle col-sm-4">
                    <h6>Room C</h6>
                    <ScheduleTable data={roomCFriday} />
                </div>
            </Row>
            <Row>
                <h3>Saturday Schedule</h3>
                <div className="roomTitle col-sm-4">
                    <h6>Room A</h6>
                    <ScheduleTable data={roomASaturday} />
               </div>
               <div className="roomTitle col-sm-4">
                    <h6>Room B</h6>
                    <ScheduleTable data={roomBSaturday} />
                </div>
                <div className="roomTitle col-sm-4">
                    <h6>Room C</h6>
                    <ScheduleTable data={roomCSaturday} />
                </div>
            </Row>
            <Row>
                <h3>Sunday Schedule</h3>
                <div className="roomTitle col-sm-4">
                    <h6>Room A</h6>
                    <ScheduleTable data={roomASunday} />
               </div>
               <div className="roomTitle col-sm-4">
                    <h6>Room B</h6>
                    <ScheduleTable data={roomBSunday} />
                </div>
                <div className="roomTitle col-sm-4">
                    <h6>Room C</h6>
                    <ScheduleTable data={roomCSunday} />
                </div>
            </Row>
        </Container>
 

        </>
    )
}