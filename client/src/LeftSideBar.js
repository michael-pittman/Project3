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
 constructor(props) {
    super(props);
    this.state = {isVisible: true};
  } 
render() {
    return (
        <Dock position='left' isVisible={this.state.isVisible}>
      {/* you can pass a function as a child here */}
      <div onClick={() => this.setState({ isVisible: !this.state.isVisible })}>
        
      </div>
    </Dock>
    );
  }
}

export default LeftSideBar;
