import "./dashboard.css";
import { use, useState } from "react";
import searchIcon from "./assets/search.svg";
import bellIcon from "./assets/bell.svg";
import yamiImg from "./assets/yami.jpg";

export function SetupTest() {
	console.log("Hello,World!");
}

function CreatePrjCard({ prjName }) {
	return (
		<div className="prj-container">
			<div className="content">
				<span className="prj-title">{prjName}</span>
				<br />
				<span className="prj-desc">
					NexusFlow is a sleek real-time collaboration platform that helps
					remote teams brainstorm, plan, and execute projects seamlessly. With
					intelligent task automation, AI-powered insights, and beautiful visual
					workflows, it eliminates chaos and boosts productivity. Designed for
					startups and creative agencies who want to move faster together.
				</span>
			</div>
			<div className="icons-container">
				<div className="icon">
					<button type="button" className="icon-btn">
						<img src={bellIcon} alt="Icon of the bell" />
					</button>
				</div>
				<div className="icon">
					<button type="button" className="icon-btn">
						<img src={searchIcon} alt="Icon of the search" />
					</button>
				</div>
				<div className="icon">
					<button type="button" className="icon-btn">
						<img src={bellIcon} alt="Icon of the bell" />
					</button>
				</div>
			</div>
		</div>
	);
}

export function DashboardUI() {
	const [firstName, SetFirstName] = useState("Saiga");
	const [lastName, SetLastName] = useState("TheNigga");
	const [username, SetUserName] = useState(`${firstName} ${lastName}`);

	function createUserName(name) {
		SetUserName(name);
	}
	return (
		<div className="container">
			<div className="sidebar">
				<div className="title-item">
					<span className="title-item-icon"></span>
					<span className="title-item-text">Dashboard</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Home</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Profile</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Messages</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">History</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Tasks</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Communities</span>
				</div>
				<br />
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Settings</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Support</span>
				</div>
				<div className="sb-item">
					<span className="item-icon"></span>
					<span className="item-text">Privacy</span>
				</div>
			</div>
			<div className="main">
				<div className="header">
					<div className="header-sec-1">
						<span className="searchbar-icon">
							<img
								src={searchIcon}
								alt="search-icon"
								className="searchbar-icon"
							/>
						</span>
						<span className="search-bar-span">
							<input type="text" id="search-bar" placeholder="Search" />
						</span>
						<span className="noti-icon">
							<img src={bellIcon} alt="" className="noti-icon" />
						</span>
						<span className="profile-icon-span">
							<img
								src={yamiImg}
								alt="Profile Visual"
								className="profile-icon"
							/>
						</span>
						<span className="username">{username}</span>
					</div>
					<div className="header-sec-2">
						<span className="profile-icon-2">
							<img
								src={yamiImg}
								alt="Profile Visual"
								className="profile-icon-2-img"
							/>
						</span>
						<div className="greeting">
							<span id="small-greeting">Hi there,</span>
							<br />
							<span>
								{username} (@{lastName})
							</span>
						</div>
						<div className="new-btn">
							<button type="button" className="header-btn">
								New
							</button>
							<button type="button" className="header-btn">
								Upload
							</button>
							<button type="button" className="header-btn">
								Share
							</button>
						</div>
					</div>
				</div>
				<div className="hero">
					<div className="myprjs">
						<span className="prj-heading">My Projects</span>
						<div className="project-container">
							<CreatePrjCard prjName="NexusFlow" />
							<CreatePrjCard prjName="Something" />
							<CreatePrjCard prjName="Everyone" />
							<CreatePrjCard prjName="Nothing" />
							<CreatePrjCard prjName="Bruiser" />
							<CreatePrjCard prjName="Assassin" />
							<CreatePrjCard prjName="Ridiculous" />
						</div>
					</div>
					<div className="right-sidebar"></div>
				</div>
			</div>
		</div>
	);
}
