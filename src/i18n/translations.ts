export type Locale = keyof typeof translations;
export const translations = {
  es: {
    nav_contact: "Contacto",
    download: "Descargar ahora",

    hero_badge: "100% Local · Sin nube · Privado",
    hero_title_1: "Tu app para una biblioteca inteligente.",
    hero_title_2: "Privada.",
    hero_title_3: "Privada y controlada por voz.",

    hero_desc:
      "Lee, escucha, organiza y controla tus libros sin depender de servidores externos. La potencia de la IA, en tu dispositivo.",

    hero_chip_1: "Biblioteca Inteligente",
    hero_chip_2: "Lectura por Voz",
    hero_chip_3: "Traducción Global",

    privacy_kicker: "Privacidad Real",
    privacy_title: "Tus libros son tuyos.",
    privacy_title_2: "De verdad.",
    privacy_desc:
      "ReadMeBook funciona completamente en local. Tus libros nunca dependen de servidores externos.",

    feature_local_title: "Biblioteca Local",
    feature_local_desc: "Archivos cifrados en tu dispositivo.",
    feature_backup_title: "Backup Manual",
    feature_backup_desc: "Exporta y restaura tu biblioteca con un click.",
    feature_offline_title: "Sin Dependencias",
    feature_offline_desc: "Funciona perfectamente offline.",

    experience_kicker: "Experiencia",
    experience_title: "Diseña tu propia atmósfera.",

    experience_music_title: "Atmósfera Sonora",
    experience_music_desc: "Escucha música ambiental mientras lees.",
    experience_speed_title: "Ritmo Personalizado",
    experience_speed_desc: "Ajusta la velocidad a tu ritmo mental.",
    experience_search_title: "Contexto Inteligente",
    experience_search_desc:
      "Busca referencias cruzadas; personajes, ciudades o significados en el resto del libro al instante.",
    experience_translate_title: "Traducción",
    experience_translate_desc:
      "Consulta significados y traducciones sin salir de la página.",

    audience_lang_title: "Estudiantes de idiomas",
    audience_access_title: "Lectura Inclusiva",
    audience_study_title: "Estudio y Oposiciones",
    audience_life_title: "Lectura Proactiva",
    assisted_reading: "Lectura asistida",

    voice_kicker: "La Perla",
    voice_title: "Interactúa con tu libro usando tu voz.",

    footer_copy: "© 2026 ReadMeBook. Tu privacidad es lo primero.",

    voiceCommands: [
    "Acelera",
    "Siguiente párrafo",
    "Deletrea...",
    "Repite",
    "Pausa",
    "Más despacio",
    "Inicio del libro",
    "Continúa",
    ],

    audience_lang_items: [
    "Escucha la pronunciación exacta de cada palabra del idioma del libro.",
    "Sincronía visual: mira cómo se escriben las palabras mientras las oyes.",
    "Traducción contextual inmediata para ampliar vocabulario."
    ],

    audience_access_items: [
    "Apoyo bimodal: lee y escucha al mismo tiempo para mejorar la comprensión.",
    "Sincronía audio-visual diseñada para superar barreras de lectura y comprensión.",
    "Navegación manos libres total mediante comandos de voz."
    ],

    audience_study_items: [
    "Ideal para preparar exámenes analizando textos densos sin distracciones.",
    "Localiza conceptos clave y referencias cruzadas en segundos.",
    "Analiza manuscritos y documentos técnicos con un enfoque profundo."
    ],

    audience_life_items: [
    "Transforma cualquier texto, imagen, dictado por voz en un audiolibro interactivo.",
    "Control total por voz mientras cocinas, haces deporte o descansas.",
    "Sincronización mental: absorbe contenido mientras tus manos están ocupadas."
    ],

    contact_title: "Contacto",
    contact_subtitle: "Escríbenos y te responderemos lo antes posible.",

    contact_name_placeholder: "Nombre",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Mensaje",

    contact_button_send: "Enviar mensaje",
    contact_button_sending: "Enviando...",
    contact_button_cancel: "Cancelar y volver",

    contact_success: "¡Mensaje enviado con éxito! ✔",
    contact_error: "Hubo un error. Por favor, inténtalo de nuevo.",

    download_back: "Volver atrás",

    download_title: "Únete a la Beta",
    download_subtitle: "Estás a un paso de probar el futuro de la lectura inteligente.",

    download_warning_title: "Nota para Android",
    download_warning_text:
    "Al descargar el APK, verás un aviso de \"archivo dañino\". Selecciona \"Descargar de todos modos\". Es un paso estándar para apps fuera de la Play Store.",

    download_feature_privacy_title: "Privacidad Total",
    download_feature_privacy_desc: "Procesamiento local, sin datos en la nube.",

    download_feature_beta_title: "Versión en desarrollo",
    download_feature_beta_desc:
    "Tu feedback es vital para mejorar la experiencia.",

    download_button: "Descargar APK (Android)",
    download_preparing: "Preparando descarga...",
    download_cancel: "Cancelar y volver",
    download_returning: "Volviendo...",

    download_footer_note: "Versión Beta 0.1 · Requiere Android 10 o superior",

    download_feedback_text: "¿Tienes una idea o sugerencia?",
    download_feedback_link: "Cuéntanoslo en la página de contacto →",

    hero_image_library: "/images/library.png",
    hero_image_reading: "/images/reading.png",
    reading_features: "/images/reading_features.png",

    books_badge: "Ecosistema ReadMeBook",
    books_title: "Descarga eBooks gratis y",
    books_title_color: "100% legales",
    books_subtitle: "¿No tienes ningún archivo a mano para probar la app? Te recomendamos las mejores plataformas limpias, seguras y sin anuncios para nutrir tu biblioteca local en tu móvil.",
    books_visit_button: "Visitar sitio oficial",
    books_gutenberg_title: "Project Gutenberg",
    books_gutenberg_desc: "La madre de todas las bibliotecas de dominio público. Más de 70.000 libros libres de derechos, ideal para descargar grandes clásicos universales en formato ePub.",
    books_elejandria_title: "Elejandría",
    books_elejandria_desc: "Un sitio web en castellano con una interfaz hermosa y minimalista. Ofrecen grandes clásicos de la literatura optimizados perfectamente para lectura móvil.",
    books_bdh_title: "BNE Digital",
    books_bdh_desc: "La plataforma oficial de acceso al patrimonio digital de la Biblioteca Nacional de España. Contiene miles de obras históricas, manuscritos y joyas literarias digitalizadas.",
    books_feedbooks_title: "Feedbooks (Dominio Público)",
    books_feedbooks_desc: "Una excelente biblioteca virtual con un catálogo muy amplio de libros gratuitos clasificados con portadas de alta calidad y listos para importar."

      },

  en: {
    nav_contact: "Contact",
    download: "Download now",

    hero_badge: "100% Local · No cloud · Private",
    hero_title_1: "Your app for a smart library.",
    hero_title_2: "Private.",
    hero_title_3: "Private and voice-controlled.",

    hero_desc:
      "Read, listen, organize and control your books without external servers. AI power, on your device.",

    hero_chip_1: "Smart Library",
    hero_chip_2: "Voice Reading",
    hero_chip_3: "Global Translation",

    privacy_kicker: "Real Privacy",
    privacy_title: "Your books are yours.",
    privacy_title_2: "For real.",
    privacy_desc:
      "ReadMeBook works fully offline. Your books never depend on external servers.",

    feature_local_title: "Local Library",
    feature_local_desc: "Encrypted files on your device.",
    feature_backup_title: "Manual Backup",
    feature_backup_desc: "Export and restore your library with one click.",
    feature_offline_title: "No Dependencies",
    feature_offline_desc: "Works perfectly offline.",

    experience_kicker: "Experience",
    experience_title: "Design your own atmosphere.",

    experience_music_title: "Sound Atmosphere",
    experience_music_desc: "Listen to ambient music while reading.",
    experience_speed_title: "Personalized Pace",
    experience_speed_desc: "Adjust speed to your mental rhythm.",
    experience_search_title: "Smart Context",
    experience_search_desc:
      "Find cross-references, characters, cities or meanings instantly.",
    experience_translate_title: "Translation",
    experience_translate_desc:
      "Check meanings and translations without leaving the page.",

    audience_lang_title: "Language Students",
    audience_access_title: "Inclusive Reading",
    audience_study_title: "Study & Exams",
    audience_life_title: "Proactive Reading",
    assisted_reading: "Assisted reading",

    voice_kicker: "The Pearl",
    voice_title: "Interact with your book using your voice.",

    footer_copy: "© 2026 ReadMeBook. Your privacy comes first.",

    voiceCommands: [
    "Speed up",
    "Next paragraph",
    "Spell it",
    "Repeat",
    "Pause",
    "Slower",
    "Beginning of the book",
    "Continue",
    ],

    audience_lang_items: [
    "Hear the exact pronunciation of every word in the book's language.",
    "Visual synchronization: see words while listening to them.",
    "Instant contextual translation to expand vocabulary."
    ],

    audience_access_items: [
    "Bimodal support: read and listen simultaneously to improve comprehension.",
    "Audio-visual synchronization designed to overcome reading barriers.",
    "Completely hands-free navigation through voice commands."
    ],

    audience_study_items: [
    "Perfect for studying dense material without distractions.",
    "Find key concepts and cross references in seconds.",
    "Analyze manuscripts and technical documents deeply."
    ],

    audience_life_items: [
    "Turn any text, image, or voice dictation into an interactive audiobook.",
    "Full voice control while cooking, exercising, or resting.",
    "Absorb knowledge while your hands stay busy."
    ],

    contact_title: "Contact",
    contact_subtitle: "Write to us and we’ll get back to you as soon as possible.",

    contact_name_placeholder: "Name",
    contact_email_placeholder: "Email",
    contact_message_placeholder: "Message",

    contact_button_send: "Send message",
    contact_button_sending: "Sending...",
    contact_button_cancel: "Cancel and go back",

    contact_success: "Message sent successfully! ✔",
    contact_error: "There was an error. Please try again.",

    download_back: "Go back",

    download_title: "Join the Beta",
    download_subtitle: "You are one step away from trying the future of smart reading.",

    download_warning_title: "Android note",
    download_warning_text:
    "When downloading the APK, you will see a \"harmful file\" warning. Select \"Download anyway\". This is standard for apps outside the Play Store.",

    download_feature_privacy_title: "Full Privacy",
    download_feature_privacy_desc: "Local processing, no cloud data.",

    download_feature_beta_title: "Work in progress",
    download_feature_beta_desc:
    "Your feedback is essential to improve the experience.",

    download_button: "Download APK (Android)",
    download_preparing: "Preparing download...",
    download_cancel: "Cancel and go back",
    download_returning: "Going back...",

    download_footer_note: "Beta 0.1 · Requires Android 10 or higher",

    download_feedback_text: "Got an idea or suggestion?",
    download_feedback_link: "Tell us on the contact page →",

    hero_image_library: "/images/library-en.png",
    hero_image_reading: "/images/reading-en.png",
    reading_features: "/images/reading_features-en.png",

    books_badge: "ReadMeBook Ecosystem",
    books_title: "Download free and",
    books_title_color: "100% legal eBooks",
    books_subtitle: "Don't have any files on your device to test the app? We recommend the best clean, secure, and ad-free platforms to stock your local library on your phone.",
    books_visit_button: "Visit official site",
    books_gutenberg_title: "Project Gutenberg",
    books_gutenberg_desc: "The mother of all public domain libraries. Over 70,000 copyright-free books, perfect for downloading world classics in ePub format.",
    books_elejandria_title: "Elejandría",
    books_elejandria_desc: "A Spanish-based website with a beautiful, minimalist interface. It offers great classical literature optimized perfectly for mobile reading.",
    books_bdh_title: "BNE Digital",
    books_bdh_desc: "The official digital heritage platform of the National Library of Spain. It contains thousands of digitized historical masterworks, manuscripts, and literary gems.",
    books_feedbooks_title: "Feedbooks (Public Domain)",
    books_feedbooks_desc: "An excellent virtual library with a wide catalog of free public domain books, beautifully cataloged with high-quality covers and ready to import."
  }
}