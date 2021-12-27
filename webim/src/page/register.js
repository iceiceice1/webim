import React from 'react';
import { Button,Input } from 'antd';
import './Register.css'

class Register extends React.Component{
    
   register=()=>{
       this.props.history.push('/login')
   }

   render(){
    return (
        <div className='webbody'>
        <form className='Register'>
            <div className='headline'> Web IM</div>

            <div className='account'>
            账号：
            <Input placeholder='请输入英文或字母' className='input' name='registeraccount'/>
            </div>

            <div className='password'>
                邮箱：<Input placeholder='请输入邮箱' className='input' type='email' name='registeraccount'/>
            </div>

           <div className='password'>
              密码：<Input placeholder='请输入英文或字母' className='input' type='password' name='registerpsw'/>
           </div>

           <div className='passwordagain'>
               确认密码：<Input placeholder='请再次输入密码' className='input' type='password' name='rgpswagain' />
           </div>
                <Button onClick={this.register} className='registerbutton'>注册</Button>
        </form>
        </div>
    )
   }
}

export default Register;