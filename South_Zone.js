init() 
init2()
init3()
init4()
init5()
init6()
init7()
init8()
function init(){
    var url="https://api.covid19india.org/data.json"
    var data="";
   

    $.get(url,function(data){
        console.log(data.statewise)  
        

        data=`
            <td>${data.statewise[2].state}</td>
            <td>${data.statewise[2].confirmed}</td>
            <td>${data.statewise[2].active}</td>
            <td>${data.statewise[2].recovered}</td>
            <td>${data.statewise[2].deaths}</td>       
        `      
        $("#data").html((data)) 
             
    })    
}
function init8(){
    var url="https://api.covid19india.org/data.json"
    var data7="";
   

    $.get(url,function(data7){
        console.log(data7.statewise)  
        

        data7=`
            <td>${data7.statewise[33].state}</td>
            <td>${data7.statewise[33].confirmed}</td>
            <td>${data7.statewise[33].active}</td>
            <td>${data7.statewise[33].recovered}</td>
            <td>${data7.statewise[33].deaths}</td>       
        `      
        $("#data7").html((data7)) 
             
    })  
    
}
function init2(){
    var url="https://api.covid19india.org/data.json"
    var data1="";

    $.get(url,function(data1){
        console.log(data1.statewise)    
        

        data1=`
            <td>${data1.statewise[16].state}
            <td>${data1.statewise[16].confirmed}</td>
            <td>${data1.statewise[16].active}</td>
            <td>${data1.statewise[16].recovered}</td>
            <td>${data1.statewise[16].deaths}</td>

        
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
            <td>${data2.statewise[19].state}
            <td>${data2.statewise[19].confirmed}</td>
            <td>${data2.statewise[19].active}</td>
            <td>${data2.statewise[19].recovered}</td>
            <td>${data2.statewise[19].deaths}</td>

        
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
            <td>${data3.statewise[17].state}</td>
            <td>${data3.statewise[17].confirmed}</td>
            <td>${data3.statewise[17].active}</td>
            <td>${data3.statewise[17].recovered}</td>
            <td>${data3.statewise[17].deaths}</td>       
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
            <td>${data4.statewise[32].state}</td>
            <td>${data4.statewise[32].confirmed}</td>
            <td>${data4.statewise[32].active}</td>
            <td>${data4.statewise[32].recovered}</td>
            <td>${data4.statewise[32].deaths}</td>       
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
            <td>${data5.statewise[27].state}</td>
            <td>${data5.statewise[27].confirmed}</td>
            <td>${data5.statewise[27].active}</td>
            <td>${data5.statewise[27].recovered}</td>
            <td>${data5.statewise[27].deaths}</td>       
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
            <td>${data6.statewise[1].state}</td>
            <td>${data6.statewise[1].confirmed}</td>
            <td>${data6.statewise[1].active}</td>
            <td>${data6.statewise[1].recovered}</td>
            <td>${data6.statewise[1].deaths}</td>       
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