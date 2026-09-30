// ======================================
// BANCO DE DADOS DO SITE LUNAR
// ======================================

const direitos = {

    fundamental:{

        titulo:"Direitos Fundamentais",

        topicos:[

            {
                titulo:"O que são Direitos Fundamentais?",

                texto:"Os Direitos Fundamentais são garantias previstas na Constituição Federal e pertencem a todos os cidadãos brasileiros."
            },

            {
                titulo:"Como eles são aplicados?",

                texto:"Eles orientam leis, decisões judiciais e protegem os cidadãos contra abusos."
            },

            {
                titulo:"Quais são os Direitos Fundamentais?",

                texto:"Direito à vida, igualdade, liberdade, propriedade, segurança e diversos outros previstos na Constituição."
            },

            {
                titulo:"Exemplos",

                texto:"Direito à educação, saúde, liberdade religiosa, liberdade de expressão e voto."
            }

        ]

    },


    civil:{

        titulo:"Direito Civil",

        topicos:[

            {
                titulo:"O que é Direito Civil?",

                texto:"O Direito Civil regula as relações entre pessoas físicas e jurídicas."
            },

            {
                titulo:"Como ele se aplica?",

                texto:"Está presente em contratos, casamento, herança, responsabilidade civil e propriedade."
            },

            {
                titulo:"Quais são as áreas do Direito Civil?",

                texto:"Família, sucessões, contratos, responsabilidade civil, propriedade e obrigações."
            },

            {
                titulo:"Exemplos",

                texto:"Compra e venda de imóveis, divórcio, pensão alimentícia e indenizações."
            }

        ]

    },


    digital:{

        titulo:"Direito Digital",

        topicos:[

            {
                titulo:"O que é Direito Digital?",

                texto:"É o ramo do Direito que regula as relações jurídicas realizadas no ambiente virtual."
            },

            {
                titulo:"Como o Direito Digital se aplica?",

                texto:"Proteção de dados, crimes virtuais, contratos eletrônicos e redes sociais."
            },

            {
                titulo:"Quais são os Direitos Digitais?",

                texto:"Privacidade, proteção de dados pessoais, liberdade de expressão e acesso à informação."
            },

            {
                titulo:"Exemplos",

                texto:"LGPD, golpes virtuais, vazamento de dados, cyberbullying e invasão de dispositivos."
            }

        ]

    },


    trabalhista:{

        titulo:"Direitos Trabalhistas",

        topicos:[

            {
                titulo:"O que é Direito Trabalhista?",

                texto:"É o ramo que regula a relação entre empregado e empregador."
            },

            {
                titulo:"Como ele se aplica?",

                texto:"Garante férias, salário, jornada de trabalho, FGTS e demais direitos previstos na CLT."
            },

            {
                titulo:"Quais são os principais direitos?",

                texto:"13º salário, férias remuneradas, licença maternidade, FGTS e seguro-desemprego."
            },

            {
                titulo:"Exemplos",

                texto:"Carteira assinada, pagamento de horas extras, descanso semanal remunerado e aviso prévio."
            }

        ]

    }

};



// ======================================
// BOTÕES SUPERIORES
// ======================================

const botoes = document.querySelectorAll(".balao1");



function trocarDireito(nome){

    const direito = direitos[nome];


    // ALTERA O TÍTULO PRINCIPAL

    document.getElementById("direito-selecionado").textContent =
        direito.titulo;



    // ALTERA OS 4 BALÕES

    for(let i = 0; i < 4; i++){

        document.getElementById(`titulo${i + 1}`).textContent =
            direito.topicos[i].titulo;


        document.getElementById(`texto${i + 1}`).textContent =
            direito.topicos[i].texto;

    }

}



botoes.forEach((botao) => {


    botao.addEventListener("click", () => {


        // REMOVE A CLASSE "ATIVA"
        // DE TODOS OS BOTÕES

        botoes.forEach((b) => {

            b.classList.remove("ativa");

        });


        // COLOCA "ATIVA"
        // NO BOTÃO CLICADO

        botao.classList.add("ativa");


        // PEGA O VALOR DO DATA-DIREITO

        const direitoEscolhido =
            botao.dataset.direito;


        // TROCA O CONTEÚDO

        trocarDireito(direitoEscolhido);

    });

});



// ======================================
// ABRIR E FECHAR BALÕES
// ======================================

const itens = document.querySelectorAll(".item");



itens.forEach((item) => {


    item.addEventListener("click", () => {


        // ADICIONA OU REMOVE A CLASSE "ABERTO"

        item.classList.toggle("aberto");

    });

});



// ======================================
// CONTEÚDO PADRÃO
// ======================================

trocarDireito("fundamental");