import React, { Component } from 'react';


export default class playCardsPage extends Component {
  render() {
    return (
      <>
      {/* <!-- Game play area start --> */}
	<section class="game-play-section mt-5">
		<img class="left-img" src="assets/images/game-play/left-img.png" alt=""/>
		<img class="right-img" src="assets/images/game-play/right-img.png" alt=""/>
		<div class="container">
			<div class="row ">
				<div class="col-lg-12">
					<div class="section-heading">
						<h2 class="title ">
							Metamelon
						</h2>
						<h6 class="text">
							Where skill is rewarded.Join millions of players worldwide!
						</h6>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-xl-5 col-lg-4 col-md-6">
					<div class="single-play">
                    <h4>play using your wallet</h4>
						<div class="image">
							<img src="assets/images/melon.png" alt=""/>
						</div>
						<div class="contant">
							<h4>Connect your accout to fully enjoy Metamelon!</h4>
							<a href="#" class="mybtn1">Continue with wallet</a>
						</div>
					</div>
				</div>
				<div class="col-xl-5 col-lg-4 col-md-6">
					<div class="single-play">
                    <h4>play as guest</h4>
						<div class="image">
							<img src="assets/images/melon.png" alt=""/>
						</div>
						<div class="contant">
							<h4>Your information will be locally stored and your experience limited</h4>
							<a href="#" class="mybtn1">Continue as guest</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<a href="#" class="b-all-btn">Browser All <img src="assets/images/arrow.png" alt=""/></a>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Game play area end --> */}
    {/* <!-- How play area start --> */}
	<section class="how-to-play">
		<img class="left-img" src="assets/images/h-play/left-img.png" alt=""/>
		<img class="right-img" src="assets/images/h-play/right-img.png" alt=""/>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-heading">
						<h5 class="subtitle">
							More Smartly
						</h5>
						<h2 class="title ">
							How to play
						</h2>
						<h6 class="text">
							Where skill is rewarded.Join millions of players worldwide!
						</h6>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-4 col-md-6">
					<div class="s-h-play">
						<img src="assets/images/h-play/ic1.png" alt=""/>
						<h4>Sign Up & Deposit</h4>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="s-h-play">
						<img src="assets/images/h-play/ic2.png" alt=""/>
						<h4>Compete</h4>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="s-h-play">
						<img src="assets/images/h-play/ic3.png" alt=""/>
						<h4>Get Paid</h4>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<a href="#" class="mybtn1">Get started Now!</a>
				</div>
			</div>
		</div>
		<div class="subscribe-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="subscribe-box">
							<img class="left" src="assets/images/vr.png" alt=""/>
							<img class="right" src="assets/images/game controler_.png" alt=""/>
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
											<input type="text" placeholder="Your Email Address"/>
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
	</section>
	{/* <!-- How play area  end --> */}
      </>
    )
  }
}
