import Header from "./components/Header"
import ButtonLink from "./components/ButtonLink"
import Create from "./components/Create"
import Receive from "./components/Receive"
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

    return (
        <Router>
            <Route
                path='/'
                exact
                render={(props) => (
                    <>
                        <Header title="One-Time-Messages" />
                        <ButtonLink />
                    </>
                )}
            />

            <Route path='/create' component={Create} />
            <Route path='/receive' component={Receive} />
        </Router>
    )
}

export default App