
const login=()=>{
console.log('running!')
    const email = $('#email').val();
    const password = $('#password').val();

        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((resp)=>{
            console.log(resp);
            console.log(resp.user);
            window.location.replace('dashboard.html')
        })
        .catch((error)=>{
            console.log(error);
        });





    // window.location.replace('dashboard.html');
}
const createAnAccount=()=>{
    window.location.replace('register.html');
}