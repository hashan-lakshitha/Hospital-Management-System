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
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.gender}</td>
        <td>${data.contact}</td>
        <td>${data.address}</td>
        <td>${data.medical}</td>
        <td>
            <button class="ui red button">Delete</button>
            <button class="ui green button">Update</button>
        </td>
    </tr>
`;
                $('#table-body').append(row);

            })
        })
}