//Compra de produtos
let contagem = 0;

function comprarPc01(){

    let produto = { 
        id: "01",
        item: "Computador Mancer Thor", 
        descricao: "Computador Mancer Thor, AMD Athlon 3000G, A320M, 8GB DDR4, SSD 256GB, TGT 500W, Combat",
        valor: "R$ 843,00"
    };

    let dadoConvertido = JSON.stringify(produto);

        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Computador Mancer Thor! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarPc02(){

    let produto = { 
        id: "02",
        item: "Computador Mancer", 
        descricao: "Computador Mancer, AMD Ryzen 5 2600, Geforce GTX 1050 TI 4GB, A320M, 8GB DDR4, HD 1TB, Nidus 500W, Sage X, Komor RGB",
        valor: "R$ 1.452,85"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Computador Mancer! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarHeadset(){

    let produto = { 
        id: "03",
        item: "Headset", 
        descricao: "Headset Gamer Logitech Pro X preto, 981-000817",
        valor: "R$ 227,25"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Headset Gamer Logitech Pro X preto! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarFonte(){

    let produto = { 
        id: "04",
        item: "Fonte", 
        descricao: "Fonte Gigabyte P450B 450W 80Plus Bronze, GP-P450B",
        valor: "R$ 199,98"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Fonte Gigabyte P450B 450W 80Plus Bronze! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarKit(){

    let produto = { 
        id: "05",
        item: "Kit teclado e mouse", 
        descricao: "Kit teclado e Mouse Cooler Master MS111 RGB, MS-111-KKMF1-BR",
        valor: "R$ 119,28"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Kit teclado e Mouse Cooler Master MS111 RGB! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarGabinete(){

    let produto = { 
        id: "06",
        item: "Gabinete Gamer", 
        descricao: "Gabinete Gamer Seraph E RGB Lateral Vidro Temp, PGSE-0E1-RGB",
        valor: "R$ 181,79"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Gabinete Gamer Seraph E RGB! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarMouse(){

    let produto = { 
        id: "07",
        item: "Mouse Gamer", 
        descricao: "Mouse Gamer Logitech G Pro Wireless 32000 DPI RGB, 910-005271",
        valor: "R$ 156,79"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Mouse Gamer Logitech G Pro Wireless! (salvado no localStorage). Aperte OK para continuar.");
}

function comprarMonitor(){

    let produto = { 
        id: "08",
        item: "Monitor Gamer", 
        descricao: "Monitor Gamer Asus Tuf 27” Curvo WQHD 1ms 165Gz HDR FreeSync Premium HDMI/DP, VG27WQ1B",
        valor: "R$ 954,23"
    };

    let dadoConvertido = JSON.stringify(produto);
    
        localStorage.setItem('Compra nº '+(++contagem), dadoConvertido);
    
        alert("Você acabou de comprar 1 x Monitor Gamer Asus Tuf 27” Curvo! (salvado no localStorage). Aperte OK para continuar.");
}