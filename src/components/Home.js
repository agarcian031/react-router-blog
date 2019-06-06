import React from 'react'
import {Header, Icon, Segment, Divider} from 'semantic-ui-react'

const Home = () => {
  return (
    <Segment padded raised color="blue">
    <Header as="h1" textAlign="center">
      Home
    </Header>
    <Divider/>
    </Segment>
  )
}

// // STYLE VARIABLES 
// const homeStyles = {
//   textAlign: 'center', 
//   letterSpacing: '3px', 
//   color: '#fff'
// }

// const borderStyle = {
//   margin: 'auto',
//   maxWidth: '100%',
//   overflow: 'auto',
//   padding: '0',
//   fontSize: '18px', 
// }

// const navbarStyle = {
//   background: '#333',
//     color: '#fff',
//     overflow: 'auto'
// }

export default Home

