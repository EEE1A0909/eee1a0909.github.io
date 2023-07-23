
var htmlContent = `<div style="width:1024px;height:36px;z-index:100;position: relative;" >
<div  style="float:left;"> <a href="/"><button class="dropbtn"><b>首页</b></button></a></div>
<div class="dropdown" style="float:left;">
<button class="dropbtn"><b>我国概况</b></button>
  <div class="dropdown-content">
    <a href="../page/nation1.html">国情简介</a>
    <a href="../page/nation2.html">历史与文化</a>
    <a href="../page/nation3.html">土地与人民</a>
    <a href="../page/nation4.html">政治与国防</a>
    <a href="../page/nation5.html">社会与经济</a>
  </div>
</div>
<div class="dropdown" style="float:left;">
<button class="dropbtn"><b>驻华使馆</b></button>
  <div class="dropdown-content">
    <a href="../page/embassy1.html">走进使馆</a>
    <a href="../page/embassy2.html">使馆公告</a>
    <a href="../page/embassy3.html">办事指南</a>
	<a href="../page/embassy4.html">签证业务</a>
  </div>
</div>
<div  style="float:left;"><a href="../page/project.html"><button class="dropbtn"><b>文化项目</b></button></a></div>
<div  style="float:left;"><a href="../book/index.html"><button class="dropbtn"><b>图书馆</b></button></a></div>
<div  style="float:left;"><a href="https://weibo.com/u/7594804434"target="_blank" ><button class="dropbtn"><b>联系我们</b></button></a></div>
</div>`;
var targetElement = document.getElementById("navigation");

targetElement.innerHTML = htmlContent;

//   // Loop through the items and create li elements with a links
//   for (var i = 0; i < items.length; i++) {
//     var li = document.createElement("li");
//     var a = document.createElement("a");
//     a.textContent = items[i].label;
//     a.href = items[i].url;
//     li.appendChild(a);
//     navList.appendChild(li);
//   }