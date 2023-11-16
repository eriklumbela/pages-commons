function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

function htmlToElement(html) {
  var template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}

function round(number, decimals){
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)
}