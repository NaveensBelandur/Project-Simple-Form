import axios from '../confi/axios'
import Swal from 'sweetalert2'

export const StartUserRegister = (obj)=>{
    return(dispatch)=>{
        axios.post('/users/register',obj.formData)
        .then((user)=>{
            Swal.fire(
                'Success',
                 'you have been succesfully register',
                 'success'
            )
            obj.redirect('/login')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const addUser =(user)=>{
    return{type:'ADD_USER',payload:user}
}


export const StartLoginUser =(obj)=>{
    return(dispatch)=>{
        axios.post('/users/login',obj.formData)
        .then((users)=>{
           if(users.data.token){
               localStorage.setItem('token',users.data.token)
               axios.get('/users/account',{
                   headers:{
                       'x-auth':localStorage.getItem('token')
                   }
               })
               .then((user)=>{
                   
                   dispatch(addUser(user.data))
                   Swal.fire(
                       "Success",
                       'you account has been succecfully logged in',
                       'success'
                   )
                window.location.href='/Home'
               })
                .catch((err)=>{
                Swal.fire(
                     'Error',
            'invalid email/password',
                    'error'
                 )
                })
           }
        })
    }
}

export const StartgetUserAccount = (token)=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':token
            }
        })
        .then((user)=>{
            dispatch(addUser(user.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const StartDeleteUser=(obj)=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((users)=>{
            localStorage.clear('token')
            window.location.href='/login'
            Swal.fire(
                'Success',
                'you have been loggedout',
                'success'
            )
            window.location.href='/Register'
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}