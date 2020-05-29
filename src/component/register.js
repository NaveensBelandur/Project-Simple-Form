import React from 'react'
import { MDBContainer, MDBCol,MDBInput,MDBBtn ,MDBRow} from 'mdbreact'
import {connect} from 'react-redux'
import { StartUserRegister } from '../action/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            email:''
        }
    }
    handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
        }
        const redirect =(address)=>{
            return this.props.history.push(address)
        }
        this.props.dispatch(StartUserRegister({formData,redirect}))
       
    }

    render(){
        
        return (
            
            <div>
                <MDBContainer>
                    <MDBRow>
                    <MDBCol md='8'>
                    <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center mb-4">Register</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" value={this.state.username} onChange={this.handleChange} name='username'/>
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  value={this.state.email} onChange={this.handleChange} name='email'/>
       
          <MDBInput label="Your password" icon="lock" group type="password"  value={this.state.password} onChange={this.handleChange} name='password'/>
        </div>
        <div className="text-center">
          <MDBBtn  type='submit'color="primary">Register</MDBBtn>
        </div>
      </form>
      
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
        
    }
    
}

export default connect() (Register)