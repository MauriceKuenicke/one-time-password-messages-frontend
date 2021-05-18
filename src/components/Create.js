import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Submitting: false, res: false, message_id: null };

    }

    SubmitHandler = async event => {
        event.preventDefault();
        try {
            this.setState({ Submitting: true });
            await fetch(process.env.REACT_APP_APICREATEURL, {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "message": this.state.message,
                    "passphrase": this.state.passphrase
                })
            }).then(response => response.json()).then(data => this.setState({ message_id: data.id }));
            this.setState({ Submitting: false });
            this.setState({ res: true });
            document.getElementById("create-message-form").reset();
        }
        catch (e) {
            console.log(e)
        }
    }

    ChangeHandler = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({ [key]: val });
    }
    render() {
        return (
            <div className="create-form">
                <form id="create-message-form" onSubmit={this.SubmitHandler}>
                    <p>Message</p>
                    <textarea
                        rows="4" cols="50"
                        type='text'
                        name="message"
                        onChange={this.ChangeHandler}
                    />
                    <p>Passphrase</p>
                    <input
                        type='text'
                        name="passphrase"
                        onChange={this.ChangeHandler}
                    />
                    <p></p>
                    <input
                        type='submit'
                    />
                    {this.state.Submitting &&
                        <p>Creating message....</p>
                    }
                    {this.state.res &&
                        <p>Copy this message ID: <br></br> {this.state.message_id}</p>
                    }
                </form>
            </div>
        );
    }
}


export default Create


