const cardBtn = document.getElementsByClassName('cardBtn');
let assignNumber =  parseInt(document.getElementById('assignNumber').innerText);
const dateDay = new Date();
const dateFormate = dateDay.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
});
const weekDay = dateDay.toLocaleDateString(undefined, { weekday: 'short' });
document.querySelector("#daySection").innerHTML = weekDay;
document.querySelector("#dateSpan").innerHTML = dateFormate;

for(btn of cardBtn){
    btn.addEventListener('click', function(event) {
        alert('Board Updated Successfully')
        assignNumber--;
        document.getElementById('assignNumber').innerText =  "0"+ assignNumber;
        document.getElementById('headerNumber').innerText++;
        
        event.target.setAttribute('disabled',true)
        
    })
    
}
