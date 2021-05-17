import { useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom"

function Create() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }
    return (
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Your Message</p>
                        <textarea />
                    </label>
                    <label>
                        <p>Your Passphrase</p>
                        <input />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
                {submitting &&
                    <p>Creating message....</p>
                }
            </form>
        </div>
    )
}

export default Create


