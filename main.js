Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90,
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function snapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captureimage">'      
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G1Iu_hszh/model.json",modelloaded)
function modelloaded() {
    console.log("modelloaded")
}
function check(){
    img=document.getElementById("captureimage")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if (error){ 
        console.log(error)
    }    else {
 console.log(results)
 document.getElementById("result_emotion_name").innerHTML=results[0].label
 document.getElementById("result_emotion_name2").innerHTML=results[1].label 
 var result=results[0].label
 var result2=results[1].label
 if (result=="angry") {
     document.getElementById("update_emoji").innerHTML="&#128520;"
 }
 if (result=="confused") {
    document.getElementById("update_emoji").innerHTML="&#128533;"
}
if (result=="happy") {
    document.getElementById("update_emoji").innerHTML="&#128512;"
}
if (result2=="angry") {
    document.getElementById("update_emoji2").innerHTML="&#128520;"
}
if (result2=="confused") {
   document.getElementById("update_emoji2").innerHTML="&#128533;"
}
if (result2=="happy") {
   document.getElementById("update_emoji2").innerHTML="&#128512;"
}
}}
    
