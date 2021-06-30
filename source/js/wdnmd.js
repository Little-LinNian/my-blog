if(sessionStorage.getItem("isReload")){
    console.log("页面被刷新");
 }else{
  console.log("首次被加载");
  sessionStorage.setItem("isReload", true)
  window.location.reload();
 }