import React, { Component } from 'react';
import styled from 'styled-components';
import Dock from 'react-dock';
import './LeftSideBar.css';

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
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const SideBar = styled.section`


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
      <Dock position='left' isVisible='true'>
        {<Wrapper>
                <Title>Welcome...</Title>
                <div>
                  <Input placeholder="Username" type="text" />
                  <Input placeholder="Password" type="text" />
                </div>
        </Wrapper>}
    </Dock>
    );
  }
}

export default LeftSideBar;
