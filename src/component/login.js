import React from 'react'
import { MDBContainer, MDBCol ,MDBInput,MDBBtn} from 'mdbreact'
import {  StartLoginUser } from '../action/userAction'
import {connect} from 'react-redux'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        
        const redirect = (address)=>{
            return this.props.histroy.push(address)
        }
        this.props.dispatch(StartLoginUser({formData,redirect}))
    }
    render(){
        return (
            <div>
                <MDBContainer>
                    <MDBCol md='8'>
                    <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center mb-4">Login</p>
        <div className="grey-text">
          <MDBInput label="email" icon="user" group type="text" validate error="wrong"
            success="right" value={this.state.email} onChange={this.handleChange} name='email'/>
        
          <MDBInput label="Your password" icon="lock" group type="password"  value={this.state.password} onChange={this.handleChange} name='password'/>
        </div>
        <div className="text-center">
          <MDBBtn  type='submit'color="primary">submit</MDBBtn>
        </div>
      </form>
      
                    </MDBCol>
                </MDBContainer>
            </div>
        )
    }
}

export default  connect() (Login)