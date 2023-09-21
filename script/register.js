const register=()=>{
    const email = $('#email').val();
    const password = $('#password').val();

    // if(!email && !password){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((cred)=>{
                console.log(cred);
                console.log(cred.user);

            })
            .catch((error)=>{
                console.log(error);
            })

    }
// }



const alreadyHaveAnAccount=()=>{
    window.location.replace('login.html');
}