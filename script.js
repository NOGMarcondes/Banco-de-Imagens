//Seliconar esses input
// Recupera o valor do campo input text
// Verificar se tem valor
// Tratar a url que faz
// Faz busca de imagem
// Limpar as imagens aparecem como padrao
//Mostrar as imagens




const container = document.getElementById('container')
const inputPesquisar = document.getElementById("inputPesquisar");
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', recuperarValor);

//RECUPERAR VALOR DO INPUT
function recuperarValor(){
    console.log("Pegou o click")

    let textPesquisa = inputPesquisar.value
     VerificarTexto(textPesquisa)
    

  
}

// FAZ A VERIFICAÇÃO SE O TEXTO É VALIDO
function VerificarTexto(textoPesquisa){
    if(textoPesquisa.trim() !== ""){
       
    }else{
        console.log("Invalido")
    }
}

//TRATAMENTO DA URL

function montarUrl(textoPesquisa = "")
{
    const urlBase = "https://source.unsplash.com/random/";
     urlTratada =  `${urlBase}${gerarNumeroAleatorio()}x${gerarNumeroAleatorio()}` 

     if(textoPesquisa !== ""){
        urlTratada =  `${urlBase}${gerarNumeroAleatorio()}x${gerarNumeroAleatorio()}/?${textoPesquisa}`
     }


    return urlTratada

}


// Pegar Imagens Tratasd da URL
function pegarImagens(){

     const imagens = [];


     for(let i  = 0; i < 16;i++){
        
         const urlImage =  montarUrl()
         imagens.push(urlImage)
        }
       montarLayout(imagens)
    }
  
    pegarImagens()




    //Gerar numero Aleatorios
    function gerarNumeroAleatorio(){
        return Math.floor(Math.random() * 10) + 300
    }
    

    //Listar Iamage
    function montarLayout(imagens){
    
        const listaImagens = imagens
        listaImagens.forEach(function(imagem){
        const img = document.createElement('img')
        img.src = imagem
        img.className = 'img-teste'
        container.appendChild(img)
     })
      
}


