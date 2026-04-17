const pageConfigs = {
  "baja-voluntaria": {
    title: "Generador de carta de baja voluntaria",
    description: "Crea una carta de baja voluntaria en España con texto formal, lista para copiar o imprimir en PDF.",
    summary: ["Sin registro", "Formato claro", "Pensado para España"],
    fields: [
      ["fullName", "Nombre y apellidos"],
      ["address", "Dirección completa", "full"],
      ["company", "Empresa"],
      ["companyAddress", "Dirección de la empresa", "full"],
      ["city", "Ciudad"],
      ["date", "Fecha de la carta"],
      ["jobTitle", "Puesto"],
      ["startDate", "Fecha de inicio del contrato"],
      ["lastDay", "Último día de trabajo"],
      ["noticeDays", "Días de preaviso"],
      ["deliveryMethod", "Método de entrega"],
      ["reason", "Motivo opcional", "full", "textarea"]
    ],
    checklist: [
      "Confirma los días de preaviso en tu convenio o contrato.",
      "Entrega la carta con prueba de recepción si necesitas constancia.",
      "Pide finiquito, certificado de empresa y demás documentación."
    ],
    faq: [
      ["¿Es obligatorio indicar un motivo?", "No siempre. En una baja voluntaria normal basta con comunicar de forma clara tu decisión."],
      ["¿Puedo entregarla en mano?", "Sí, pero conviene guardar prueba de entrega, por ejemplo una copia firmada o acuse de recibo."],
      ["¿Sirve para cualquier convenio?", "Es una base orientativa. Debes revisar plazos y requisitos concretos de tu situación."]
    ],
    generate(data) {
      return [
        `${data.fullName || "[Nombre y apellidos]"}`,
        `${data.address || "[Dirección completa]"}`,
        "",
        `A la atención de ${data.company || "[Empresa]"}`,
        `${data.companyAddress || "[Dirección de la empresa]"}`,
        "",
        `${data.city || "[Ciudad]"}, ${data.date || "[Fecha]"}`,
        "",
        "Asunto: Comunicación de baja voluntaria",
        "",
        "Muy señores míos:",
        "",
        `Por medio de la presente comunico mi decisión de causar baja voluntaria en la empresa ${data.company || "[Empresa]"}, donde presto servicios como ${data.jobTitle || "[Puesto]"} desde ${data.startDate || "[Fecha de inicio]"}.`,
        "",
        `Mi último día de trabajo será el ${data.lastDay || "[Último día]"}, respetando un preaviso de ${data.noticeDays || "[Días]"} días.`,
        data.reason ? "" : "",
        data.reason ? `Dejo constancia adicional de lo siguiente: ${data.reason}.` : "",
        "",
        `Solicito que se me facilite la documentación correspondiente al finalizar la relación laboral. Esta comunicación se entrega mediante ${data.deliveryMethod || "[Método de entrega]"}.`,
        "",
        "Atentamente,",
        "",
        `${data.fullName || "[Firma]"}`
      ].filter(Boolean).join("\n");
    }
  },
  "baja-gimnasio": {
    title: "Generador de baja de gimnasio",
    description: "Genera un texto para solicitar la baja de una membresía y pedir el cese de futuros cargos.",
    summary: ["Consumo", "Copia o imprime", "Rápido de rellenar"],
    fields: [
      ["fullName", "Nombre y apellidos"],
      ["dni", "DNI/NIE"],
      ["address", "Dirección completa", "full"],
      ["gymName", "Nombre del gimnasio"],
      ["gymAddress", "Dirección del gimnasio", "full"],
      ["membershipId", "Número de socio"],
      ["date", "Fecha de la carta"],
      ["effectiveDate", "Fecha efectiva de baja"],
      ["reason", "Motivo opcional", "full", "textarea"]
    ],
    checklist: [
      "Revisa si tu contrato exige preaviso o permanencia.",
      "Guarda el justificante de entrega o envío.",
      "Solicita confirmación escrita de la baja."
    ],
    faq: [
      ["¿Hace falta indicar el motivo?", "No siempre, aunque puede ayudar si pides una excepción por lesión, traslado u otra causa."],
      ["¿Puedo pedir que dejen de cobrarme?", "Sí, conviene incluirlo expresamente en la carta."],
      ["¿Sirve para cualquier gimnasio?", "Como base sí, pero debes adaptar referencias de contrato y plazos si tu centro tiene condiciones específicas."]
    ],
    generate(data) {
      return [
        `${data.fullName || "[Nombre y apellidos]"}`,
        `${data.address || "[Dirección completa]"}`,
        `DNI/NIE: ${data.dni || "[Documento]"}`,
        "",
        `A la atención de ${data.gymName || "[Gimnasio]"}`,
        `${data.gymAddress || "[Dirección del gimnasio]"}`,
        "",
        `${data.date || "[Fecha]"}`,
        "",
        "Asunto: Solicitud de baja de membresía",
        "",
        "Muy señores míos:",
        "",
        `Solicito la baja de mi membresía con número ${data.membershipId || "[Número de socio]"} en ${data.gymName || "[Gimnasio]"}, con efectos desde ${data.effectiveDate || "[Fecha efectiva]"}.`,
        data.reason ? "" : "",
        data.reason ? `Motivo indicado: ${data.reason}.` : "",
        "",
        "Les ruego cesen futuros cargos asociados a esta membresía y me confirmen por escrito la tramitación de la baja.",
        "",
        "Atentamente,",
        "",
        `${data.fullName || "[Firma]"}`
      ].filter(Boolean).join("\n");
    }
  },
  "desistimiento-online": {
    title: "Generador de desistimiento de compra online",
    description: "Texto base para ejercer el derecho de desistimiento en compras online dentro del plazo aplicable.",
    summary: ["Ecommerce", "Base imprimible", "Enfoque práctico"],
    fields: [
      ["fullName", "Nombre y apellidos"],
      ["address", "Dirección completa", "full"],
      ["email", "Correo electrónico"],
      ["storeName", "Empresa o tienda"],
      ["storeAddress", "Dirección de la empresa", "full"],
      ["orderNumber", "Número de pedido"],
      ["product", "Producto o servicio"],
      ["purchaseDate", "Fecha de compra"],
      ["deliveryDate", "Fecha de recepción"],
      ["date", "Fecha de la carta"]
    ],
    checklist: [
      "Comprueba si estás dentro del plazo legal aplicable.",
      "Guarda número de pedido y prueba de envío.",
      "Pide el reembolso por el mismo medio de pago, salvo acuerdo distinto."
    ],
    faq: [
      ["¿Siempre tengo 14 días?", "En muchos casos sí, pero hay excepciones legales según el tipo de bien o servicio."],
      ["¿Vale por email?", "Puede valer según el canal del vendedor, pero conviene guardar una prueba clara del envío."],
      ["¿Sirve para cualquier comercio?", "Es un modelo base orientativo; debes revisar las condiciones concretas de la compra."]
    ],
    generate(data) {
      return [
        `${data.fullName || "[Nombre y apellidos]"}`,
        `${data.address || "[Dirección completa]"}`,
        `Email: ${data.email || "[Correo]"}`,
        "",
        `A la atención de ${data.storeName || "[Empresa]"}`,
        `${data.storeAddress || "[Dirección de la empresa]"}`,
        "",
        `${data.date || "[Fecha]"}`,
        "",
        "Asunto: Ejercicio del derecho de desistimiento",
        "",
        "Por la presente les comunico mi voluntad de desistir del contrato de compraventa relativo al siguiente pedido:",
        "",
        `Pedido: ${data.orderNumber || "[Número de pedido]"}`,
        `Producto o servicio: ${data.product || "[Producto]"}`,
        `Fecha de compra: ${data.purchaseDate || "[Fecha de compra]"}`,
        `Fecha de recepción: ${data.deliveryDate || "[Fecha de recepción]"}`,
        "",
        "Solicito el reembolso correspondiente por el mismo medio de pago utilizado, de acuerdo con la normativa aplicable.",
        "",
        "Atentamente,",
        "",
        `${data.fullName || "[Firma]"}`
      ].join("\n");
    }
  },
  "reclamacion-operadora": {
    title: "Generador de reclamación a operadora",
    description: "Modelo base para reclamar facturación, permanencia, incidencia técnica o atención al cliente.",
    summary: ["Telecom", "Alta intención", "Texto formal"],
    fields: [
      ["fullName", "Nombre y apellidos"],
      ["dni", "DNI/NIE"],
      ["address", "Dirección completa", "full"],
      ["company", "Operadora"],
      ["customerNumber", "Número de cliente"],
      ["phoneLine", "Línea afectada"],
      ["date", "Fecha de la carta"],
      ["issue", "Descripción del problema", "full", "textarea"],
      ["requestedResolution", "Solución solicitada", "full", "textarea"]
    ],
    checklist: [
      "Incluye referencias de cliente, línea o contrato.",
      "Describe hechos y fechas con precisión.",
      "Pide una solución concreta y un plazo de respuesta."
    ],
    faq: [
      ["¿Qué tipo de reclamación sirve aquí?", "Facturación, permanencia, averías, cobros indebidos o problemas de atención, entre otros."],
      ["¿Conviene adjuntar pruebas?", "Sí, siempre que sea posible: facturas, capturas, incidencias o comunicaciones previas."],
      ["¿Es una reclamación legal cerrada?", "No, es un punto de partida útil para una reclamación formal."]
    ],
    generate(data) {
      return [
        `${data.fullName || "[Nombre y apellidos]"}`,
        `${data.address || "[Dirección completa]"}`,
        `DNI/NIE: ${data.dni || "[Documento]"}`,
        "",
        `A la atención de ${data.company || "[Operadora]"}`,
        "",
        `${data.date || "[Fecha]"}`,
        "",
        "Asunto: Reclamación formal",
        "",
        `Soy cliente con número ${data.customerNumber || "[Número de cliente]"} y línea ${data.phoneLine || "[Línea afectada]"}.`,
        "",
        `Por medio de la presente formulo reclamación por la siguiente incidencia: ${data.issue || "[Descripción del problema]"}.`,
        "",
        `Solicito expresamente la siguiente solución: ${data.requestedResolution || "[Solución solicitada]"}.`,
        "",
        "Ruego confirmación por escrito y respuesta dentro del plazo legal o contractual aplicable.",
        "",
        "Atentamente,",
        "",
        `${data.fullName || "[Firma]"}`
      ].join("\n");
    }
  },
  "devolucion-cargo-sepa": {
    title: "Generador de devolución de cargo SEPA",
    description: "Solicitud para pedir al banco la devolución de un recibo o cargo domiciliado no deseado.",
    summary: ["Banca", "Texto simple", "Preparado para imprimir"],
    fields: [
      ["fullName", "Nombre y apellidos"],
      ["address", "Dirección completa", "full"],
      ["bankName", "Banco"],
      ["accountIban", "IBAN parcial"],
      ["merchant", "Empresa que emitió el cargo"],
      ["amount", "Importe"],
      ["chargeDate", "Fecha del cargo"],
      ["date", "Fecha de la solicitud"],
      ["reason", "Motivo", "full", "textarea"]
    ],
    checklist: [
      "Verifica el plazo de devolución aplicable a tu caso.",
      "Incluye importe, fecha e identificador del cargo si lo tienes.",
      "Guarda constancia de la solicitud al banco."
    ],
    faq: [
      ["¿Es para cualquier recibo?", "Depende de la autorización y del plazo. Es una base para iniciar la solicitud."],
      ["¿Debo hablar también con la empresa?", "A menudo conviene hacerlo, especialmente si buscas evitar nuevos cargos."],
      ["¿Sustituye el asesoramiento bancario o legal?", "No. Es un texto orientativo para casos frecuentes."]
    ],
    generate(data) {
      return [
        `${data.fullName || "[Nombre y apellidos]"}`,
        `${data.address || "[Dirección completa]"}`,
        "",
        `A la atención de ${data.bankName || "[Banco]"}`,
        "",
        `${data.date || "[Fecha]"}`,
        "",
        "Asunto: Solicitud de devolución de cargo SEPA",
        "",
        `Solicito la devolución del cargo domiciliado efectuado en la cuenta ${data.accountIban || "[IBAN parcial]"}, correspondiente a ${data.merchant || "[Empresa]"}, por importe de ${data.amount || "[Importe]"} y con fecha ${data.chargeDate || "[Fecha del cargo]"}.`,
        "",
        `Motivo de la solicitud: ${data.reason || "[Motivo]"}.`,
        "",
        "Les ruego tramiten esta solicitud y me confirmen por escrito el resultado.",
        "",
        "Atentamente,",
        "",
        `${data.fullName || "[Firma]"}`
      ].join("\n");
    }
  }
};

function renderToolPage(pageId) {
  const config = pageConfigs[pageId];
  if (!config) {
    return;
  }

  const title = document.getElementById("tool-title");
  const description = document.getElementById("tool-description");
  const summary = document.getElementById("tool-summary");
  const form = document.getElementById("letter-form");
  const preview = document.getElementById("preview-document");
  const checklist = document.getElementById("checklist");
  const faq = document.getElementById("faq-list");
  const pageMetaTitle = document.getElementById("page-meta-title");
  const pageMetaDesc = document.getElementById("page-meta-description");

  if (pageMetaTitle) {
    pageMetaTitle.textContent = config.title;
  }
  if (pageMetaDesc) {
    pageMetaDesc.textContent = config.description;
  }

  title.textContent = config.title;
  description.textContent = config.description;
  summary.innerHTML = config.summary.map((item) => `<span class="mini-badge">${item}</span>`).join("");

  form.innerHTML = "";
  config.fields.forEach(([key, label, span, kind]) => {
    const wrapper = document.createElement("div");
    wrapper.className = span === "full" ? "field full" : "field";
    const labelEl = document.createElement("label");
    labelEl.setAttribute("for", key);
    labelEl.textContent = label;
    const input = kind === "textarea" ? document.createElement("textarea") : document.createElement("input");
    input.id = key;
    input.name = key;
    input.placeholder = label;
    wrapper.append(labelEl, input);
    form.appendChild(wrapper);
  });

  checklist.innerHTML = config.checklist.map((item) => `<li>${item}</li>`).join("");
  faq.innerHTML = config.faq.map(([q, a]) => `
    <article class="faq-item">
      <h3>${q}</h3>
      <p>${a}</p>
    </article>
  `).join("");

  const generate = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    preview.textContent = config.generate(data);
  };

  document.getElementById("generate-btn").addEventListener("click", generate);
  document.getElementById("copy-btn").addEventListener("click", async () => {
    await navigator.clipboard.writeText(preview.textContent);
    const button = document.getElementById("copy-btn");
    const original = button.textContent;
    button.textContent = "Copiado";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
  document.getElementById("print-btn").addEventListener("click", () => window.print());
  form.addEventListener("input", generate);
  generate();
}
