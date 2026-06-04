AOS.init({ duration: 800, once: true, offset: 100 });

// ==================== DADOS DOS PRODUTOS COM SABORES ====================
const produtosCompletos = [
    { id: "torta_tradicional", nome: "Torta Tradicional", precoKg: 65, categoria: "tortas", imagens: ["assets/img/5.jpg", "assets/img/6.jpg", "assets/img/7.jpg"], temMassa: true, temKg: true, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] },
    { id: "torta_trufada", nome: "Torta Trufada", precoKg: 75, categoria: "tortas", imagens: ["assets/img/8.jpg", "assets/img/9.jpg", "assets/img/10.jpg", "assets/img/11.jpg"], temMassa: true, temKg: true, sabores: ["NEUTRO (SEM OVO E SEM LEITE)", "MESCLADA DE MARSHMALLOW COM BABA DE MOÇA", "STROGONOFF DE DAMASCO", "STROGONOFF DE NOZES", "STROGONOFF DE CASTANHA PARÁ", "TRUFADA COM DOIS CHOCOLATES (BRANCO E PRETO)", "CHOCOLATE BRANCO COM MORANGO", "CARAMELO COM MORANGO", "CARAMELO COM CASTANHA PARÁ", "CREAM CHEESE", "TRUFADO BRIGADEIRO CROCANTE DE AMENDOIM", "TRUFADO DE LEITE NINHO", "LEITE NINHO COM MORANGO", "LEITE NINHO COM NUTELLA", "LEITE NINHO COM ABACAXI", "LEITE NINHO COM FLOCOS DE CHOCOLATE", "4 LEITES", "TORTA XADREZ", "AMEIXA COM DOCE DE LEITE", "SONHO DE VALSA", "OURO BRANCO", "ALPINO", "SUFLAIR", "FLORESTA NEGRA", "NEGRESCO", "OREO", "BABA DE MOÇA COM OU SEM FRUTAS", "FRUTAS VERMELHAS", "FRUTAS AMARELAS", "FRUTAS VERDES", "CHANTININHO"] },
    { id: "tortas_famosas", nome: "Tortas Famosas e Personalizadas", precoBase: 80, categoria: "tortas", imagens: ["assets/img/12.jpg", "assets/img/13.jpg", "assets/img/14.jpg"], temMassa: true, temKg: true, sabores: ["KIT KAT", "FERREIRO ROCHÊ", "RED VELVET", "DIET", "SEM GLÚTEN", "SEM LACTOSE", "NAD CAKE", "PASTA AMERICANA", "PASTA LEITE NINHO"], precosEspeciais: { "KIT KAT": 80, "FERREIRO ROCHÊ": 80, "DIET": 80, "SEM GLÚTEN": 80, "SEM LACTOSE": 80, "NAD CAKE": 95, "PASTA AMERICANA": 130, "PASTA LEITE NINHO": 130 } },
    { id: "bolo_tradicional", nome: "Bolo Tradicional Decorado", precoKg: 65, categoria: "tortas", imagens: ["assets/img/15.jpg", "assets/img/16.jpg", "assets/img/17.jpg"], temMassa: true, temKg: true, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] },
    { id: "bolo_especial", nome: "Bolo Especial", precoKg: 75, categoria: "bolos", imagens: ["assets/img/18.jpg", "assets/img/19.jpg", "assets/img/20.jpg"], temMassa: true, temKg: true, sabores: ["NEUTRO (SEM OVO E SEM LEITE)", "MESCLADA DE MARSHMALLOW COM BABA DE MOÇA", "STROGONOFF DE DAMASCO", "STROGONOFF DE NOZES", "STROGONOFF DE CASTANHA PARÁ", "TRUFADA COM DOIS CHOCOLATES (BRANCO E PRETO)", "CHOCOLATE BRANCO COM MORANGO", "CARAMELO COM MORANGO", "CARAMELO COM CASTANHA PARÁ", "CREAM CHEESE", "TRUFADO BRIGADEIRO CROCANTE DE AMENDOIM", "TRUFADO DE LEITE NINHO", "LEITE NINHO COM MORANGO", "LEITE NINHO COM NUTELLA", "LEITE NINHO COM ABACAXI", "LEITE NINHO COM FLOCOS DE CHOCOLATE", "4 LEITES", "TORTA XADREZ", "AMEIXA COM DOCE DE LEITE", "SONHO DE VALSA", "OURO BRANCO", "ALPINO", "SUFLAIR", "FLORESTA NEGRA", "NEGRESCO", "OREO", "BABA DE MOÇA COM OU SEM FRUTAS", "FRUTAS VERMELHAS", "FRUTAS AMARELAS", "FRUTAS VERDES", "CHANTININHO"] },
    { id: "sobremesas", nome: "Sobremesas", precoKg: 85, categoria: "sobremesas", imagens: ["assets/img/21.jpg", "assets/img/22.jpg", "assets/img/23.jpg"], temMassa: false, temKg: true, sabores: ["BANOFFE", "DELÍCIA DE UVA VERDE", "SENSAÇÃO DE MORANGO"] },
    { id: "cento_gourmet", nome: "Cento de Doces Gourmet", precoCento: 180, categoria: "doces", imagens: ["assets/img/24.jpg", "assets/img/25.jpg", "assets/img/26.jpg", "assets/img/27.jpg"], temUnidades: true, unidadesMax: 5, step: 1, sabores: ["BRIGADEIRO 50% CACAU", "MENTA", "CAFÉ", "CAJUZINHO", "BEIJINHO", "OLHO DE SOBRA", "CHURROS", "CARAMELO", "CASADINHO", "NAPOLITANO", "ROMEU JULIETA QUEIJO COM GOIABADA", "MORANGO", "LARANJA", "LIMÃO", "MARACUJÁ", "CASTANHA DE CAJU", "NEGRESCO", "OVOMALTINE", "LEITE NINHO", "LEITE NINHO COM NUTELLA"] },
    { id: "cento_finos", nome: "Doces Finos", precoCento: 3, categoria: "doces", imagens: ["assets/img/28.jpg", "assets/img/44.jpg", "assets/img/45.jpg", "assets/img/46.jpg", "assets/img/47.jpg", "assets/img/48.jpg"], temDoce: true, temUnidades: true, unidadesMax: 9, unidadesPersonalizadas: [25, 30, 40, 50, 60, 70, 80, 90, 100], sabores: ["CASTANHA DE CAJU", "CASTANHA DO PARÁ", "NOZES", "AMÊNDOAS", "MACADÂMIA", "DAMASCO", "BLUEBURI", "CEREJA", "MORANGO", "UVA", "AMORA", "TÂMARA"], tiposDoces: ["BRIGADEIROS GOURMET", "BOMBONS FINOS", "TRUFAS", "PASTELZINHO DE LEITE NINHO RECHEADO", "TACINHA DE CHOCOLATE"] },
    { id: "cupcake", nome: "Cupcake", precoUnit: 8, categoria: "individual", imagens: ["assets/img/32.jpg", "assets/img/33.jpg"], temMassa: false, temUnidades: true, unidadesMax: 100, step: 10, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] },
    { id: "bolo_pote", nome: "Bolo no Pote", precoUnit: 7, categoria: "individual", imagens: ["assets/img/34.jpg", "assets/img/35.jpg", "assets/img/36.jpg"], temMassa: false, temUnidades: true, unidadesMax: 100, step: 10, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] },
    { id: "pao_mel", nome: "Pão de Mel", precoMini: 4, precoPequeno: 5, precoGrande: 7, categoria: "individual", imagens: ["assets/img/37.jpg"], temUnidades: true, unidadesMax: 100, step: 10, temTamanho: true, temDecoracao: true, sabores: [] },
    { id: "bem_casado", nome: "Bem-Casado", precoUnit: 8, categoria: "individual", imagens: ["assets/img/38.jpg"], temUnidades: true, unidadesMax: 100, step: 10, sabores: [] },
    { id: "alfajor", nome: "Alfajor", precoUnit: 7, categoria: "individual", imagens: ["assets/img/39.jpg"], temUnidades: true, unidadesMax: 100, step: 10, sabores: [] },
    { id: "pirulitos", nome: "Pirulitos de Chocolate", precoUnit: 7, categoria: "individual", imagens: ["assets/img/40.jpg"], temUnidades: true, unidadesMax: 100, step: 10, sabores: [] },
    { id: "bolo_bombom", nome: "Bolo Bombom", precoUnit: 8, categoria: "individual", imagens: ["assets/img/41.jpg"], temUnidades: true, unidadesMax: 100, step: 10, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] },
    { id: "bolo_gelado", nome: "Bolo Gelado", precoUnit: 7, categoria: "individual", imagens: ["assets/img/42.jpg", "assets/img/43.jpg"], temUnidades: true, unidadesMax: 100, step: 10, sabores: ["BRIGADEIRO", "PRESTÍGIO", "DOIS BRIGADEIROS", "ABACAXI C BRIGADEIRO BRANCO", "PÊSSEGO COM BRIGADEIRO BRANCO", "AMEIXA COM BRIGADEIRO BRANCO"] }
];

// Categorias
const categorias = [
    { id: "todos", nome: "Todos os produtos" },
    { id: "bolos", nome: "Bolos Especiais (com restrições)" },
    { id: "tortas", nome: "Tortas/Bolos" },
    { id: "doces", nome: "Doces Gourmet (Unidade/Cento)" },
    { id: "individual", nome: "Itens Individuais" },
    { id: "sobremesas", nome: "Sobremesas" }
];

let currentCategory = "todos";
let carrinho = [];
let currentProduct = null;
const TAXA_ENTREGA = 0;

// Função para animação da bolinha
function animateToCart(clickX, clickY) {
    const cartBtn = document.getElementById('cartBtn');
    const rect = cartBtn.getBoundingClientRect();
    const ball = document.createElement('div');
    ball.className = 'ball-animation';
    ball.style.left = clickX - 15 + 'px';
    ball.style.top = clickY - 15 + 'px';
    document.body.appendChild(ball);
    setTimeout(() => {
        ball.style.left = rect.left + rect.width / 2 - 15 + 'px';
        ball.style.top = rect.top + rect.height / 2 - 15 + 'px';
        ball.style.transform = 'scale(0.3)';
        ball.style.opacity = '0';
    }, 10);
    setTimeout(() => ball.remove(), 600);
}

// Atualizar contador do carrinho
function updateCartCount() {
    const count = carrinho.length;
    document.getElementById('cartCount').textContent = count;
}

// Renderizar carrinho
function renderCart() {
    const container = document.getElementById('cartItemsList');
    if (!container) return;

    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--gray);">Seu carrinho está vazio</p>';
        document.getElementById('cartTotal').innerHTML = 'Total: R$ 0,00';
        return;
    }

    let total = 0;

    container.innerHTML = carrinho.map((item, idx) => {
        const itemTotal = item.precoTotal;
        total += itemTotal;

        let quantidadeExibida = item.quantidade;
        let unidadeMedida = 'UNID';

        if (item.kg) {
            if (parseFloat(item.kg) === 0.5) {
                quantidadeExibida = 500;
                unidadeMedida = 'G';
            } else {
                quantidadeExibida = item.kg;
                unidadeMedida = 'KG';
            }
        } else if (item.unidades) {
            quantidadeExibida = item.unidades;
            unidadeMedida = item.nome.toLowerCase().includes('cento')
                ? 'CENTO(S)'
                : 'UNID';
        }

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nome}</div>
                    <div class="cart-item-details">${item.detalhes || ''}</div>
                    <div>Quantidade: ${quantidadeExibida} ${unidadeMedida}</div>
                </div>
                <div class="cart-item-price">R$ ${itemTotal.toFixed(2)}</div>
                <button class="remove-item" data-index="${idx}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    const deliverySelecionado = document.querySelector('input[name="delivery"]:checked')?.value;

    const totalFinal = deliverySelecionado === 'delivery'
        ? total + TAXA_ENTREGA
        : total;

    document.getElementById('cartTotal').innerHTML =
        `Total: R$ ${totalFinal.toFixed(2)}`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            carrinho.splice(idx, 1);
            renderCart();
            updateCartCount();
            saveCartToStorage();
        });
    });

    saveCartToStorage();
}

function saveCartToStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('carrinho');
    if (saved) {
        try {
            carrinho = JSON.parse(saved);
            renderCart();
            updateCartCount();
        } catch (e) { }
    }
}

// Adicionar ao carrinho
function addToCart(produto, quantidade, sabor, massa, kg, unidades, tamanho, precoTotal, detalhes) {
    carrinho.push({
        id: produto.id,
        nome: produto.nome,
        quantidade: quantidade,
        sabor: sabor,
        massa: massa,
        kg: kg,
        unidades: unidades,
        tamanho: tamanho,
        precoTotal: precoTotal,
        detalhes: detalhes
    });
    renderCart();
    updateCartCount();
    saveCartToStorage();
}

// Configurar modal do produto
function openProductModal(produto) {
    currentProduct = produto;
    document.getElementById('modalProductName').textContent = produto.nome;

    const doceGroup = document.getElementById('doceGroup');
    const doceSelect = document.getElementById('doceSelect');

    if (produto.temDoce) {
        doceGroup.style.display = 'block';
        doceSelect.innerHTML =
            '<option value="">Selecione o doce</option>' +
            produto.tiposDoces.map(d => `<option value="${d}">${d}</option>`).join('');
    } else {
        doceGroup.style.display = 'none';
    }

    // Configurar sabores
    const saborGroup = document.getElementById('saborGroup');
    const saborSelect = document.getElementById('saborSelect');

    if (produto.sabores && produto.sabores.length > 0) {
        saborGroup.style.display = 'block';
        saborSelect.required = true;
        saborSelect.innerHTML =
            '<option value="">Selecione um sabor</option>' +
            produto.sabores.map(s => `<option value="${s}">${s}</option>`).join('');
        saborSelect.value = '';
    } else {
        saborGroup.style.display = 'none';
        saborSelect.required = false;
        saborSelect.innerHTML = '';
        saborSelect.value = '';
    }

    // Massa
    const massaGroup = document.getElementById('massaGroup');
    massaGroup.style.display = produto.temMassa ? 'block' : 'none';

    // Cobertura e decoração para bolos/tortas
    const coberturaGroup = document.getElementById('coberturaGroup');
    const decoracaoBoloGroup = document.getElementById('decoracaoBoloGroup');

    const mostrarExtras =
        produto.categoria === 'bolos' ||
        produto.categoria === 'tortas';

    coberturaGroup.style.display = mostrarExtras ? 'block' : 'none';
    decoracaoBoloGroup.style.display = mostrarExtras ? 'block' : 'none';

    document.getElementById('coberturaSelect').required = mostrarExtras;
    document.getElementById('decoracaoBoloSelect').required = mostrarExtras;

    // KG
    const kgGroup = document.getElementById('kgGroup');
    kgGroup.style.display = produto.temKg ? 'block' : 'none';

    // Unidades
    const unidadesGroup = document.getElementById('unidadesGroup');
    const unidadesSelect = document.getElementById('unidadesSelect');
    if (produto.temUnidades) {
        unidadesGroup.style.display = 'block';
        unidadesSelect.innerHTML = '<option value="">Selecione a quantidade</option>';
        const max = produto.unidadesMax || 100;
        const step = produto.step || 10;
        if (produto.temUnidades) {
            unidadesGroup.style.display = 'block';
            unidadesSelect.innerHTML = '<option value="">Selecione a quantidade</option>';

            if (produto.unidadesPersonalizadas) {
                produto.unidadesPersonalizadas.forEach(qtd => {
                    unidadesSelect.innerHTML += `<option value="${qtd}">${qtd} unidades</option>`;
                });
            } else {
                const max = produto.unidadesMax || 100;
                const step = produto.step || 10;

                for (let i = 20; i <= max; i += step) {
                    unidadesSelect.innerHTML += `<option value="${i}">${i} unidades</option>`;
                }
            }
        } else {
            unidadesGroup.style.display = 'none';
        }
        if (produto.unidadesMax === 5) {
            unidadesSelect.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                unidadesSelect.innerHTML += `<option value="${i}">${i} cento(s)</option>`;
            }
        }
    } else {
        unidadesGroup.style.display = 'none';
    }

    // Tamanho
    const tamanhoGroup = document.getElementById('tamanhoGroup');
    tamanhoGroup.style.display = produto.temTamanho ? 'block' : 'none';

    const decoracaoGroup = document.getElementById('decoracaoGroup');
    decoracaoGroup.style.display = produto.temDecoracao ? 'block' : 'none';

    document.getElementById('doceSelect').required = produto.temDoce;
    document.getElementById('decoracaoSelect').required = produto.temDecoracao;
    document.getElementById('kgSelect').required = produto.temKg;
    document.getElementById('massaSelect').required = produto.temMassa;
    document.getElementById('tamanhoSelect').required = produto.temTamanho;
    document.getElementById('unidadesSelect').required = produto.temUnidades;

    document.getElementById('productModal').classList.add('active');
}

// Calcular preço do produto
function calculateProductPrice(produto, sabor, massa, kg, unidades, tamanho, decoracao) {
    let preco = 0;

    // PRODUTOS POR KG
    if (produto.temKg && kg) {
        preco = produto.precoKg * parseFloat(kg);

        if (produto.precosEspeciais && sabor && produto.precosEspeciais[sabor]) {
            preco = produto.precosEspeciais[sabor] * parseFloat(kg);
        }
    }

    // PRODUTOS COM TAMANHO (EX: PÃO DE MEL)
    else if (produto.temTamanho && tamanho && unidades) {
        let precoUnitario = 0;

        if (tamanho === 'MINI') {
            precoUnitario = produto.precoMini;
        } else if (tamanho === 'PEQUENO') {
            precoUnitario = produto.precoPequeno;
        } else if (tamanho === 'GRANDE') {
            precoUnitario = produto.precoGrande;
        }

        if (decoracao === 'SIM') {
            precoUnitario += 3;
        }

        preco = precoUnitario * parseInt(unidades);
    }

    // PRODUTOS POR CENTO / UNIDADE
    else if (produto.temUnidades && unidades) {
        if (produto.precoCento) {
            preco = produto.precoCento * parseInt(unidades);
        } else if (produto.precoUnit) {
            preco = produto.precoUnit * parseInt(unidades);
        }
    }

    // PREÇO UNITÁRIO PADRÃO
    else if (produto.precoUnit) {
        preco = produto.precoUnit;
    }

    return preco;
}

// Encomendar direto WhatsApp
function directWhatsApp(produto, sabor, massa, kg, unidades, tamanho, preco) {
    let detalhes = [];

    if (sabor) detalhes.push(`Sabor: ${sabor}`);
    if (massa) detalhes.push(`Massa: ${massa}`);
    if (cobertura) detalhes.push(`Cobertura: ${cobertura}`);

    if (decoracaoBolo)
        detalhes.push(`Decoração: ${decoracaoBolo}`);
    if (kg) detalhes.push(`Quantidade: ${kg} KG`);

    if (unidades) {
        detalhes.push(
            `Quantidade: ${unidades} ${produto.id === 'cento_finos'
                ? 'unidades'
                : produto.precoCento
                    ? 'cento(s)'
                    : 'unidade(s)'
            }`
        );
    }

    if (tamanho) detalhes.push(`Tamanho: ${tamanho}`);

    const entregaFrete = confirm(
        "Deseja entrega com taxa a ser combinada ao final?\n\nOK = Frete\nCancelar = Retirada"
    );

    let entregaTexto = 'Retirada no local';
    let valorFinal = preco;

    if (entregaFrete) {
        entregaTexto = 'Entrega com frete';
        valorFinal += TAXA_ENTREGA;
    }

    const texto =
        `*Pedido - Doces com Arte Maju*%0A%0A` +
        `🍰 *Produto:* ${produto.nome}%0A` +
        `📋 *Detalhes:* ${detalhes.join(', ')}%0A` +
        `🚚 *Entrega:* ${entregaTexto}%0A` +
        `💰 *Valor:* R$ ${valorFinal.toFixed(2)}%0A%0A` +
        `*Meu contato:* `;

    window.open(
        `https://wa.me/5561981123563?text=${texto}`,
        "_blank"
    );
}

// Encomendar carrinho WhatsApp
function checkoutWhatsApp() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const delivery = document.querySelector('input[name="delivery"]:checked').value;
    let entregaMsg = delivery === 'pickup'
        ? 'Retirada no local'
        : 'Frete (A taxa de entrega será combinada ao final do pedido no WhatsApp)';

    let itensMsg = carrinho.map((item, i) => {
        let quantidadeTexto = '';

        if (item.kg) {
            quantidadeTexto = parseFloat(item.kg) === 0.5
                ? '500 G'
                : `${item.kg} KG`;
        } else if (item.unidades) {
            quantidadeTexto =
                item.nome.toLowerCase().includes('doces finos')
                    ? `${item.unidades} unidades`
                    : item.nome.toLowerCase().includes('cento')
                        ? `${item.unidades} cento(s)`
                        : `${item.unidades} unidades`;
        }

    return `${i + 1}. ${item.nome} - ${quantidadeTexto} (R$ ${item.precoTotal.toFixed(2)}) - ${item.detalhes}`;    }).join('%0A%0A');

    let total = carrinho.reduce((sum, i) => sum + i.precoTotal, 0);

    if (delivery === 'delivery') {
        total += TAXA_ENTREGA;
    }

    const texto = `*Pedido - Doces com Arte Maju*%0A%0A*CARRINHO:*%0A${itensMsg}%0A%0A*Total:* R$ ${total.toFixed(2)}%0A*Entrega:* ${entregaMsg}`;

    window.open(`https://wa.me/5561981123563?text=${texto}`, "_blank");
}

// Renderizar produtos na grid
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    let filtered = produtosCompletos;
    if (currentCategory !== "todos") {
        filtered = produtosCompletos.filter(p => p.categoria === currentCategory);
    }
    grid.innerHTML = filtered.map(prod => `
                <div class="product-card" data-aos="fade-up" data-produto-id="${prod.id}">
                    <div class="product-img-slider" data-id="${prod.id}">
                        ${prod.imagens.length > 1 ? `
                            <button class="slider-btn prev" data-dir="prev">❮</button>
                        ` : ''}

                        <div class="slider-track">
                            ${prod.imagens.map((img, index) => `
                                <img src="${img}" 
                                    class="slider-image ${index === 0 ? 'active' : ''}" 
                                    data-index="${index}">
                            `).join('')}
                        </div>

                        ${prod.imagens.length > 1 ? `
                            <button class="slider-btn next" data-dir="next">❯</button>
                        ` : ''}
                    </div>
                    <div class="product-info">
                        <h3>${prod.nome}</h3>
                        <div class="product-price">
                            ${prod.id === 'tortas_famosas'
            ? 'R$ 80,00 a R$ 120,00 / Kg'
            : prod.precoKg
                ? `R$ ${prod.precoKg.toFixed(2).replace('.', ',')} / Kg`
                : prod.precoUnit
                    ? `R$ ${prod.precoUnit.toFixed(2).replace('.', ',')} / Unidade`
                    : prod.precoCento
                        ? `R$ ${prod.precoCento.toFixed(2).replace('.', ',')} / ${prod.nome === 'Doces Finos' ? 'Unidade' : 'Cento'
                        }`
                        : prod.temTamanho
                            ? `R$ ${prod.precoMini.toFixed(2).replace('.', ',')} a R$ ${prod.precoGrande.toFixed(2).replace('.', ',')} / Unidade`
                            : 'Consultar'
        }
                        </div>
                        <div class="product-detail">Clique para personalizar</div>
                        <button class="btn-order" data-produto-id="${prod.id}">
                            <i class="fas fa-cart-plus"></i> Personalizar
                        </button>
                    </div>
                </div>
            `).join("");
    document.querySelectorAll(".btn-order, .product-card").forEach(el => {
        el.addEventListener("click", (e) => {
            if (el.classList.contains('btn-order') || el.classList.contains('product-card')) {
                const card = el.closest('.product-card');
                if (card) {
                    const id = card.dataset.produtoId || card.querySelector('.btn-order')?.dataset.produtoId;
                    const produto = produtosCompletos.find(p => p.id === id);
                    if (produto) openProductModal(produto);
                }
            }
        });
    });

    initSliders();
}

const sliders = {};

function initSliders() {
    document.querySelectorAll('.product-img-slider').forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');

        if (images.length <= 1) return;

        let current = 0;

        sliders[slider.dataset.id] = current;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            sliders[slider.dataset.id] = index;
        }

        function nextSlide() {
            current = (current + 1) % images.length;
            showImage(current);
        }

        function prevSlide() {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        }

        slider.querySelector('.next').addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });

        slider.querySelector('.prev').addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });

        let startX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', (e) => {
            let endX = e.changedTouches[0].clientX;

            if (startX - endX > 50) {
                nextSlide();
            }

            if (endX - startX > 50) {
                prevSlide();
            }
        });

        setInterval(nextSlide, 5000);
    });
}

function renderCategoryTabs() {
    const container = document.getElementById("categoryTabs");
    if (!container) return;
    container.innerHTML = categorias.map(cat => `
                <button class="category-btn ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                    ${cat.nome}
                </button>
            `).join("");
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentCategory = btn.dataset.category;
            renderCategoryTabs();
            renderProducts();
        });
    });
}

// Event Listeners
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = currentProduct;
    const doce = produto.temDoce
        ? document.getElementById('doceSelect').value
        : null;
    const sabor = document.getElementById('saborSelect').value;
    const massa = produto.temMassa
        ? document.getElementById('massaSelect').value
        : null;

    const cobertura =
        produto.categoria === 'bolos' ||
            produto.categoria === 'tortas'
            ? document.getElementById('coberturaSelect').value
            : null;

    const decoracaoBolo =
        produto.categoria === 'bolos' ||
            produto.categoria === 'tortas'
            ? document.getElementById('decoracaoBoloSelect').value
            : null;

    const kg = produto.temKg
        ? document.getElementById('kgSelect').value
        : null;

    const unidades = produto.temUnidades
        ? document.getElementById('unidadesSelect').value
        : null;

    const tamanho = produto.temTamanho
        ? document.getElementById('tamanhoSelect').value
        : null;

    const decoracao = produto.temDecoracao
        ? document.getElementById('decoracaoSelect').value
        : null;

    let quantidade = 1; // SEMPRE 1 ITEM NO CARRINHO
    let preco = calculateProductPrice(produto, sabor, massa, kg, unidades, tamanho, decoracao);
    let detalhes = [];

    if (doce) detalhes.push(`Doce: ${doce}`);
    if (sabor) detalhes.push(`Sabor: ${sabor}`);
    if (massa) detalhes.push(`Massa: ${massa}`);

    if (cobertura) detalhes.push(`Cobertura: ${cobertura}`);

    if (decoracaoBolo) {
        detalhes.push(`Decoração: ${decoracaoBolo}`);
    }

    if (tamanho) {
        detalhes.push(`Tamanho: ${tamanho}`);
    }

    if (decoracao) {
        detalhes.push(`Decorado: ${decoracao}`);
    }

    addToCart(
        produto,
        quantidade,
        sabor,
        massa,
        kg,
        unidades,
        tamanho,
        preco,
        detalhes.join(', ')
    );

    const rect = e.submitter?.getBoundingClientRect();

    if (rect) {
        animateToCart(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
        );
    }

    document.getElementById('productModal').classList.remove('active');
});

document.getElementById('cartBtn').addEventListener('click', () => {
    renderCart();
    document.getElementById('cartModal').classList.add('active');
});

document.getElementById('closeCartModal').addEventListener('click', () => {
    document.getElementById('cartModal').classList.remove('active');
});

document.getElementById('closeProductModal').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('active');
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
});

document.querySelectorAll('input[name="delivery"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const warning = document.getElementById('freightWarning');
        warning.style.display = radio.value === 'delivery' ? 'block' : 'none';

        renderCart();
    });
});

document.getElementById('checkoutWhatsApp').addEventListener('click', checkoutWhatsApp);

// FAQ
const faqs = [
    { pergunta: "Como faço um pedido?", resposta: "Clique em 'Personalizar' no produto desejado, escolha as opções e adicione ao carrinho ou encomende direto." },
    { pergunta: "Vocês entregam em toda a cidade?", resposta: "Sim, entregamos. O valor do frete é calculado conforme endereço. A retirada na confeitaria é grátis mediante agendamento." },
    { pergunta: "Com quanta antecedência devo encomendar?", resposta: "Para bolos e tortas personalizados: 5 a 7 dias. Para doces individuais e centos: 48h de antecedência." },
    { pergunta: "Possuem opções sem glúten ou lactose?", resposta: "Sim! Temos versões adaptadas para restrições alimentares. Basta clicar no botão do whatsapp para fazer o pedido einformar as restrições." },
    { pergunta: "Formas de pagamento?", resposta: "Aceitamos PIX e dinheiro." }
];

function renderFaq() {
    const container = document.getElementById("faqContainer");
    if (!container) return;
    container.innerHTML = faqs.map((faq, i) => `
                <div class="faq-item">
                    <div class="faq-question">${faq.pergunta} <i class="fas fa-chevron-down"></i></div>
                    <div class="faq-answer">${faq.resposta}</div>
                </div>
            `).join("");
    document.querySelectorAll(".faq-item").forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => item.classList.toggle("active"));
    });
}

// Inicialização
renderCategoryTabs();
renderProducts();
renderFaq();
loadCartFromStorage();

// Scroll e menu
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) menuToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show')));

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});