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
    $('#table-body').empty();
    const firestore = firebase.firestore();
    firestore.collection('patients')
        .get().then((result) => {
            result.forEach((records) => {
                const data = records.data();
                console.log(data);
                // console.log(data.id);
                const row = `
    <tr>
                    
        <td scope="col">${data.name}</td>
        <td scope="col">${data.age}</td>
        <td scope="col">${data.gender}</td>
        <td scope="col">${data.contact}</td>
        <td scope="col">${data.address}</td>
        <td scope="col">${data.medical}</td>
        <td scope="col">
            <button class="ui red button" onclick="deleteData('${records.id})" >Delete</button>
            <button class="ui green button" onclick="updateData('${records.id}')" >UpdateRecord</button>
        </td> 
    </tr>
`;
                $('#table-body').append(row);

            })
        })
}



patientId = undefined;
const updateData = (id) => {
    patientId=id;
    const firestore = firebase.firestore();
    firestore.collection('patients')
        .doc(patientId)
        .get().then((response) => {
            if (response.exists) {
                const data = response.data();
                     $('#name').val(data.name);
                    $('#age').val(data.age);
                    $('#gender').val(data.gender);
                    $('#address').val(data.address);
                    $('#contact').val(data.contact);
                    $('#medical').val(data.medical)
            }
        })

}

const updateRecord = () => {
    if (patientId) {
        const firestore = firebase.firestore();
        firestore
            .collection('patients')
            .doc(patientId)
            .update({
                name: $('#name').val(),
                age: $('#age').val(),
                gender: $('#gender').val(),
                contact: $('#address').val(),
                address: $('#contact').val(),
                medical: $('#medical').val()
            }).then(() => {
                patientId = undefined;
                loadPatient();
            })
    }
}


const deleteData = (id) => {

}






// <td><input type="checkbox"></td>