const registorPatient = () => {
    const tempPatient = {
        name: $('#name').val(),
        age: $('#age').val(),
        gender: $('#gender').val(),
        contact: $('#address').val(),
        address: $('#contact').val(),
        medical: $('#medical').val(),
    };
    console.log(tempPatient);

    const database = firebase.firestore();
    database.collection('patients')
        .add(tempPatient)
        .then((Response) => {
            console.log(Response);
        }).catch((errer) => {
            console.log(errer);
        });
}

const loadPatient = () => {
    const firestore = firebase.firestore();
    firestore.collection('patients')
        .get().then((result) => {
            result.forEach((record) => {
                const data = record.data();
                console.log(data);
                const row = `
    <tr>
        <td><input type="checkbox"></td>
        <td scope="col">${data.name}</td>
        <td scope="col">${data.age}</td>
        <td scope="col">${data.gender}</td>
        <td scope="col">${data.contact}</td>
        <td scope="col">${data.address}</td>
        <td scope="col">${data.medical}</td>
        
    </tr>
`;
                $('#table-body').append(row);

            })
        })
}




/* <td scope="col">
            <button class="ui red button">Delete</button>
            <button class="ui green button">Update</button>
        </td> */