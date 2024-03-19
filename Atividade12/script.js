
   
        var texto= document.getElementById('texto')


        function alterarFonte(){
        texto.style.fontSize='3rem'     
            
        
        }


        function AlterarCor(){
                texto.style.color='red'    
                    
                }
        




    function inserirTexto(){
        
            
            const paragrafo = texto.querySelector('p');
            let newp = document.createElement('p');
            newp.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis deleniti, maiores esse illum numquam inventore? Consectetur, asperiores esse reiciendis officia non facere fugit placeat vitae vero hic dolore eaque laboriosam!';
            paragrafo.appendChild(newp);     
        
    }

    


     
    
    //  let botao=document.querySelector('.botao');
    //  botao.addEventListener('click', ()=> {
    //     clique();
    //  });