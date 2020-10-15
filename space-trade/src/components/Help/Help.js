import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import styled from "styled-components";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from "../../assets/logoWhite.png";
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import controlPanel from "../../assets/images/controlPanel.png";
import menuPanel from "../../assets/images/menu.png";
import dashboard from "../../assets/images/dashboard.png";
import {
	Link
} from "react-router-dom";
const HelpCard = styled.div`
	width: 49%;
	height: auto;
	min-height: 400px;
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	background-color: rgba(50, 79, 123, 0.25);
	margin-bottom: 20px;
	@media only screen and (max-width:900px){
		width: 100%
	}
`;
const HelpCardTitle = styled.h3`
	width: 100%;
	padding-left: 20px;
	font-size: 1.3em;
	margin: 0;
	margin-bottom: 30px;
	border-left: 2px solid rgba(250, 250, 250, 0.4);
	font-weight: 100;

`;
const useStyles = makeStyles((theme) => ({
	mainContainer: {
		width: "calc( 100% - 55px)",
		height: "calc(100% - 73px)",
		padding: "20px",
		position: "absolute",
		bottom: "0",
		right: "0",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		alignContent: "flex-start",
		justifyContent: "space-evenly",
		["@media only screen and (max-width:900px)"]: {
			width: "100%"
		}
	},
	cardImg:{
		width: "49%",
		height: "auto",
		borderRadius: "40px",
		boxShadow: "-5px 5px 20px rgba(255, 255, 255, 0.2)"

	},
	explanation:{
		width: "49%",
		height: "100%",
		marginLeft: "10px",
		fontSize: "0.9em",
		fontWeight: "100"
	}
}));

export default function VerticalMenu() {
	const classes = useStyles();

	return (
		<main className={classes.mainContainer}>
			<HelpCard>
				<HelpCardTitle>Control Panel</HelpCardTitle>
				<img src={controlPanel} className={classes.cardImg}/>
				<p className={classes.explanation}>
					In the panel control, you will find the main control options about ypur account.<br/>
					The message recived, notifications, account options, and the balance that you have.
				</p>
			</HelpCard>
			<HelpCard>
				<HelpCardTitle>Menu Panel</HelpCardTitle>
				<img src={menuPanel} className={classes.cardImg}/>
				<p className={classes.explanation}>
					You can expand the menu to access to the Dashboard, your Portfolio, and your total income<br/>
					At the bottom of the vertical menu, you can logOut, and access to the <span style={{color: "rgb(39,210,218,1)"}}>Help</span> page.
				</p>
			</HelpCard>
			<HelpCard>
				<HelpCardTitle>Dashboard</HelpCardTitle>
				<img src={dashboard} className={classes.cardImg}/>
				<p className={classes.explanation}>
					In the <span style={{color: "rgb(39,210,218,1)"}}>Dashboard</span> you can see the charts of the current top 3 winners at the moment.<br/>
					Below the charts, you can see a brief table of your portfolio showing your last 5 stocks purchased.
				</p>
			</HelpCard>
			<HelpCard>
				<HelpCardTitle>Portfolio</HelpCardTitle>
				<img src={controlPanel} className={classes.cardImg}/>
				<p className={classes.explanation}>
					The <span style={{color: "rgb(39,210,218,1)"}}>Portfolio</span> page you can see your stocks purchased. <br/>
					On this page, you will be able to sell your stocks, choosing the number of stocks to be sold.
				</p>
			</HelpCard>
		</main>		
	);
}