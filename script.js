const direitos = {
    fundamental: {

        // TEXTOS QUE VÃO SER UTILIZADOS NOS TÓPICOS

        titulo: "Direitos Fundamentais",
        topicos: [
            {
                titulo: "O que são Direitos Fundamentais?",
                texto: "São os direitos básicos que toda pessoa tem para viver com dignidade, liberdade e igualdade. No Brasil, eles estão garantidos principalmente na Constituição Federal de 1988 e valem para brasileiros e estrangeiros que vivem no país, sem distinção de origem, raça, sexo, idade ou religião. Eles não dependem da vontade de ninguém: o Estado é obrigado a respeitá-los."
            },
            {
                titulo: "Como os Direitos Fundamentais são aplicados?",
                texto: "Eles servem de base para todas as outras leis: nenhuma lei pode contrariá-los. Quando um direito é violado, a pessoa pode recorrer à Justiça. Existem instrumentos criados para isso, como o habeas corpus, que protege a liberdade de ir e vir, e o mandado de segurança, que protege direitos contra abuso de autoridade. Assim, eles também limitam o poder do Estado."
            },
            {
                titulo: "Quais são os Direitos Fundamentais?",
                texto: "A Constituição os organiza em grupos. Os direitos individuais e coletivos (art. 5º) incluem vida, igualdade, liberdade, segurança e propriedade. Os direitos sociais (art. 6º) incluem educação, saúde, trabalho, moradia e lazer. Há ainda os direitos de nacionalidade e os direitos políticos, como votar e ser votado."
            },
            {
                titulo: "Exemplos de Direitos Fundamentais",
                texto: "Escolher sua religião ou não ter nenhuma, expressar sua opinião sem censura prévia, ser considerado inocente até uma condenação definitiva, estudar em escola pública gratuita, ser atendido pelo SUS e votar a partir dos 16 anos."
            }
        ]
    },

    civil: {
        titulo: "Direito Civil",
        topicos: [
            {
                titulo: "O que é Direito Civil?",
                texto: "É o ramo do Direito que cuida da vida privada das pessoas: quem é considerado pessoa perante a lei, o que ela pode fazer, quais bens possui e como se relaciona com os outros. No Brasil, sua principal lei é o Código Civil (Lei 10.406/2002)."
            },
            {
                titulo: "Como o Direito Civil se aplica?",
                texto: "Ele aparece no dia a dia, muitas vezes sem percebermos: ao comprar algo, alugar um imóvel, casar, registrar um filho, fazer um testamento ou pedir indenização por um dano. Quando há conflito, as partes podem tentar um acordo ou levar o caso à Justiça."
            },
            {
                titulo: "Quais são as áreas do Direito Civil?",
                texto: "Pessoas (capacidade e direitos da personalidade), família (casamento, filhos, pensão), coisas (propriedade e posse), obrigações (dívidas e deveres), contratos (acordos entre as partes), responsabilidade civil (reparar danos causados a outros) e sucessões (herança)."
            },
            {
                titulo: "Exemplos de Direito Civil",
                texto: "Comprar um imóvel e registrá-lo em cartório, pedir divórcio, exigir pensão alimentícia para um filho, fazer o inventário de uma herança e receber indenização depois de um acidente de trânsito causado por outra pessoa."
            }
        ]
    },

    digital: {
        titulo: "Direito Digital",
        topicos: [
            {
                titulo: "O que é Direito Digital?",
                texto: "É a parte do Direito que trata das relações jurídicas na internet, nas redes sociais, nos aplicativos e no uso de dados. Ele não é uma lei única: reúne regras de várias áreas aplicadas ao mundo digital, além de leis específicas, como o Marco Civil da Internet (Lei 12.965/2014) e a Lei Geral de Proteção de Dados, a LGPD (Lei 13.709/2018)."
            },
            {
                titulo: "Como o Direito Digital se aplica?",
                texto: "Ele define regras para empresas que coletam seus dados, para o que pode ser publicado online, para compras e contratos feitos pela internet e para punir crimes cometidos por meios digitais. As regras da vida real valem na internet: ofender alguém online pode gerar indenização e até processo criminal."
            },
            {
                titulo: "Quais são os Direitos Digitais?",
                texto: "Privacidade, proteção dos dados pessoais (saber quais dados uma empresa guarda, corrigi-los e pedir sua exclusão), liberdade de expressão com responsabilidade, acesso à internet, considerado essencial ao exercício da cidadania pelo Marco Civil, e segurança nas relações online."
            },
            {
                titulo: "Exemplos de Direito Digital",
                texto: "Pedir a uma empresa que apague seus dados pela LGPD, ser vítima de um golpe de falso PIX ou de phishing (e-mail ou mensagem falsa), ter o celular invadido (crime previsto na Lei 12.737/2012), sofrer cyberbullying ou ter dados pessoais vazados por uma empresa."
            }
        ]
    },

    trabalhista: {
        titulo: "Direitos Trabalhistas",
        topicos: [
            {
                titulo: "O que é Direito Trabalhista?",
                texto: "É o ramo do Direito que regula a relação entre quem trabalha (empregado) e quem contrata (empregador). Seu objetivo é proteger o trabalhador, que costuma ser a parte mais frágil dessa relação. Suas principais fontes são a Constituição (art. 7º) e a CLT, a Consolidação das Leis do Trabalho, de 1943."
            },
            {
                titulo: "Como o Direito Trabalhista se aplica?",
                texto: "A relação de emprego existe quando uma pessoa trabalha de forma pessoal, habitual, mediante pagamento e recebendo ordens de um empregador. Nesse caso, os direitos da CLT passam a valer. Se eles forem descumpridos, o trabalhador pode procurar o sindicato, o Ministério do Trabalho ou a Justiça do Trabalho."
            },
            {
                titulo: "Quais são os principais direitos?",
                texto: "Salário mínimo, jornada de até 8 horas por dia e 44 por semana, horas extras com adicional de no mínimo 50%, férias de 30 dias com acréscimo de um terço, 13º salário, FGTS (depósito mensal de 8% do salário feito pelo empregador), licença-maternidade, aviso prévio e seguro-desemprego."
            },
            {
                titulo: "Exemplos de Direitos Trabalhistas",
                texto: "Ter a carteira de trabalho assinada, receber as horas extras trabalhadas, ter um dia de descanso semanal remunerado, receber todas as verbas rescisórias ao ser demitido e ter aviso prévio de 30 dias, com acréscimo de 3 dias por ano trabalhado na mesma empresa."
            }
        ]
    }
};

// TROCAR TEXTOS POR TÓPICO

const botoes = document.querySelectorAll(".balao1");
const itens = document.querySelectorAll(".item");
const tituloPrincipal = document.getElementById("direito-selecionado");
const titulosItens = document.querySelectorAll(".item-topo h2");
const textosItens = document.querySelectorAll(".item-conteudo p");

function trocarDireito(nome) {
    const direito = direitos[nome];
    if (!direito) return;

    tituloPrincipal.textContent = direito.titulo;

    direito.topicos.forEach((topico, i) => {
        titulosItens[i].textContent = topico.titulo;
        textosItens[i].textContent = topico.texto;
    });

    itens.forEach((item) => item.classList.remove("aberto"));
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        botoes.forEach((b) => b.classList.remove("ativa"));
        botao.classList.add("ativa");
        trocarDireito(botao.dataset.direito);
    });
});

itens.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("aberto");
    });
});

trocarDireito("fundamental");