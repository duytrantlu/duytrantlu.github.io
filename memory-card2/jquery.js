var image =["10r.png","10t.png","2r.png","6r.png","3r.png","3tep.png"];
var current=null;
//hàm đảo giá trị mảng
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function flip(card) {
    $(card).css('pointer-events', 'none');
    $(card).toggleClass('flip');
    document.getElementById('click-music').play();
    document.getElementById('click-music').volume=0.2;
    if(!current){
        current = $(card);
        $(card).css('pointer-events', 'none');
    }else {
        $('.card').css('pointer-events', 'none');
        if(current.attr('data-name')!=$(card).attr('data-name')){
            document.getElementById('click-wrong').play();
            document.getElementById('click-wrong').volume=0.2;
            //khong cho click div card
            $('.card').css('pointer-events', 'none');
            setTimeout(function () {
                current.toggleClass('flip');
                $(card).toggleClass('flip');
                current=null;
            },400);
            //mở click div card
            $('.card').css('pointer-events', 'auto');

        }else{
            document.getElementById('click-right').play();
            document.getElementById('click-right').volume=0.2;
            $('.card').css('pointer-events', 'none');
            setTimeout(function () {
                $(card).removeAttr("onclick");
                 current.removeAttr("onclick");
                $(card).css('opacity','0');
                current.css('opacity','0');
                current=null;
            },500);
            $('.card').css('pointer-events', 'auto');
        }
    }
}
//autoload
$(function () {
    image=image.concat(image);
    shuffle(image);
    var content="";
    for(var i=0;i<image.length;i++){
        content+="<div class='grid'>"
        content+="<div class='card' data-name='"+image[i]+"' onclick='flip(this)'>"
        content+="<div class='front'>"
        content+="<img src='./img/images.jpg' alt=''>"
        content+="</div>"
        content+="<div class='back'>"
        content+="<img src='./img/"+image[i]+" ' alt=''>"
        content+="</div>"
        content+="</div>"
        content+="</div>"
        $('.contenter').html(content);
        
    };
})