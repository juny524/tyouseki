import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import axios from 'axios'
import { ApiaccessService } from '../apiaccess.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas : any;
  public ctx;
  public gradientFill;
  public lineBigDashboardChartData:Array<any>;
  public lineBigDashboardChartOptions:any;
  public lineBigDashboardChartLabels:Array<any>;
  public lineBigDashboardChartColors:Array<any>

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  public lineChartType;
  public lineChartData:Array<any>;
  public lineChartOptions:any;
  public lineChartLabels:Array<any>;
  public lineChartColors:Array<any>

  public lineChartWithNumbersAndGridType;
  public lineChartWithNumbersAndGridData:Array<any>;
  public lineChartWithNumbersAndGridOptions:any;
  public lineChartWithNumbersAndGridLabels:Array<any>;
  public lineChartWithNumbersAndGridColors:Array<any>

  public lineChartGradientsNumbersType;
  public lineChartGradientsNumbersData:Array<any>;
  public lineChartGradientsNumbersOptions:any;
  public lineChartGradientsNumbersLabels:Array<any>;
  public lineChartGradientsNumbersColors:Array<any>

  public honjitu: string = "";
  public asu: string = "";
  public asatte: string = "";
  public mikka: string = "";
  public yokka: string = "";
  public ituka: string = "";
  public muika: string = "";

  public viewday: string = "";
  public moon: string = "";

  public todays_weather: string = "";

  private jsondata;

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  constructor(private apiaccessService: ApiaccessService) { }

  ngOnInit() {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("bigDashboardChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(-50, 150, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    
      
    this.lineBigDashboardChartData = [
      {
        label: "Data",

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
      }
    ];

    // axios.post("https://api.tide736.net/get_tide.php", {
    //   pc: '27',
    //   hc: '6',
    //   yr: '2021',
    //   mn: '10',
    //   dy: '17',
    //   rg: 'day'
    // }).then(function (response) {
    //   console.log(response.data);


    // }).catch((e) => {
    //   console.error(e.response.data.error + "エラーになりました");
    // });

    // https://weather.tsukumijima.net/api/forecast/city/130010

    // pc=28&hc=9&yr=2021&mn=10&dy=7&rg=day

    // let api_url: string = "https://api.tide736.net/get_tide.php";

    // let httpOptions = {
    //   headers: new HttpHeaders().set('Content-Type','application/json'),
    //   params: new HttpParams().set('zipcode', zipCode)
    // };
   
    // axios.get(
    //   api_url, {
    //     params: {
    //       pc: '28',
    //       hc: '9',
    //       yr: '2021',
    //       mn: '10',
    //       dy: '7',
    //       rg: 'day'
    //     }
    //   }
    // )
    // .then(res => {
    //   let tenki_json_obj = res.data;
    //   console.log(res.data);
      

    // })
    // .catch((e) => {
    //   if (e.response !== undefined) {
    //     console.error(e.response.data.error + "エラーになりました");
    //   }
    // })
    // .finally(() => {
    // });

    let today = new Date();


    let pc: string = "28";
    let hc: string = "9";
    let yr = today.getFullYear() + "";
    let mn = (today.getMonth() + 1) + "";
    let dy = today.getDate() + "";
    let rg: string = "week";

    // this.apiaccessService.onNotifySharedDataChanged(this);

    let api_url: string = "https://tide736.net/api/get_tide.php?pc=" + pc + "&hc=" + hc + "&yr=" + yr + "&mn=" + mn + "&dy=" + dy + "&rg=" + rg;
   
    this.honjitu = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    this.viewday = this.honjitu;
    today.setDate(today.getDate() + 1);
    this.asu = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + 1);
    this.asatte = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + 1);
    this.mikka = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + 1);
    this.yokka = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + 1);
    this.ituka = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    today.setDate(today.getDate() + 1);
    this.muika = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    axios.get(
      api_url
    )
    .then(res => {
      this.jsondata = res.data;
      console.log(res.data);

      // console.log(tenki_json_obj["tide"]["chart"]["2021-10-07"]["tide"]);
      let tide = this.jsondata["tide"]["chart"][yr + "-" + mn + "-" + dy]["tide"];
      this.moon = this.jsondata["tide"]["chart"][yr + "-" + mn + "-" + dy]["moon"]["title"];

      const nums: number[] = [];
      tide.find((element) => {
        // console.log(element["cm"]);
        nums.push(Number(element["cm"]));
      });
      console.log(nums);


      this.lineBigDashboardChartData = [
        {
          label: "Data",

          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,

          borderWidth: 2,
          data: nums
        }
      ];
      

    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }


    })
    .finally(() => {
    });







      this.lineBigDashboardChartColors = [
       {
         backgroundColor: this.gradientFill,
         borderColor: this.chartColor,
         pointBorderColor: this.chartColor,
         pointBackgroundColor: "#2c2c2c",
         pointHoverBackgroundColor: "#2c2c2c",
         pointHoverBorderColor: this.chartColor,
       }
     ];
    // this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    this.lineBigDashboardChartLabels = 
    [
      "00:00",
      "00:20",
      "00:40",
      "01:00",
      "01:20",
      "01:40",
      "02:00",
      "02:20",
      "02:40",
      "03:00",
      "03:20",
      "03:40",
      "04:00",
      "04:20",
      "04:40",
      "05:00",
      "05:20",
      "05:40",
      "06:00",
      "06:20",
      "06:40",
      "07:00",
      "07:20",
      "07:40",
      "08:00",
      "08:20",
      "08:40",
      "09:00",
      "09:20",
      "09:40",
      "10:00",
      "10:20",
      "10:40",
      "11:00",
      "11:20",
      "11:40",
      "12:00",
      "12:20",
      "12:40",
      "13:00",
      "13:20",
      "13:40",
      "14:00",
      "14:20",
      "14:40",
      "15:00",
      "15:20",
      "15:40",
      "16:00",
      "16:20",
      "16:40",
      "17:00",
      "17:20",
      "17:40",
      "18:00",
      "18:20",
      "18:40",
      "19:00",
      "19:20",
      "19:40",
      "20:00",
      "20:20",
      "20:40",
      "21:00",
      "21:20",
      "21:40",
      "22:00",
      "22:20",
      "22:40",
      "23:00",
      "23:20",
      "23:40",
      "24:00"
    ];
    
    this.lineBigDashboardChartOptions = {

          layout: {
              padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
              }
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          legend: {
              position: "bottom",
              fillStyle: "#FFF",
              display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold",
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      padding: 10
                  },
                  gridLines: {
                      drawTicks: true,
                      drawBorder: false,
                      display: true,
                      color: "rgba(255,255,255,0.1)",
                      zeroLineColor: "transparent"
                  }

              }],
              xAxes: [{
                  gridLines: {
                      zeroLineColor: "transparent",
                      display: false,

                  },
                  ticks: {
                      padding: 10,
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold"
                  }
              }]
          }
    };

    this.lineBigDashboardChartType = 'line';


    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          },
          ticks: {
              stepSize: 500
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.canvas = document.getElementById("lineChartExample");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    this.lineChartData = [
        {
          label: "Active Users",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ];
      this.lineChartColors = [
       {
         borderColor: "#f96332",
         pointBorderColor: "#FFF",
         pointBackgroundColor: "#f96332",
         backgroundColor: this.gradientFill
       }
     ];
    this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.lineChartOptions = this.gradientChartOptionsConfiguration;

    this.lineChartType = 'line';

    this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

    this.lineChartWithNumbersAndGridData = [
        {
          label: "Email Stats",
           pointBorderWidth: 2,
           pointHoverRadius: 4,
           pointHoverBorderWidth: 1,
           pointRadius: 4,
           fill: true,
           borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ];
      this.lineChartWithNumbersAndGridColors = [
       {
         borderColor: "#18ce0f",
         pointBorderColor: "#FFF",
         pointBackgroundColor: "#18ce0f",
         backgroundColor: this.gradientFill
       }
     ];
    this.lineChartWithNumbersAndGridLabels = ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"];
    this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType = 'line';




    this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
    this.ctx = this.canvas.getContext("2d");

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


    this.lineChartGradientsNumbersData = [
        {
          label: "Active Countries",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }
      ];
    this.lineChartGradientsNumbersColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: "#2CA8FF",
       pointBorderColor: "#FFF",
       pointBackgroundColor: "#2CA8FF",
     }
   ];
    this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.lineChartGradientsNumbersOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false
            },
            ticks: {
                stepSize: 20
            }
          }],
          xAxes: [{
            display: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      }

    this.lineChartGradientsNumbersType = 'bar';
  }

  public changedays(day: number) {


    let today = new Date();

    today.setDate(today.getDate() + day);
    this.viewday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    // console.log(tenki_json_obj["tide"]["chart"]["2021-10-07"]["tide"]);
    let tide = this.jsondata["tide"]["chart"][this.viewday]["tide"];
    this.moon = this.jsondata["tide"]["chart"][this.viewday]["moon"]["title"];

    const nums: number[] = [];
    tide.find((element) => {
      // console.log(element["cm"]);
      nums.push(Number(element["cm"]));
    });
    console.log(nums);


    this.lineBigDashboardChartData = [
      {
        label: "Data",

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: nums
      }
    ];
  }

}
