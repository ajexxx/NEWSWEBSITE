import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { json } from 'react-router-dom';
import Mynews from '../Mynews/Mynews';






const Footer = () => {
  

  return(

  <div className={styles.Footer} data-testid="Footer">

    
    <Container>
      <Row className='topic'>
        <Col sm={1}></Col>

        <Col sm={6}>
          <section className='text-start' >
            <h3 >
              Fact fetch
            </h3>
            <p >for independent sorces
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
         </Col>
        <Col sm={5} >

          <article className='cardd' >

            <div className='fact'>
              <img src='/fact.jpg' />

              <svg id='svgg'  width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>



            <a className='anc'>
              Clip of Woman Assaulted in West Bengal Shared With False Communal Claim
            </a>
          <div className='nM1aec'>
            <div className="nx57Eb"><span className="L7zQSd">Claim:</span> A Hindu woman was attacked publicly by a Muslim mob.</div>
            <div className="nx57Eb"><span className="L7zQSd">Fact check by The Quint:</span> False</div>
             </div>
             <div id='TIME'>
            
              <time className='t' >yesterday.</time>
            
            
            <span className='t'>khusi mehetro</span>

          
            </div>
          </article>
          <hr/>
          <article className='cardd ' >

            <div className='fact'>
              <img src='/fact.jpg' />

              <svg id='svgg'  width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>



            <a className='anc'>
              Clip of Woman Assaulted in West Bengal Shared With False Communal Claim
            </a>
          <div className='nM1aec'>
            <div className="nx57Eb"><span className="L7zQSd">Claim:</span> A Hindu woman was attacked publicly by a Muslim mob.</div>
            <div className="nx57Eb"><span className="L7zQSd">Fact check by The Quint:</span> False</div>
             </div>
             <div id='TIME'>
            
              <time className='t' >yesterday.</time>
            
            
            <span className='t'>khusi mehetro</span>

          
            </div>
          </article>
        </Col>
        
        <Col sm={5}>
        <article className='cardd' >

            <div className='fact'>
              <img src='/fact.jpg' />

              <svg id='svgg'  width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>



            <a className='anc'>
              Clip of Woman Assaulted in West Bengal Shared With False Communal Claim
            </a>
          <div className='nM1aec'>
            <div className="nx57Eb"><span className="L7zQSd">Claim:</span> A Hindu woman was attacked publicly by a Muslim mob.</div>
            <div className="nx57Eb"><span className="L7zQSd">Fact check by The Quint:</span> False</div>
             </div>
             <div id='TIME'>
            
              <time className='t' >yesterday.</time>
            
            
            <span className='t'>khusi mehetro</span>

          
            </div>
          </article>
          <hr/>
          <article className='cardd' >

            <div className='fact'>
              <img src='/fact.jpg' />

              <svg id='svgg'  width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>



            <a className='anc'>
              Clip of Woman Assaulted in West Bengal Shared With False Communal Claim
            </a>
          <div className='nM1aec'>
            <div className="nx57Eb"><span className="L7zQSd">Claim:</span> A Hindu woman was attacked publicly by a Muslim mob.</div>
            <div className="nx57Eb"><span className="L7zQSd">Fact check by The Quint:</span> False</div>
             </div>
             <div id='TIME'>
            
              <time className='t' >yesterday.</time>
            
            
            <span className='t'>khusi mehetro</span>

          
            </div>
          </article>
        </Col>
      </Row>

      <Row className='topic p-4'>
        <Col sm={1}></Col>

        <Col sm={10}>
          <section  >
            <h3 className='text-info' >
            Get more news based on your interests
            </h3>
            <button  id='btn' className=' btn btn-info '>
              for you
            </button>
          </section>
        </Col>
      </Row>

    </Container> 
  </div >
);
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
