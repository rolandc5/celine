import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="a-container">
        <div className="a-wrapper">
          <div className="a-innerContainer">

            <div className="a-aboutBottomBorder">
              <div style={{ height: 50 }}/>
              <div className="a-aboutContainer">

                <div className="a-leftSide">
                  <div className="a-pictureContainer">
                    <img src="https://static.wixstatic.com/media/ade809_f9524d48fafa4faf8f0e33dc82c1509f.jpg/v1/fill/w_285,h_278,al_c,q_80,usm_0.66_1.00_0.01/ade809_f9524d48fafa4faf8f0e33dc82c1509f.jpg"/>
                  </div>
                  <div className="a-leftSideBottomSpace"/>
                </div>

                <div style={{ width: 200 }}/>

                <div className="a-rightSide">
                  <div>
                    <span className="a-intro">HI THERE!</span><br/>
                    <div style={{ height: 20 }}/>
                    <span className="a-introParagraph">My name is Celine Canuto and I am a graphic designer living in the Bay Area. I completed my degree in Interior Design at the Fashion Institute of Design & Merchandising and received a certificate of achievement in Visual Communications at Las Positas College.</span><br/>
                    <div style={{ height: 20 }}/>
                    <span className="a-introParagraph">This website is to showcase my work that I have produced throughout the course of my studies and work to promote myself for future employers. I have always enjoyed being creative. At a very young age, I loved nothing more than drawing and coloring books. My passion for creativity has thrived as I have grown.</span><br/>
                    <div style={{ height: 20 }}/>
                    <span className="a-introParagraph">When I am not designing, I enjoy hiking, camping, snowboarding, yoga, traveling, and going to concerts.</span>
                    <div/>
                  </div>
                </div>

              </div>
              <div style={{ height: 50 }}/>
            </div>

            <div className="a-contactContainer">
              <div style={{ height: 50 }}/>
              <div className="a-contactRow">
                <div className="a-contactLeft">
                  <span className="a-intro">SAY HELLO!</span>
                  <div style={{ height: 50 }}/>
                  <div className="a-lineHeight">
                    <span> Celine Canuto </span>
                    <br/>
                    <span> 123 456 7890 </span>
                    <br/>
                    <span> roceline.canuto@gmail.com </span>
                    <br/>
                  </div>
                </div>
                <div style={{ width: 50 }}/>
                <div className="a-contactRight">
                  <form>
                    <div className="a-formRow">
                      <input className="a-inputStyle" type="text" placeholder="NAME"/>
                      <div style={{ width: 80 }}/>
                      <input className="a-inputStyle" type="text" placeholder="EMAIL"/>
                    </div>
                      <div style={{ height: 10 }}/>
                    <div className="a-formRow">
                      <input className="a-inputStyle" type="text" placeholder="SUBJECT"/>
                    </div>
                      <div style={{ height: 10 }}/>
                    <div className="a-formRow">
                      <textarea className="a-inputStyleMessage" type="text" placeholder="MESSAGE"/>
                    </div>
                    <div className="a-formRow button">
                      <button className="a-inputButton" placeholder="SEND"> SEND </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div style={{ height: 50 }}/>
          </div>
        </div>
      </div>
    )
  }
}
