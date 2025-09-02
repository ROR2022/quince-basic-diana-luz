//import { title } from "process"

// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Diana Luz",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince/quinceVestidoVerde3.jpeg"
  },
  
  event: {
    celebrant: "Diana Luz Quirino Ortuño",
    parents: {
      father: "Kendor E. Quirino Tolentino",
      mother: "Ciria Irene Ortuño Alamilla"
    },
    date: {
      full: "Sábado 8 de Noviembre 2025",
      day: "Sábado",
      date: "8 de Noviembre 2025"
    },
    ceremony: {
      time: "18:00 hrs.",
      venue: "Parroquia María Auxiliadora",
      address: "Av. de los Doctores s/n, Laredo, 93260 Poza Rica de Hidalgo, Ver.",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/PJcvFM6idviWeysM6"
    },
    party: {
      time: "19:00 hrs.",
      venue: "Salón Regio",
      address: "C. 12 237 B, Cazones, 93230 Poza Rica de Hidalgo, Ver.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/XSgNEcf5Kbj7Pxym8"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "November 8, 2025 18:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "🏦",
        title: "Transferencia",
        description: "BBVA Bancomer",
        details: "Tarjeta: 4152 3142 6377 0672\nA nombre de: Ciria Irene Ortuño Alamilla"
      },
      {
        icon: "🎁",
        title: "Regalo Sorpresa",
        description: "¡Un detalle especial para mi fiesta!",
        details: "Tu presencia es mi mejor regalo, ¡gracias!"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 