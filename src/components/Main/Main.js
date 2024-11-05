import React from 'react';
import PropTypes from 'prop-types';
import './Main.module.css'

import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Main = () => {



  return (


    <div className='container'   >
      <div className='container-fluid'>

        {/* <Row className='p-4'>
          
          <Col sm={4}>
            <div className="n6ef1">
              <h1 className="Da1Shd">Your
              briefing</h1>
              <div className="Hp1DDd oBu3Fe" role="doc-subtitle">Tuesday, 6 August</div></div>
          </Col>
          <Col>
          
          </Col>

        </Row> */}
        <Row >
          

          <Col sm={7} className='topstory' >
          <Link to="/Mynews">

            <section className='text-start top'><h3>Top stories <svg width="24" height="24" viewBox="0 0 24 24" fill="blue" focusable="false" class="oKxlCb NMm5M hhikbc" id="i10"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg></h3>

            </section>
            </Link>

            <hr></hr>

          </Col>
          <Col sm={4}>
          <Link to="/Mynews1">
            <section className='top'><h3>Local news <svg width="24" height="24" viewBox="0 0 24 24" fill="blue" focusable="false" class="oKxlCb NMm5M hhikbc" id="i10"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg></h3>
            </section>
            </Link>
            <hr></hr>
          </Col>


        </Row>


        <Row >


          <Col sm={1}>
          </Col>
        
          <Col sm={3} >

            <div className='section'>
              <img className='microsoft' src='/microsoft.jpg' />
              <div className='newscontainer'>
                <div>
                  <img src='nd.jpg' />
                </div>

              </div>
              <div className='p'>
                <p>Bangladesh Protests Live Updates: Govt declares next two days as ‘public holidays’ amid curfew; death toll at 114</p>
              </div>

              <time className='time'>9 hours ago.</time>
            </div>
          </Col>

          <Col sm={4}   >
            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>
            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>
            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>

            <div className='fullcoverage'>
              <a className='fullcover'>
                <img src='/fullcover.jpg' />
                Full Coverage
              </a>
            </div>

          </Col>


          <Col sm={3} >


            <article>
              <div className='newscontainer '>
                <div>
                  < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                </div>
                <div className='news'>
                  <p className=' commonnews'>common news</p>
                </div >


                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </div>
              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='/fav.jpg' />
              </div>
              <time className='time1'>10 hours ago.</time>

            </article>
            <hr></hr>
            <article>
              <div className='newscontainer'>
                <div>
                  < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                </div>
                <div className='news'>
                  <p className=' commonnews'>common news</p>
                </div >


                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </div>
              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='/a.jpg' />
              </div>
              <time className='time1'>10 hours ago.</time>

            </article>
            <hr></hr>
            

          </Col>
        </Row>



        <Row >

          <Col sm={1}>
          </Col>

          <Col sm={3}>

            <div className='section'>
              <img className='microsoft' src='/microsoft.jpg' />
              <div className='newscontainer'>
                <div>
                  <img src='/nd.jpg' />
                </div>

              </div>



              <div className='p'>
                <p>Bangladesh Protests Live Updates: Govt declares next two days as ‘public holidays’ amid curfew; death toll at 114</p>
              </div>

              <time className='time'>9 hours ago.</time>
            </div>




          </Col>

          <Col sm={4}  >

            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>
            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>
            <article className='artcle'>
              <div className='NDTV'>
                <div className='ndtv'>
                  <img className='image' src='/ndtv.jpg' />
                  <div>NDTV</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
              <p className='para'>Over 300 Indian Students Return As Quota Row Sparks Violence In Bangladesh</p>
              <time className='time'>10 hours ago.</time>
            </article>


            <div className='fullcoverage'>
              <a className='fullcover'>
                <img src='/fullcover.jpg' />
                Full Coverage
              </a>
            </div>
          </Col>
          <Col sm={3}>
            <div >
              <section className='pic'>
                <h3 className='text-info'>pick for you </h3>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="ZmiOCf NMm5M"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>
              </section>
              <hr></hr>
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1'>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>
              <hr />
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1'>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>

              <hr />
            </div>
          </Col>
        </Row>


        <Row>
          <Col sm={1}></Col>

          <Col sm={6}>
            <section className='text-start' >
              <h3 > For you
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black" focusable="false" class="oKxlCb NMm5M hhikbc" id="i10"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>

              </h3>
              <p >Recomended for your interest
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="ZmiOCf NMm5M"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>
              </p>
            </section>
          </Col>

        </Row>

        <Row>
          <Col sm={1}></Col>
          <Col sm={5} className='cardd'>
            <article>
              <div className='timesindia'>
                <img className='TIME' src='/times.jpg' />

                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='/fav.jpg' />
              </div>
              <div className='time1'>
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
            <hr />

            <article>
              <div className='timesindia'>
                <img className='TIME' src='/times.jpg' />

                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='/fav.jpg' />
              </div>
              <div className='time1'>
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
            <hr />
            <article>
              <div className='timesindia'>
                <img className='TIME' src='/timenow.jpg' />

                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaVie1-cppwEx3k4QH0mhnH5huHepCqJgpdoWSZZISCUg_FZeAyTj82qC45oSKNiK86mEoZ8pwSHiue087BHmHsVxPgBJbms15K2os53bt0Uk' />
              </div>
              <div className='time1'>
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
          </Col>

          <Col sm={5} className='cardd'>
            <article>
              <div className='timesindia'>
                < img className='TIME' src='/timenow.jpg' />
                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>

              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>


                <img id='img' src='/fav.jpg' />

              </div>

              <div className='time1' >
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
            <hr />
            <article>
              <div className='timesindia'>
                <img className='TIME' src='/timenow.jpg' />

                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaVie1-cppwEx3k4QH0mhnH5huHepCqJgpdoWSZZISCUg_FZeAyTj82qC45oSKNiK86mEoZ8pwSHiue087BHmHsVxPgBJbms15K2os53bt0Uk' />
              </div>
              <div className='time1'>
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
            <hr />
            <article>
              <div className='timesindia'>
                <img className='TIME' src='/timenow.jpg' />

                <svg id='svg' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

              </div>
              <div className='fav' >
                <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                <img id='img' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaVie1-cppwEx3k4QH0mhnH5huHepCqJgpdoWSZZISCUg_FZeAyTj82qC45oSKNiK86mEoZ8pwSHiue087BHmHsVxPgBJbms15K2os53bt0Uk' />
              </div>
              <div className='time1'>
                <time >10 hours ago.</time>
                <img id='fullcover' src='/fullcover.jpg' />
              </div>
            </article>
          </Col>

        </Row>


        <Row className='topic'>
          <Col sm={1}></Col>

          <Col sm={6}>
            <section className='text-start' >
              <h3 > your topic
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black" focusable="false" class="oKxlCb NMm5M hhikbc" id="i10"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>

              </h3>
              <p >Recomended for your interest
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="ZmiOCf NMm5M"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>
              </p>
            </section>
          </Col>

        </Row>

        <Row style={{position:'relative',left:'100px',gap:"50px"}}>
          
          <Col sm={3} >
            <div className='cardd '>
              <section className='picc'>
                <h3 >India </h3>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="Qcx0G NMm5M hhikbc"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
              </section>
              <hr></hr>
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>
              <hr />
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>

              <hr />
            </div>
          </Col>
          <Col sm={3} >
            <div className='cardd '>
              <section className='picc'>
                <h3 >Bussness </h3>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="Qcx0G NMm5M hhikbc"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
              </section>
              <hr></hr>
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>
              <hr />
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>

              <hr />
            </div>
          </Col>
          <Col sm={3} >
            <div className='cardd '>
              <section className='picc'>
                <h3 >Tecnology </h3>
                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="Qcx0G NMm5M hhikbc"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
              </section>
              <hr></hr>
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>
              <hr />
              <article>
                <div className='newscontainer'>
                  <div>
                    < img className='im' src='https://encrypted-tbn0.gstatic.com/faviconV2?url=h…&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL' />
                  </div>
                  <div className='news'>
                    <p className=' commonnews'>common news</p>
                  </div >


                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  </div>
                </div>
                <div className='fav' >
                  <a className='leopard'>2 Leopard & 3 Barking Deer Skins Seized In Phulbani, 6 Arrested </a>
                  <img id='img' src='/fav.jpg' />
                </div>
                <div className='time1 '>
                  <time >10 hours ago.</time>
                  <img id='fullcover' src='/fullcover.jpg' />
                </div>
              </article>

              <hr />
            </div>
          </Col>

        </Row>
      </div>
    </div>






  );





};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
