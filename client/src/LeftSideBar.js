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
  padding: 1em;
  background: papayawhip;
`;

const SideBar = styled.section`
  padding: 1em;
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

    <Grid fluid>
      <Row>
        <Col xsOffset={11} xs={1} />
          <Dock position='left' isVisible='true'>
              {<SideBar>
                      <Title>Welcome...</Title>
                      <div>
                        <Input placeholder="Username" type="text" />
                        <Input placeholder="Password" type="text" />
                      </div>
              </SideBar>}
          </Dock>
          <Col xs={12}>
            <Row end="xs">
            <Wrapper>
              <Col xs={6} />
              HELLO WORLD!
            </Wrapper>
            </Row>
          </Col>
      </Row>
    </Grid>

    );
  }
}

export default LeftSideBar;
