<template>
    <div class="login-box" id="profile">
        <input type="text" placeholder="请输入11位手机号" id="tel" ref="tel" @keyup="handle1" />
        <p>
            <input type="password" placeholder="请输入手机验证码" id="telPwd" ref="telpwd" @keyup="handle2" />
            <input type="button" value="发送验证码" />
        </p>

        <input type="button" value="登录" @click="handle" :class="{'u-loactive':isshow1&&isshow2}" />
        <p>
            <a href="register.html">立即注册</a>|
            <a href="#">忘记密码</a>
        </p>
        <h4>
            <span></span>其它登录方式
            <span></span>
        </h4>
        <div class="icon-login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isshow1: false,
            isshow2: false
        }
    },
    methods: {
        handle() {
            let that = this;
            // 获取输入的用户名和密码
            let uname = this.$refs.tel.value;
            let upass = this.$refs.telpwd.value;
            if (!uname || !upass) {
                alert("请输入手机号和验证码");
                return;
            }
            // 和后台确认正确登录
            this.$axios.post(`/api/users/login`, {
                uname,
                upass
            })
                .then(function(res) {
                    if (res.data.errorNo == 0) {
                        alert(res.data.message);
                        that.$local.save("user", {
                            login: true,
                            userName: uname
                        })
                        that.$router.back();
                    } else {
                        alert(res.data.message);
                        return;
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        handle1() {
            this.isshow1 = true;
        },
        handle2() {
            this.isshow2 = true;
        }
    }

}
</script>

<style scoped>
/*手机号码登录*/

.m-login #profile p:nth-child(2) input[type="password"] {
    width: 70%;
    float: left;
}

.m-login #profile p:nth-child(2) input[type="button"] {
    width: 30%;
    float: left;
    background: #ededed;
    color: #888888;
    line-height: 50px;
}

.m-login .tab-content .login-box input:nth-child(3).u-loactive {
    background: #ee0a3b;
    color: #fff;
}
</style>
