function heure(){
	d = new Date();
		h = d.getHours();
        if(h<10)
        {
        h = "0"+h;
        }
		m = d.getMinutes();
        if(m<10)
        {
        m = "0"+m;
        }
		s = d.getSeconds();
        if(s<10)
        {
        s = "0"+s;
        }
	result = "Vous vous êtes connecté à '+h+':'+m+':'+s+'";
	document.getElementById(connexion)=result;
}


