self.onmessage = function(e) {
  const src = e.data
  const xhr = new XMLHttpRequest();
  const now = performance.now();
  xhr.responseType = 'blob';
  xhr.onload = () => {
    self.postMessage(performance.now() - now)
  }
  xhr.open('GET', src, true);
  xhr.send()
};
