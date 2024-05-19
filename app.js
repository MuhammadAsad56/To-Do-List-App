var input = document.getElementById("input")
var box = document.getElementById("box")
function addText() {
    var inputValue = input.value
    if (inputValue.trim() == "") {
        input.style.border = '1px solid red'
    } else {
        input.style.border = 'none'
        var para = document.createElement('P')
        var text = document.createTextNode(input.value)
        para.setAttribute('class', 'para')
        para.appendChild(text)
        box.appendChild(para)

        var editBtn = document.createElement("button")
        var editBtnText = document.createTextNode('Edit')
        editBtn.appendChild(editBtnText)
        editBtn.setAttribute('onclick', 'eitText(this)')
        //end edit btn
        var dltbtn = document.createElement("button")
        var dltbtnText = document.createTextNode('Delete')
        dltbtn.appendChild(dltbtnText)
        dltbtn.setAttribute('onclick', 'dltline(this)')
        //end deletebtn
        para.appendChild(editBtn)
        para.appendChild(dltbtn)
        box.appendChild(para)
        input.value = ""
    }
}

function eitText(btn) {
    console.log(btn.parentNode.childNodes[0]);
    btn.parentNode.childNodes[0].nodeValue = prompt()
}

function dltline(e) {
    e.parentNode.remove()
}