import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer-custom text-center py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>Sobre Nós</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida magna vel lorem fermentum vehicula.</p>
          </div>
          <div className="col-12 col-md-6">
            <h5>Redes Sociais</h5>
            <div>
        
              <a href="https://www.instagram.com/victorsx10" target='blank' className="text-dark mx-2">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.linkedin.com/in/victor-santos-79b56a2a0/" target='blank' className="text-dark mx-2">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/VictorSantosVK" target='blank' className="text-dark mx-2">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Victor Santos, todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
