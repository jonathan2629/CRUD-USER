import React from "react";

const UserCard = ({ user, deleteUser, setuserUpdate,
	handleChangeShowModal}) => {

const handleChangeClickUpdate=()=>{
	handleChangeShowModal()
	setuserUpdate(user)
}

	return (
		<article className="user">
			<h2 className="user_title">{`${user.first_name} ${user.last_name}`}</h2>
			<ul className="user_list">
				<li className="user_item">
					<span>correo </span>
					{user.email}
				</li>
				<li className="user_item">
					<span>
						<i className="bx bx-gift"></i>birthday{" "}
					</span>
					{user.birthday}
				</li>
			</ul>
			<div className="user_container-btn">
				<button
					className="user_btn"
					onClick={() => deleteUser(user.id)}
				>
					<i className="user_btn_icon bx bx-trash"></i>
				</button>
				<button
					className="user_btn"
					onClick={handleChangeClickUpdate}
				>
					<i className="user_btn_icon bx bx-edit-alt"></i>
				</button>
			</div>
		</article>
	);
};

export default UserCard;
