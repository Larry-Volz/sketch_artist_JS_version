$(function(){

  setInterval(()=>{
    if ($('#Faniel').attr("src") == "OriginalFaces/Faniel_mugshot.jpg") {
      $('#Faniel').fadeOut(1000, ()=>{
          $('#Faniel').attr("src", "OriginalFaces/Faniel_crowbar_closer800x1020.jpg")
      });
      $('#Faniel').fadeIn(1000);
    } else {
      $('#Faniel').fadeOut(1000, ()=>{
        $('#Faniel').attr("src", "OriginalFaces/Faniel_mugshot.jpg")
      })
      $('#Faniel').fadeIn(1000);
    }
  }, 3000);


    window.addEventListener('beforeunload', (event) => { 
        event.preventDefault(); // Google Chrome requires returnValue to be set. 	event.returnValue = ''; 
    }); 
    
/* ----------------------- MASTERMIND CONTROL PANEL CODE ---------------------------*/ 

// 

//---------------------------- CASE FILE ----------------------------------------

$("#case-basics-alert").on("click",(e)=>{
    
    if($('#file-basics').css('display') == 'none'){
        $(".file-content").slideUp();
        $("#file-basics").slideDown();
        // cbShowHide = 0;
    } else {
        $(".file-content").slideUp();
        $("#file-basics").slideUp()
        // cbShowHide = 1;
    }
})

$("#poi-alert").on("click",(e)=>{
    
    if($('#poi-details').css('display') == 'none'){
        $(".file-content").slideUp();
        $("#poi-details").slideDown();
        // cbShowHide = 0;
    } else {
        $(".file-content").slideUp();
        $("#poi-details").slideUp()
        // cbShowHide = 1;
    }
})

//----------------------------------- RUN PLATES -----------------------------------

$("#plates-form").on("click",(e)=>{
    e.preventDefault();
})

//-------------------------------RUN CRIMINAL RECORDS -------------------------------

$("#criminal-records-form").on("click",(e)=>{
    e.preventDefault();
})

//---------------------------- SKETCH ARTIST ----------------------------------------
$sketchPad = $("#sketch-pad");

const numberOfHeads = 3;
const numberOfWigs = 6; //one extra to take into account bald as option 5
const numberOfEyes = 2;
const numberOfEars = 1;
const numberOfNoses = 4;
const numberOfLips = 2;

let headPos =0;
let hairPos = 0;
let eyesPos = 0;
let nosePos = 0;
let earsPos = 0;
let lipsPos = 0;
let beardPos = 0;
let $newPos = 0;
let suspectNum =""; //actually a string
$('#suspect-num').text("0000000");




//Can construct a head object class with different heads/faces for different criminals
//that way criminal for this game can be different than the next

//TODO: Set up face sliders
$("#head-slider").on("input change",(e)=>{
  $newPos = $(e.target).val();
  
  console.log(`head slider moved from ${headPos} to ${$newPos}`);
  
  $(`#head${headPos}`).toggleClass("hidden");
  $(`#head${$newPos}`).toggleClass("hidden");    
  
  headPos = $newPos;
  $('#suspect-num').text(makeSuspectNum());
});

$("#hair-slider").on("input",(e)=>{
  $newPos = $(e.target).val();
  
  console.log(`hair slider moved from ${hairPos} to ${$newPos}`);
  
  $(`#hair${hairPos}`).toggleClass("hidden");
  $(`#hair${$newPos}`).toggleClass("hidden");    
  
  hairPos = $newPos;
  $('#suspect-num').text(makeSuspectNum());
});

$("#eyes-slider").on("input",(e)=>{
  $newPos = $(e.target).val();
  
    console.log(`eyes slider moved from ${eyesPos} to ${$newPos}`);
    
    $(`#eyes${eyesPos}`).toggleClass("hidden");
    $(`#eyes${$newPos}`).toggleClass("hidden");    
    
    eyesPos = $newPos;
    $('#suspect-num').text(makeSuspectNum());
  });
  
  $("#nose-slider").on("input",(e)=>{
    $newPos = $(e.target).val();
    
    console.log(`nose slider moved from ${nosePos} to ${$newPos}`);
    
    $(`#nose${nosePos}`).toggleClass("hidden");
    $(`#nose${$newPos}`).toggleClass("hidden");    
    
    nosePos = $newPos;
    $('#suspect-num').text(makeSuspectNum());
  });
  
  $("#lips-slider").on("input",(e)=>{
    $newPos = $(e.target).val();
    
    console.log(`lips slider moved from ${lipsPos} to ${$newPos}`);
    
    $(`#lips${lipsPos}`).toggleClass("hidden");
    $(`#lips${$newPos}`).toggleClass("hidden");    
    
    lipsPos = $newPos;
    $('#suspect-num').text(makeSuspectNum());
  });
  
$("#ears-slider").on("input",(e)=>{
  $newPos = $(e.target).val();
  
  console.log(`ears slider moved from ${earsPos} to ${$newPos}`);
  
  $(`#ears${earsPos}`).toggleClass("hidden");
  $(`#ears${$newPos}`).toggleClass("hidden");    
  
  earsPos = $newPos;
  $('#suspect-num').text(makeSuspectNum());
});

$("#FacialHair-slider").on("input",(e)=>{
  $newPos = $(e.target).val();
  
  console.log(`beard slider moved from ${beardPos} to ${$newPos}`);
  
  $(`#FacialHair${beardPos}`).toggleClass("hidden");
  $(`#FacialHair${$newPos}`).toggleClass("hidden");    
  
  beardPos = $newPos;
  $('#suspect-num').text(makeSuspectNum());
});

$('#choose').on('click', (e)=>{
  if (makeSuspectNum() == "1131150"){
    // $('#result').html('<style="font-size: .8rem; color: white;">YOU\'VE CRACKED THE CASE!  WELL DONE SHERLOCK!!</style>')
    alert("YOU'VE CRACKED THE CASE!  WELL DONE SHERLOCK!!");
  } else {
    // $('#result').html('<style="font-size: .8rem; color: red;">You have sent an innocent man to jail. Tsk tsk and for shame!')
    alert("You have sent an innocent man to jail. Tsk tsk and for shame!")
  }
})



function makeSuspectNum(){
  suspectNum = headPos + hairPos + eyesPos + nosePos + earsPos + lipsPos + beardPos
  return suspectNum
}


})