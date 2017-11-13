window.onload=function(){
    
    var comments=document.getElementById("comment").value;
    var button=document.getElementById("btn");
    var conteiner=document.getElementsByClassName("conteiner")[0];
    button.disabled=true;
    var divChart=document.createElement("div");
    var spamChart1=document.createElement("spam");
    var txtSpam1=document.createTextNode("Caracteres restantes: ")
    var spamChart2=document.createElement("spam");
    var txtSpam2=document.createTextNode("140");
    
    spamChart1.appendChild(txtSpam1);
    spamChart1.classList.add("chart");

    spamChart2.appendChild(txtSpam2);
    spamChart2.style.fontSize="0.7em";
    

    divChart.appendChild(spamChart1);
    divChart.appendChild(spamChart2);
    conteiner.insertBefore(divChart,button);

    var section=document.getElementsByTagName("section")[0];
    var cont=document.createElement("div"); 
    section.appendChild(cont);

    function disabled(){
        button.disabled=true;
        button.style.backgroundColor="grey";        
    }
    function enabled(){
        button.disabled=false
        button.style.backgroundColor="rgb(59, 154, 243)";
    }
    var textarea=document.getElementById("comment");
    textarea.onkeyup=function(){
        if(this.value===""){
           disabled(); 
        }else{
           enabled();
        }
        autosize(this);
        counter();
    }
    button.onclick=function(){
        spamChart2.style.color="black"
        autosize(textarea);
        add();
    }
    function add(){   
        var comments=document.getElementById("comment").value;
        document.getElementById("comment").value="";
        disabled();

        txtSpam2.textContent=140;
               
        var newComment=document.createElement("div");
        newComment.setAttribute("id","newComment")
               
        var paragraph=document.createElement("p");        
        var nodeText=document.createTextNode(comments);
        paragraph.appendChild(nodeText);
        newComment.appendChild(paragraph);

        var trash=document.createElement("i");
        trash.classList.add("fa", "fa-trash", "trash");
        newComment.appendChild(trash);
        
        cont.appendChild(newComment);
        cont.classList.add("cont");
       
        var printHour=document.createElement("p");
        printHour.style.fontSize=".7em";
        newComment.appendChild(printHour);
        var date=new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        if(hour<10){
            hour='0'+hour;
        }
        if(minutes<10){
            minutes='0'+minutes;
        }
        formatHour=hour+':'+minutes;       
        var nodeHour=document.createTextNode(formatHour);
        printHour.appendChild(nodeHour);

        trash.addEventListener("click",function(){
            cont.removeChild(newComment);
            cont.style.backgroundColor="transparent";
        })
    }
                    
    function autosize(el){
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }
          
    function counter(){  
        var comments=document.getElementById("comment").value;
        var max=140;
        var nChart=comments.length;
        txtSpam2.textContent=max-comments.length;
        if(nChart>max){
            disabled();
        }else if(nChart>120 && nChart<=130){
            spamChart2.style.color="blue";
        }else if(nChart>130){
            spamChart2.style.color="red";
        }else{
            spamChart2.style.color="black"
        }
    }
}