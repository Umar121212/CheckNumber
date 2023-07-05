let openButton = document.querySelector('.openBtn')

openButton.addEventListener('click', function () {
    let slider = document.querySelector('.slider')

    slider.classList.toggle('sliderOpen')
})
let arrNum = ['90','91','93','94','95','97','98','99']
function checkTelNum(correctNum){
    let corNum = correctNum[0] + correctNum[1]
    for(i=0;i < arrNum.length;i++) {
        if(corNum == arrNum[i]) {
            return true
        }
    }
}
document.querySelector('.sbmt').onclick = function(){
    let regionNum = document.querySelector('.region').value
    let correctNum = document.querySelector('.telNum').value
    
    if (regionNum == '+998' && correctNum.length == 9 && checkTelNum(correctNum) == true) {
        alert("Кодовый номер Узбекистана")
    } else {
        alert('Кодовый номер другой страны')
    }
}
