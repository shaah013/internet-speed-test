<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="cache-control" content="no-cache" />
  <style>
    @keyframes appearing {
      from {
        opacity: 1;
        text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
        color: #fff;
      }
      to {
        opacity: 0.7;
      }
    }
    
    body {
      background-color: #141526
    }
    
    :root {
      --percentage: 70;
      --thickness: 22px;
      --color: transparent;
      --width: 500px;
      --angle: -125deg;
    }
    
    .circle {
      width: var(--width);
      height: var(--width);
      aspect-ratio: 1/1;
      transform: rotate(var(--angle));
      position: relative;
          }
    #parent_circle{
        display: none;
    }
    
    .circle:before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: radial-gradient(farthest-side, var(--color) 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(var(--color) calc(var(--percentage)*1%), #0000 0);
      -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
      mask: radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)));
      background-size: 0 0, auto;
    }
    
    #parent_circle>div:not(#current_speed) {
      position: absolute;
      bottom: 0;
      left: calc(50vw - 500px/2);
    }
    
    #all_number>div {
      color: #898993;
      font-family: sans-serif;
      font-weight: bolder;
      font-size: 1.5em;
      opacity: 0
    }
    
    #zero {
      position: absolute;
      top: -150px;
      left: 90px;
    }
    
    #one {
      position: absolute;
      top: -250px;
      left: 50px;
    }
    
    #five {
      position: absolute;
      top: -350px;
      left: 75px;
    }
    
    #ten {
      position: absolute;
      top: -425px;
      left: 150px
    }
    
    #twenty {
      position: absolute;
      top: -425px;
      left: 325px
    }
    
    #thirty {
      position: absolute;
      top: -350px;
      left: 400px
    }
    
    #fifty {
      position: absolute;
      top: -250px;
      left: 420px;
    }
    
    #hundred {
      position: absolute;
      top: -150px;
      left: 375px;
    }
    
    .shining {
      color: #fff !important;
      text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
      animation: 0.5s shine linear infinite;
    }
    
    @keyframes shine {
      from {
        text-shadow: 1px 1px 10px #fff, 1px 1px 10px white;
      }
    }
    
    #trapezoid {
      clip-path: polygon(0 100%, 25% 0, 80% 0, 100% 100%);
      background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0.85), transparent);
      height: 150px;
      width: 35px;
      position: absolute;
      left: calc(50vw - 30px/2);
      bottom: 35vh;
      transform: rotate(-125deg);
      transform-origin: bottom center;
      display: none;
    }
    
    #current_speed {
      font-size: 2.5em;
      color: white;
      position: absolute;
      bottom: 10vh;
      left: 47.5vw;
      font-weight: 900;
    }
    
    #info>#ip,
    #info>#country {
      color: #8b8da2;
      position: absolute;
      top: 95vh;
    }
    
    #info>#ip {
      left: 30vw;
    }
    
    #info>#country {
      left: 60vw;
    }
    
    #info>#isp,
    #info>#city {
      color: white;
      font-size: 1.4em;
      font-weight: 100;
      position: absolute;
      top: 90vh;
    }
    
    #info>#isp {
      left: 30.5vw;
    }
    
    #info > #city {
      left: 60vw;
    }
    #download ,#upload{
        color: white;
        position: absolute;
        left: 80vw;
        font-size: 1.85em;
        text-transform: uppercase;
        text-align: center;
    }
    #download{
       top: 15vh;
    }
    #upload{
        top: 50vh;
    }
    #download > span,#upload > span{
        color: #8b8da2;
        font-size: 0.6em;
        margin-left: 1vw;
        text-transform:capitalize;
    }
    #download_speed, #upload_speed{
        font-size: 2em;
        font-family: sans-serif;
        font-weight: 100;
        margin-top: 3vh;
    }
    #time{
        display: flex;
        color: #1db8f6;
        position: absolute;
        top: 7.5vh;
        left: 45vw;
        font-size: 1.3em;
        font-weight: 900;
    }
    #meta_data > div{
        color: rgba(250,250,250,0.9);
        font-size: 1.25em;
        margin: 2vh;
    }
    #meta_data{
        position: absolute;
        top: 20vh;
        left: 5vw;
    }
    #meta_data  span{
        color: whitesmoke ;
    }
    button{
        background: none;
        border-radius: 50%;
        color: whitesmoke;
        font-size: 2.2em;
        font-weight: 900;
          background: transparent;
          border: none;
          background-color: #141526;
  width: 200px;
  height: 200px;
  border-radius: 1000px;
    }
    #parent_of_button{
          position: absolute;
  left: calc(50vw - 100px);
  top: calc(50vh - 100px);
          background: -webkit-linear-gradient(left top, #23cdfa 0%, #70ffbd 100%);
        width: 200px;
        height: 200px;
        border-radius: 1000px;
        padding: 4px;
    }
    canvas{
        width: 60vw;
        height: 80vh;

    }

  </style>
</head>
<div id='download'>
    DownLoad <span >Mbps </span>
    <div id='download_speed'>

    </div>
</div>
<div id='upload'>
    UpLoad <span >Mbps </span>
     <div id='upload_speed'>
    
    </div>
</div>
<div id='parent_of_button'>
<button id='run_button'>Run</button>
</div>
<div id='parent_circle'>
  <div class='circle' id='circle_background' style='--color:#232f4e;'></div>
  <div class='circle' id='circle_range' style='--percentage:27;--color:rgba(0,0,255,0.75);'></div>
  <div id='all_number'>
    <div id='zero'>0</div>
    <div id='one'>1</div>
    <div id='five'>5</div>
    <div id='ten'>10</div>
    <div id='twenty'>20</div>
    <div id='thirty'>30</div>
    <div id='fifty'>50</div>
    <div id='hundred'>100</div>
  </div>
  <div id='current_speed'></div>
</div>
   <div id='trapezoid'></div>
<div id='meta_data'>
<div id='type'>Connection type: <span id='connection_type'></span></div>
<div id='status'>Network status: <span id='network_status'></span></div>
<div id='rtt_value'>Rtt (Round-trip delay): <span id='rtt'></span></div>
<div>Broswer: <span id='broswer'></span></div>
<div>OS: <span id='os'></span> </div>
<div>Device type: <span id='device'></span> </div>
</div>
<div id='time'></div>

<div id='info'>
  <div id='ip'></div>
  <div id='isp'></div>
  <div id='city'></div>
  <div id='country'></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js" integrity="sha512-hZf9Qhp3rlDJBvAKvmiG+goaaKRZA6LKUO35oK6EsM0/kjPK32Yw7URqrq3Q+Nvbbt8Usss+IekL7CRn83dYmw==" crossorigin="anonymous"></script>
<script id='web_worker_one' type='javascript/worker'>
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

</script>
<script id='web_worker_two' type='javascript/worker'>
  self.onmessage = () => get_upload_speed();

function get_upload_speed() {
const xhr = new XMLHttpRequest();
  const url = `https://google.com/?${new Date().getTime()}`;
  const data = return_random_string();
  let start_time, end_time;
  speed = 0;
  xhr.open('POST', url,true);
  start_time = performance.now();
  xhr.send(data);
  xhr.onreadystatechange = function(event) {
    if (xhr.readyState === 4) {
      end_time = performance.now();
      const speed = new Blob([result]).size / 1024 / 1024 / (end_time - start_time) * 1000 ;
      self.postMessage(speed)
    };
  };
}

function return_random_string() {
  //prevents gzip effect (a compression technique when process large file or data ) 
  const character_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<> ? ";
  result = ''; //using += is the fastest method to concentrate string 
  for (let i = 0; i <1024 * 512;i++) 
  result += character_set[Math.floor(Math.random() * character_set.length)];
return result;
};
 </script>

      <body>
        <script type="text/javascript">
        </script>
        <script>
const imagesize = 5241768 //in bytes
const src = "https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg"
const current_speed_element = document.querySelector('#current_speed')
const downloading_speed_array = [];
const uploading_speed_array = []
const arrow = document.querySelector('#trapezoid')
const all_range = document.querySelectorAll('#all_number > div')
const circle_range = document.querySelector('#circle_range')
const button = document.querySelector('button')

let basic_info, previous_time,global_time;

function update_elements() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  document.querySelector('#connection_type').textContent = connection.effectiveType;
  const downloadspeed = connection.downlink;
  document.querySelector('#network_status').textContent = (downloadspeed >= 10 ? "good (speed > 10)" : `poor (speed ${downloadspeed} < 10)`)
  document.querySelector('#rtt').textContent = connection.rtt
  document.querySelector('#info > #isp').textContent = basic_info.connection.organization
  document.querySelector('#info > #ip').textContent = basic_info.ip + ` (${basic_info.type})`
  document.querySelector('#info > #city').textContent = basic_info.location.city + ", " + basic_info.location.region.name
  document.querySelector('#info > #country').textContent = basic_info.location.postal + ", "+ basic_info.location.country.name
  document.querySelector('#time').textContent = global_time.toString().slice(4,24)
  document.querySelector('#broswer').textContent =basic_info.user_agent.name
  document.querySelector('#os').textContent = basic_info.user_agent.os.name;
  document.querySelector('#device').textContent = basic_info.user_agent.os.type

  button.addEventListener('click',function(){
    document.querySelector('#parent_circle').style.display='revert'
    arrow.style.display = 'revert';
   document.querySelector('#parent_of_button').style.display = "none"
   current_speed_element.textContent = "Connecting"
   current_speed_element.style.color = 'grey'
   current_speed_element.style.fontSize = "1em"
   

   setTimeout(()=>{
      get_download_speed()
       current_speed_element.style.fontSize = "2em"
      current_speed_element.style.color = 'white'
      current_speed_element.textContent = ""
   },2000)
  

  })

}


function fecth_basic_info() {
  return fetch('https://api.ipregistry.co/?key=5pset9ruii4bjgp9')
    .then(res => res.json())
    .then(data => {
      return data
    })
}

function get_download_speed() {
  const blob = new Blob([
    document.querySelector('#web_worker_one').textContent
  ], {
    type: "text/javascript"
  })

  const worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {

    //e.data/1000 =>convert from milliseconds to minutes
    //imagesize * 8 => convert imagesize from byte to bits 
    // '/1024' => convert to kbs
    // '/1024' => convert to mbs
    const current_speed = (imagesize * 8 / (e.data / 1000) / 1024 / 1024).toFixed(2)
        console.log(current_speed)
    current_speed_element.textContent = current_speed
    downloading_speed_array.push(current_speed)
    const percentage = calculate_percentage(current_speed)
    circle_range.style.setProperty('--percentage', percentage)
    if (downloading_speed_array.length < 40) {
      previous_time && previous_time - performance.now() < 500 ? setTimeout(get_download_speed, 500) : (get_download_speed())
    } else{
        get_average(downloading_speed_array, false);
        get_upload_speed()

    } 

  }
  worker.postMessage(`${src}?${new Date().getTime()}`);
}

function get_average(arr, isupload) {
  const array = arr.slice()
  for (let i = 0; i < 2; i++) {
    array.splice(array.indexOf(Math.max.apply(null, array)), 1)
    array.splice(array.indexOf(Math.min.apply(null, array)), 1)
  }
  array.splice(array.indexOf(Math.max.apply(null, array)), 1)
  const sum = array.reduce((sum, cur) => parseFloat(sum) + parseFloat(cur));
  document.querySelector(`#${isupload ? "upload_speed" : "download_speed"}`).textContent = (sum / array.length).toFixed(2)


}


//it is very hard to determine how to give the percentage for circle_range since the circle doesn't distributed equally          function calculate_percentage(speed) {
//the circle_range reach 1 mb when circle range has a percentage of 9
function calculate_percentage(speed) {
  let passed_number = null;
  if (speed <= 1) {
    passed_number = 0;
    change_text_color(passed_number)
    //1 is at transform: rotate(-89deg);
    arrow.style.transform = `rotate(${- 123 + (speed - passed_number) / (1 - passed_number) * 34}deg) `

    return (speed - passed_number) / (1 - passed_number) * 9;
  } else if (speed < 5) {
    passed_number = 1;
    change_text_color(passed_number)
    //5 is at transform: rotate(-59deg);
    arrow.style.transform = `rotate(${- 89 + (speed - passed_number) / (5 - passed_number) * 30}deg) `

    return (speed - passed_number) / (5 - passed_number) * 9 + 9;
  } else if (speed < 10) {
    passed_number = 5;
    change_text_color(passed_number)
    // 10 is at transform: rotate(-27deg);
    arrow.style.transform = `rotate(${- 57 + (speed - passed_number) / (10 - passed_number) * 32}deg) `

    return (speed - passed_number) / (10 - passed_number) * 10 + 18;

  } else if (speed < 20) {
    passed_number = 10
    change_text_color(passed_number)
    // 20 is at transform: rotate(27deg);
    arrow.style.transform = `rotate(${-27 + (speed - passed_number) / (20 - passed_number) * 54}deg) `

    return (speed - passed_number) / (20 - passed_number) * 15.5 + 27;

  } else if (speed < 30) {
    passed_number = 20
    change_text_color(passed_number)
    //30 is at transform: rotate(57deg);
    arrow.style.transform = `rotate(${27 + (speed - passed_number) / (30 - passed_number) * 30}deg) `


    return (speed - passed_number) / (30 - passed_number) * 10 + 42.5;

  } else if (speed < 50) {
    passed_number = 30;
    change_text_color(passed_number)
    //50 is at transform: rotate(89deg);
    arrow.style.transform = `rotate(${57+ (speed - passed_number) / (50 - passed_number) * 32}deg) `

    return (speed - passed_number) / (50 - passed_number) * 8.5 + 52.5;
  } else if (speed < 100) {
    passed_number = 50;
    change_text_color(passed_number)
    //50 is at transform: rotate(125deg);
    arrow.style.transform = `rotate(${89 + (speed - passed_number) / (100 - passed_number) * 36}deg) `


    return (speed - passed_number) / (100 - passed_number) * 9 + 61;
  } else {
    passed_number = 100
    change_text_color(passed_number)
    arrow.style.transform = "rotate(130deg)"
    //the full circle is 70
    return 70;
  }
}

function change_text_color(max_passed_number) {
  all_range.forEach(i => i.classList.remove('shining'))
  all_range.forEach(i => {
    if (i.textContent <= max_passed_number) i.classList.add('shining')
  })
}

window.onload = function() {
  Promise.all([fecth_basic_info(),fetch_time()]).then(result => {
    basic_info = result[0]
    global_time = result[1]
    update_elements();

    arrow.style.transition = 'transform 0.1s ease-out'
    all_range.forEach((i, index) => {
      i.style.animation = `0.125s ease-in ${index / 8}s 1 appearing`
      i.addEventListener('animationend', () => i.style.opacity = 1)
    })


  })

}

function fetch_time(){

return fetch("https://worldtimeapi.org/api/timezone/america/new_york")
    .then(res => res.json())
    .then(data => new Date(data.datetime))

}
function get_upload_speed() {

  circle_range.style.setProperty('--color', "#895bdd")
  const blob = new Blob([
    document.querySelector('#web_worker_two').textContent
  ], {
    type: "text/javascript"
  })

  const worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {

    const speed = e.data.toFixed(2)
    uploading_speed_array.push(speed);
    const percentage = calculate_percentage(speed)
    current_speed_element.textContent = speed;

    circle_range.style.setProperty('--percentage', percentage)
    if (uploading_speed_array.length < 40) {
      previous_time && previous_time - performance.now() < 500 ? setTimeout(get_upload_speed, 500) : (get_upload_speed())
    } else {
        get_average(uploading_speed_array, true)
        final_page()
    }
    previous_time = performance.now()

  }
  worker.postMessage("start");
}
function final_page(){
    document.querySelector("#parent_circle").style.display = 'none'
    document.querySelector('#meta_data').style.display = 'none'
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    createChart()
    arrow.style.display ='none'

}


function createChart(){
   const context = document.querySelector('canvas').getContext('2d')
   var myChart = new Chart(context, {
  type: 'line',
  data: {
    animation,
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      },
      interaction: {
        intersect: false
      },
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: false
      },
    labels: uploading_speed_array.map((i,index)=> index + 1),
    datasets: [

      {
        label: 'upload',
        data: uploading_speed_array,
        fill: false,
        radius: 0,
          pointHoverRadius: 0,
        borderColor: '#9860e6'
      },
      {
        label: 'download',
        data: downloading_speed_array,
        fill: false,
        borderColor: '#37dbf8',
        radius: 0,
          pointHoverRadius: 0
    
      }
      
    ]
  },
  options: {
    scales: {
      y: {
         gridLines: {
            display:false
        } ,
        ticks: {
          beginAtZero: true
        },

      },
      x: {
        gridLines: {
            display:false
        } ,
        type:'linear',
      },

    }
    }

});
}
        </script>

      </body>

</html>
