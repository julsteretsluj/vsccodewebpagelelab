function playertypesave(){
    var select = document.getElementById("selectplayer")
    var subbut1 = document.getElementById("submitplayertype")
        if (select.value == "thacima"){
            window.location.href="thacima.html"
        } else if (select.value == "thacisrv"){
            window.location.href="thacisrv.html"
        }
}