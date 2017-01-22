
function load(what,id) 
{
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
    
		if (this.readyState == 4 && this.status == 200) 
		{
			if(what == "listaGier")
			{
				listGames(this);
			}
			else if(what =='opisGier')
			{
				describeGames(this,what,id);
			}
            
		}
	};
    xmlhttp.open("GET", "gry2.xml", true);
    xmlhttp.send();
}
    


function listGames(xml)
{
    var title, price, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    title = xmlDoc.getElementsByTagName("tytul");
    price = xmlDoc.getElementsByTagName("cena");
    for (i = 0; i< title.length; i++)
    {
        txt += i+1 + "." + " " + title[i].childNodes[0].nodeValue + " " + price[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("topLeftDemo").innerHTML = txt;
}

function describeGames(xml,what,gameId)
{
    var title, price, i, xmlDoc, txt,id;
    xmlDoc = xml.responseXML;
    txt = "";
	var txt2 = "";
	var txt3 = "";
	id = xmlDoc.getElementById(gameId);;
	if(what =='opisGier')
	{
		txt += "Tytul: " + id.getElementsByTagName("tytul")[0].childNodes[0].nodeValue + "<br>";
		txt += "Cena: " + id.getElementsByTagName("cena")[0].childNodes[0].nodeValue + "<br>";
		txt += "Producent:" + id.getElementsByTagName("producent")[0].childNodes[0].nodeValue + "<br>";
		txt += "Wydawca:" + id.getElementsByTagName("wydawca")[0].childNodes[0].nodeValue + "<br>";
		txt += "Data Premiery:" + id.getElementsByTagName("data_premiery")[0].childNodes[0].nodeValue + "<br>";
		txt += "Ocena Graczy:" + id.getElementsByTagName("ocena_graczy")[0].childNodes[0].nodeValue + "<br>";
		document.getElementById("rightTopdemo").innerHTML = txt;
		txt2 += id.getElementsByTagName("opis")[0].childNodes[0].nodeValue + "<br>";
		document.getElementById("leftbotdemo").innerHTML = txt2;
		txt3 += id.getElementsByTagName("fabula")[0].childNodes[0].nodeValue + "<br>";
		document.getElementById("rightbotdemo").innerHTML = txt3;
	}
}








