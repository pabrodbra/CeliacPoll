import React, { Component } from 'react';

class Contact extends Component {
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
							<li className="active"><a href="/contact">Contact</a></li>
							<li><a href="/admin" id="admin_button">Admin</a></li>
							<li id="li_log"><a href="/login">Log In</a></li>
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
								<h1 className="to-animate hero-animate-1">Contact Us</h1>
								<h2 className="to-animate hero-animate-2">Intentaremos contestarte lo antes posible.</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="fh5co-main">
				<div id="fh5co-contact">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<form action="#" method="post">
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="name" className="sr-only">Email</label>
											<input placeholder="Name" id="name" type="text" className="form-control input-lg"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="email" className="sr-only">Email</label>
											<input placeholder="Email" id="email" type="text" className="form-control input-lg"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="message" className="sr-only">Message</label>
											<textarea placeholder="Message" id="message" className="form-control input-lg" rows="3"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="submit" className="btn btn-primary btn-lg " value="Send"/>
										</div>
									</div>
								</form>
							</div>
							<div className="col-md-4">
								<h3>Contacta con nosotros</h3>
								<p>
									Petición de citas e información:Hospital Banús  (Grupo Humanline) <br/>
									<a href="infobanus@humanline.es">infobanus@humanline.es</a> <br/>
									Teléfonos: 951055950    636123350 <br/>
									Ctra. Nacional 340 Km 175 (salida desde autovia nº 175) <br/>
									Marbella (Málaga)  <br/> <br/>
									Hospital de día Humanline Sotogrande <br/>
									<a href="info@humanline.es">info@humanline.es</a> <br/>
									Teléfono: 956785333 <br/>
									Autovia A7 salida 133. Centro comercial Sotomarket. <br/>
									Sotogrande. San Roque (Cádiz) <br/><br/>
									Atención al paciente y citas: <br/>
									<a href="eva.mena@digestmarb.com">eva.mena@digestmarb.com</a> <br/>
									Teléfonos: 687747007   952902630 <br/><br/>
									Urgencias de Aparato digestivo: <br/>
									Teléfonos: 951055950    636123350
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
export default Contact;