import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const defaultValues = {
	email: "",
	password: "",
	first_name: "",
	last_name: "",
	birthday: "",
};

const FormUsers = ({
	createUsers,
	userUpdate,
	updateUser,
	isShowForm,
	handleChangeShowModal,
}) => {
	const { handleSubmit, register, reset } = useForm();

	const submitForm = (data) => {
		if (userUpdate) {
			updateUser(userUpdate.id, data);
		} else {
			createUsers(data);
		}
		reset(defaultValues);
	};
	useEffect(() => {
		if (userUpdate) {
			reset(userUpdate);
		}
	}, [userUpdate]);

	const titleForm = userUpdate ? "edit User" : "New User";
	const textButton = userUpdate ? "edit User" : "New User";
	return (
		<div className={`container-form ${isShowForm ? "disable-form":""}`}>
			<form className="form" onSubmit={handleSubmit(submitForm)}>
				<i
					onClick={handleChangeShowModal}
					className="form_x bx bx-x-circle"
				></i>
				<h2 className="form_title">{titleForm}</h2>
				<div className="form_div">
					<label className="form_label" htmlFor=" ">
						Email
					</label>
					<input
						className="form_input"
						placeholder="Enter Your user"
						type="email"
						{...register("email")}
					/>
				</div>
				<div className="form_div">
					<label className="form_label" htmlFor="">
						Password
					</label>
					<input
						className="form_input"
						placeholder="Enter Your password"
						type="password"
						{...register("password")}
					/>
				</div>
				<div className="form_div">
					<label className="form_label" htmlFor="">
						First name
					</label>
					<input
						className="form_input"
						placeholder="Enter Your First Name"
						type="text"
						{...register("first_name")}
					/>
				</div>
				<div className="form_div">
					<label className="form_label" htmlFor="">
						Last name
					</label>
					<input
						className="form_input"
						placeholder="Enter Your Last Name"
						type="text"
						{...register("last_name")}
					/>
				</div>
				<div className="form_div">
					<label className="form_label" htmlFor="">
						Birthday
					</label>
					<input
						className="form_input"
						type="date"
						{...register("birthday")}
					/>
				</div>
				<button className="form_btn">{textButton}</button>
			</form>
		</div>
	);
};

export default FormUsers;
