import React from "react";
import './LoginComponent.css';

const LoginComponent = () =>{
    return(
        <div className="home">
        <div className="judul">
        <h2>Form Login</h2>
        <br></br>
        <div class="kotak_login"> 
        <p ><h1>Tugas Pertemuan</h1></p>
        <p><h1>Ketiga</h1></p>
        <form>
        <label>Username</label>
        <input type="text" name="username" class="form_login" placeholder=" "></input>
        <br></br>
        <label>Password</label>
        <input type="text" name="password" class="form_login" placeholder=" "></input>
        <input type="submit" class="tombol_login" value="LOGIN"></input>
        <br/>
        <input type="checkbox" />remember me
        <br></br>
        <input type="submit" class="tombol_cancel" value="CANCEL"></input>
        <br/>
        <br/>
        </form>
        </div>
        </div>
        </div>
    );
    
    
    
}

export default LoginComponent;