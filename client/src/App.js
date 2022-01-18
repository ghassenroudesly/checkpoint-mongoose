
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Pages/ContactList/ContactList";
import AddEditContact from "./Pages/AddEditPage/AddEditContact";
import Error from "./Pages/errors/Error";

import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/" component={ContactList} />
				<Route
					path={["/addContact", "/editContact/:id"]}
					component={AddEditContact}
				/>
				<Route path="/*" component={Error} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
