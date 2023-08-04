import React from 'react'
import vic from '../pdfs/jpmorgan.pdf'
import chekumukhi from '../images/chekumukhi.jpg'
const Education = () => {
  return (
   <>
      <div className="ed-container">
        <div className="box">
          <div className="heading">
            <h1>MY <span>JOURNEY</span></h1>
          </div>
          <div className="item-box">
          <div className="part-1">
              <h2 className="title">Education</h2>
            <div className="cnt-box">
              <div className="content">
            <div className="date t1">
              <i className='bx bxs-calendar t1'></i> 2017-18
            </div>
            <h3 className='t1'>Matriculation</h3>
            <p className='sub-tit1 t1'>Shiva Shivani High School</p>
            <p className='t1'>Under The Board of Secondary Education, Telangana [BSET] and secured (9.5/10) GPA.</p>
            </div>
            </div>
            <div className="cnt-box">
              <div className="content">
            <div className="date">
              <i className='bx bxs-calendar t1'></i> 2018-20
            </div>
            <h3>Intermediate Education</h3>
            <p className='sub-tit1 t1'>Narayana Junior College</p>
            <p  className='t1'>Under Telangana State Board of Intermediate Education [TSBIE] and secured 98.4%.</p>
            </div>
            </div>
            <div className="cnt-box">
              <div className="content">
            <div className="date">
              <i className='bx bxs-calendar t1'></i> 2020-present
            </div>
            <h3>Undergraduate</h3>
            <p className='sub-tit1 t1'>National Institute Of Technology Meghalaya</p>
            <p  className='t1'>Currently Pursuing B.Tech (Electronics and Communication Engineering) Department.</p>
            <p>Working on Academic and Personal Projects.</p>
            </div>
            </div>
          </div>
          <div className="part-2">
              <h2 className="title">Projects</h2>
            <div className="cnt-box">
            <div className="content">
            <div className="date">
              <i className='bx bxs-calendar t1'></i> 2017-18
            </div>
            <h3  className='t1'>Group Project</h3>
            <p  className='t1'>Worked on a project and exhibited in a state-level science fest representing our school<a href={chekumukhi} style={{color: '#fa0b43'}}  target='_blank'><i class='bx bx-link-external'></i></a></p>
            <p  className='t1'>It is about Construction of an Irrigation pit for effective water supply</p>
            </div>
            </div>
            <div className="cnt-box">
            <div className="content">
            <div className="date">
              <i className='bx bxs-calendar t1'></i> 2022-23
            </div>
            <h3  className='t1'>Open Source Contribution</h3>
            <p  className='t1'>Worked as Virtual Software Engineer role to improve an App's performance
            <a href={vic} style={{color: '#fa0b43'}}  target='_blank'><i class='bx bx-link-external'></i></a></p>
            <p  className='t1'>The app <a href="https://perspective.finos.org/" style={{color: '#fa0b43'}} target='_blank'>(perspective)</a>displays stock price data by Graphs Users will see the correlated point to make their trade plans.</p>
            </div>
            </div>
            <div className="cnt-box">
            <div className="content">
            <div className="date">
              <i className='bx bxs-calendar t1'></i> 2023-present
            </div>
            <h3  className='t1'>Personal Project</h3>
            <p  className='t1'>Builded a web app which gives news from different sources on different Financial Markets and news about economics and other sectors.
            <a href={vic} style={{color: '#fa0b43'}}  target='_blank'><i class='bx bx-link-external'></i></a></p>
            <p  className='t1'>This app also has an extra feature(Journal) by which users can create account to save notes about news (or) plans based on news.</p>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Education
