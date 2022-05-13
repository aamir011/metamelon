import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutUs extends Component {
	render() {
		return (
			<>
				{/* <!-- Breadcrumb Area Start --> */}
				<section class="breadcrumb-area contact">
				</section>
				{/* <!-- Breadcrumb Area End --> */}

				{/* <!-- Contact Area Start --> */}
				<section class="contact-section">
					<div class="container">
						<div class="row">

							<div class="col-lg-12">
								<div class="contact-area">
									<div class="row">
										<div class="col-lg-12">
											<h2>Get in touch today!</h2>
										</div>
									</div>
									<div class="row justify-content-between align-items-center">
										<div class="col-lg-6">
											<div class="left-area">
												<form action="#">
													<div class="form-group">
														<label for="#">Your Full Name</label>
														<input type="text" placeholder="Enter Your Full Name" />
													</div>
													<div class="form-group">
														<label for="#">Your Email </label>
														<input type="text" placeholder="Enter Your Email " />
													</div>
													<div class="form-group">
														<label for="#">Message</label>
														<textarea class="" placeholder="Enter Your Message" ></textarea>
													</div>
													<div class="form-group">
														<div class="custom-control custom-checkbox">
															<input type="checkbox" class="custom-control-input" id="customCheck1" />
															<label class="custom-control-label" for="customCheck1">I agree to receive emails, newsletters and
																promotional messages</label>
														</div>
													</div>
													<button type="submit" class="mybtn2">Send Message</button>
												</form>
											</div>
										</div>
										<div class="col-lg-5">
											<div class="right-area">
												<div class="top-content">
													<h4>Have questions?</h4>
													<p>
														Have questions about payments or price
														plans? We have answers!
													</p>
													<a href="#">
														Read F.A.Q <i class="fas fa-chevron-right"></i>
													</a>
												</div>
												<div class="bottom-content">
													<div class="single-info">
														<div class="icon">
															<i class="far fa-envelope"></i>
														</div>
														<div class="content">
															<h4>Email Us</h4>
															<p>info@sorko.com</p>
														</div>
													</div>
													<div class="single-info">
														<div class="icon">
															<i class="fas fa-phone"></i>
														</div>
														<div class="content">
															<h4>Email Us</h4>
															<p>+1 (987) 664-32-11</p>
															<p>+1 (987) 694-32-11</p>
														</div>
													</div>
													<div class="single-info">
														<div class="icon">
															<i class="fas fa-map-marker-alt"></i>
														</div>
														<div class="content">
															<h4>Email Us</h4>
															<p>4293 Euclid Avenue, Los
																Angeles,CA 90012</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Contact Area End --> */}

				<div class="subscribe-area subscribe-area2">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="subscribe-box">
									<img class="left" src="assets/images/vr.png" alt="" />
									<img class="right" src="assets/images/game controler_.png" alt="" />
									<div class="row justify-content-center">
										<div class="col-lg-12">
											<div class="heading-area">
												<h5 class="sub-title">
													Subscribe to metamelon
												</h5>
												<h4 class="title">
													To Get Exclusive Benefits
												</h4>
											</div>
										</div>

										<div class="col-lg-6 col-12">

											<form action="#" class="form-area">
												<input type="text" placeholder="Your Email Address" />
												<button class="mybtn1" type="submit">Subscribe
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AboutUs;
