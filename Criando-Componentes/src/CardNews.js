class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"}); 
        shadow.innerHTML = "<h1>Hello Gabriel Navarro</h1>";        
    }
}
//crie uma sombra aberta e no HTML interno imprima Hello world
customElements.define ("card-news", CardNews);