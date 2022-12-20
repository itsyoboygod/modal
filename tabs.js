function openInfo(evt, infoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoName).style.display = "block";
    evt.currentTarget.className += " active";
}
openInfo(event, 'gi-tab1');
// -------------------------------------------------------------------------------------------        
function openInfoTabs(evt, infoTab){
    var i, toptab, lefttab, tabcontent;
    toptab = document.getElementsByClassName("ulst");
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < toptab.length; i++) {
        toptab[i].style.display = "none";
        // tabcontent[i].style.display = "none";
    }
    lefttab = document.getElementsByClassName("tablinksl");
    for (i = 0; i < lefttab.length; i++) {
        lefttab[i].className = lefttab[i].className.replace(" active", "");
    }
    document.getElementById(infoTab).style.display = "flex";
    evt.currentTarget.className += " active";
}
openInfoTabs(event, 'technical');