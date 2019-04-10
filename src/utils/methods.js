import {getRequest, postRequest} from './axios.config'

const MyPlugin = {
  install(Vue, options) {
    const prototypes = {
      getRequest,
      postRequest,
      $sign: function (obj, url) {
        const app_secret = "VDDC65m9oz9kr4P5";
        let params = {
          appId: '100001',
          timestamp: new Date().getTime(),
          device: "1",
          version: '1.0.0',
          token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '',
          nonce: createNonce(32)
        }
        let reqData = this.$format(Object.assign({}, params, obj));
        reqData = this.$removeObjectNull(reqData);
        let str = Object.entries(reqData).map(item => {
          return item.join('');
        }).join('');
        const signData = {sign: md5(`${app_secret}${str}${app_secret}`)};
        return this.$format(Object.assign({}, reqData, signData));
        // return signData;
      },
      dataFormat(timestamp) {
        if (typeof Number(timestamp) != 'number') {
          return ''
        }
        var date = new Date(Number(timestamp) * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() < 10 ? '0' + date.getDate() + " " : date.getDate() + '  ';
        var h = date.getHours() < 10 ? '0' + date.getHours() + ":" : date.getHours() + ':';
        var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ":" : date.getMinutes() + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
      },
      getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return (arr[2]);
        else
          return null;
      },
      setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
      },
      delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
          document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    }
    Vue.prototype = Object.assign(Vue.prototype, prototypes);
  }
}

export default MyPlugin;
