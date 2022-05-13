import React, { Component } from "react";
import {Link,NavLink} from "react-router-dom";
//Import Image
// import logoMain from "../../assets/images/fastflight.png"
// import secondLogo           from "../../assets/images/fastwhite.png"

class HeaderTwo extends Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    render() {
        return (
            <>
            	{/* <!-- Header Area Start  --> */}
	<header class="header">
		<div class="overlay"></div>
		{/* <!-- Top Header Area Start --> */}
		<section class="top-header">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="content">
							<div class="left-content">
								<ul class="left-list">
									<li>
										<p>
											<i class="fas fa-headset"></i>	Support
										</p>
									</li>
								</ul>
								<ul class="top-social-links">
									<li>
										<a href="#">
											<i class="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fab fa-pinterest-p"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fab fa-linkedin-in"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fab fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
							<div class="right-content">
								<ul class="right-list">
									<li>
										<div class="language-selector">
											<select name="language" class="language">
												<option value="1">EN</option>
												<option value="2">IN</option>
												<option value="3">BN</option>
											</select>
										</div>
									</li>
									<li>
										<div class="notofication"  data-toggle="modal" data-target="#usernotification">
											<i class="far fa-bell"></i>
										</div>
									</li>
									<li>
										<div class="message"  data-toggle="modal" data-target="#usermessage">
											<i class="far fa-envelope"></i>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- Top Header Area End --> */}
		{/* <!--Main-Menu Area Start--> */}
		<div class="mainmenu-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">                 
						<nav class="navbar navbar-expand-lg navbar-light">
							<Link to={`${process.env.PUBLIC_URL}`}>
								<img style={{ height: '70px'}} src="assets/images/logo1.png" alt=""/>
							</Link>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
								aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse fixed-height" id="main_menu">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item dropdown">
										<Link to={`${process.env.PUBLIC_URL}/marketplace`} class="nav-link active">
											MARKETPLACE
										</Link>
										{/* <ul class="dropdown-menu" >
											<li><a class="dropdown-item" href="index.html"> <i class="fa fa-angle-double-right"></i>Home 1</a></li>
											<li><a class="dropdown-item" href="index2.html"> <i class="fa fa-angle-double-right"></i> Home 2</a></li>
											<li><a class="dropdown-item" href="index3.html"> <i class="fa fa-angle-double-right"></i> Home 3</a></li>
											<li><a class="dropdown-item" href="index4.html"> <i class="fa fa-angle-double-right"></i> Home 4</a></li>
											<li><a class="dropdown-item" href="index5.html"> <i class="fa fa-angle-double-right"></i> Home 5</a></li>
										</ul> */}
									</li>
									<li class="nav-item">
										<Link activeClassName="active" to={`${process.env.PUBLIC_URL}/builder`} class="nav-link">BUILDER</Link>
									</li>
									<li class="nav-item">
										<Link activeClassName="active" to={`${process.env.PUBLIC_URL}/docs`} class="nav-link">DOCS</Link>
									</li>
									<li class="nav-item">
									<Link to={`${process.env.PUBLIC_URL}/events`} class="nav-link">EVENTS</Link>
									</li>
									<li class="nav-item dropdown">
									<Link to={`${process.env.PUBLIC_URL}/dao`} class="nav-link" href="#">
											DAO
										</Link>
										{/* <ul class="dropdown-menu" >
											<li><a class="dropdown-item" href="about.html"> <i class="fa fa-angle-double-right"></i>About</a></li>
											<li><a class="dropdown-item" href="bonuse-page.html"> <i class="fa fa-angle-double-right"></i>Bonuse</a></li>
											<li><a class="dropdown-item" href="ticket-page.html"> <i class="fa fa-angle-double-right"></i>Ticket Page</a></li>
											<li><a class="dropdown-item" href="raffles-details.html"> <i class="fa fa-angle-double-right"></i>Raffles Details</a></li>
											<li><a class="dropdown-item" href="games_details.html"> <i class="fa fa-angle-double-right"></i>Games Details</a></li>
											<li><a class="dropdown-item" href="tournaments2.html"> <i class="fa fa-angle-double-right"></i>Tournaments Details</a></li>
											<li><a class="dropdown-item" href="gamer-profile1.html"> <i class="fa fa-angle-double-right"></i>Gamer Profile Public</a></li>
											<li><a class="dropdown-item" href="gamer-profile6.html"> <i class="fa fa-angle-double-right"></i>Gamer Problie Private </a></li>
											<li><a class="dropdown-item" href="help1.html"> <i class="fa fa-angle-double-right"></i>Help</a></li>
											<li><a class="dropdown-item" href="404.html"> <i class="fa fa-angle-double-right"></i>404</a></li>
										</ul> */}
									</li>
									<li class="nav-item">
									<Link to={`${process.env.PUBLIC_URL}/blog`} class="nav-link">BLOG</Link>
										</li>
								</ul>
								{/* <a class="nav-link" href="contact.html">JOIN OUR DISC0RD</a> */}
								<Link to={`${process.env.PUBLIC_URL}/playcards`} class="mybtn1"  data-toggle="modal" data-target="#signin">START</Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		{/* <!--Main-Menu Area Start--> */}
	</header>
	{/* <!-- Header Area End  --> */}
                {/* ===============  header area start =============== */}
               
                {/* ===============  header area end =============== */}
            </>
        );
    }
}
export default HeaderTwo;

