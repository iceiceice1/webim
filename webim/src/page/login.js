import React from 'react';
import { Button, Input} from 'antd';
import './Login.css'

class Login extends React.Component{
   
    login=()=>{
        this.props.history.push('/main')
   }
   register=()=>{
       this.props.history.push('/register')
   }

   render(){
    return (
        <div className='webbody'>
        <div className='Login'>
            <div className='headline'> Web IM</div>
            <div className='account'>
            账号：
            <Input placeholder='请输入账号或邮箱' className='input' />
            </div>
           <div className='password'>
              密码：<Input  placeholder='请输入密码' type='password' className='input'/>
           </div>
           
                <Button onClick={this.login} className='button'>登录</Button>
                <Button onClick={this.register} className='button'>注册</Button>
        </div>
        </div>
    )
   }
}

export default Login;