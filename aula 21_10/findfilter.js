//|=====================================================================|
//|Juntar o array de produto, e de menu, em um novo array correpondente.|
//|=====================================================================|

//ANTES

let menu = [
{id:1, nome:"menu FIT"},
{id:2, nome:"menu BBQ"},
{id:3, nome:"menu CLÁSSICO"}
];

let pratos = [
{id:1,idMenu:1,nome:"Salada"},
{id:2,idMenu:2,nome:"Hamburger"},
{id:3,idMenu:3,nome:"Risoto"}
];

function pratosDoMenu (pratos){
    // console.log(menu)
    let cardapio = pratos.map (prato=>{
         let cardapioFinal = pratos.find(identificador=>identificador.idMenu === menu.id)
           return {
            ...pratos, menuSelecionado:cardapioFinal
           }
    });  

    return cardapio
}

console.log(pratosDoMenu(pratos))


// //DEPOIS
// [
// {
// id:1,
// idMenu:1,
// nome:"salada",
// nomeMenu:"menu principal"
// }
// ...
// ]
