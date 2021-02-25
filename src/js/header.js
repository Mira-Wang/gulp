$(function () {
  $("#header_block").append(
    " <div class='header container-fluid'>" +
      "<a class='navbar-brand header_logo' href='index.html'>" +
      "<img src='images/index/logo.png'>" +
      "</a>" +
      "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'" +
      "  aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>" +
      " <span class='navbar-toggler-icon'></span>" +
      "</button>" +
      "<div class='collapse navbar-collapse' id='navbarCollapse'>" +
      " <ul class='navbar-nav me-auto mb-2 mb-md-0'>" +
      "   <li class='nav-item'>" +
      "     <a class='nav-link header_nav_item' aria-current='page' href='index.html'>首页</a>" +
      "  </li>" +
      " <li class='nav-item dropdown'>" +
      " <a class='nav-link header_nav_item dropdown-toggle' id='dropdown09' data-bs-toggle='dropdown'" +
      "   aria-expanded='false'>产品</a>" +
      "   <ul class='dropdown-menu' aria-labelledby='dropdown09'>" +
      "     <div class='dropdown-menu-container'>" +
      "     <li class='dropdown-menu-item'><a href='product.html'>耘社区</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product2.html'>比邻物业</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product3.html'>智慧社区综合管理平台</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product4.html'>校园物业平台</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product5.html'>营销CRM系统</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product6.html'>智慧养老平台</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product7.html'>成本管理系统</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product8.html'>访客通</a></li>" +
      "     <li class='dropdown-menu-item'><a href='product9.html'>金邻旅游</a></li>" +
      "   </div>" +
      "  </ul>" +
      " </li>" +
      "   <li class='nav-item'>" +
      "     <a class='nav-link header_nav_item' href='article.html'>资讯</a>" +
      "   </li>" +
      "   <li class='nav-item '>" +
      "     <a class='nav-link header_nav_item' href='case.html'>案例</a>" +
      "   </li>" +
      "   <li class='nav-item '>" +
      "     <a class='nav-link header_nav_item' href='agent.html'>代理</a>" +
      "   </li>" +
      "   <li class='nav-item '>" +
      "     <a class='nav-link header_nav_item' href='#'>耘服务</a>" +
      "   </li>" +
      "    <li class='nav-item '>" +
      "      <a class='nav-link header_nav_item' href='aboutIntroduce.html'>关于我们</a>" +
      "   </li>" +
      " </ul>" +
      " <div class='header_action d-flex '>" +
      "     <a class='header_action_item'>培训申请</a>" +
      "    <a class='header_action_item' href='login.html'>立即登录</a>" +
      "    <a class='header_action_item_btn'>免费试用</a>" +
      "  </div>" +
      "</div>" +
      "</div> "
  )
  //	导航滚动
  $(window).scroll(topsrcro)
  topsrcro()
  function topsrcro() {
    var scoll = $(window).scrollTop()
    scoll > 1 ? $(".header_block").addClass("black") : $(".header_block").removeClass("black")
  }
})
