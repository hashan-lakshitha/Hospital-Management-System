const registorDoctor = () => {
    const tempDoctor = {
        name: $('#name').val(),
        specialization: $('#specialization').val(),
        gender: $('#gender').val(),
        availability: $('#availability').val(),
        contact: $('#contact').val(),

    };
    console.log(tempDoctor);

    const database = firebase.firestore();
    database.collection('doctors')
        .add(tempDoctor)
        .then((Response) => {
            console.log(Response);
        }).catch((errer) => {
            console.log(errer);
        });
}

const loadDoctor = () => {
    const firestore = firebase.firestore();
    firestore.collection('doctors')
        .get().then((result) => {
            result.forEach((record) => {
                const data = record.data();
                console.log(data);
                const row = `
    <tr>
    
        <td scope="col">${data.name}</td>
        <td scope="col">${data.specialization}</td>
        <td scope="col">${data.gender}</td>
        <td scope="col">${data.availability}</td>
        <td scope="col">${data.Contact}</td>    
    </tr>
`;
                $('#table-body').append(row);

            })
        })
}

