import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
	const [users, setUsers] = useState();
	const [userUpdate, setuserUpdate] = useState();
	const [isShowForm, setisShowForm] = useState(false);



	//funcion para obtener todos los datos//
	const getAllUsers = () => {
		const URL = `${BASE_URL}users/`;
		axios
			.get(URL)
			.then((res) => setUsers(res.data))
			.catch((err) => console.log(err));
	};

	// funcion que CREAR un usuario
	const createUsers = (data) => {
		const URL = `${BASE_URL}users/`;
		axios
			.post(URL, data)
			.then((res) => {
				console.log(res.data);
				getAllUsers();
			})
			.catch((err) => console.log(err));
	};

	// funcion para BORRAR un usuario

	const deleteUser = (id) => {
		const URL = `${BASE_URL}users/${id}/`;
		axios
			.delete(URL)
			.then((res) => {
				console.log(res.data);
				getAllUsers();
			})
			.catch((err) => console.log(err));
	};

	const updateUser = (id, data) => {
		const URL = `${BASE_URL}users/${id}/`;
		axios
			.patch(URL, data)
			.then((res) => {

				console.log(res.data);
				getAllUsers();
				setuserUpdate();
			})
			.catch((err) => console.log(err));
	};



	const handleChangeShowModal = () => {
		setisShowForm(!isShowForm);
	};
	// se obtiene todos los usuarios al cargar el app
	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<div className="App">
			<div className="header-container">
				<h1 className="header_title">CRUD USERS</h1>
				<button onClick={handleChangeShowModal} className="header_btn">
					
					<i className="bx bx-plus"> Create New User</i>
				</button>
			</div>
			<div className="container-form disable-form">
				<FormUsers
					createUsers={createUsers}
					userUpdate={userUpdate}
					updateUser={updateUser}
					isShowForm={isShowForm}
					handleChangeShowModal={handleChangeShowModal}
				/>
			</div>
			<div className="users-containers">
				{users?.map((user) => (
					<UserCard
						key={user.id}
						deleteUser={deleteUser}
						user={user}
						setuserUpdate={setuserUpdate}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
