let jsonDate = `{
  "oneData": "[12, 19, 3, 5, 2, 3]",
  "oneLabels": "[Red, Blue, Yellow, Green, Purple, Orange]",
  "twoData": "[10, 60, 30]"
}`;
// ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

jsonDate = JSON.parse(jsonDate);

let massiv = jsonDate.oneLabels;
let newMassiv = massiv.slice(1, -1);
let array = newMassiv.split(', ');


const ctx = document.getElementById('myChart');
const ctr = document.getElementById('myRound');
const taskDate = document.querySelector('.tasks__date-item');
const reviewDate = document.querySelectorAll('.tasks__due span');
const weekday = document.querySelectorAll('.weekday');
const day = document.querySelectorAll('.day');

new Chart(ctx, {
    type: 'line',
    data: {
      labels: array,
      datasets: [{
        label: 'Completed deals',
        data: JSON.parse(jsonDate.oneData),
        borderWidth: 2,
        borderColor: '#109CF1',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        fill: {
          target: 'origin',
          above: 'rgba(232, 246, 254, 0.6)',
        },
        tension: 0.3,
      }],
    },
  });

  new Chart(ctr, {
    type: 'doughnut',
    data: {
      labels: [
        "Ended",
        "Completed",
        "Active"
      ],

      datasets: [{
        data: JSON.parse(jsonDate.twoData),
        backgroundColor: [
          "#F7685B",
          "#2ED47A",
          "#FFB946",
        ],
        rotation: 185,
        cutout: '40%', 
      }],
    }
  });

  Push.create("Hello, my friend!", {
    body: "This is notification",
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg',
    timeout: 10000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
taskDate.innerHTML = moment().format('DD MMMM, dddd');
reviewDate.forEach(function(item){
  item.innerHTML = moment().format('MMMM DD, YYYY');
});

for(let i=0; i<weekday.length; i++){
  weekday[i].innerHTML = moment().add(i, 'days').format('ddd');
  day[i].innerHTML = moment().add(i, 'days').format('DD');
}