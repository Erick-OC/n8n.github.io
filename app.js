import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://n8n.srv918413.hstgr.cloud/webhook/ec899434-9e9d-4759-9742-940266ead5a2/chat',
  mode: 'window',   // "window" = burbuja flotante | "embedded" = dentro de un div
  loadPreviousSession: true,

  defaultLanguage: 'es',
  i18n: {
    es: {
      title: 'Asistente Virtual MCPPWEB 🤖',
      subtitle: "Experimento V1: Resuelve tus consultas las 24 horas del día, los 7 días de la semana.",
      footer: '',
      getStarted: 'Nueva conversación',
      inputPlaceholder: 'Escribe tu consulta...',
    },
  },

  initialMessages: [
    '¡Hola!👋 Soy tu asistente virtual del MCPPWEB. ¿En qué puedo ayudar?',
    'Accesos rápidos: [📘 Ver Manual de Usuario (PDF)](https://www.mef.gob.pe/contenidos/rec_publicos/documentos/MU_MCPP_Web.pdf) [📊 Tablas Maestras MCPP Web (Excel)](https://www.mef.gob.pe/contenidos/rec_publicos/documentos/tablas_maestras_MCPP_Web.xlsx) [❓ Preguntas Frecuentes](https://www.mef.gob.pe/contenidos/rec_publicos/documentos/MU_MCPP_Web.pdf)'
  ],

  enableStreaming: false
});
