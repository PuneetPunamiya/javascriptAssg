var mylist = document.getElementsByTagName("li")
var index;

for(index = 0; index < mylist.length; index++){
    var aSpanTag = document.createElement("SPAN")
    var someTxt = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someTxt);
    mylist[index].appendChild(aSpanTag)
}

var closeButton = document.getElementsByClassName("close");

for(i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        var theDiv = this.parentElement;
        theDiv.style.display = "none"
    }
}

function addNewElement(){
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value 
    var textNode = document.createTextNode(theInputValue);

    li.append(textNode)

    if(theInputValue == ''){
        alert("Please add!!!")
    } else{
        document.getElementById("the-ul").appendChild(li)
    }

    document.getElementById("the-input").value = "";

    var thePanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag)

    for(i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var theDiv = this.parentElement;
            theDiv.style.display = "none"
        }
    }
}


var ulist = document.querySelector('ul');
ulist.addEventListener('click', function(event){
    
    if(event.target.tagName == "LI"){
        event.target.classList.toggle('checked');
    }
})
