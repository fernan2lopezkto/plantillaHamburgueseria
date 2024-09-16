// src/data/texts.js

const texts = {
  // Textos del componente Home.jsx
  welcomeMessage: "Bienvenidos a",
  title: "The Burger Joint",
  description: "Un lugar donde cada hamburguesa cuenta una historia. En The Burger Joint, creemos que una buena hamburguesa puede transformar cualquier día en uno mejor. Usamos solo ingredientes frescos y de alta calidad para crear una experiencia gastronómica que une a la gente. Ven y descubre por qué somos el lugar perfecto para disfrutar de una hamburguesa increíble.",

  // Textos del componente Especialidad.jsx
  especialidadesTitle: "Las Favoritas",
  especialidadesDescription: "Nuestros clientes no pueden resistirse a nuestras hamburguesas estrella, como la Clásica Doble, la BBQ Especial y la Veggie Deluxe.",

  especialidadesList: [
    {
      name: "Clásica Doble",
      description: "Nuestra Clásica Doble es una combinación perfecta de sabor y simplicidad. Dos jugosas carnes a la parrilla, queso cheddar derretido, lechuga fresca, tomate y nuestra salsa secreta, todo en un suave pan brioche.",
      precio: "$950",
      img: "/plantillaHamburgueseria/esp/doble.png"
    },
    {
      name: "BBQ Especial",
      description: "La BBQ Especial es un sueño hecho realidad para los amantes de la barbacoa. Una carne jugosa, tocino crujiente, queso cheddar, cebolla caramelizada y salsa BBQ ahumada, servida en un pan brioche tostado.",
      precio: "$1100",
      img: "/plantillaHamburgueseria/esp/BBQEspecial.png"
    },
    {
      name: "Veggie Deluxe",
      description: "Nuestra Veggie Deluxe ofrece una deliciosa opción vegetariana con un patty de garbanzos, espinaca y zanahoria, acompañada de aguacate fresco, tomate, lechuga y una mayonesa vegana en pan integral.",
      precio: "$800",
      img: "/plantillaHamburgueseria/esp/VeggieDeluxe.png"
    }
  ],

  // Textos del componente PreguntasFrecuentes.jsx (se mantienen igual)
  preguntasFrecuentesTitle: "Preguntas Frecuentes",
  preguntasFrecuentesList: [
    {
      id: 1,
      pregunta: "¿Ofrecen hamburguesas personalizadas?",
      respuesta: "Sí, puedes personalizar tu hamburguesa eligiendo los ingredientes que prefieras. Ya sea que desees agregar más queso, tocino o probar con diferentes tipos de pan, estamos aquí para hacer tu hamburguesa perfecta."
    },
    {
      id: 3,
      pregunta: "¿Cómo puedo hacer un pedido?",
      respuesta: "Puedes hacer tu pedido directamente en nuestra tienda, a través de nuestra página web, o llamando al [Número de Teléfono]. También ofrecemos la opción de pedir a través de nuestras redes sociales."
    },
    {
      id: 4,
      pregunta: "¿Cuánto tiempo antes debo hacer mi pedido?",
      respuesta: "Para pedidos grandes o especiales, te recomendamos hacer tu pedido con al menos 24 horas de anticipación. Para pedidos regulares, puedes pedir en cualquier momento dentro de nuestro horario de apertura."
    },
    {
      id: 5,
      pregunta: "¿Tienen servicio de delivery?",
      respuesta: "Sí, ofrecemos servicio de delivery a domicilio. Puedes solicitarlo al hacer tu pedido. El costo del delivery varía según la ubicación y se confirmará al momento del pedido."
    },
    {
      id: 6,
      pregunta: "¿Dónde están ubicados?",
      respuesta: "Estamos ubicados en [Dirección del Negocio]. Visítanos para disfrutar de nuestras hamburguesas frescas y sabrosas."
    },
  ],

  // Textos del componente About
  aboutTitle: "Sobre Nosotros",
  aboutp1: "En The Burger Joint, nuestra misión es simple: servir hamburguesas deliciosas que unan a la gente. Desde nuestros humildes comienzos, hemos creído que una buena hamburguesa puede transformar cualquier día en uno mejor. Usamos solo ingredientes frescos y de alta calidad, y nuestras carnes son siempre seleccionadas cuidadosamente para asegurar el mejor sabor en cada bocado.",
  aboutp2: "Nos enorgullece ofrecer una experiencia gastronómica única, con un menú variado que incluye desde hamburguesas clásicas hasta creaciones originales que desafían los límites de lo convencional. En The Burger Joint, creemos en el poder de lo simple, bien hecho, y en el valor de un ambiente acogedor donde todos son bienvenidos.",
  aboutp3: "Cada hamburguesa que preparamos es el resultado de la dedicación y el amor por lo que hacemos. Ya sea que vengas a disfrutar de una comida rápida con amigos, o a pasar un rato agradable con tu familia, queremos que The Burger Joint se sienta como tu segundo hogar.",
  aboutp4: "Nuestro equipo está siempre dispuesto a hacer de tu visita una experiencia memorable, ofreciéndote no solo comida deliciosa, sino también un servicio excepcional. ¡Ven y descubre por qué The Burger Joint es el lugar perfecto para disfrutar de una hamburguesa increíble!",

  // Textos del componente servicios (se mantienen igual)
  serviciosTitle: "Servicio de Catering para Eventos",
  serviciosList: [
    {
      name: "",
      p1: "En The Burger Joint, no solo nos especializamos en crear hamburguesas deliciosas, sino que también llevamos el arte culinario al siguiente nivel con nuestro servicio de catering para eventos...",
      // Los textos de servicios continúan sin cambios...
    }
  ]
};

export default texts;
