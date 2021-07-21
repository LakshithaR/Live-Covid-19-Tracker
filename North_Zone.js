init() 
init2()
init3()
init4()
init5()
init6()
init7()
init8()
init9()

function init9(){
    var url="https://api.covid19india.org/data.json"
    var data8="";
   

    $.get(url,function(data8){
        console.log(data8.statewise)  
        

        data8=`
            <td>${data8.statewise[18].state}</td>
            <td>${data8.statewise[18].confirmed}</td>
            <td>${data8.statewise[18].active}</td>
            <td>${data8.statewise[18].recovered}</td>
            <td>${data8.statewise[18].deaths}</td>       
        `      
        $("#data8").html((data8)) 
             
    })    
}
function init(){
    var url="https://api.covid19india.org/data.json"
    var data="";
   

    $.get(url,function(data){
        console.log(data.statewise)  
        

        data=`
            <td>${data.statewise[14].state}</td>
            <td>${data.statewise[14].confirmed}</td>
            <td>${data.statewise[14].active}</td>
            <td>${data.statewise[14].recovered}</td>
            <td>${data.statewise[14].deaths}</td>       
        `      
        $("#data").html((data)) 
             
    })    
}
function init2(){
    var url="https://api.covid19india.org/data.json"
    var data1="";

    $.get(url,function(data1){
        console.log(data1.statewise)    
        

        data1=`
            <td>${data1.statewise[13].state}
            <td>${data1.statewise[13].confirmed}</td>
            <td>${data1.statewise[13].active}</td>
            <td>${data1.statewise[13].recovered}</td>
            <td>${data1.statewise[13].deaths}</td>

        
        `      
        $("#data1").html((data1))        
    })    
}
  function init3(){
    var url="https://api.covid19india.org/data.json"
    var data2="";

    $.get(url,function(data2){
        console.log(data2.statewise)    
        

        data2=`
            <td>${data2.statewise[28].state}
            <td>${data2.statewise[28].confirmed}</td>
            <td>${data2.statewise[28].active}</td>
            <td>${data2.statewise[28].recovered}</td>
            <td>${data2.statewise[28].deaths}</td>

        
        `      
        $("#data2").html((data2))        
    })    
}
function init4(){
    var url="https://api.covid19india.org/data.json"
  
    var data3="";

    $.get(url,function(data3){
        console.log(data3.statewise)  
        

        data3=`
            <td>${data3.statewise[6].state}</td>
            <td>${data3.statewise[6].confirmed}</td>
            <td>${data3.statewise[6].active}</td>
            <td>${data3.statewise[6].recovered}</td>
            <td>${data3.statewise[6].deaths}</td>       
        `      
        $("#data3").html((data3)) 
             
    })    
}
function init5(){
    var url="https://api.covid19india.org/data.json"
    var data4="";
  

    $.get(url,function(data4){
        console.log(data4.statewise)  
        

        data4=`
            <td>${data4.statewise[36].state}</td>
            <td>${data4.statewise[36].confirmed}</td>
            <td>${data4.statewise[36].active}</td>
            <td>${data4.statewise[36].recovered}</td>
            <td>${data4.statewise[36].deaths}</td>       
        `      
        $("#data4").html((data4)) 
             
    })    
}
function init6(){
    var url="https://api.covid19india.org/data.json"
    var data5="";
   

    $.get(url,function(data5){
        console.log(data5.statewise)  
        

        data5=`
            <td>${data5.statewise[12].state}</td>
            <td>${data5.statewise[12].confirmed}</td>
            <td>${data5.statewise[12].active}</td>
            <td>${data5.statewise[12].recovered}</td>
            <td>${data5.statewise[12].deaths}</td>       
        `      
        $("#data5").html((data5)) 
             
    })    
}
function init7(){
    var url="https://api.covid19india.org/data.json"
    var data6="";
   

    $.get(url,function(data6){
        console.log(data6.statewise)  
        

        data6=`
            <td>${data6.statewise[9].state}</td>
            <td>${data6.statewise[9].confirmed}</td>
            <td>${data6.statewise[9].active}</td>
            <td>${data6.statewise[9].recovered}</td>
            <td>${data6.statewise[9].deaths}</td>       
        `      
        $("#data6").html((data6)) 
             
    })    
}
function init8(){
    var url="https://api.covid19india.org/data.json"
    var data7="";
   

    $.get(url,function(data7){
        console.log(data7.statewise)  
        

        data7=`
            <td>${data7.statewise[35].state}</td>
            <td>${data7.statewise[35].confirmed}</td>
            <td>${data7.statewise[35].active}</td>
            <td>${data7.statewise[35].recovered}</td>
            <td>${data7.statewise[35].deaths}</td>       
        `      
        $("#data7").html((data7)) 
             
    })  
    
}

function refreshData(){
clearData()
init()
init2()
init3()
init4()
init5()
init6()
init7()
init8()
}
function clearData(){
$("#data").empty()
$("#data1").empty()
$("#data2").empty()
$("#data3").empty()
$("#data4").empty()
$("#data5").empty()
$("#data6").empty()
$("#data7").empty()

}