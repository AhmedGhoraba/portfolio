 //Selectors
 var ease = document.querySelectorAll('.ease')
 var slowEase = document.querySelectorAll('.slow-ease');
 var navAnchor = document.querySelectorAll('a');
 var body = document.getElementsByTagName('body')[0];
 var about = document.getElementById('about');
 var allScroll = 0;

 //activate typewriter
 typeWriter('#typewriter');

 //Mousemove Events
 body.addEventListener('mousemove',function(e){
     ease.forEach(element => easeEffect(element, 30,e));
     slowEase.forEach(element => easeEffect(element, 50,e));
 })

 //Scroll Reveal
document.querySelector('.all').addEventListener('scroll',(e)=>{
    allScroll = e.target.scrollTop;
    //scroll reveal
    document.querySelectorAll('.reveal').forEach(element =>{
        if((e.target.offsetHeight+e.target.scrollTop) > element.offsetTop+200){
            element.style.top="0";
            element.style.opacity="1";
            setTimeout(() => {
                element.classList.remove('reveal');
            }, 700);
        }
    });
    //header position
    document.querySelectorAll('.sec').forEach(element =>{
        if(e.target.scrollTop >= element.offsetTop-200 && e.target.scrollTop < element.offsetTop+element.offsetHeight-200){
            document.querySelector('.'+element.id).classList.add('active');
        }
        else{
            document.querySelector('.'+element.id).classList.remove('active');
        }
    });
});
 //Nav links click event
 if(body.scrollIntoView){
     navAnchor.forEach(element =>{
         element.addEventListener('click',function(e){
             e.preventDefault();
             document.querySelector(element.hash).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
         });
     });
 }

 //Ease Fnction
 function easeEffect(element,level,e){
     var centerY = element.offsetTop+(element.offsetHeight/2);
     var centerX = element.offsetLeft+(element.offsetWidth/2);
     var mouseY = e.clientY+allScroll;
     element.style.transform = `translate3d(${(e.clientX-centerX)/level}px,${(mouseY-centerY)/level}px,0)`;
 }

 //typewriter function
 function typeWriter(id){
    var elem = document.querySelector(id);
    var textArr = [
        'Marketing Partner',
        'Trusted Advisor',
        'Business Consultant',
        'Entire Marketing Department'
    ].map(element => element.toUpperCase().split(''));
    elem.innerText = "";
    var sentence = 0;
    var letter = 0;
    var hold = 0;
    setInterval(function(){
        if(letter >= textArr[sentence].length){
            elem.style.animation = 'type 1s infinite';
            hold++;
            if(hold>=10){
                elem.style.backgroundColor = '#0081c6';
                elem.style.color = '#fff';
            }
            if(hold>=18){
                elem.innerText = "";
                hold = 0;
                letter = 0;
                if(sentence == 3){
                    sentence = 0;
                }
                else{   
                    sentence++;
                }
            }
        }
        else{
            elem.style.animation = 'none';
            elem.style.backgroundColor = 'transparent';
            elem.style.color = '#424242';
            elem.innerHTML += textArr[sentence][letter];
            letter++;
        }
        
    },100)
 }
