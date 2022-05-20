var AGyroscope_x=0;
var AGyroscope_y=0;
var AGyroscope_z=0;
var AAccelerometer_x=0;
var AAccelerometer_y=0;
var AAccelerometer_z=0;
var judgevalue1=false;
var SweepTime_inc=12;
var SweepTime_inc24=6;
var cardNumArr =new Array();
var cardNumArr1=new Array();
var cardNumObj = {};
var cardNumArr2 =new Array();
var cardNumArr3=new Array();
var cardNumObi = {};
var handmotion1=new Array();
var motion1={};
var arr=new Array();
var arr2=new Array();
var arr3=new Array();
var arr4=new Array();
var arr5=new Array();
function handleOrientation(event) {
  updateFieldIfNotNull('Orientation_a', event.alpha);
  updateFieldIfNotNull('Orientation_b', event.beta);
  updateFieldIfNotNull('Orientation_g', event.gamma);
  incrementEventCount();
}

function incrementEventCount(){
  let counterElement = document.getElementById("num-observed-events")
  let eventCount = parseInt(counterElement.innerHTML)
  counterElement.innerHTML = eventCount + 1;
}

function updateFieldIfNotNull(fieldName, value, precision=10){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

function handleMotion(event) {
  updateFieldIfNotNull('Accelerometer_gx', event.accelerationIncludingGravity.x);
  updateFieldIfNotNull('Accelerometer_gy', event.accelerationIncludingGravity.y);
  updateFieldIfNotNull('Accelerometer_gz', event.accelerationIncludingGravity.z);

  updateFieldIfNotNull('Accelerometer_x', event.acceleration.x);
  updateFieldIfNotNull('Accelerometer_y', event.acceleration.y);
  updateFieldIfNotNull('Accelerometer_z', event.acceleration.z);

  updateFieldIfNotNull('Accelerometer_i', event.interval, 2);

  updateFieldIfNotNull('Gyroscope_z', event.rotationRate.alpha);
  updateFieldIfNotNull('Gyroscope_x', event.rotationRate.beta);
  updateFieldIfNotNull('Gyroscope_y', event.rotationRate.gamma);
  motion1={Accelerometer_Gx:event.accelerationIncludingGravity.x,Accelerometer_Gy:event.accelerationIncludingGravity.y,Accelerometer_Gz:event.accelerationIncludingGravity.z,Accelerometer_X:event.acceleration.x,Accelerometer_Y:event.acceleration.y,Accelerometer_Z:event.acceleration.z,Gyroscope_Z:event.rotationRate.alpha,Gyroscope_X:event.rotationRate.beta,Gyroscope_Y:event.rotationRate.gamma};
  handmotion1.push(motion1);
  if(AGyroscope_x<event.rotationRate.alpha){AGyroscope_x=event.rotationRate.alpha;}
  if(AGyroscope_y<event.rotationRate.beta){AGyroscope_y=event.rotationRate.beta;}
  if(AGyroscope_z<event.rotationRate.gamma){AGyroscope_z=event.rotationRate.gamma;}
  if(AAccelerometer_x<event.acceleration.x){AAccelerometer_x=event.acceleration.x;}
  if(AAccelerometer_y<event.acceleration.y){AAccelerometer_y=event.acceleration.y;}
  if(AAccelerometer_z<event.acceleration.z){AAccelerometer_z=event.acceleration.z;}
  incrementEventCount();
}
function handleMotion2(event) {
  var date=new Date();
  if((eval(event.acceleration.x)>eval(document.getElementById("AGyroscope_x").innerHTML))|(eval(event.acceleration.y)>eval(document.getElementById("AGyroscope_y").innerHTML))|(eval(event.acceleration.z)>eval(document.getElementById("AGyroscope_z").innerHTML))|(eval(event.rotationRate.alpha)>eval(document.getElementById("AAccelerometer_x").innerHTML))|(eval(event.rotationRate.beta)>eval(document.getElementById("AAccelerometer_y").innerHTML))|(eval(event.rotationRate.gamma)>eval(document.getElementById("AAccelerometer_z").innerHTML))){
    var x=document.getElementById("demo").innerHTML;
    arr.push(x);
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var milliseconds=date.getMilliseconds();
    var time=hours+":"+minutes+":"+seconds+":"+milliseconds;
    arr.push(time);
    if(eval(event.acceleration.x)>eval(document.getElementById("AGyroscope_x").innerHTML)){
      arr.push("acceleration.x");
      arr.push(event.acceleration.x);
      cardNumArr1.push("acceleration.x");
      cardNumArr1.push(event.acceleration.x);
    }
    if(eval(event.acceleration.y)>eval(document.getElementById("AGyroscope_y").innerHTML)){
      arr.push("acceleration.y");
      arr.push(event.acceleration.y);
      cardNumArr1.push("acceleration.y");
      cardNumArr1.push(event.acceleration.y);
    }
    if(eval(event.acceleration.z)>eval(document.getElementById("AGyroscope_z").innerHTML)){
      arr.push("acceleration.z");
      arr.push(event.acceleration.z);
      cardNumArr1.push("acceleration.z");
      cardNumArr1.push(event.acceleration.z);
    }
    if(eval(event.rotationRate.alpha)>eval(document.getElementById("AAccelerometer_x").innerHTML)){
      arr.push("rotationRate.alpha");
      arr.push(event.rotationRate.alpha);
      cardNumArr1.push("rotationRate.alpha");
      cardNumArr1.push(event.rotationRate.alpha);
    }
    if(eval(event.rotationRate.beta)>eval(document.getElementById("AAccelerometer_y").innerHTML)){
      arr.push("rotationRate.beta");
      arr.push(event.rotationRate.beta);
      cardNumArr1.push("rotationRate.beta");
      cardNumArr1.push(event.rotationRate.beta);
    }
    if(eval(event.rotationRate.gamma)>eval(document.getElementById("AAccelerometer_z").innerHTML)){
      arr.push("rotationRate.gamma");
      arr.push(event.rotationRate.gamma);
      cardNumArr1.push("rotationRate.gamma");
      cardNumArr1.push(event.rotationRate.gamma);
    }
    var y=cardNumArr1.toString();
    cardNumObj={frequent:x,datatime:time,peakAmplitude:y};
    cardNumArr.push(cardNumObj);
    var x=arr.toString();
    arr4.push(x);
    arr.splice(0,arr.length);
    cardNumArr1.splice(0,cardNumArr1.length);
  }
}
function handleMotion3(event) {
  var date2=new Date();
  if((eval(event.acceleration.x)>eval(document.getElementById("AGyroscope_x").innerHTML))|(eval(event.acceleration.y)>eval(document.getElementById("AGyroscope_y").innerHTML))|(eval(event.acceleration.z)>eval(document.getElementById("AGyroscope_z").innerHTML))|(eval(event.rotationRate.alpha)>eval(document.getElementById("AAccelerometer_x").innerHTML))|(eval(event.rotationRate.beta)>eval(document.getElementById("AAccelerometer_y").innerHTML))|(eval(event.rotationRate.gamma)>eval(document.getElementById("AAccelerometer_z").innerHTML))){
    var x=document.getElementById("demo").innerHTML;
    arr3.push(x);
    var hours=date2.getHours();
    var minutes=date2.getMinutes();
    var seconds=date2.getSeconds();
    var milliseconds=date2.getMilliseconds();
    var time=hours+":"+minutes+":"+seconds+":"+milliseconds;
    arr3.push(time);
    if(eval(event.acceleration.x)>eval(document.getElementById("AGyroscope_x").innerHTML)){
      arr3.push("acceleration.x");
      arr3.push(event.acceleration.x);
      cardNumArr3.push("acceleration.x");
      cardNumArr3.push(event.acceleration.x);
    }
    if(eval(event.acceleration.y)>eval(document.getElementById("AGyroscope_y").innerHTML)){
      arr3.push("acceleration.y");
      arr3.push(event.acceleration.y);
      cardNumArr3.push("acceleration.y");
      cardNumArr3.push(event.acceleration.y);
    }
    if(eval(event.acceleration.z)>eval(document.getElementById("AGyroscope_z").innerHTML)){
      arr3.push("acceleration.z");
      arr3.push(event.acceleration.z);
      cardNumArr3.push("acceleration.z");
      cardNumArr3.push(event.acceleration.z);
    }
    if(eval(event.rotationRate.alpha)>eval(document.getElementById("AAccelerometer_x").innerHTML)){
      arr3.push("rotationRate.alpha");
      arr3.push(event.rotationRate.alpha);
      cardNumArr3.push("rotationRate.alpha");
      cardNumArr3.push(event.rotationRate.alpha);
    }
    if(eval(event.rotationRate.beta)>eval(document.getElementById("AAccelerometer_y").innerHTML)){
      arr3.push("rotationRate.beta");
      arr3.push(event.rotationRate.beta);
      cardNumArr3.push("rotationRate.beta");
      cardNumArr3.push(event.rotationRate.beta);
    }
    if(eval(event.rotationRate.gamma)>eval(document.getElementById("AAccelerometer_z").innerHTML)){
      arr3.push("rotationRate.gamma");
      arr3.push(event.rotationRate.gamma);
      cardNumArr3.push("rotationRate.gamma");
      cardNumArr3.push(event.rotationRate.gamma);
    }
    var y=cardNumArr3.toString();
    cardNumObi={frequent:x,datatime:time,peakAmplitude:y};
    cardNumArr2.push(cardNumObi);
    var x=arr3.toString();
    arr5.push(x);
    arr3.splice(0,arr3.length);
    cardNumArr3.splice(0,cardNumArr3.length);
  }
}
function recordtable(){
   alert(arr4[0]);
  var str = "<table>";
   for(var i=0;i<arr4.length;i++){
     str += "<tr><td>"+arr4[i]+"</td></tr>";}
   str +="</table>";
  document.getElementById("test").innerHTML = str;
}
function recordtable2(){
   alert(arr5[0]);
  var str2 = "<table>";
   for(var j=0;j<arr5.length;j++){
     str2 += "<tr><td>"+arr5[j]+"</td></tr>";}
   str2 +="</table>";
  document.getElementById("test2").innerHTML = str2;
}
let is_running = false;
let demo_button = document.getElementById("start_demo");
let demo_button2 = document.getElementById("start_getpeak");
demo_button.onclick = function(e) {
  e.preventDefault();
  
  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  
  if (is_running){
    window.removeEventListener("devicemotion", handleMotion);
    window.removeEventListener("deviceorientation", handleOrientation);
    demo_button.innerHTML = "Start demo";
    demo_button.classList.add('btn-success');
    demo_button.classList.remove('btn-danger');
    is_running = false;
  }else{
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
    document.getElementById("start_demo").innerHTML = "Stop demo";
    demo_button.classList.remove('btn-success');
    demo_button.classList.add('btn-danger');
    is_running = true;
  }
};
demo_button2.onclick= function(e) {
  document.getElementById("AGyroscope_x").innerHTML = AGyroscope_x;
  document.getElementById("AGyroscope_y").innerHTML = AGyroscope_y;
  document.getElementById("AGyroscope_z").innerHTML = AGyroscope_z;
  document.getElementById("AAccelerometer_x").innerHTML = AAccelerometer_x;
  document.getElementById("AAccelerometer_y").innerHTML = AAccelerometer_y;
  document.getElementById("AAccelerometer_z").innerHTML = AAccelerometer_z;
}
const $ = document.querySelector.bind(document)
const AC = new AudioContext()
var SweepTime_inc=12;
var SweepTime_inc24=6;
// Creates a wrapper object around a Web Audio Oscillator plus Gain
// The wrapper object is needed because we cannot v-bind directly to
// AudioParam values.
const createAudioNode = ({type = "sine", freq = 440, gain = 1.0} = {}) => {
  const _osc = AC.createOscillator()
  _osc.frequency.value = freq
  _osc.type = type
  _osc.start()
  const _gain = AC.createGain()
  _gain.gain.value = gain
  _osc.connect(_gain)
  return {
    get type() {
      return _osc.type
    },
    set type(val) {
      _osc.type = val
    },
    get freq() {
      return _osc.frequency.value
    },
    set freq(val) {
      _osc.frequency.value = val
    },
    get gain() {
      return _gain.gain.value
    },
    set gain(val) {
      _gain.gain.value = val
    },
    toJSON() {
      return {
        type: _osc.type,
        freq: _osc.frequency.value,
        gain: _gain.gain.value
      }
    },
    _gain, _osc    
  }
}

const app = new Vue({
  el: '#app',
  data: {
    carrier: createAudioNode({
      type: "sine",
      freq: 440,
      gain: 0.3,
      freq_in: 0

    }),
    SweepTime_in:1,
    SweepTime:1,
    SweepStep_inc_in:1,
    SweepStep_inc:12,
    SweepStep_inc24:6,
    Sweep_Timer_Minute:0,
    Sweep_Timer_Second:0,
    Sweep_Timer_miniSecond:0,
    mods: []
    
  },
  mounted() {
    this.analyser = AC.createAnalyser()
    this.analyser.fftSize = 2048
    this.analyser.connect(AC.destination)
    this.buffer = new Uint8Array(this.analyser.frequencyBinCount)
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.anim()
  },
  methods: { 
    addOscillator(type = "sine", freq = 1, gain = 100.0) {
      this.disconnectNodes()
      this.mods.push(createAudioNode({type, freq, gain}))
      this.connectNodes()      
    },
    removeOscillator(idx) {
      this.disconnectNodes()
      this.mods.splice(idx, 1)
      this.connectNodes()
    },
    connectNodes() {
      if (this.mods.length > 0) {
        this.mods[0]._gain.connect(this.carrier._osc.frequency)
        for (i = 1;i < this.mods.length; i++) {
          this.mods[i]._gain.connect(this.mods[i-1]._gain.gain)
        }
      }
    },
    disconnectNodes() {
      this.mods.map(mod => mod._gain.disconnect())
    },
    play() {
      if (AC.state === "suspended") {
        AC.resume()
      }
      this.disconnectNodes()
      this.connectNodes()
      this.carrier._gain.connect(this.analyser)
    },
    stop() {
      this.carrier._gain.disconnect()
    },
    test() {
      this.freq = this.freq_in
    },
    Sweep_test(){
      if(this.SweepTime_in <1){alert("The minimum is 1");}
     else{
      this.SweepTime= this.SweepTime_in;}
    },
    SweepStep_test(){
      if(this.SweepStep_inc_in <1){alert("The minimum is 1");}
     else{
      this.SweepStep_inc= this.SweepStep_inc_in;
      this.SweepStep_inc24= Math.round(this.SweepStep_inc/2);}
    },
    


    anim() {
      requestAnimationFrame(() => this.anim())
      const { ctx, canvas, analyser, buffer } = this
      const width = canvas.width || 400
      const height = canvas.height || 300
      ctx.strokeStyle="rgb(128,255,128)"
      ctx.clearRect(0,0, width, height)
      analyser.getByteTimeDomainData(buffer)
      const dx = width / buffer.length
      const my = height / 2
      ctx.beginPath()
      ctx.moveTo(0, my + ((127-buffer[0]) / 128.0) * my)
      for (let i = 1; i < buffer.length; i++) {
        ctx.lineTo(i * dx, my + ((127-buffer[i]) / 128.0) * my)
      }
      ctx.stroke()
    },
    createPen() {
      const form = document.createElement('form')
      form.action = 'https://codepen.io/pen/define'
      form.target = '_blank'
      form.method = 'POST'
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = 'data'
      const carrierStr = JSON.stringify(this.carrier)
      const modulatorStr = this.mods.map(m => JSON.stringify(m)).join(',')
      input.value = JSON.stringify({
        title: 'test',
        html: $`.pen__html`.innerHTML,
        js: $`.pen__js`.innerHTML
          .replace(/%%CARRIER%%/, carrierStr)
          .replace(/%%MODULATORS%%/, modulatorStr)
          .replace(/&gt;/g, '>')
      })
      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
    }
  }
})

var date_start;
var Timer_flg=1;

function start(){

  window.Timer_flg=1;
 var record=new Date();  //开始时间
  window.date_start=record.getTime();
    }

 function Sweep_handle16(){
    // alert("1-16k扫频");  
   b=app.SweepTime;
   start();
   TimerRecordHandle(17);
  setTimeout("TimerHandle(1,16000,app.SweepStep_inc,b)",b);
   window.addEventListener("devicemotion", handleMotion2);

   } 
  /* if(app.SweepStep_inc!=12){
     alert("修改扫频步长后，扫频时间仅反映扫频速度，不对应准确时间");
   }
  a=app.SweepTime;
   
    //parsent()
    //var freq= document.getElementById("carrfreq").value;     
   if(a==8)
     { 
       setTimeout("TimerHandle(1,16000,SweepTime_inc,1,1)",1); }
       else if(a>8){
       b=Math.round(a/3*2) ;
       setTimeout("TimerHandle(1,16000,SweepTime_inc,b)",b); 
           } */     
 
 

function Sweep_handle24(){
     //alert("16-24k扫频"); 
  b=app.SweepTime; 
   start();
  TimerRecordHandle(17);
  setTimeout("TimerHandle(16000,24000,app.SweepStep_inc24,b)",b);
  window.addEventListener("devicemotion", handleMotion);
   }

function TimerHandle(nowfreq,endfreq,inc,timer){
  
   app.carrier.freq=nowfreq;
  //app.carrier.freq_in=nowfreq;
  document.getElementById("demo").innerHTML = nowfreq;
  
  incmm=inc;
  a=nowfreq+incmm;
   b=endfreq;
  c=timer;
  if(a<b){
    if(window.Timer_flg!=0){
    setTimeout("TimerHandle(a,b,incmm,c)",c);}
  }else{window.Timer_flg=0;}
  
}
function TimerRecordHandle(ms_inc){
    var timmer=new Date();
  // document.getElementById("carrfreq1").value = i;
  var record=timmer.getTime()-window.date_start;

app.Sweep_Timer_Minute=Math.floor(record/60/1000);
  record=record-app.Sweep_Timer_Minute*60*1000;
app.Sweep_Timer_Second=Math.floor(record/1000);
  record=record-app.Sweep_Timer_Second*1000;
app.Sweep_Timer_miniSecond=record;
  ms_recoed=ms_inc;
 // alert("hi");
  if(window.Timer_flg!=0){
    setTimeout("TimerRecordHandle(ms_recoed)",ms_recoed);
  }
  
}


function Sweep_stophandle(){
  window.Timer_flg=0;
}
function SweepStep_click(){
  var a=app.SweepStep_inc;
 
      app.SweepStep_inc24= Math.round(a/2);
 app.SweepStep_inc=app.SweepStep_inc/1;
    }
function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    window.downloadCSV = function(args) {
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: cardNumArr
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
window.downloadCSV2 = function(args) {
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: handmotion1
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
window.downloadCSV3 = function(args) {
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: handmotion1
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }


