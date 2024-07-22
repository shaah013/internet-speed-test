self.onmessage = () => get_upload_speed();
function get_upload_speed() {
  const xhr = new XMLHttpRequest();
  const url = `https://google.com/?${new Date().getTime()}`;
  const data = return_random_string();
  let start_time, end_time;
  speed = 0;
  xhr.open('POST', url, true);
  start_time = performance.now();
  xhr.send(data);
  xhr.onreadystatechange = function(event) {
    if (xhr.readyState === 4) {
      end_time = performance.now();
      const speed = new Blob([result]).size / 1024 / 1024 / (end_time - start_time) * 1000;
      self.postMessage(speed)
    };
  };
}
function return_random_string() {
  const character_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<> ? ";
  result = ''; //using += is the fastest method to concentrate string 
  for (let i = 0; i < 1024 * 512; i++)
    result += character_set[Math.floor(Math.random() * character_set.length)];
  return result;
};