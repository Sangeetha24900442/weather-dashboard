function updateTime() 
{
  var now = new Date();
  document.getElementById("date-time").innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
document.getElementById("toggle-dark").onclick = function () 
{
  document.body.classList.toggle("dark");
};
