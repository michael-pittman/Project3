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

// class Login extends React.Component {
//   // Setting the component's initial state
//   state = {
//     userName: "",
//     password: ""
//   }
//
// handleChange = (e) => {
//   this.setState({
//     [e.target.name]: e.target.value
//   })
// }
//
//   render(){
//     return
//     <div className= 'login'>
//       <input
//         placeholder="Username"
//         type="text"
//         name= "userName"
//         value={this.state.userName}
//         onChange={this.handleChange}
//         />
//
//         <input
//           placeholder="Password"
//           type="text"
//           name= "password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           />
//     </div>;
//   }
// }


class LeftSideBar extends Component {
  render() {
    return (

      <Dock position='left' isVisible= 'true' defaultSize='50 px' dimMode="none">
        {
          <div>
                <Title>Avocado Toast</Title>
                <div>
                  <Input placeholder="Username" type="text" />
                  <Input placeholder="Password" type="text" />
                </div>
          </div>
        }
      </Dock>

    );
  }
}

export default LeftSideBar;
