import React, { Component } from 'react';
import styled from 'styled-components';
import Dock from 'react-dock';
import TileStock from './TileContent';
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
        <Row center="xs">

            <Col className="border" xs={6}/>


            <Col className="border" xs={6} />

        </Row>
      </Col>
    );
  }
}

export default Tile;
