init() 
init2()
init3()
init4()
init5()
init6()
init7()
init8()
init9()
init10()
init11()
init12()
init13()
function init(){
    var url="https://api.covid19india.org/data.json"
    var data="";
   

    $.get(url,function(data){
        console.log(data.statewise)  
        

        data=`
            <td>${data.statewise[5].state}</td>
            <td>${data.statewise[5].confirmed}</td>
            <td>${data.statewise[5].active}</td>
            <td>${data.statewise[5].recovered}</td>
            <td>${data.statewise[5].deaths}</td>       
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
            <td>${data1.statewise[30].state}
            <td>${data1.statewise[30].confirmed}</td>
            <td>${data1.statewise[30].active}</td>
            <td>${data1.statewise[30].recovered}</td>
            <td>${data1.statewise[30].deaths}</td>

        
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
            <td>${data2.statewise[3].state}
            <td>${data2.statewise[3].confirmed}</td>
            <td>${data2.statewise[3].active}</td>
            <td>${data2.statewise[3].recovered}</td>
            <td>${data2.statewise[3].deaths}</td>

        
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
            <td>${data3.statewise[25].state}</td>
            <td>${data3.statewise[25].confirmed}</td>
            <td>${data3.statewise[25].active}</td>
            <td>${data3.statewise[25].recovered}</td>
            <td>${data3.statewise[25].deaths}</td>       
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
            <td>${data4.statewise[22].state}</td>
            <td>${data4.statewise[22].confirmed}</td>
            <td>${data4.statewise[22].active}</td>
            <td>${data4.statewise[22].recovered}</td>
            <td>${data4.statewise[22].deaths}</td>       
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
            <td>${data5.statewise[24].state}</td>
            <td>${data5.statewise[24].confirmed}</td>
            <td>${data5.statewise[24].active}</td>
            <td>${data5.statewise[24].recovered}</td>
            <td>${data5.statewise[24].deaths}</td>       
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
            <td>${data6.statewise[34].state}</td>
            <td>${data6.statewise[34].confirmed}</td>
            <td>${data6.statewise[34].active}</td>
            <td>${data6.statewise[34].recovered}</td>
            <td>${data6.statewise[34].deaths}</td>       
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
            <td>${data7.statewise[23].state}</td>
            <td>${data7.statewise[23].confirmed}</td>
            <td>${data7.statewise[23].active}</td>
            <td>${data7.statewise[23].recovered}</td>
            <td>${data7.statewise[23].deaths}</td>       
        `      
        $("#data7").html((data7)) 
             
    })  
    
}
function init9(){
    var url="https://api.covid19india.org/data.json"
    var data8="";
   

    $.get(url,function(data8){
        console.log(data8.statewise)  
        

        data8=`
            <td>${data8.statewise[4].state}</td>
            <td>${data8.statewise[4].confirmed}</td>
            <td>${data8.statewise[4].active}</td>
            <td>${data8.statewise[4].recovered}</td>
            <td>${data8.statewise[4].deaths}</td>       
        `      
        $("#data8").html((data8)) 
             
    })    
}
function init10(){
    var url="https://api.covid19india.org/data.json"
    var data9="";
   

    $.get(url,function(data9){
        console.log(data9.statewise)  
        

        data9=`
            <td>${data9.statewise[37].state}</td>
            <td>${data9.statewise[37].confirmed}</td>
            <td>${data9.statewise[37].active}</td>
            <td>${data9.statewise[37].recovered}</td>
            <td>${data9.statewise[37].deaths}</td>       
        `      
        $("#data9").html((data9)) 
             
    })  
    
}
function init11(){
    var url="https://api.covid19india.org/data.json"
    var data10="";
   

    $.get(url,function(data10){
        console.log(data10.statewise)  
        

        data10=`
            <td>${data10.statewise[15].state}</td>
            <td>${data10.statewise[15].confirmed}</td>
            <td>${data10.statewise[15].active}</td>
            <td>${data10.statewise[15].recovered}</td>
            <td>${data10.statewise[15].deaths}</td>       
        `      
        $("#data10").html((data10)) 
             
    })    
}
function init12(){
    var url="https://api.covid19india.org/data.json"
    var data11="";
   

    $.get(url,function(data11){
        console.log(data11.statewise)  
        

        data11=`
            <td>${data11.statewise[26].state}</td>
            <td>${data11.statewise[26].confirmed}</td>
            <td>${data11.statewise[26].active}</td>
            <td>${data11.statewise[26].recovered}</td>
            <td>${data11.statewise[26].deaths}</td>       
        `      
        $("#data11").html((data11)) 
             
    })  
    
}
function init13(){
    var url="https://api.covid19india.org/data.json"
    var data12="";
   

    $.get(url,function(data12){
        console.log(data12.statewise)  
        

        data12=`
            <td>${data12.statewise[7].state}</td>
            <td>${data12.statewise[7].confirmed}</td>
            <td>${data12.statewise[7].active}</td>
            <td>${data12.statewise[7].recovered}</td>
            <td>${data12.statewise[7].deaths}</td>       
        `      
        $("#data12").html((data12)) 
             
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
init9()
init10()
init11()
init12()
init13()
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
$("#data8").empty()
$("#data9").empty()
$("#data10").empty()
$("#data11").empty()
$("#data12").empty()

}