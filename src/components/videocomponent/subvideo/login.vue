<template>

    


  <div id="account">
    
  <div class="account-body">
    <h1 class="account-body-title login-label-phone" style="margin:10px;">
        <a href="javascript:;" class="cancel icon login-cancel"></a>
      <span class="account-body-text">短信验证登录/注册</span>
      <span class="account-body-tips">请仔细阅读 <a target="_blank" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a></span>
    </h1>
    <div class="account-form">
      <input type="hidden" name="ticket" id="ticket" value="">
      <fieldset style='border:none;'>
        <div class="account-form-group-fields account-form-phone" id="tmpl_login_phone">
          <div class="account-form-field account-form-field-phone account-form-field-first">
            <span class="icon clear-input hide"></span>
            <input type="phone" name="phone" maxlength="13" class="account-form-input" placeholder="手机号" tabindex="1">
            <div class="account-form-field-area-code">
              <div class="account-form-field-area-code-label">+86</div>
            </div>
          </div>
          <div class="account-form-field">
            <input type="text" name="code" maxlength="6" class="account-form-input account-form-input-code" placeholder="手机验证码" tabindex="2">
            <div class="account-form-field-options account-form-field-code">
              <a href="javascript:;">获取验证码</a>
            </div>
          </div>
        </div>
        <div class="account-form-field-submit">
          <a href="javascript:;" class="btn submit">登录</a>
        </div>
        <div class="account-form-ft">
          <a href="https://m.douban.com/page/wijmvyh" class="login-forget no-code">验证码收不到?</a>
            <div class="account-form-switch">
              <a href="javascript:;" class="login-label-account">帐号密码登录</a>
              <a href="javascript:;" class="login-label-abroad hide">海外手机登录</a>
            </div>
        </div>
          <div class="account-form-3rd">
            <div class="account-form-3rd-hd">第三方登录</div>
            <div class="account-form-3rd-bd">
              <a href="https://accounts.douban.com/connect/sina_weibo/?from=None&amp;redir=https://m.douban.com/movie/subject/30413052/?event_source=movie_showing&amp;fallback=" class="link-3rd-wb link-3rd-wb-on" target="_top" title="用微博登录">Weibo</a>
              
              <a href="https://www.douban.com/accounts/weixin" class="link-3rd-wx link-3rd-wx-on" target="_top" title="用微信登录">Wechat</a>
            </div>
          </div>
      </fieldset>
    </div>
  </div>
  <div class="nation-select hide"></div>
  <div id="TCaptcha"></div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style>

@import url(https://img3.doubanio.com/f/accounts/ba63ed54954f1262c1c56f4774cbbff9cf7a3897/passport/build/m.login/index.css);
</style>
