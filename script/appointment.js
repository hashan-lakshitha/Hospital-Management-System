const Appointment = () => {
    const tempAppointment = {
        patientName: $('#patientName').val(),
        doctorName: $('#doctorName').val(),
        date: $('#date').val(),
        time: $('#time').val(),

    };
    console.log(tempAppointment);

    const database = firebase.firestore();
    database.collection('appointments')
        .add(tempAppointment)
        .then((Response) => {
            console.log(Response);
        }).catch((errer) => {
            console.log(errer);
        });
}

const loadAppointment = () => {
    const firestore = firebase.firestore();
    firestore.collection('appointments')
        .get().then((result) => {
            result.forEach((record) => {
                const data = record.data();
                console.log(data);
                const row = `
    <tr>
        <td scope="col">${data.patientName}</td>
        <td scope="col">${data.doctorName}</td>
        <td scope="col">${data.date}</td>
        <td scope="col">${data.time}</td>

    </tr>
`;
                $('#table-body').append(row);

            })
        })
}

