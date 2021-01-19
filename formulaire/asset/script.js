//sexe 
		document.getElementById("f").addEventListener('click',function(){
		var val = this.value 
		console.log(val);
		if(val=="femme") {
			document.getElementById('sexe').style.display="none"
		}
		});
		
		document.getElementById("h").addEventListener('click',function(){
		var val = this.value 
		console.log(val);
		if(val=="homme") {
			document.getElementById('sexe').style.display="none"
		}
		});
   // Nom
   document.getElementById('id-nom').addEventListener('keyup', function(){ 
		var val = this.value;
		
		if( val.length <2){
			this.style.border = "1px solid red"; 
			this.style.outline = "1px solid red";
			if(this.style.border == '1px solid red'){
				document.getElementById('nom').style.display='block';
				document.getElementById('nom').innerHTML="votre nom doit contenir au moins 2 caractères";
				}
				
		} else {
			this.style.outline = "1px solid green";
			this.style.border = "1px solid green";
			if(this.style.border == '1px solid green'){
				document.getElementById('nom').style.display='none';
				}
		}
	});
   // Prenom
   document.getElementById('id-prenom').addEventListener('keyup', function(){ 
		var val = this.value;
		
		if(val.length <2){
			this.style.border = "1px solid red"; 
			this.style.outline = "1px solid red";
				if(this.style.border == '1px solid red'){
				document.getElementById('prenom').style.display='block';
				document.getElementById('prenom').innerHTML="votre prenom doit contenir au moins 2 caractères";
				}
		} else {
			this.style.outline = "1px solid green";
			this.style.border = "1px solid green";
				if(this.style.border == '1px solid green'){
				document.getElementById('prenom').style.display='none';
				}
		}
	});
	
	//age
	 document.getElementById('id-age').addEventListener('keyup', function(){ 
		var val = parseInt(document.getElementById('id-age').value);
		
		if(isNaN(val)|| parseInt(document.getElementById('id-age').value) < 5 || parseInt(document.getElementById('id-age').value) > 140){
			this.style.border = "1px solid red"; 
			this.style.outline = "1px solid red";
				if(this.style.border == '1px solid red'){
				document.getElementById('age').style.display='block';
				document.getElementById('age').innerHTML="l'âge doit être compris entre 5 et 140";
				}
		} else {
			this.style.outline = "1px solid green";
			this.style.border = "1px solid green";
				if(this.style.border == '1px solid green'){
				document.getElementById('age').style.display='none';
				}
		}
	});

  // Pseudo
   document.getElementById('id-pseudo').addEventListener('keyup', function(){ 
		var val = this.value;
		
		if(val.length <4 || val.length > 30){
			this.style.border = "1px solid red"; 
			this.style.outline = "1px solid red";
				if(this.style.border == '1px solid red'){
				document.getElementById('pseudo').style.display='block';
				document.getElementById('pseudo').innerHTML="votre pseudo doit faire entre 4 et 30 caractères";
				}
		} else {
			this.style.outline = "1px solid green";
			this.style.border = "1px solid green";
				if(this.style.border == '1px solid green'){
				document.getElementById('pseudo').style.display='none';
				}
		}
	});
	
	// Mot de passe 
   document.getElementById('id-mdp').addEventListener('keyup', function(){ 
		var val = document.getElementById('id-mdp').value;
	
		
		if(val.length <6 || val.length > 15){
			document.getElementById('id-mdp').style.border = "1px solid red"; 
			document.getElementById('id-mdp').style.outline = "1px solid red";
				if(document.getElementById('id-mdp').style.border == '1px solid red'){
				document.getElementById('mdp').style.display='block';
				document.getElementById('mdp').innerHTML="votre mot de passe doit faire entre 6 et 15 caractères";
				}
		} else {
			document.getElementById('id-mdp').style.border = "1px solid green"; 
			document.getElementById('id-mdp').style.outline = "1px solid green";
				if(document.getElementById('id-mdp').style.border == '1px solid green'){
				document.getElementById('mdp').style.display='none';
				}
	
		}	});
		
		document.getElementById('id-mdpd').addEventListener('keyup', function(){
		var val2 = document.getElementById('id-mdpd').value;
		if(document.getElementById('id-mdp').value == document.getElementById('id-mdpd').value){
			document.getElementById('id-mdpd').style.border = "1px solid green"; 
			document.getElementById('id-mdpd').style.outline = "1px solid green";
				if(document.getElementById('id-mdpd').style.border == '1px solid green'){
				document.getElementById('mdp2').style.display='none';
				}
		} else {
			document.getElementById('id-mdpd').style.border = "1px solid red"; 
			document.getElementById('id-mdpd').style.outline = "1px solid red";
					if(document.getElementById('id-mdpd').style.border == '1px solid red'){
				document.getElementById('mdp2').style.display='block';
				document.getElementById('mdp2').innerHTML="votre mot de passe doit etre identique";}
			
		}
		

	});
	
	// Pays
	 document.getElementById("id-pays").addEventListener('click',function(){
		var val = this.value 
		console.log(val);
		if(val=="it") {
			document.getElementById('pays').style.display="none"
		}else if(val=="usa") {
			document.getElementById('pays').style.display="none"
		}else if(val=="all") {
			document.getElementById('pays').style.display="none"
		}else if(val=="br") {
			document.getElementById('pays').style.display="none"
		}
		});
		
	// M'inscrire 
		
		var envoie = document.getElementById('monForm');
		envoie.addEventListener("submit", function(){;
		var val = this.value 
		console.log(val);
		
		if (document.getElementById('sexe').style.display == "none" && document.getElementById('id-nom').style.border ==  "1px solid green" && document.getElementById('id-prenom').style.border ==  "1px solid green" && document.getElementById('id-age').style.border ==  "1px solid green" && document.getElementById('id-pseudo').style.border ==  "1px solid green" && document.getElementById('id-mdp').style.border ==  "1px solid green" && document.getElementById('id-mdpd').style.border ==  "1px solid green" && document.getElementById('pays').style.display == "none" && document.getElementById('id-mdp').value == document.getElementById('id-mdpd').value) {
		alert('formulaire envoyé');
		document.location.reload();
		} else {
			if (document.getElementById('id-mdp').value != document.getElementById('id-mdpd').value) {
		alert('Attention, les mots de passe ne sont pas identiques')
		event.preventDefault();
			} 
			else { alert('Les informations que vous nous avez fournis ne sont pas correctes')
		event.preventDefault();
		}
		}
		});
	//reinitialisation 
	document.getElementById("reinitialiser").addEventListener('click',function(){
		document.location.reload();
		});