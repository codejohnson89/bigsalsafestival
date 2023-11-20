import Table from 'react-bootstrap/Table'

export default function ScheduleTable({data}) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Workshop</th>
                        <th>Instructor(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((workshop, index) => {
                        return (
                            <tr key={index}>
                                <td>{workshop.Time}</td>
                                <td>{workshop.Instructors}</td>
                                <td>{workshop.Class}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}