import React from 'react'

function login() {
  return (
    <div>
        <div>
            <div> 
                <h1>Login</h1>
                <form> 
                    <div>
                        <label> Email id</label>
                        <input type='text' placeholder='xyz@gmail.com'/>
                    </div>
                    <div>
                        <label> Password</label>
                        <input type='password' placeholder='password'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login