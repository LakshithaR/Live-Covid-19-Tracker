
    init()
    function init(){
        var url="https://api.covid19india.org/data.json"

        var data=""

       

        $.get(url,function(data){
            console.log(data.statewise)

            

            data=`
                <td>${data.statewise[0].confirmed}</td>
                <td>${data.statewise[0].active}</td>
                <td>${data.statewise[0].recovered}</td>
                <td>${data.statewise[0].deaths}</td>

            
            `
            $("#data").html((data))
        })
        $.getJSON(url,function(data){
            console.log(data)
    
                var state=[]
                var confirmed=[]
                var active=[]
                var recovered=[]
                var deaths=[]
    
                $.each(data.statewise,function(id,obj){
                    state.push(obj.state)
                    confirmed.push(obj.confirmed)
                    active.push(obj.active)
                    recovered.push(obj.recovered)
                    deaths.push(obj.deaths)
                })
    
                console.log(state)
                state.shift()
                confirmed.shift()
                active.shift()
                recovered.shift()
                deaths.shift()

                var myChart=document.getElementById("myChart").getContext('2d')

                var chart= new Chart(myChart,{
                    type:'line',
                    data:{
                        labels:state,
                        datasets:[
                            {
                                label:"Confirmed Cases",
                                data: confirmed,
                                backgroundColor:"#f1c407",
                               
                                minBarLength:100
                            },
                            {
                                label:"Active Cases",
                                data: active,
                                backgroundColor:"#ff00ff",
                                minBarLength:100
                            },
                            {
                                label:"Recovered",
                                data: recovered,
                                backgroundColor:"#2ecc71",
                                minBarLength:100
                            },
                            {
                                label:"Deceased",
                                data: deaths,
                                backgroundColor:"#e74c3c",
                                minBarLength:100
                            }
                        ]
                    },
                    options:{}
                })
            })
    }
    function myFunction() {
        var x = document.getElementById("mywrapp");
        if (x.className === "wrapp") {
          x.className += " responsive";
        } else {
          x.className = "wrapp";
        }
      }

function refreshData(){
    clearData()
    init()
}
function clearData(){
    $("#data").empty()
}