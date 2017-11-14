<template>
    <div class="body">
        <span class="appName">标题：没有密码</span>
        <div class="input-box">
            <input type="text" id="username" v-model="username" placeholder="请输入账号或手机号">
            <i class="iconfont icon-shanchu" @click="clear()"></i>
        </div>
        <div class="input-box">
            <input type="password" id="passwordId" v-model="password" placeholder="请输入密码">
            <i class="iconfont icon-biyan" id="eyeId0" @click="pwdType()"></i>
            <i class="iconfont icon-zhengyan1" id="eyeId1" @click="pwdType()"></i>
        </div>
        <div class="lgfooter">
            <router-link to=''>
                <span>忘记密码?</span>
            </router-link>
            <mt-button type="primary" @click="sendLogin">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
            <span class="quickRegister"><a @click="register">快速注册</a></span>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    export default {
        name: 'login',
        data () {
            return {
                password:'',
                username:'',
                user: {username:'',password:''}
            }
        },
        components:{Indicator},
        methods:{
            clear:function(){
                document.getElementById('username').focus();
                this.username = '';
                localStorage.removeItem('userName');
            },
            pwdType:function(){
                let ipt = document.getElementById('passwordId');
                if(ipt.getAttribute('type')=='password'){
                    ipt.setAttribute('type','text');
                    document.getElementById('eyeId0').style.display = 'none';
                    document.getElementById('eyeId1').style.display = 'block';
                }else if(ipt.getAttribute('type')=='text'){
                    ipt.setAttribute('type','password');
                    document.getElementById('eyeId0').style.display = 'block';
                    document.getElementById('eyeId1').style.display = 'none';
                }
            },
            sendLogin:function(){
                this.user = { username:this.username, password:this.password };
                this.$router.push({
                    path:'/home'
                });
            },
            forgetPwd: function(){

            },
            register:function(){

            }
        }
    }
</script>
<style scoped>
    .body{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        color: #fff;
        background-color: #172b57;
        background-size: cover;
    }
    .lgfooter{
        width: 80%;
        margin: 0.3rem auto 0 auto;
    }
    .lgfooter span{
        line-height: 0.4rem;
    }
    .lgfooter span:nth-child(1){
        float: right;
        margin-left: 0.28rem;
        color: #0c88e9;
        margin-top: -10px;
    }
    .lgfooter .mint-button{
        width: 100% !important;
        margin-top: 6%;
        height: 0.9rem;
        border-radius: 0.5rem;
    }
    .lgfooter img{
        width: 80%;
        display: block;
        margin: 40% auto 0 auto;
    }
    .lgfooter .quickRegister a{
        display: block;
        text-align: center;
        color: #fff;
        margin-top: 0.4rem;
        opacity: 0.8;
    }
    .appName{
        display: block;
        margin-top: 30%;
        font-size: 0.4rem;
        text-align: center;
        color: #fff;
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgba(12, 137, 233, 0.9)), to(#0f61ff));
        -webkit-background-clip: text;
    }
    .input-box{
        width: 80%;
        margin: 0.6rem auto 0 auto;
        position: relative;
    }
    .input-box input{
        width: calc(100% - 1.2rem);
        display: inline-block;
        padding: 0.2rem 0.6rem;
        font-size: 0.32rem;
        background-color:rgba(73,86,120,0.5);
        border-radius: 0.56rem;
        color: #fff;
    }
    .input-box .iconfont{
        position: absolute;
        top: 0.32rem;
        right: 0.24rem;
    }
    .input-box input:focus + .iconfont{
        opacity: 1;
        display: inline-block;
    }
    .input-box input:focus{
        outline: none;
    }
</style>
