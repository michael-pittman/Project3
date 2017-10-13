import React, { Component } from 'react';
import styled from 'styled-components';
import Dock from 'react-dock';
import AutoResponsive from 'autoresponsive-react';
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

class Tile extends Component {
  render() {
    return (
      <Col xs={12}>
        <Row end="xs">
        <Wrapper>
          <Col xs={6} />
          HELLO WORLD!
        </Wrapper>
        <Wrapper>
          <Col xs={6} />
          HELLO WORLD!
        </Wrapper>
        <Wrapper>
          <Col xs={6} />
          HELLO WORLD!
        </Wrapper>
        <Wrapper>
          <Col xs={6} />
          HELLO WORLD!
        </Wrapper>
        </Row>
      </Col>

    );
  }
}

export default Tile;
