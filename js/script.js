
var sName = document.getElementById('bookmarkName');
var sURL = document.getElementById('bookmarkURL');

var sitesList;
var currIndex;



if(localStorage.getItem('site') == null){
    sitesList=[];
}else {
    sitesList=JSON.parse(localStorage.getItem('site'));
    display();
}

submitBtn.onclick=function(){
    if(validURL()){
        createSite();
    }else {
        window.alert(
            `Site Url is not valid, Please follow the rules below :\n
            1-contains HTTPS:\/\/\n
            2-domain name be between 3-15 character\n
            3-contains  ( .com,.eg,.co,.net,.online)
            `
        )
    }
}


function createSite(){
    var foundbefore = false;
    for(var i=0;i<sitesList.length;i++){
        if(sitesList[i].siteName == sName.value){
            foundbefore = true;
        }
    }
    if(!foundbefore){
        var site={
            siteName:sName.value,
            siteURL:sURL.value
        }
        sitesList.push(site);
        localStorage.setItem('site',JSON.stringify(sitesList));
        reset();
        display();
    }else{
        alert('You must enter another name "name exist"')
    }
}
function reset(){
    sName.value='';
    sURL.value='';
}
function display(){
    var tr=``;
    for(var i=0;i<sitesList.length;i++){
        tr +=`
        <tr>
        <td>${i+1}</td>
        <td>${sitesList[i].siteName}</td>
        <td><button class="btn btn-outline-warning" onclick="openSite(${i})"><i class="fa-solid fa-eye pe-2"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`
    }
    document.getElementById('tableContent').innerHTML=tr;
}

function deleteSite(index){
    sitesList.splice(index,1);
    localStorage.setItem('site',JSON.stringify(sitesList));
    display();
}

function openSite(index){
    window.open(sitesList[index].siteURL, "_blank");
}

function validURL() {
    var url= sURL.value;
    var pattern = /^(https:\/\/)(www\.)?[A-Za-z]{3,15}(\.)[A-Za-z]{2,6}$/
    return pattern.test(url);
  }