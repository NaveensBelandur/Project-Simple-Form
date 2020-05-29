import React from 'react'
import {MDBAnimation} from 'mdbreact'
import {connect} from 'react-redux'


function Home(props){




  return (
    <div>
        <h1>You have Succesfully loged in-{props.user.username} </h1>
        <p>this is just a simple Registration form done for Pratice Purpose</p>

      <MDBAnimation type="bounce" infinite><br></br>
            <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" />
        </MDBAnimation>
    </div>
  )
}

const mapStatetoprops = (state)=>{
  return {
    user:state.user
  }
}

export default  connect(mapStatetoprops)(Home);