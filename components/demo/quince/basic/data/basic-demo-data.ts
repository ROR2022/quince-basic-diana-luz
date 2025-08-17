// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Diana Luz",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince/quince1.jpeg"
  },
  
  event: {
    celebrant: "Diana Luz Quirino Ortuño",
    parents: {
      father: "MIGUEL ÁNGEL GONZÁLEZ RIVERA",
      mother: "PATRICIA HERNÁNDEZ LÓPEZ"
    },
    date: {
      full: "Sábado 8 de Noviembre 2025",
      day: "Sábado",
      date: "8 de Noviembre 2025"
    },
    ceremony: {
      time: "12:00 hrs.",
      venue: "Parroquia María Auxiliadora",
      address: "Av. de los Doctores s/n, Laredo, 93260 Poza Rica de Hidalgo, Ver.",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/PJcvFM6idviWeysM6"
    },
    party: {
      time: "17:00 hrs.",
      venue: "Salón Regio",
      address: "C. 12 237 B, Cazones, 93230 Poza Rica de Hidalgo, Ver.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/XSgNEcf5Kbj7Pxym8"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "November 8, 2025 12:00:00",
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
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Patricia Hernández López"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: XV años Isabella\nCódigo: 51234567"
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