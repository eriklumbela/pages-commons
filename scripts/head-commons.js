function addDescriptionToHead(description) {
  const meta = document.createElement('meta')
  meta.name = 'description'
  meta.content = description
  document.getElementsByTagName('head')[0].appendChild(meta)
}

function appendToTitle(titleEnding) {
  document.title += titleEnding
}

function addGoogleAnalyticsTagToHead(googleAnalyticsId) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
  const script2 = document.createElement('script')
  script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`
  document.getElementsByTagName('head')[0].appendChild(script)
  document.getElementsByTagName('head')[0].appendChild(script2)
}