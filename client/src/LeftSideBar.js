import React, { Component } from 'react';
import styled from 'styled-components';
import Dock from 'react-dock';
import './LeftSideBar.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: chartreuse;
`;

const Wrapper = styled.section`
  padding: 0em;
  background: papayawhip;
`;

const SideBar = styled.section`
  padding: 0em;
  background: palevioletred;

`;



class LeftSideBar extends Component {
  render() {
    return (
        // <div class="row">
        //   <div class="col-lg-3 col-md-6 col-md-offset-3 col-lg-offset-0">
        //     <Wrapper>
        //       <Title>&nbsp;Welcome...</Title>
        //       <div>
        //         <Input placeholder="Username" type="text" />
        //         <Input placeholder="Password" type="text" />
        //       </div>
        //     </Wrapper>
        //   </div>
        // </div>
    //   <Dock position='left' isVisible='true'>
    //     {<Wrapper>
    //             <Title>Welcome...</Title>
    //             <div>
    //               <Input placeholder="Username" type="text" />
    //               <Input placeholder="Password" type="text" />
    //             </div>
    //     </Wrapper>}
    // </Dock>

    <div className = "mainContainer">
      <Row >
        <Col xs={2}>
        <Wrapper>
        Hello World!
        </Wrapper>
        </Col>
        <Col xs={10}>
          <Row >
              <Wrapper>
                <Col xs={6}>
                Div 1
                </Col>
              </Wrapper>
              <Wrapper>
                <Col xs={6}>
                Div 2
                </Col>
              </Wrapper>
          </Row>
          <Row >
            <SideBar>
              <Col xs={6}>
              Div 3
              </Col>
            </SideBar>
            <SideBar>
              <Col xs={6}>
              Div 4
              </Col>
            </SideBar>
        </Row>
        </Col>
      </Row>

    </div>

    );
  }
}

export default LeftSideBar;
