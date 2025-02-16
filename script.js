



function jeu(click){
    //refresh the page
    location.reload();
    //générer un entier aléatoire
    var level=document.getElementById('inputGroupSelect01');
    var difficulty=1;
    //tester son niveau de difficulté
     if (level.value== 1){
        //si level=easy l'intervalle est de 0 à 10
         var alea=Math.ceil(Math.random()*10);

         console.log(alea);
        }

    else if(level.value==2){
        //si level=intermidiate l'intervalle est de à 100
            var alea=Math.ceil(Math.random()*100);
            console.log(alea);
            difficulty=2;
    }else{  
            // si level=difficult l'intervalle est 0 à 1000
            var alea=Math.ceil(Math.random()*1000);
            console.log(alea);
            difficulty=3;}
   
   
     
     if(difficulty==1){
        for(var i=0;i<7;i++){
            //prendre un nombre de l'utilisateur
            var numberGiven=prompt('give me a number!');


          //tester si le nombre is number
          if(isNaN(numberGiven)){
                 alert('You should enter a number!!!');
                 //quitter la fonction s'il ne l'est pas
                return; } 


          if (+ alea==+ numberGiven){
                alert("Congratulations you win!");
               //quitter la boucle une fois trouvée
               break;
  }
          else{
            alert(" try again!");
  }
   }
   if(i==7){
        alert('Game over!');
        return;
   }}

   if(difficulty==2){
    for(var i=0;i<5;i++){
   //prendre un nombre de l'utilisateur
   var numberGiven=prompt('give me a number!');
   //tester si le nombre is number
   if(isNaN(numberGiven)){
       alert('You should enter a number!!!');
       //quitter la fonction s'il ne l'est pas
       return; } 
   if (+ alea==+ numberGiven){
       alert("Congratulations you win!");
       break;
    }
   else{
       alert(" try again!");
    }
}
   if(i==5){
       alert('Game over!');
       return;
}}
    //si la difficulté est évaluée à difficult on a seulement 3 tentative
    if(difficulty==3){
       for(var i=0;i<4;i++){
           //prendre un nombre de l'utilisateur
           var numberGiven=prompt('give me a number!');
           //tester si le input  is number
           if(isNaN(numberGiven)){
                alert('You should enter a number!!!');
           //quitter la fonction s'il ne l'est pas
            break; } 
            if (+ alea==+ numberGiven){
                  alert("Congratulations you win!");
                  return; }
            else{
                  alert(" try again!");
}
}
       if(i==4){
          alert('Game over!');
          return;
}}
    }
         
   
   
   
   
  
    
var buttonStart=document.querySelector('.start');
buttonStart.addEventListener('click',jeu);




