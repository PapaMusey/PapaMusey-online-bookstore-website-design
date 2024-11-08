import React from 'react'

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        isRemembered: false,
    })


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault()
        // if (formData.password === formData.confirmPassword) {
        //     console.log("Successfully signed up")
        // }
        // else {
        //     console.log("Passwords do not match!")
        //     return; //this line prevents the code below from running since the passwords do not match
        // }
        // if (formData.isJoinNewsletter === true){
        //     console.log("Thanks for singing up for our newsletter!")
        // }
    }

    return (
        <div className='login-form-conatiner'>
            <div id='close-login-btn' className='fas fa-times'></div>
            <form onSubmit={handleClick} >
                <h3>Sign In</h3>

                <span>Username</span>
                <input
                    type="text"
                    placeholder='email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className='box'
                />
                <span>Password</span>
                <input
                    type="password"
                    placeholder='Password'
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    className='box'
                />
                <span></span>
                <div className='checkbox'>
                    <input
                        type="checkbox"
                        id="isRemembered"
                        checked={formData.isRemembered}
                        onChange={handleChange}
                        name="isRemembered"
                    />
                    <label htmlFor='isRemembered'>Remember Me </label>
                </div>
                <span></span>
                <button>Sign In</button>
                <p>forget password ? <a href=''>Click here</a></p>
                <p>Don't have an account ? <a href=''>Create one</a></p>
            </form>

        </div>
    )
}
