var hour=document.getElementsByClassName("hour")[0]
var min=document.getElementsByClassName("min")[0]
var sec=document.getElementsByClassName("sec")[0]
var clock=document.getElementsByClassName("clock")[0]

function tik(){
  var now =new Date()
  var secrotate=0.006*(now.getSeconds()*1000+now.getMilliseconds())+"deg"
  sec.setAttribute('style',`transform: translateX(-50%) rotate(${secrotate})`)

  var minrotate=6*now.getMinutes()+'deg'
  min.setAttribute('style', `transform: translateX(-50%) rotate(${minrotate})`)

  var hourrotate=30*(now.getHours()%12)+"deg"
  hour.setAttribute('style', `transform: translateX(-50%) rotate(${hourrotate})`)
  var clockstr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2,'0')}`
  clock.innerHTML=clockstr
}
setInterval(tik,10)
