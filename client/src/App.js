import React, { Component } from 'react';
import styled from 'styled-components';
import Dock from 'react-dock';
import TileStock from './TileContent';
import Tile  from './Tile';
import Words from './Tile';
import './LeftSideBar.css';
import LeftSideBar from './LeftSideBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
  <div className = "mainContainer">
    <Row >
      <Col xs={2}>
        <LeftSideBar />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={6} />
            <Tile />
        </Row>
      </Col>
    </Row>
  </div>

    );
  }
}

export default App;
