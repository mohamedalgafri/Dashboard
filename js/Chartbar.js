
////////////////////////////////////////

const ctx1 = document.getElementById("myChart").getContext("2d");


//Gradient Fill 
let gradient = ctx1.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,'#EBF3FF');
gradient.addColorStop(1,'#ebf3ff00');



let delayedd;

const dataline = {
    labels : [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
    ],
    datasets: [
        {
            data: [201,326,265,350,420,370,500,375,415,375,415],
            label: "M",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#7CAFFF",
            pointBackgroundColor: "#7CAFFF",
            // tension: 0.4, // be3mal ah7t a3wj
        },

 
    ],
};

const configg = {
 type:"line",
 data:dataline,
 options:{
    plugins: {
        legend: {
            display: false
        }
    },
    radius:2,   // radius point 
    hitRadius:30,
    hoverRadius:4,
    responsive:true,
    animation: {
        onComplete: () => {
            delayedd = true;
        },
        delay: (contextt) => {
            let delay = 0;
            if (contextt.type === "dataline" && contextt.mode === "default" && !delayedd) {
                delay = contextt.dataIndex * 200 + contextt.datasetIndex * 100;
            }
            return delay;
        },
    },
    scales: {
        y: {
            display: false,
            beginAtZero: true,
            ticks: {
                display: false,
                callback: function (value) {
                    return "$" + value + "m";
                  }
            },
            grid: {
                display: false,
                drawTicks: false,
                drawOnChartArea: false,
            }
        },

        x:{
            display: false,
            ticks: {
                display: false,
            },
            grid: {
                display: false,
            }
        }
     },
 },
 

};

const myChart = new Chart(ctx1,configg);

////////////////////////////////////////


const ctx = document.getElementById("myChartbar").getContext("2d");

let delayed;

const labels = [
    "20 Feb",
    "21 Feb",
    "22 Feb",
    "23 Feb",
    "24 Feb",
    "25 Feb",
    "26 Feb",
    "27 Feb",
    "28 Feb",
    "29 Feb",
    "01 Mar",

];

const data = {
    labels,
    datasets: [
        {
            data: [750,800,1000,850,1600,2000,5000,1500,2000,3000,800],
            label: " Sales",
            fill: "true",
            backgroundColor: "#50B5FF",
            borderColor: "#889",
            pointBackgroundColor: "#889",
            tension: 0.4, // be3mal ah7t a3wj
            maxBarThickness: 8,
        },
        {
            data: [480,700,800,700,1500,1700,4700,1460,1800,2900,700],
            label: "Sales",
            fill: "true",
            backgroundColor: "#82C43C",
            borderColor: "#889",
            pointBackgroundColor: "#889",
            tension: 0.4, // be3mal ah7t a3wj
            maxBarThickness: 8,
            
        },

 
    ],
};

const config = {
 type:"bar",
 data:data,
 options:{
    plugins: {
        legend: {
            display: false
        }
    },
    radius:5,   // radius point 
    hitRadius:30,
    hoverRadius:12,
    responsive:true,
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default" && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
    },
    scales: {
        y: {
            ticks: {
                callback: function (value) {
                    return value;
                  }
            },
        },
     },
 },
 

};

const myChartbar = new Chart(ctx,config)

////////////////////////////////////////////////////


const ctx2 = document.getElementById("myChartmultyline").getContext("2d");


//Gradient Fill 
let delayed2;

const datamultline = {
    labels: [

        "24 Feb",
        "25 Feb",
        "26 Feb",
        "27 Feb",
        "28 Feb",
        "29 Feb",
    ],
    datasets: [
        {
            data: [90,170,500,50 ,190,180],
            label: " Sales",
            fill: "true",
            borderColor: "#FC5A5A",
            pointBackgroundColor: "#fff",
            // tension: 0.4, // be3mal ah7t a3wj
        },
        {
            data: [200,90,100,180 ,100,100],
            label: " Sales",
            fill: "true",
            borderColor: "#1E75FF",
            pointBackgroundColor: "#fff",
            // tension: 0.4, // be3mal ah7t a3wj
        },
        {
            data: [0,400,10,750 ,500,250],
            label: " Sales",
            fill: "true",
            borderColor: "#FF974A",
            pointBackgroundColor: "#fff",
            // tension: 0.4, // be3mal ah7t a3wj
        },
        {
            data: [300,250,180,400 ,0,500],
            label: " Sales",
            fill: "true",
            borderColor: "#A461D8",
            pointBackgroundColor: "#fff",
            // tension: 0.4, // be3mal ah7t a3wj
        },

        

 
    ],
};

const config2 = {
 type:"line",
 data:datamultline,
 options:{
    plugins: {
        legend: {
            display: false
        }
    },
    radius:0,   // radius point 
    hitRadius:30,
    responsive:true,
    animation: {
        onComplete: () => {
            delayed2 = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default" && !delayed2) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
    },
    scales: {
        y: {
            ticks: {
                callback: function (value) {
                    return "$" + value ;
                  }
            },
        },
     },
 },
 

};

const myChart2 = new Chart(ctx2,config2)

/////////////////////////////////////////////////////////////

const ctx3 = document.getElementById("myChartbarHorizontal").getContext("2d");

let delayed3;


const data3 = {
    labels: [
        "Desktop",
        "Mobile",
        "Tablet",
        "Others",
    ],
    datasets: [
        {
            data: [50,150,48,38],
            label: " Sales",
            fill: "true",
            backgroundColor: [
                '#1E75FF',
                '#50B5FF',
                '#FFC542',
                '#FF974A',
              ],
            borderColor: "#889",
            pointBackgroundColor: "#889",
            tension: 0.4, // be3mal ah7t a3wj
            maxBarThickness: 20,
        },

 
    ],
};

const config3 = {
 type:"bar",
 data:data3,
 options:{
    indexAxis: 'y',
    plugins: {
        legend: {
            display: false
        }
    },
    radius:5,   // radius point 
    hitRadius:30,
    hoverRadius:12,
    responsive:true,
    animation: {
        onComplete: () => {
            delayed3 = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default" && !delayed3) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
    },
    scales: {
        x: {
            ticks: {
                callback: function (value) {
                    return value + "m";
                  }
            },
        },
     },
 },
 

};

const myChartbarHorizontal = new Chart(ctx3,config3)