import React from 'react'

class Receive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Submitting: false, res: false, message: null };

    }

    SubmitHandler = async event => {
        event.preventDefault();
        this.setState({ Submitting: true });
        const url = process.env.REACT_APP_APICREATEURL + "/" + this.state.secret_id
        await fetch(url, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "passphrase": this.state.passphrase
            })
        }).then(response => response.json()).then(data => this.setState({ data: data }));
        const status_code = this.state.data.status_code
        if (status_code === 404) {
            this.setState({ message: this.state.data.detail });
        }
        else {
            console.log(this.state.data)
            this.setState({ message: this.state.data.message });
        }
        this.setState({ Submitting: false });
        this.setState({ res: true });
        document.getElementById("create-message-form").reset();

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
                    <p>Secret ID</p>
                    <input
                        rows="4" cols="50"
                        type='text'
                        name="secret_id"
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
                        <p>Your message: <br></br> {this.state.message}</p>
                    }
                </form>
            </div>
        );
    }
}


export default Receive