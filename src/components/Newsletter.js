import React from 'react'

export default function Newsletter() {
    const [formData, setFormData] = React.useState({
        email: "",
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
    }

    return (
        <section className='newsletter'>
            <form onSubmit={handleClick} >
                <h3>Subscribe for the latest Update</h3>
                <input
                    type="text"
                    placeholder='Enter your email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className='box'
                />
                <button>Subscribe</button>
            </form>
        </section>
    )
}
