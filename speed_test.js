<!DOCTYPE html>
<html >
 <head>
<meta http-equiv="cache-control" content="no-cache" />
<style>

@keyframes appearing{
    from{
        opacity: 1;
     text-shadow:1px 1px 10px #fff, 1px 1px 10px #ccc;
       color:#fff;
    }
    to{
        opacity: 0.7;
    }
}
body{
    background-color: #141526
}
:root{
   --percentage:70;   
  --thickness:22px;    
  --color:transparent; 
  --width:500px;  
  --angle:  -125deg;  
}
.circle { 
  width:var(--width);
  height: var(--width);
  aspect-ratio:1/1;
   transform: rotate(var(--angle));
  position:relative;

}
.circle:before {
  content:"";
  position:absolute;
  inset:0;
    border-radius:50%;   
  background:
    radial-gradient(farthest-side,var(--color) 98%,#0000) top/var(--thickness) var(--thickness) no-repeat,
    conic-gradient(var(--color) calc(var(--percentage)*1%),#0000 0);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)));
     mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)));
      background-size:0 0,auto;
}

#parent_circle > div{
    position: absolute;
    bottom: 0;
    left: calc(50vw - 500px/2);
}
#all_number > div{
  color: #898993;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 1.5em;
  opacity: 0
}


#zero{
    position: absolute;
    top:-150px ;
    left: 90px;
}

#one{
    position:absolute;
    top: -250px;
    left: 50px;
}
#five{
    position: absolute;
    top: -350px;
    left: 75px;
}
#ten{
    position: absolute;
    top:-425px;
    left: 150px
}
#twenty{
   position: absolute;
    top:-425px;
    left: 325px
}
#thirty{
       position: absolute;
      top:-350px;
    left: 400px

}
#fifty{
      position: absolute;
    top:  -250px;
    left: 420px;

}
#hundred{
     position: absolute;
     top: -150px;
    left: 370px;
}
.shining{
     color:#fff !important;
      text-shadow:1px 1px 10px #fff, 1px 1px 10px #ccc;
      animation: 2s shine linear infinite !important;
}
@keyframes shine{
    from{
        text-shadow:1px 1px 10px #fff, 1px 1px 10px white;
    }
}
    </style>
 </head>
<button>Click here to testing</button>
<div id='parent_circle'>
<div class='circle' id='circle_background' style='--color:#232f4e;'></div>
<div class='circle' id='circle_range'style='--percentage:39;--color:blue;'></div>
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
</div>

updates every 5 seconds
<div id="speed">speed: 0kbs</div>
<div id="average">average: 0kbs</div>



<script id='web_worker_one' type='javascript/worker'>
self.onmessage  = function(e) {
const src =e.data
 const xhr =  new XMLHttpRequest();
     const now = performance.now();
        xhr.responseType = 'blob';
        xhr.onload = ()=>{
             self.postMessage(performance.now() - now)
        }
         xhr.open('GET', src, true);
         xhr.send()
  };

</script>
<script id='web_worker_two' type='javascript/worker'>

</script>
 <body>
    <script type="text/javascript">
  check();

  function check() {
    console.log('what')
    const xhr = new XMLHttpRequest();
    const url = `?cache=${Math.floor( Math.random() * 10000) }`;
    const data = return_random_string(); 
    let start_time, end_time;
      speed = 0;
      console.log('wh')
          xhr.open('POST', url, true);
             console.log(url)
    start_time = performance.now()
    xhr.send(data);
    xhr.onreadystatechange = function(event) {
        console.log('wja')

      if (xhr.readyState ===  4) {
        end_time = performance.now();
        console.log(end_time-start_time)

        const speed = 1/ (end_time - start_time) * 1000
        console.log(speed)
    };
  };
}
  function return_random_string() {
   //prevents gzip effect (a compression technique when process large file or data )
   const character_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<>?";
      result = '';
      //using += is the fastest method to concentrate string 
    for (let i = 0; i <  1024 * 1024; i++) 
      result += character_set[Math.floor(Math.random() * character_set.length)];
    return result;
};

setInterval(check,5000);
</script>
    <!--
<script>


const imagesize = 5241768 //in bytes
const src = "https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg"
const loading_time_array = []
const loading_speed_array = []
const all_range =  document.querySelectorAll('#all_number > div')
const circle_range = document.querySelector('#circle_range')
document.querySelector('button').addEventListener('click', assign);
let number = 0;
function assign(){
      const blob = new Blob([
    document.querySelector('#web_worker_one').textContent
  ], {
    type: "text/javascript"
  })

  const worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
    loading_time_array.push(e.data)
    //e.data/1000 =>convert from milliseconds to minutes
    //imagesize * 8 => convert imagesize from byte to bits 
    // '/1024' => convert to kbs
    // '/1024' => convert to mbs
    const current_speed = (imagesize * 8 / (e.data/1000)/1024/1024).toFixed(2)
    loading_speed_array.push(current_speed)
    const percentage = calculate_percentage(current_speed)
    circle_range.style.setProperty('--percentage',percentage)
    console.log(current_speed)
    if(loading_time_array.length < 30) assign()
  }
  number+=1;
  worker.postMessage(`${src}?${new Date().getTime()}`);
}

//it is very hard to determine how to give the percentage for circle_range since the circle doesn't distributed equally
function calculate_percentage(speed){

    //the circle_range reach 1 mb when circle range has a percentage of 9
    let passed_number = null;
    if(speed <= 1){
       passed_number = 0;
        change_text_color(passed_number)
        return (speed - passed_number) / (1 - passed_number) * 9;
    } 
    else if(speed <= 5){
     passed_number = 1;
    return (speed - passed_number) / (5 - passed_number) * 9 + 9;
    } 
    else if(speed <= 10){
        passed_number = 5;
         change_text_color(passed_number)
    return (speed - passed_number) / (10 - passed_number) * 10 + 18;

    } 
    else if(speed <= 20){
        passed_number = 10
         change_text_color(passed_number)
        return (speed - passed_number) / (20 - passed_number) * 6.5 + 36;

    } 
    else if(speed <= 30){
        passed_number =20
         change_text_color(passed_number)
        return (speed - passed_number) / (30 - passed_number) * 10 + 42.5;

    } 
    else if(speed <= 50){
        passed_number = 30;
        change_text_color(passed_number)
        return (speed - passed_number) / (50 - passed_number) * 8.5 + 52.5;
    } 
    else if(speed <= 100){
       passed_number = 50;
       change_text_color(passed_number)
       return (speed - passed_number) / (100 - passed_number) * 9 * 61;
    } 
}

function change_text_color(max_passed_number){
    all_range.forEach(i=>i.classList.remove('shining'))
   console.log(max_passed_number)
    all_range.forEach(i=>{
       if(i.textContent <= max_passed_number){
       i.classList.add('shining')
        //i.style.textShadow = '1px 1px 10px #fff, 1px 1px 10px #ccc;';
       }
    })
}

window.onload = function(){
    testUpload()
 
    all_range.forEach((i,index)=>{
        i.style.animation = `0.2s ease-in ${index / 5}s 1 appearing`
        i.addEventListener('animationend',()=>i.style.opacity =1)
   
    })


   

}







</script>
-->
<script>

</script>
</body>

</html>
