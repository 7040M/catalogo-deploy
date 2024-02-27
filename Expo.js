'use strict'

const containerClassicos = document.getElementById("container-classicos");
const containerModernos = document.getElementById("container-modernos");
let elementoSubstituido; 
                                  

const classicos = [
    { 'nome'    : 'Evangelion', 
      'url'     : '/imagens/classicos/evangelion.webp',
      'rate'    : "8.35 ⭐ Popularidade: #45",
      'sinopse' :  `No ano 2000, um grande impacto de um meteoro na Antártida derreteu o continente gelado, 
                  elevando o nível dos mares. Chegou-se a conclusão que Deus estaria tentando eliminar a raça humana e previu-se o 
                  envio de “Angels” para acabar com a humanidade. Preparando-se para isso, criou-se uma grande organização, custeada 
                  por todo o mundo: A NERV. Seu objetivo seria o de proteger a humanidade. Assim nasceram os Evangelions (ou EVA's)`,
      'trailer' : "13nSISwxrY4",
      'pgns'    : ['https://i.pinimg.com/564x/19/4b/32/194b3217c1cb741925ebf18ae2b6bed7.jpg', 'https://i.pinimg.com/564x/b6/c9/f7/b6c9f79d8b94cdfb95b208c30dd7adc5.jpg', 'https://i.pinimg.com/564x/c0/cb/52/c0cb52f0ca7a58f0364fb9cc061ff577.jpg', 'https://i.pinimg.com/564x/c2/0e/4d/c20e4d6bf3f0bcf23bfef7b8f8f5ccb6.jpg'],
      'charInfo': ["Asuka é impetuosa, egoísta, e muitas vezes verbalmente abusiva com os outros (especialmente com Shinji), e tem uma opinião muito elevada de sua aparência e sua habilidade considerável como piloto de EVA. Ela também tem um forte desejo de independência.", "Ela é a comandante de campo dos pilotos Eva, emitindo ordens e dando estratégias de batalha. Ela também atua como guardiã de Shinji e Asuka, deixando-os morar em seu apartamento em vez de morarem sozinhos. Embora seja profissional e diligente em seus deveres, ela é desleixada e bêbada quando está de folga.", 'Rei é socialmente retraída, aparentemente sem emoção, e raramente interage com qualquer pessoa, com exceção de Gendo, a quem ela exibe inicialmente lealdade, mas com quem tem um relacionamento geralmente distante.', 'Com a perda de sua mãe, Yue Ikari, e depois com o abandono de se pai, Gendo ikari, Shinji desenvolveu problemas relacionados a abandono, apresentando pouca ou nenhuma auto-estima, reclusão, e uma necessidade de fuga de situações difíceis ou dolorosas (isso é frequentemente descrito com Shinji ouvindo seu SDAT player com os fones nos ouvidos). Ele também é descrito como tímido e com medo de contato físico.']
    },
    { 'nome'    : 'FullMetalAlchemist', 
      'url'     : '/imagens/classicos/FullMetal.jpg',
      'rate'    : "8.11 ⭐ Popularidade: #81",
      'sinopse' :  `Os irmãos Edward e Al Elric praticam o tabu da transmutação humana e pagam caro por isso. 
                    Edward perde um braço e uma perna e Al perde o corpo todo. Os dois crescem e decidem sair pelo mundo 
                    em busca de uma maneira de consertar o que fizeram.`,
      'trailer' : "-GoNo0DGroU",
      'pgns'    : ['https://i.pinimg.com/564x/f4/f5/1d/f4f51d20bc54ff9c92c16b154320bdae.jpg', 'https://i.pinimg.com/564x/6c/b1/fc/6cb1fcd377edd9c6b4b5e5571c27ab3d.jpg', 'https://i.pinimg.com/564x/85/a4/06/85a406c038f412f8182fd04a8f534c54.jpg', 'https://2.bp.blogspot.com/-yAFdzNZAj9U/T04FFXeDW6I/AAAAAAAAAMM/jJauhNgdi6I/s1600/Winry.Rockbell.154646.jpg'],
      'charInfo': ['Alphonse Elric é uma criança humana que perdeu seu corpo durante uma transmutação alquímica proibida para trazer sua falecida mãe de volta para vida, e teve sua alma transmutada em uma armadura por seu irmão, Edward Elric. O selo de sangue de Al fica logo abaixo da base do pescoço, na parte de trás do traje, na parte interna. É desenhado com o sangue de Ed. Segundo Edward, ele precisa ter cuidado sempre que reconstruir o corpo de Alphonse, pois deve manter o selo de sangue intacto durante a transmutação. Se o selo de sangue for removido, a alma de Al será perdida.', 'Edward "Fullmetal Alchemist" Elric é um jovem alquímico prodígio. Ele é o mais jovem Alquimista do Estado a ser reconhecido pelas Forças Armadas do Estado de Amestris, tendo recebido o título aos 12 anos. Sua motivação é devolver seu irmão mais novo, Alphonse, ao seu corpo original, que foi perdido em uma transmutação humana fracassada. Edward, apesar de seus ataques ocasionais de imaturidade, é um garoto altruísta que ganha a reputação de "herói do povo" ao longo de sua juventude.', 'Roy Mustang é o "Alquimista da Chama", tendo controle absoluto sobre o calor e o fogo através da alquimia. Usando luvas especiais que criam uma faísca quando ele estala Com os dedos, Roy pode criar qualquer coisa, desde uma pequena brasa para queimar uma carta, até um inferno furioso que pode destruir um corpo humanóide em segundos. Seu controle preciso sobre a chama alquimicamente aprimorada é tão preciso que ele pode ferver a água na boca de uma pessoa. olhos e também pode atacar inimigos em meio a um motim sem ferir nenhum aliado.', 'Amigo de infância dos personagens centrais, os irmãos Elric, Winry é frequentemente visto em sua companhia ao longo da série. Ela é evidentemente o interesse amoroso de Edward. Especializada em reparos mecânicos, especificamente com automail, a Winry atende o braço e a perna de Edward sempre que precisa de reparo ou substituição.']
    },
      { 'nome'    : 'Hunter X Hunter', 
      'url'     : '/imagens/classicos/HunterXHunter.jpe',
      'rate'    : "8.41 ⭐ Popularidade: #367",
      'sinopse' :  `Gon Freecss é um garoto que descobre que seu pai, Ging, foi um Caçador e que, ao contrário do que 
                    Gon pensava, ele está vivo. Ao descobrir a verdade, o protagonista decide participar do teste para 
                    ser um Caçador e planeja usar as habilidades para localizar seu pai`,
                    'pgns'    : ['https://i.pinimg.com/564x/25/f0/5b/25f05b02b3997d3d15ee0ef44c59e629.jpg', 'https://i.pinimg.com/564x/02/1b/42/021b4232898045a8291997ef7ef3484d.jpg', 'https://i.pinimg.com/564x/af/88/e7/af88e7ed5781102b7b388fc0b80e4a3d.jpg', 'https://i.pinimg.com/564x/10/cd/87/10cd8751ae01b70210324f73cb17fbc1.jpg'],
      'trailer' : "AI-QXQbuxrk",
      'charInfo': ['Gon é um garoto atlético, rústico e amigável que está em busca de aventura. Além disso, ele não é muito bom em matemática. Porém, por ter passado muito tempo na floresta quando criança, ele é muito bom com animais. Simultaneamente, suas falhas residem em seu temperamento e natureza impulsiva. Gon às vezes não consegue pensar bem nas coisas e tais ações o levam ao sofrimento. Embora possua um talento muito além do normal para sua idade, sempre que suas habilidades são desafiadas, ele sente que precisa provar que seu antagonista está errado.','Apesar de ter o coração cheio de ódio, Kurapika é muito gentil e leal com seus amigos. Ele é uma pessoa extremamente inteligente, mas ao mesmo tempo imprudente. Kurapika é do grupo de materialização nen e por determinação, aumentou o poder de sua habilidade nen a ponto de ser formidável contra a Trupe Fantasma.','Um forte contraste com seu melhor amigo Gon, Killua é altamente maduro tanto em pensamentos quanto em emoções. Ele pode controlar sua raiva e manter a racionalidade melhor do que Gon, mesmo diante de uma experiência aterrorizante.','Leorio é talentoso em barganha, sendo capaz de pechinchar com os lojistas sem parar. Ele às vezes pode parecer impetuoso e rude, mas no final é obviamente muito gentil com seus amigos.']
    },
    { 'nome'    : 'Inuyasha', 
      'url'     : '/imagens/classicos/inuyasha.jpg',
      'rate'    : "7.86 ⭐ Popularidade: #235",
      'trailer' : "EllmLUr39qk",
      'pgns'    : ['https://i.pinimg.com/564x/49/16/ab/4916ab800659f7d6550a2948914ea191.jpg', 'https://i.pinimg.com/564x/ee/18/9c/ee189c12c77bbee8ab155f8390819361.jpg', 'https://i.pinimg.com/564x/b8/f0/ef/b8f0ef7c91ce0caa251197d5c739b360.jpg', 'https://i.pinimg.com/564x/1b/a0/52/1ba0529a8a307eea878dd8eb2d0deea2.jpg'],
      'sinopse' :  `Kagome e Inu-Yasha decidem unir forças e partem para recuperar os pedaços da Joia de Quatro Almas. 
                    Pelo caminho, eles vivem grandes aventuras e enfrentam youkais malignos, sedentos pelo poder. Ao mesmo 
                    tempo, a garota ainda tem que conciliar a sua vida de aventureira no Japão antigo com os estudos no 
                    mundo atual.`,
      'charInfo': ['Um estudante do terceiro ano do ensino médio. Kagome pode ser extremamente doce, mas também pode se tornar muito perigosa quando provocada. Ela é ousada e determinada a ajudar os outros, independentemente do custo. É por causa dela que Inuyasha consegue fazer mais amigos. Seu bom coração e beleza fazem com que vários homens se apaixonem por ela ao longo de sua jornada.','Um híbrido de cachorro youkai e humano, meio-irmão demônio. Ele empunha a Tessaiga, uma espada sobrenatural feita de uma das presas de seu falecido pai. Esta espada, quando empunhada corretamente, pode destruir cem demônios com um único golpe. Na noite de lua nova de cada mês, Inuyasha se transformará em um humano normal com cabelos pretos e olhos castanhos, e perderá seu poder yokai durante esse período. Inuyasha ama Kikyo, e ainda ama, mas as coisas ficam complicadas quando ele começa a desenvolver sentimentos de amor por Kagome','Um "houshi" budista, ou monge itinerante de baixo escalão, Miroku viajou pelo interior realizando serviços como exorcismos e extermínios de youkai para ganhar a vida. Ele sofre de uma maldição hereditária originalmente infligida a seu avô Miyatsu por Naraku, que explorou a fraqueza de Miyatsu por mulheres atraentes assumindo a forma de uma, e refletiu um dos ofuda de Miyatsu nas costas para perfurar a palma de sua mão direita.O buraco em sua mão tornou-se um kazana que suga qualquer coisa que não esteja pregada, independentemente da massa','Sango é um matador de youkai ("youkai taijiya") que vem de uma vila de matadores de yōkai profissionais. O único membro do grupo de Inuyasha que não tem poderes sobrenaturais, Sango em vez disso empunha o Hiraikotsu, um enorme bumerangue feito de ossos de yōkai, além de um amplo repertório de ferramentas e truques para combater yōkai.']
    },
    { 'nome' : 'Samurai X', 
      'url': '/imagens/classicos/samuraiX.jpg',
      'rate'    : "8.29 ⭐ Popularidade: #444",
      'trailer' : "2uDLN9RQSBQ",
      'charInfo': ['Kenshin é geralmente descrito como um espadachim despreocupado, muito indiferente e tende a ser um pouco simplório quando se trata de viver normalmente. Ele é visto fazendo muitas das tarefas no dojo em que fica com Kaoru (ou seja, cozinhar, limpar, lavar roupa, etc.). Ele acredita que é sua maneira de retribuir a Kaoru permitindo que ele ficasse em seu dojo.','A principal instrutora do estilo de luta Kamiya Kasshinryuu desenvolvido por seu falecido pai, Kamiya Koshijirou, Kaoru herdou um pequeno dojo de seu pai depois que ele foi morto durante a Guerra Seinan e o opera sozinha. Naturalmente, ela é independente, possessiva, compassiva, corajosa, agressiva, obstinada e, ainda por cima, uma grande lutadora - com apenas mudanças de humor ocasionais. Kaoru também é conhecida por sua culinária que seus amigos e familiares não gostam e por sua capacidade de ver o que há de bom nos outros.','Yahiko é um descendente de samurai. O pai de Yahiko morreu durante a Batalha de Ueno durante a Guerra Boshin, morto no Templo Keneiji. Sua mãe morreu de sífilis em um bordel para colocar comida na mesa pouco depois de dar à luz seu filho. Yahiko foi originalmente forçado a viver como um ladrão para a Yakuza local, que o enganou fazendo-o acreditar que ele ainda teria que pagar o dinheiro que os gangsters deram à sua mãe para comprar remédios. Com a ajuda de Himura Kenshin e Kamiya Kaoru, ele se torna um aprendiz do estilo Kamiya Kasshin-Ryuu.','Cheio de raiva e amargura, Sanosuke ganhava a vida como um lutador de aluguel que tinha o apelido de "Zanza", derivado de sua arma, o zanbatō. A espada de Sanosuke, a katana mais pesada já feita no universo Rurouni Kenshin, origina-se da Luta Ōnin. Devido ao desgaste, a lâmina não tem mais fio. Sanosuke usa a espada para esmagar e esmagar.'],
      'pgns'    : ['https://i.pinimg.com/564x/4a/6c/aa/4a6caa362c05d821b9da84800ac8f1b0.jpg', 'https://i.pinimg.com/564x/01/8f/ca/018fcad2dea8e04947f2e665a1b6e5d3.jpg', 'https://i.pinimg.com/564x/50/23/cf/5023cfe4d0771d4d4cce954ca2910e2e.jpg', 'https://i.pinimg.com/564x/a5/59/3a/a5593ab4e5c28361b29f791dbc464a22.jpg'],
      'sinopse' :  `Kenshin Himura ficou conhecido como um dos melhores assassinos do país. Porém, cansado de tanta 
                    matança, ele abandona sua espada durante uma batalha e jura que não matará mais ninguém. Sua arma é 
                    recolhida por um dos derrotados e, passado algum tempo, uma série de assassinatos relacionados a um 
                    anel de ópio começam a acontecer. Himura passa a ser falsamente acusado de assassinato e sua promessa 
                    de nunca mais tirar uma vida é testada.`
    },
    { 'nome' : 'Yu Yu Hakusho', 
      'url': '/imagens/classicos/YuYuHakusho.jpe',
      'rate'    : "8.46 ⭐ Popularidade: #292",
      'trailer' : "bGc1Na8mlw0",
      'charInfo': ['Embora um tanto quanto taciturno, Hiei respeita todos os seus companheiros, mas parece ser o mais próximo de Kurama e Yusuke. Hiei prefere trabalhar de acordo com sua própria agenda e tem uma reputação notória no Demon World como um assassino. Apesar disso, no fundo ele é um solitário que deseja amizade e companheirismo verdadeiros. Ele é muito honrado, sempre cumprindo sua palavra.','Kurama é geralmente considerado o membro mais calmo e sensato do grupo. A sua natureza analítica está presente nas batalhas onde prefere estudar os pontos fortes e fracos dos seus adversários antes de traçar uma estratégia própria. Ele protege aqueles com quem se preocupa e muitas vezes é impiedoso com qualquer pessoa que lhes represente uma ameaça, uma mudança em sua maneira geralmente amigável. Em muitos casos, Kurama demonstra ser muito abnegado no interesse da segurança de seus amigos e familiares.','Kuwabara, ao contrário do resto de seus companheiros de equipe, pode ser imprudente, mas é extremamente leal aos amigos e tem um código de honra muito rígido. Ele faria qualquer coisa por seus amigos e por amor, mas pode ser bastante astuto em batalha quando precisa, e é amplamente considerado o mais legal dos quatro.','Não tendo pai e com a mãe sempre viajando para outro lugar, bebendo ou festejando, Yuusuke cresceu em um ambiente muito negligente. Ele é temperamental, impulsivo e gosta de intimidar quem tem medo dele. Uma de suas características mais notáveis ​​é a vontade de lutar, que se torna mais perceptível à medida que a série avança. Yuusuke foi apontado em muitas ocasiões como pouco inteligente e, às vezes, simplesmente estúpido. O desejo de Yuusuke de lutar vem mais do prazer de uma boa briga e, surpreendentemente, Yuusuke não gosta de matar se puder evitá-lo.'],
      'pgns'    : ['https://i.pinimg.com/564x/01/94/87/019487f3c5b9962f716adde4b26bf76a.jpg', 'https://i.pinimg.com/564x/5e/a4/a0/5ea4a0afaa13be125e99c43fc9286e97.jpg', 'https://i.pinimg.com/564x/df/24/e1/df24e1fadc88fb4f622f4cd7153b8732.jpg', 'https://i.pinimg.com/564x/20/22/47/2022475473a4c960fcc6dd1d17aafbd0.jpg'],
      'sinopse' :  `Depois de perder a vida em um ato de bondade, o delinquente juvenil Yusuke Urameshi é chamado para 
                    ser detetive espiritual e investigar casos de Yokais perigosos. Assista o quanto quiser.`
    }
]

const modernos = [
  { 'nome'    : 'Jujutsu Kaisen', 
    'url'     : '/imagens/modernos/jujutsuKaisen.jpg',
    'rate'    : "8.62 ⭐ Popularidade: #15",
    'trailer' : "ynr6gnyu9NE",
    'charInfo': ['Embora aparentemente estóico e calculista, Megumi deseja ajudar a proteger as pessoas que ele considera boas ou gentis. Ele acredita que o mundo é injusto e que um Feiticeiro é uma ferramenta para garantir que pessoas boas tenham mais chances de viver. Alegando ser seu desejo egoísta e irracional, ele não se vê como um herói por fazer isso.','Satoru é um indivíduo complexo, já que normalmente é indiferente e brincalhão com pessoas como seus alunos, colegas (próximos) e amigos, mas antipático e cruel com pessoas como Executivos Feiticeiros. Ele está muito confiante em suas habilidades e reputação como um feiticeiro poderoso. Em uma crise, Gojo é capaz de ter sangue frio. ','Yuji é uma pessoa justa que se preocupa muito não apenas com seus camaradas, mas com qualquer pessoa que ele veja como pessoas com suas próprias vontades, apesar de quão profunda ou superficial seja sua conexão com eles. Ele se preocupa muito com o "valor de uma vida" e, para esse fim, garantirá que os outros recebam uma "morte justa".','Nobara é uma jovem confiante e impetuosa com um caráter inabalável. Mais do que tudo, Nobara está determinada a permanecer fiel a si mesma, não importa o que aconteça.  Ela tem muito orgulho de ser uma garota bonita e uma lutadora forte, recusando-se a deixar que alguém a influencie.'],
    'pgns'    : ['https://i.pinimg.com/564x/b3/03/7f/b3037fefbc6dc4fb06269dbc462d2d6e.jpg','https://i.pinimg.com/564x/a4/e4/15/a4e41533d81b420c4937df0107863a59.jpg','https://i.pinimg.com/564x/b4/9c/a4/b49ca4afb3f85443565ff39f366b94cb.jpg','https://i.pinimg.com/736x/22/74/9f/22749f88db353ff81fad05cce843245b.jpg'],
    'sinopse' :  `Em Jujutsu Kaisen, a vida de um adolescente é virada de cabeça para baixo após entrar em contato com 
                 um talismã amaldiçoado. No conceituado anime, o adolescente Yuuji Itadori participa de um clube de 
                 ocultismo e acaba se envolvendo com um item perigoso, um dedo amaldiçoado.`,
  },
  { 'nome'    : 'Boku no Hero academia', 
    'url'     : '/imagens/modernos/BokuNoHero.jpg',
    'rate'    : "7.87 ⭐ Popularidade: #6",
    'trailer' : "7As3wJotKcg",
    'charInfo': ['Sempre exibindo seu sorriso, All Might geralmente mostra uma atitude brilhante, antipática e na qual dá a entender que pode fazer de tudo inspirando os outros desta forma. Ele tende a ser bastante amigável e simpático, devido à sua popularidade e os anos como uma grande celebridade.','Katsuki é uma pessoa muito agressiva e intimida Izuku Midoriya, a quem ele também trata de certa forma como um rival. Ele tem um complexo de superioridade e quer ser o primeiro, ser o melhor em tudo. Ele não gosta quando as pessoas o desprezam, como se fossem superiores a ele, e fica bravo facilmente. Ele é extremamente arrogante, mas também muito inteligente e capaz.','Izuku é um garoto muito tímido e educado. Devido a sofrer bullying desde a infância por ter nascido sem uma individualidade, ele inicialmente é retratado como inseguro, sendo mais reservado e pouco expressivo, especialmente na frente de Katsuki. No entanto, depois de ser aceito na UA e enfrentar Katsuki durante o treinamento de batalha, ele gradualmente se tornou mais confiante e corajoso.','Ochaco é uma pessoa muito calorosa e animada que pensa em tudo de maneira positiva, embora seja objetiva o suficiente para ver falhas e virtudes. Ela é empática em geral, amigável com aqueles que conhece e tentará ajudar ou defender qualquer pessoa que seja gentil com ela ou que precise de assistência.'],
    'pgns'    : ['https://i.pinimg.com/564x/ff/f6/fc/fff6fc55b117108f3e10a77500cf95a6.jpg','https://i.pinimg.com/564x/78/13/4c/78134cd2783c7775bdd65f7d68fce288.jpg','https://i.pinimg.com/564x/a5/ab/42/a5ab4286be8a52775dd1819698591371.jpg','https://i.pinimg.com/564x/19/26/86/1926862b48b5d7a1d830ce21e0efa8e0.jpg'],
    'sinopse' :  `Em um mundo onde quase toda a população possui algum poder sobre-humano, Izuku Midoriya é um dos poucos 
                  casos de pessoas comuns. Mas esse não é o maior de seus problemas. Exatamente por ser desprovido de 
                  qualquer poder, Izuku sofre constantemente nas mãos de seus colegas de classe.`
  },
  { 'nome'    : 'Haikyuu', 
    'url'     : '/imagens/modernos/Haikyuu.jpg',
    'rate'    : "8.44 ⭐ Popularidade: #37",
    'trailer' : "KhZG9Uw7PxM",
    'charInfo': ['Shoyo possui uma personalidade animada e energética. Ele fica excitado facilmente e pode ser um pouco barulhento, perdendo apenas para Yu e Ryunosuke. Na maior parte das vezes, Shoyo é muito simplista, o que, às vezes, faz com que ele tome decisões precipitadas.','Sem o conhecimento da maioria de seus colegas de escola e conhecidos, ele é na verdade muito mais sensível e infantil do que parece; ele simplesmente não sabe como controlar sua frustração e expressar seus pensamentos e emoções de maneira adequada. Desde que se juntou a Karasuno, ele passou a ser mais respeitoso com seus veteranos, bem como a aceitar mais pessoas cujas habilidades e/ou pontos de vista diferem dos seus, compreendeu a importância de trabalho em equipe e confiança mútua no esporte que tanto valoriza.','Nishinoya é uma pessoa muito enérgica e temperamental. Sua natureza turbulenta e peripécias malucas podem atrair atenção indesejada com bastante facilidade, o que geralmente vai mal para ele.','Daichi é um capitão responsável e cuidadoso que sempre coloca seu time na frente de tudo. Ele também é muito paciente e compreende os outros, mas se torna assustador quando está com raiva, embora ele raramente mostre esse seu lado.'],
    'pgns'    : ['https://i.pinimg.com/564x/1a/44/94/1a4494a918b6d961d03c5e5d24082b1d.jpg','https://i.pinimg.com/564x/6b/b1/df/6bb1df5f126d82e4a43bed246ffad69e.jpg','https://i.pinimg.com/564x/07/f4/fb/07f4fb54f01b41812567824869514221.jpg','https://i.pinimg.com/564x/62/f9/61/62f9613d7e40267c2bb15665931fbe6e.jpg'],
    'sinopse' :  `segue os passos de Shoyo Hinata, um garoto que se apaixona pelo vôlei após assistir a uma partida do 
                campeonato nacional pela televisão. Ele começa a praticar o esporte e constrói uma equipe do seu colégio 
                no último ano do ensino fundamental, mas que é derrotada pelos favoritos comandados por Tobio Kageyama.`
  },
  { 'nome'    : 'Shingeki no Kyojin', 
    'url'     : '/imagens/modernos/SNK.jpg',
    'rate'    : "8.54 ⭐ Popularidade: #1",
    'trailer' : "LV-nazLVmgo",
    'charInfo': [' Eren é melhor descrito como teimoso e impulsivo, que são os dois atributos de sua forte determinação para proteger a Humanidade e, eventualmente, deixar as muralhas pois para ele é humilhante ser enjaulado. Ele é considerado uma pessoa que não pode ser dominada ou presa e não recebe ordens de ninguém que ele não confie. Ele é uma pessoa que não se ajoelha pra ninguém e nunca é bom ameaçá-lo.','Armin Arlert é o melhor amigo de Eren. Ele é fisicamente fraco, mas emocionalmente forte. Mesmo carecendo de habilidades reais de combate, Armin é um gênio em cursos teóricos e pode fazer planos mesmo sob extrema pressão. Mesmo assim, Armin continua pensando que é fraco. Ele mesmo não percebe as coisas que faz por Eren e Mikasa e se considera completamente incompetente e se odeia por ter que confiar em Eren e Mikasa.','Visivelmente, Mikasa é consideravelmente mais retraida depois do assassinato de seus pais; contudo, ela ainda ama e importa-se profundamente com seus amigos, como Eren e Armin. Mikasa tem um forte senso de certo e errado, mas irá sempre seguir Eren e suas decisões. No entanto, apesar de toda sua lealdade cega, Mikasa é também muito equilibrada. ','Embora se diga que ele é direto e inacessível, nota-se que ele tem um forte respeito pela estrutura e disciplina. Há rumores de que ele originalmente fazia parte do crime clandestino antes de se tornar soldado. Embora muitas vezes pareça hostil, ele se preocupa profundamente com sua equipe e nunca subestimou a vida humana. Ele também é um notório maníaco por limpeza.'],
    'pgns'    : ['https://i.pinimg.com/564x/1c/8b/8f/1c8b8f3540efae38536d3401a57fb2e3.jpg','https://i.pinimg.com/564x/3e/47/1f/3e471fc86e4b9a9f148a36b50669bd1d.jpg','https://i.pinimg.com/564x/6a/f1/9c/6af19cb215bea74c98f36c4cd9bdcd3b.jpg','https://i.pinimg.com/564x/4f/e2/2d/4fe22d0f6fa111a4f6709855000c867f.jpg'],
    'sinopse' :  `É ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes muralhas 
                que os protegem dos gigantescos humanóides devoradores de humanos chamados de Titãs; a história segue 
                Eren Jaeger, que jura exterminar os Titãs, após um Titã causar a destruição de sua cidade natal e a morte 
                de sua mãe`
  },
  { 'nome'    : 'Overlord', 
    'url'     : '/imagens/modernos/overlord.jpg',
    'rate'    : "7.91 ⭐ Popularidade: #67",
    'trailer' : "ffTKNwHF70c",
    'charInfo': ['Extremamente leal e apaixonada, Albedo tende a ser manhosa e apegada a Ainz, as vezes mostrando tendências obsessivas quando ocorrem situações que envolvem ele. Ela está sempre competindo por sua atenção, mostrando explosões de ciúmes a qualquer momento que alguém tenta ficar próximo dele.','Enquanto Ainz é uma pessoa cautelosa e mesquinha, ele sempre tentaria planejar antecipadamente e controlar os detalhes de antemão, a fim de evitar quaisquer ações casuais que possam pôr em perigo a existência de Nazarick.','Desde que ele é um demônio, Demiurge é considerado um dos membros mais cruéis de Nazarick, tendo grande alegria no sofrimento de outras raças. Por essa razão, ele entusiasticamente realiza experimentos mágicos com os prisioneiros enviados a ele, vendo-os como nada menos do que brinquedos para sua própria diversão. ','Como uma Vampira Verdadeira, Shalltear é extremamente orgulhosa e leva sua posição de guardiã com seriedade. Ao mesmo tempo, ela não tem paciência ou tolerância por falha e usualmente explode com o sinal de qualquer coisa errada ocorrendo. Shalltear não hesita em matar qualquer servo que a desaponta. Porém, ela não punirá em casos que a tarefa era impossível. Quando Shalltear falha uma missão, ela tende a ficar depressiva e reflexiva com seus erros.'],
    'pgns'    : ['https://i.pinimg.com/564x/1a/7c/64/1a7c64b6e48094ca01ca641d9b8e332f.jpg','https://i.pinimg.com/564x/4e/a1/51/4ea151e2d8e607496fbdb43d8c923ff8.jpg','https://i.pinimg.com/564x/7e/04/6c/7e046cc1920eb3b7c92667149c22efc7.jpg','https://i.pinimg.com/564x/ac/8e/4a/ac8e4a9a984ea4d1bcfcb35addfbcd58.jpg'],
    'sinopse' :  `Yggdrasil é um popular jogo online que, de repente, tem seus servidores desligados. Momonga, um jovem 
                jogador, decide não sair do jogo e é transformado num esqueleto, o Overlord. Como não tem família, amigos 
                ou lugar na sociedade real, o jovem Momonga decide lutar para dominar o novo mundo que o jogo se tornou.`
  },
  { 'nome' : 'Spy x Family', 
    'url': '/imagens/modernos/spy.jpg',
    'rate'    : "8.55 ⭐ Popularidade: #72",
    'trailer' : "0CJr6AfE2rY",
    'charInfo': ['Twilight costuma ser calmo, coletivo e discreto em seu próprio trabalho. Ele é eficiente em tudo, fazendo de tudo para completar sua própria missão. Apesar disso, Loid pode ter mostrado um lado carinhoso ao resgatar sua própria filha adotiva, mesmo ao custo de revelar sua verdadeira identidade como espião ou expressar raiva depois que Murdoch Swan a humilhou.',' Anya é uma jovem borbulhante e alegre. Ela parece ser muito mais inteligente do que realmente é, e embora isso seja provavelmente verdade até certo ponto, isso provavelmente é artificialmente inflado porque ela pode ler a mente de outras pessoas, um fato que ninguém além dela está ciente.','Yor é bastante tímida e introvertida, parecendo um indivíduo um tanto distante, interagindo minimamente com seus colegas de trabalho e sendo descrita por Camilla como um robô. Da mesma forma, Yor tem uma personalidade extraordinariamente coletada, capaz de manter a compostura no meio do combate.','Extremamente gentil, o animal de estimação da Família Forger era conhecido como "Sujeito 8" e foi usado para experimentos que resultaram em um cão com habilidades de precognição.'],
    'pgns'    : ['https://i.pinimg.com/564x/99/6d/07/996d07a2f99f2f3a66f6258a2c11bda1.jpg','https://i.pinimg.com/564x/a5/f9/b9/a5f9b91ca726659e86be310e9b394905.jpg','https://i.pinimg.com/564x/bb/c5/1b/bbc51b6bbec352fdd3beafdc7b71d871.jpg','https://i.pinimg.com/564x/1b/d4/13/1bd413f4711de7fdd57dd3144e069520.jpg'],
    'sinopse' :  `A trama desse anime gira em torno de Twilight, um espião de alto nível que, para concluir um missão 
                ultrassecreta com sucesso, precisa formar uma família de mentira. No entanto, suas falsas esposa e filha 
                também têm grandes segredos, já que a primeira é uma assassina profissional, enquanto a garotinha é telepata`
  }
]

//Função para mostrar banners
const displayBanners = (items, container) => {
    container.innerHTML='';   //limpar conteúdo anterior ao atualizar
    
  items.forEach((element, index) => {  
        container.innerHTML += 
        ` <div id="${index}-banner" class="banner">
            <img src=${element.url}>
            <p class="titulo" >${element.nome}<p>
            <div class="overlay">
              <p class="rate">${element.rate}</p>
              <h3>${element.nome}</h3>
              <p>"${element.sinopse}"</p>
              <div class='btn'>
              <button class="mais-info"> 
                <i id="${index}-btn" class="bi bi-plus"></i>
              </button>
              </div>
            </div>
          </div>  
        `
    });
}

//função para trocar aba
let navSelecionada;

function trocarDisplay() {
  const IDopcaoSelecionada = document.querySelector('[name="aba"]:checked').id;
  navSelecionada = IDopcaoSelecionada.charAt(0);

  if(navSelecionada === '0') {
    containerModernos.innerHTML='';
    displayBanners(classicos, containerClassicos);
  } else {
    containerClassicos.innerHTML='';
     displayBanners(modernos, containerModernos);
  }
}

trocarDisplay();

//Função para criar nova div
function criarDiv(num, child) {
  const container = child.parentNode;
  let objt = null;

  if(container.id === 'container-classicos') {
     objt = classicos;
  } else {
     objt = modernos;
  }
  const novoBanner = document.createElement('div');

  container.insertBefore(novoBanner, document.getElementById(Math.floor(num/3)*3 + '-banner'));
  
  let imagensHTML = '';

  objt[num].pgns.forEach((imagem, index) => {
    imagensHTML += `<div class='${index}-img-pers '> 
                      <img class='pers' src="${imagem}" > 
                      <div class='charInfo' <p>${objt[num].charInfo[index]}</p></div>  
                    </div>`;
  });

    novoBanner.classList.add('window');
    novoBanner.innerHTML= `  
      <div class='personagens'>      
          ${imagensHTML}
      </div>
       <iframe width="390" height="315" src="https://www.youtube.com/embed/${objt[num].trailer}" frameborder="0" allowfullscreen></iframe>

      <button id='${num}-close' class='close'>
        <i class="bi bi-box-arrow-in-down-left"></i>
      </button>
  `;
  novoBanner.id = num + "-novo";
  
  imagensAbsolutas();
  return novoBanner;
}

//função para fechar janela
function fecharJanela(event) {
  const numJanela = event.target.parentNode.id.charAt(0);
  let banner =  document.getElementById(numJanela + '-novo');
  
  banner.parentNode.replaceChild(elementoSubstituido, banner);
  elementoSubstituido.parentNode.insertBefore(elementoSubstituido, document.getElementById(`${parseInt(numJanela)+1}-banner`));
  elementoSubstituido.setAttribute('style', 'animation: fadeIn 0.75s ease-in-out');
}

function fecharAutomatico(janelaAberta) {
  const num = parseInt(janelaAberta.id.charAt(0));

  janelaAberta.parentNode.replaceChild(elementoSubstituido, janelaAberta);
  elementoSubstituido.parentNode.insertBefore(elementoSubstituido, document.getElementById(`${num+1}-banner`));
  elementoSubstituido.setAttribute('style', 'animation: fadeIn 0.75s ease-in-out');
}

//função para abrir banner expandido
const novaJanela = event => {

  if (event.target.className === 'bi bi-plus') {
    const janelaAberta = document.querySelector('.window');

    if(janelaAberta !== null) {
      fecharAutomatico(janelaAberta);
    }

    const idButton = event.target.id;
    const bannerSelecionado = idButton.charAt(0);
    const num = parseInt( bannerSelecionado);  
    const child = document.getElementById(bannerSelecionado + "-banner");
    const novoBanner = criarDiv(num, child);

    elementoSubstituido = child;
    child.parentNode.replaceChild(novoBanner, child);
    if(num % 3 === 0) {
      novoBanner.parentNode.insertBefore(novoBanner, document.getElementById((1 + Math.floor(num/3)*3) + '-banner'));
    }else{
      novoBanner.parentNode.insertBefore(novoBanner, document.getElementById(Math.floor(num/3)*3 + '-banner'));
    } 
  }else if(event.target.className === 'bi bi-box-arrow-in-down-left') {
    fecharJanela(event);
  }
}

function navegacao() {
if(navSelecionada === '0') {
  containerClassicos.addEventListener('click', novaJanela);
}else {
  containerModernos.addEventListener('click', novaJanela);
}
}

function moverSelecionado(imagens) {
  
  imagens.forEach((div, index) => {
    div.addEventListener('mouseover', () => {
      imagens.forEach((otherDiv, otherIndex) => {
        if (otherIndex > index) {
          otherDiv.classList.add('moved');
        }
      });
    });
   
    div.addEventListener('mouseout', () => {
      imagens.forEach((otherDiv, otherIndex) => {
        if (otherIndex > index) {
          otherDiv.classList.remove('moved');
        }
      });
    });
  });
}

function imagensAbsolutas() {
  const imagens = document.querySelectorAll('[class*="img-pers"]');
  console.log('função imagensAbsolutas:', imagens);
   // Itera sobre cada imagem e define sua posição individualmente
   imagens.forEach((imagem, index) => {
    console.log(index);
    imagem.classList.add('img-pers');
    // Calcula a posição para cada imagem 
    const left = index * 50 + 'px'; 
    imagem.style.position = 'absolute';
    imagem.style.left = left;
    imagem.style.top = 35 + 'px';
   });

   moverSelecionado(imagens);
}










