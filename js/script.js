
    document.write ("<h1 style= 'text-align:center; color:#2980B9 ' >"       + " Calculate your age in detail"  +           "</h1>" ) 
   
	document.write ("<br/>")
	document.write ("<br/>")
	document.write ("<br/>")
	
	
	 document.write ("<lebale style= '   margin-left:420px;  color:#DB0000  '   >"    + "Select year of pirth " +   "</lebale>" ) 
	 
	document.write ("<select     value='y'   id='select'   onchange='myFunctionn()'     style= 'height:30px; width:100px;   margin-left:22px;  '  > ")
	
	document.write ("<option >"       + " "  +           "</option>" ) 
	
	var min = 1920,
    max = 2019,
    select = document.getElementById('select');

    for (var y = max; y>=min; y--){
       var option = document.createElement('option');
       option.value = y;
       option.innerHTML = y;
       select.appendChild(option); 
    }
	document.write ("</select >")
	
   document.write ("<p     style=  'margin-left:420px;  color:#DB0000  '  >"    + "OR " +   "</p>" ) 

    document.write ("<lebale style= '   margin-left:420px;  color:#DB0000  '   >"    + " Enter your age  " +   "</lebale>" ) 
   
    document.write ("<input type='number' value=' ' min='1' max='100'   id='age'    style= 'height:30px; width:200px;    margin-left:50px;   '  /> ")
	
    document.write ("<button onclick='myFunction()'  >"  + "Calculate"  +  "</button>" )
	
	document.write ("<p     style= 'text-align:center; color:#2980B9; '      id='porn' >"    + " Your age " +   "</p>" ) 
	
	document.write ("<p     style= 'text-align:center; color:#2980B9; '      id='pornn' >"    + " Year of pirth " +   "</p>" )
									
    document.write ("<table border='1'    style= '   color:#2980B9  ;  height:100px; width:700px; margin-top:30px; margin-left:320px; text-align:center; border: 3px solid #1F618D  ; '  >")
	
	document.write ("<br/>")
	
	 document.write ("<caption>"   + "Your age in detail"  +  "</caption>")
	
		 document.write ("<thead>")
		
			document.write ("<th>"       + "Month"  +           "</th>" ) 
			document.write ("<th>"       + "days"  +           "</th>" ) 
			document.write ("<th>"       + "Hour"  +           "</th>" ) 
			document.write ("<th>"       + "Minute"  +           "</th>" )  
			document.write ("<th>"       + "Second"  +           "</th>" )  
		 
		document.write ("</thead>")
		
		document.write ("<tbody>")
		
			 document.write ("<td  id='mon' >"     + " -"  +        "</td>") 
			 document.write ("<td  id='day'  >"     + " - "  +        "</td>")   
			 document.write ("<td  id='hou'  >"     + " - "  +        "</td>") 
			 document.write ("<td  id='min'  >"     + " - "  +        "</td>") 
			 document.write ("<td  id='sec'  >"     + " - "  +        "</td>") 
		  
		document.write ("</tbody>")
		
		document.write ("<tfoot>")
		
			 document.write ("<td>"     + "month"  +        "</td>") 
			 document.write ("<td>"     + "day"  +        "</td>")   
			 document.write ("<td>"     + "hour"  +        "</td>") 
			 document.write ("<td>"     + "minute"  +        "</td>") 
			 document.write ("<td>"     + "second"  +        "</td>") 
		
		document.write ("</tfoot>")
	
	document.write ("</table")
	 
	
function myFunction() { 
 var 
		age = document.getElementById("age") ,
		m = 12 ,
		d = 30 ,
		h = 24 , 
		mi = 60 ,
		sec = 60 ;
		
		document.getElementById("porn").innerHTML =     ( "Your age is  :" ) +  ( "  " )  +  age.value  ;
		document.getElementById("pornn").innerHTML =     ( "Year of pirth is :" ) +  ( "  " )  +  ( 2020 - age.value  ) ;
		document.getElementById("mon").innerHTML =age.value  * m  ;
		document.getElementById("day").innerHTML = age.value  * m * d ;	
		document.getElementById("hou").innerHTML = age.value  * m *d * h ;	
		document.getElementById("min").innerHTML = age.value  * m *d * h * mi ;	
		document.getElementById("sec").innerHTML = age.value  * m *d * h * mi * sec ;	
		
}		

function myFunctionn() { 
 var 
		select = document.getElementById("select") ,
		m = 12 ,
		d = 30 ,
		h = 24 , 
		mi = 60 ,
		sec = 60 ;
		
		document.getElementById("porn").innerHTML =   ( "Your age is  :" ) +  ( "  " )  +  (2020 - select.value)  ;
		document.getElementById("pornn").innerHTML =    ( "Year of pirth is :" ) +  ( "  " )  + select.value  ;
		document.getElementById("mon").innerHTML =( 2020 - select.value )  * m  ;
		document.getElementById("day").innerHTML = ( 2020 - select.value )  * m * d ;	
		document.getElementById("hou").innerHTML = ( 2020 - select.value )  * m *d * h ;	
		document.getElementById("min").innerHTML = ( 2020 - select.value )  * m *d * h * mi ;	
		document.getElementById("sec").innerHTML = ( 2020 - select.value )  * m *d * h * mi * sec ;	
		
}		


	