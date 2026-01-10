function dispMsg(){
    // const user={
    //     name:"kay",
    //     email:"k@gmail.com",
    //     pass:"1111"
    // }
    //console.log(user.name);
    // const arr=["A","B","C","D"];
    // console.log(arr[3]);
    const users=[{name:"kay",email:"k@gmail.com",pass:"1111"},{name:"abhi",email:"A@gmail.com",pass:"2222"},{name:"sai",email:"S@gmail.com",pass:"3333"}]
    let uemail=document.getElementById("email").value;
    let upass=document.getElementById("pass").value;
    if(uemail==="k@email.com" && upass==="1111"){
        res.innerHTML="Welcome";
        window.open("https://www.google.com");
    }else{
        res.innerHTML="Check your credintials.";
    }
}

function showLoginForm(){
    let str=`
    <div align="center">
    <h2>LOGIN</h2>
    <div class="l-box">
        <h4><p><label id="res"></label></p></h4>
        <p><input type="text" id="email" placeholder="Email"></p>
        <p><input type="password" id="pass" placeholder="Password"></p>
        <p><button class="l-btn" onClick="check()"><b>Login</b></button></p><hr>
        <P>New user?</p>
        <p><button class="c-btn" onClick="showRegisterForm()"><b>Sign In</b></button></p>
    </div>
    
    </div>
    `
    root.innerHTML=str;
}

function showRegisterForm(){
    let str=`
    <div align="center">
    <h2 align:center>SIGN IN</h2>
    <div class="l-box">
        <h4><p><label id="res"></label></p></h4>
        <p><input type="text" id="name" placeholder="Username"></p>
        <p><input type="text" id="email" placeholder="Email" ></p>
        <p><input type="password" id="pass" placeholder="Password"></p>
        <p><input type="password" id="conpass" placeholder="Confirm Password"></p>
        <button class="c-btn" onClick="addUser()"><b>Sign In</b></button><hr>
        <P>ALready a member?</p>
        <p><button class="l-btn" onClick="showLoginForm()"><b>Login</b></button></p>
    </div>
    
    </div>
    
    `
    root.innerHTML=str;
}
let users=[];
function addUser(){
    let uname=document.getElementById("name").value;
    let uemail=document.getElementById("email").value;
    let upass=document.getElementById("pass").value;
    let user={name:uname,email:uemail,password:upass};
    users.push(user);
    showLoginForm();
    console.log(users);
}

function check(){
    let uemail=document.getElementById("email").value;
    let upass=document.getElementById("pass").value;
    let f=0;
    for(let i=0;i<users.length;i++){
        if(uemail===users[i].email){
            f=1;
            if(upass===users[i].password){
                res.innerHTML="Welcome..";
                windows.open("https://praveennair.co.in/");
            }else{
                res.innerHTML="Password incorrect";
            }
        }
    }
    if(f==0){
        res.innerHTML="Invalid email/password.";
    }
}