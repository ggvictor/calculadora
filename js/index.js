
function dis(val){
   document.getElementById("resultado").value+= val
}
function funcao(evento){
    if(evento.key == '0'|| evento.key == "1" || evento.key =='2'|| evento.key =='3' || evento.key =='4' || evento.key =='5'|| evento.key =='6' || evento.key =='7' || evento.key =='8'|| evento.key =='9' || evento.key =='+' || evento.key =='-' || evento.key =='/' || evento.key =='*')
    document.getElementById("resultado").value+=evento.key
}
var cal = document.getElementById("tabela"); 
cal.onkeyup = function (evento) { 
    if (evento.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("resultado").value 
        console.log(x); 
        solve(); 
                
                
            }   
        }
function solve() {
     let x = document.getElementById('resultado').value;
     if (resultado !== "") {
     let y = math.evaluate(x);
    document.getElementById('resultado').value = y;
      }
 }
        
function apagar() {
    console.log("Botão C pressionado");
    document.getElementById("resultado").value = "";
}