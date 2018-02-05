import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
    	<div id="parent">
			<header id="fh5co-header-section" role="header" className="">
				<div className="container">
					<h1 id="fh5co-logo" className="pull-left"><a href="/"><img src="images/logo.png" alt="CeliacPoll"></img></a></h1>
					<nav id="fh5co-menu-wrap">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li><a href="/">Home</a></li>
							<li>
								<a href="" className="fh5co-sub-ddown">Cuestionarios</a>
								<ul className="fh5co-sub-menu">
                 				   <li><a href="/cuestionario1">Quiero saber si soy celíaco</a></li>
                				    <li><a href="/cuestionario2">Soy celíaco</a></li>
								</ul>
							</li>
							<li><a href="/contact">Contact</a></li>
							<li><a href="/admin" id="admin_button">Admin</a></li>
							<li className="active" id="li_log"><a href="/login">Log In</a></li>
						</ul>
					</nav>
				</div>
			</header>

			<div id="fh5co-hero" styles="background-image: url(images/slide_2.jpg);">
				<div className="overlay"></div>
				<a href="#fh5co-main" className="smoothscroll fh5co-arrow to-animate hero-animate-4"><i className="ti-angle-down"></i></a>
				<div className="container">
					<div className="col-md-12">
						<div className="fh5co-hero-wrap">
							<div className="fh5co-hero-intro">
								<h1 className="to-animate hero-animate-1">Inicia Sesión</h1>
								<h2 className="to-animate hero-animate-2"></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="fh5co-main">
				<div id="fh5co-contact">
					<div className="container animate-box">
						<div className="row">
							<div className="col-md-12 heading text-center">
								<h2>Inicia sesión</h2>
							</div>
							<div className="col-md-8">
								<form id="login_form" action="/users/auth" method="post">
									<div className="col-md-12">
										<div className="form-group">
											<label for="email" className="sr-only">Email</label>
											<input placeholder="Email" id="email" type="text" className="form-control input-lg"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label for="pass" className="sr-only">Contraseña</label>
											<input placeholder="Password" id="password" type="password" className="form-control input-lg"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="submit" className="btn btn-primary btn-lg " value="Iniciar Sesión"/>
										</div>
									</div>
								</form>
							</div>
							<div className="col-md-4">
								<h3>¿No puedes iniciar sesión?</h3>
								<p>Solo los administradores de este servicio web pueden hacer login, si si aún así no puedes contacta con nosotros.</p>
								<p>
									<a href="/contact">Contacta aquí</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

<footer role="contentinfo" id="fh5co-footer">
          <a href="#" className="fh5co-arrow fh5co-gotop footer-box"><i className="ti-angle-up"></i></a>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 footer-box">
                <h3 className="fh5co-footer-heading">Company</h3>
                <ul className="fh5co-footer-links">
                  <li><a href="/contact">About</a></li>

                </ul>
              </div>
              <div className="col-md-4 col-sm-6 footer-box">
                <h3 className="fh5co-footer-heading">More Links</h3>
                <ul className="fh5co-footer-links">
                  <li><a href="/login">Log in</a></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 footer-box">
                <h3 className="fh5co-footer-heading">Get in touch</h3>
                <ul className="fh5co-social-icons">
                  <li><a href="http://www.lahoradeladigestion.com"><i className="ti-google"></i></a></li>
                  <li><a href="https://twitter.com/"><i className="ti-twitter-alt"></i></a></li>
                  <li><a href="https://www.facebook.com/carlos.desolaearle"><i className="ti-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/doctordesola/"><i className="ti-instagram"></i></a></li>
                </ul>
              </div>
              <div className="col-md-12 footer-box text-center">
                <div className="fh5co-copyright">
                  <p>
                    &copy; "Dr. Carlos de sola". All Rights Reserved. <br/>
                    Designed by <a href="https://www.uma.es/ETSI-informatica" target="_blank">Bioinformaticos de la UMA</a>
                    Images by: <a href="http:%5C%5C%0Aunsplash.com" target="_blank">Unsplash</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="fh5co-spacer fh5co-spacer-md"></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;