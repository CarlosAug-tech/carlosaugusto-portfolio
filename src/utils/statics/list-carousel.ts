import { v4 } from "uuid";
import PolygonImg01 from "../../assets/images/polygon_background_01.png";
import PolygonImg02 from "../../assets/images/polygon_background_02.png";
import PolygonImg03 from "../../assets/images/polygon_background_03.png";
import PolygonImg04 from "../../assets/images/polygon_background_04.png";

export type ImagePropsType = {
    src: string;
    alt?: string;
};

export type CarouselItemType = {
    id: string;
    title: string;
    description: string;
    link: string;
    image: ImagePropsType;
};

const carouselData: CarouselItemType[] = [
    {
        id: v4(),
        title: "AuthNotify",
        description:
            "O projeto AuthNotify é uma aplicação para controle de sessões de usuários, podendo cadastrar e autenticar-se, enviando uma notificação automática ao fazer a sessão na primeira vez.",
        link: "https://github.com/CarlosAug-tech/authentication-web",
        image: {
            src: PolygonImg01,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "ManagerProduct",
        description:
            "O projeto ManagerProduct é uma aplicação para controle de produto, no qual o usuário poderá fazer cadastro e autenticar-se na aplicação, assim sendo redirecionado automaticamente ao Dashboard no qual possui as funcionalidades de Cadastro, Edição e Remoção do produto. Além de ter uma área para editar o perfil, podendo adicionar um avatar, trocando nome, senha, email e fazendo logout da aplicação. Este projeto tem objetivo de praticar e estudar. ",
        link: "https://github.com/CarlosAug-tech/managerproduct-server",
        image: {
            src: PolygonImg02,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "VídeoUpload",
        description:
            "O projeto VídeoUpload é uma aplicação para uploads de vídeos, no qual consiste em salvar seus vídeos, comentar nos vídeos disponíveis na aplicação, podendo também fazer a troca de temas entre Dark e Light, com sistema de login e cadastro, possuindo restrição para usuários que possui conta em relação aos que não possuem, como por exemplo, o upload de vídeo e comentar nos vídeos. O sistema tem um método para notificação para usuários novos e para quando o vídeo é comentado, chegará uma notificação para o dono, informando que algum usuário teria comentado em seu vídeo!!",
        link: "https://github.com/CarlosAug-tech/videoupload-server",
        image: {
            src: PolygonImg03,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "StepWizard Component",
        description:
            "Este componente é um facilitador de criação de uma linha de tempo para seus componentes que serão mostrado em telas, ao clicar no que se deseja ser exibido.",
        link: "https://github.com/CarlosAug-tech/step-wizard-component",
        image: {
            src: PolygonImg04,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Form Validation",
        description:
            "O projeto FormValidation é uma aplicação que controla um formulário, acusando e informando o erro ou sucesso dos formulário com mensagens Toast e Alertas.",
        link: "https://github.com/CarlosAug-tech/formvalidation-web",
        image: {
            src: PolygonImg02,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "CreditCard",
        description:
            "O projeto CreditCard é uma aplicação que foi feita como base para estudo que simula um carrinho de compra de produtos, além de possuir toda etapa de compra até chegar ao Checkout final para finalizar a compra. O sistema também tem a parte de autenticação e criação de contas, podendo diferenciar de contas de administradores para usuários normais, como por exemplo, o Dashboard que habilita funções exclusivas ao usuário administrador, sendo uma delas a de adicionar produtos.",
        link: "https://github.com/CarlosAug-tech/creditcard-example-web",
        image: {
            src: PolygonImg03,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "DarkTheme",
        description:
            "O projeto DarkTheme é uma simples aplicação feita em React que permite o usuário fazer a troca de temas entre Light e Dark.",
        link: "https://github.com/CarlosAug-tech/dark-theme-reactjs",
        image: {
            src: PolygonImg01,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Deezer Project",
        description:
            "O projeto Deezer é uma simples aplicação que foi feita para estudo e prática ao consumo de API's. Foi utilizado a API do Deezer que está disponível em seu sua documentação.",
        link: "https://github.com/CarlosAug-tech/deezer-desafio",
        image: {
            src: PolygonImg04,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Redux with TS",
        description:
            "Está é uma simples aplicação que foi feita para estudo na utilização do Redux com o Typescript.",
        link: "https://github.com/CarlosAug-tech/redux-with-typescript",
        image: {
            src: PolygonImg03,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Mock's and Stub's in NodeTS",
        description:
            "Está é uma aplicação feita para estudo em Node com Typescript com o objetivo de aprender a utilizar os conceitos de testes e poo (S.O.L.I.D, TDD, Mock's e Stub's).",
        link: "https://github.com/CarlosAug-tech/learning_mock_and_stub_jest_test",
        image: {
            src: PolygonImg01,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Champions Search",
        description:
            "Está é uma aplicação feita em React, no qual, o usuário pode favoritar, filtrar pela classe e também buscar pelo nome do campeão do jogo League of Legends.",
        link: "https://github.com/CarlosAug-tech/champions-search",
        image: {
            src: PolygonImg04,
            alt: "polygon_image",
        },
    },
    {
        id: v4(),
        title: "Champions Search Mobile",
        description:
            "Está é uma aplicação feita em React Native, no qual, o usuário pode favoritar, filtrar pela classe e também buscar pelo nome do campeão do jogo League of Legends.",
        link: "https://github.com/CarlosAug-tech/champion-search-react-native",
        image: {
            src: PolygonImg02,
            alt: "polygon_image",
        },
    },
];

export { carouselData };
