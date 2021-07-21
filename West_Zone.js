init() 
init2()
init3()
init4()
init6()
init7()

function init(){
    var url="https://api.covid19india.org/data.json"
    var data="";
   

    $.get(url,function(data){
        console.log(data.statewise)  
        

        data=`
            <td>${data.statewise[29].state}</td>
            <td>${data.statewise[29].confirmed}</td>
            <td>${data.statewise[29].active}</td>
            <td>${data.statewise[29].recovered}</td>
            <td>${data.statewise[29].deaths}</td>       
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
            <td>${data1.statewise[20].state}
            <td>${data1.statewise[20].confirmed}</td>
            <td>${data1.statewise[20].active}</td>
            <td>${data1.statewise[20].recovered}</td>
            <td>${data1.statewise[20].deaths}</td>

        
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
            <td>${data2.statewise[11].state}
            <td>${data2.statewise[11].confirmed}</td>
            <td>${data2.statewise[11].active}</td>
            <td>${data2.statewise[11].recovered}</td>
            <td>${data2.statewise[11].deaths}</td>

        
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
            <td>${data3.statewise[8].state}</td>
            <td>${data3.statewise[8].confirmed}</td>
            <td>${data3.statewise[8].active}</td>
            <td>${data3.statewise[8].recovered}</td>
            <td>${data3.statewise[8].deaths}</td>       
        `      
        $("#data3").html((data3)) 
             
    })    
}

function init6(){
    var url="https://api.covid19india.org/data.json"
    var data5="";
   

    $.get(url,function(data5){
        console.log(data5.statewise)  
        

        data5=`
            <td>${data5.statewise[21].state}</td>
            <td>${data5.statewise[21].confirmed}</td>
            <td>${data5.statewise[21].active}</td>
            <td>${data5.statewise[21].recovered}</td>
            <td>${data5.statewise[21].deaths}</td>       
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
            <td>${data6.statewise[10].state}</td>
            <td>${data6.statewise[10].confirmed}</td>
            <td>${data6.statewise[10].active}</td>
            <td>${data6.statewise[10].recovered}</td>
            <td>${data6.statewise[10].deaths}</td>       
        `      
        $("#data6").html((data6)) 
             
    })    
}

function refreshData(){
clearData()
init()
init2()
init3()
init4()
init6()
init7()

}
function clearData(){
$("#data").empty()
$("#data1").empty()
$("#data2").empty()
$("#data3").empty()
$("#data5").empty()
$("#data6").empty()


}