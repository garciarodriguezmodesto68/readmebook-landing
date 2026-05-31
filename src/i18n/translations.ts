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
    experience_music_desc:
      "Crea un entorno inmersivo combinando música ambiental y lectura para mejorar la concentración y reducir distracciones externas.",

    experience_speed_title: "Ritmo Personalizado",
    experience_speed_desc:
      "Controla la velocidad de lectura con precisión para adaptarla a tu nivel de comprensión y al tipo de contenido que estás consumiendo.",

    experience_search_title: "Contexto Inteligente",
    experience_search_desc:
      "Accede instantáneamente a referencias cruzadas dentro del texto: personajes, lugares o conceptos explicados sin interrumpir tu lectura.",

    experience_translate_title: "Traducción",
    experience_translate_desc:
      "Consulta definiciones, traducciones y matices de cualquier palabra o frase directamente en la página, sin perder el hilo de la lectura.",

    audience_lang_title: "Estudiantes de idiomas",
    audience_access_title: "Lectura Inclusiva",
    audience_study_title: "Estudio y Oposiciones",
    audience_life_title: "Lectura Proactiva",

    assisted_reading: "Lectura asistida",

    // ✅ ASSISTED (ES)
    assisted_back: "Volver",
    assisted_title: "Lectura Asistida Inteligente",
    assisted_desc:
      "Potencia tu memoria y rompe barreras de accesibilidad. Controla tu libro con la voz y traduce textos en tiempo real.",

    assisted_voice_title: "Control Manos Libres por Voz",
    assisted_voice_desc:
      "Pasa de página, busca palabras o navega por el contenido usando comandos de voz locales, sin conexión y sin tocar el dispositivo. Diseñado para una lectura completamente manos libres.",

    assisted_tts_title: "Motor TTS para Opositores",
    assisted_tts_desc:
      "Escucha tus temas de estudio con una voz natural y ajusta la velocidad con precisión para mejorar la comprensión y la memorización activa del contenido.",

    assisted_translate_title: "Traducción en Tiempo Real",
    assisted_translate_desc:
      "Consulta traducciones, definiciones y matices de cualquier palabra o párrafo al instante, directamente sobre el texto, sin perder el contexto de lectura.",
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
      "Traducción contextual inmediata para ampliar vocabulario.",
    ],

    audience_access_items: [
      "Apoyo bimodal: lee y escucha al mismo tiempo para mejorar la comprensión.",
      "Sincronía audio-visual diseñada para superar barreras de lectura y comprensión.",
      "Navegación manos libres total mediante comandos de voz.",
    ],

    audience_study_items: [
      "Ideal para preparar exámenes analizando textos densos sin distracciones.",
      "Localiza conceptos clave y referencias cruzadas en segundos.",
      "Analiza manuscritos y documentos técnicos con un enfoque profundo.",
    ],

    audience_life_items: [
      "Transforma cualquier texto, imagen, dictado por voz en un audiolibro interactivo.",
      "Control total por voz mientras cocinas, haces deporte o descansas.",
      "Sincronización mental: absorbe contenido mientras tus manos están ocupadas.",
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
    download_subtitle:
      "Estás a un paso de probar el futuro de la lectura inteligente.",

    download_warning_title: "Nota para Android",
    download_warning_text:
      'Al descargar el APK, verás un aviso de "archivo dañino". Selecciona "Descargar de todos modos". Es un paso estándar para apps fuera de la Play Store.',

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
    local_storage: "/images/local_storage-en.png",
    privacy_local_control: "/images/privacy_local_control.png",
    pure_reading_experience: "/images/pure_reading_experience.png",
    assisted_inclusive_reading: "/images/assisted_inclusive_reading.png",
    book_creator_importer_01: "/images/book_creator_importer_01.png",
    book_creator_importer_02: "/images/book_creator_importer_02.png",
    book_creator_importer_03: "/images/book_creator_importer_03.png",

    books_badge: "Ecosistema ReadMeBook",
    books_title: "Descarga eBooks gratis y",
    books_title_color: "100% legales",
    books_subtitle:
      "¿No tienes ningún archivo a mano para probar la app? Te recomendamos las mejores plataformas limpias, seguras y sin anuncios para nutrir tu biblioteca local en tu móvil.",
    books_visit_button: "Visitar sitio oficial",
    books_gutenberg_title: "Project Gutenberg",
    books_gutenberg_desc:
      "La madre de todas las bibliotecas de dominio público. Más de 70.000 libros libres de derechos, ideal para descargar grandes clásicos universales en formato ePub.",
    books_elejandria_title: "Elejandría",
    books_elejandria_desc:
      "Un sitio web en castellano con una interfaz hermosa y minimalista. Ofrecen grandes clásicos de la literatura optimizados perfectamente para lectura móvil.",
    books_bdh_title: "BNE Digital",
    books_bdh_desc:
      "La plataforma oficial de acceso al patrimonio digital de la Biblioteca Nacional de España. Contiene miles de obras históricas y manuscritos digitalizados.",
    books_feedbooks_title: "Feedbooks (Dominio Público)",
    books_feedbooks_desc:
      "Una excelente biblioteca virtual con catálogo de libros gratuitos listos para importar.",
    
    book_creator_title: "Creador e Importador de Libros",
    book_creator_desc:
      "Convierte tu móvil en un creador de libros inteligente. Importa ePubs y TXT, escanea páginas con OCR y transforma cualquier texto en un libro digital listo para leer o escuchar.",

    book_creator_import_title: "Importación de ePub y TXT",
    book_creator_import_desc:
      "Importa archivos ePub y TXT de forma directa y organízalos en tu biblioteca personal sin depender de servicios externos ni nubes.",

    book_creator_ocr_title: "Escaneo OCR",
    book_creator_ocr_desc:
      "Escanea libros físicos o documentos con la cámara y conviértelos automáticamente en texto editable gracias al OCR integrado de alta precisión.",

    book_creator_ai_title: "IA para Creación de Libros",
    book_creator_ai_desc:
      "Crea y transforma libros con inteligencia artificial: resume textos, reorganiza contenido o genera nuevas versiones optimizadas para lectura.",
    book_creator_step_1_alt: "Libro vacío listo para importar contenido",
    book_creator_step_2_alt: "Proceso de escaneo OCR con cámara del dispositivo",
    book_creator_step_3_alt: "Resultado final del libro digitalizado en la aplicación",

    ecosystem_title: "Administración y Privacidad Absoluta",
    ecosystem_desc:
      "Toma el control total de tu entorno de lectura. Sin cuentas en la nube, sin rastreo. Tus datos te pertenecen solo a ti.",

    ecosystem_login_title: "Petición de Login Seguro",
    ecosystem_login_desc:
      "Protege tu biblioteca local desde el primer segundo con acceso biométrico o PIN al arrancar la app.",

    ecosystem_categories_title: "Categorías e Idiomas",
    ecosystem_categories_desc:
      "Organiza tus libros con etiquetas personalizadas y cambia el idioma de la interfaz al instante.",

    ecosystem_delete_title: "Borrado Radical y Recuperación",
    ecosystem_delete_desc:
      "Exporta copias de seguridad locales. Si eliminas tu perfil, los datos se borran de forma irreversible del dispositivo.",

    ecosystem_image_alt:
      "Panel de configuración de privacidad y administración de la biblioteca en ReadMeBook",
    
    reading_experience_title: "Experiencia de Lectura Inmersiva",
    reading_experience_desc:
      "Diseñado para lectores intensivos. Una interfaz limpia, optimizada para reducir la fatiga visual y mejorar la concentración durante sesiones largas de lectura.",

    reading_experience_image_alt:
      "Interfaz de modos de lectura inmersiva en ReadMeBook",

    reading_dark_mode_title: "Modo Oscuro Puro (OLED)",
    reading_dark_mode_desc:
      "Optimiza la lectura nocturna apagando píxeles en pantallas OLED para reducir la fatiga visual y mejorar el contraste real del texto.",

    reading_always_on_title: "Pantalla Siempre Activa",
    reading_always_on_desc:
      "Evita que la pantalla se bloquee o atenúe mientras lees, manteniendo el foco en el contenido sin interrupciones.",

    reading_notes_title: "Anotaciones y Marcadores",
    reading_notes_desc:
      "Subraya texto, guarda ideas y gestiona marcadores locales para construir tu propio sistema de estudio y lectura.",
    
    books_gutenberg_badge: "70.000+ libros",
    books_elejandria_badge: "Español / diseño limpio",
    books_bdh_badge: "Biblioteca Nacional (oficial)",
    books_feedbooks_badge: "Catálogo público",

    welcome_title: "¡Enhorabuena!",
    welcome_title_highlight: "Usuario validado.",
    welcome_desc:
      "Tu cuenta ha sido confirmada con éxito. Ya puedes empezar a disfrutar de tu biblioteca inteligente y privada.",

    welcome_button: "Comenzar ahora",

    welcome_privacy: "Tu privacidad, nuestro compromiso.",

    welcome_footer: "© 2026 ReadMeBook. Tu biblioteca inteligente local.",
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
    experience_music_desc:
      "Build immersive reading environments with ambient soundscapes to improve focus and reduce distractions.",

    experience_speed_title: "Personalized Pace",
    experience_speed_desc:
      "Adjust reading speed precisely to match comprehension and content type.",

    experience_search_title: "Smart Context",
    experience_search_desc:
      "Access cross-references like characters, places or concepts instantly without breaking flow.",

    experience_translate_title: "Translation",
    experience_translate_desc:
      "Check meanings and translations directly on the page without losing context.",

    audience_lang_title: "Language Students",
    audience_access_title: "Inclusive Reading",
    audience_study_title: "Study & Exams",
    audience_life_title: "Proactive Reading",

    assisted_reading: "Assisted reading",

    // ✅ ASSISTED (EN)
    assisted_back: "Back",
    assisted_title: "Intelligent Assisted Reading",
    assisted_desc:
      "Boost your memory and break accessibility barriers. Control your book with your voice and translate texts in real time.",

    assisted_voice_title: "Hands-Free Voice Control",
    assisted_voice_desc:
      "Turn pages, search words, or navigate content using local voice commands—fully offline and without touching your device. Designed for a completely hands-free reading experience.",

    assisted_tts_title: "TTS Engine for Candidates",
    assisted_tts_desc:
      "Listen to your study material with natural-sounding voices and precisely control playback speed to improve comprehension and active memorization.",

    assisted_translate_title: "Real-Time Translation",
    assisted_translate_desc:
      "Look up translations, definitions, and nuances of any word or paragraph instantly, directly on the text, without breaking your reading flow.",

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
      "Hear exact pronunciation of every word in the book's language.",
      "Visual synchronization: see words while listening.",
      "Instant contextual translation to expand vocabulary.",
    ],

    audience_access_items: [
      "Bimodal reading and listening to improve comprehension.",
      "Audio-visual sync designed to remove reading barriers.",
      "Full hands-free navigation via voice commands.",
    ],

    audience_study_items: [
      "Ideal for studying dense material without distraction.",
      "Find key concepts and references in seconds.",
      "Analyze manuscripts and technical documents deeply.",
    ],

    audience_life_items: [
      "Turn any text, image or voice into an interactive audiobook.",
      "Full voice control while cooking, exercising or resting.",
      "Absorb content while your hands stay busy.",
    ],

    contact_title: "Contact",
    contact_subtitle: "Write to us and we’ll respond as soon as possible.",

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
    download_subtitle:
      "You are one step away from trying the future of smart reading.",

    download_warning_title: "Android note",
    download_warning_text:
      'When downloading the APK, you will see a "harmful file" warning. Select "Download anyway".',

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
    reading_features: "/images/reading_features.png",
    local_storage: "/images/local_storage-en.png",
    pure_reading_experience: "/images/pure_reading_experience-en.png",
    assisted_inclusive_reading: "/images/assisted_inclusive_reading-en.png",
    book_creator_importer_01: "/images/book_creator_importer_01-en.png",
    book_creator_importer_02: "/images/book_creator_importer_02-en.png",
    book_creator_importer_03: "/images/book_creator_importer_03-en.png",

    books_badge: "ReadMeBook Ecosystem",
    books_title: "Download free and",
    books_title_color: "100% legal eBooks",
    books_subtitle:
      "No files on your device? We recommend clean, ad-free platforms to build your library.",
    books_visit_button: "Visit official site",
    books_gutenberg_title: "Project Gutenberg",
    books_gutenberg_desc:
      "Over 70,000 public domain books, perfect for classic literature in ePub format.",
    books_elejandria_title: "Elejandría",
    books_elejandria_desc:
      "Minimalist Spanish platform with optimized classic literature for mobile reading.",
    books_bdh_title: "BNE Digital",
    books_bdh_desc:
      "Digital heritage platform with thousands of historical works and manuscripts.",
    books_feedbooks_title: "Feedbooks (Public Domain)",
    books_feedbooks_desc:
      "Large catalog of free public domain books ready to import.",

    book_creator_title: "Book Creator & Importer",
    book_creator_desc:
      "Turn your phone into a smart book creator. Import ePub and TXT files, scan pages with OCR, and transform any text into a fully readable and listenable digital book.",

    book_creator_import_title: "ePub & TXT Import",
    book_creator_import_desc:
      "Import ePub and TXT files directly and organize them in your personal library without relying on external services or cloud storage.",

    book_creator_ocr_title: "OCR Scanning",
    book_creator_ocr_desc:
      "Scan physical books or documents using your camera and instantly convert them into editable text using high-accuracy built-in OCR technology.",

    book_creator_ai_title: "AI Book Creation",
    book_creator_ai_desc:
      "Create and transform books with artificial intelligence: summarize texts, restructure content, or generate optimized reading versions instantly.",
    book_creator_step_1_alt: "Empty book ready for content import",
    book_creator_step_2_alt: "OCR scanning process using device camera",
    book_creator_step_3_alt: "Final result of the digitized book inside the app",

    ecosystem_title: "Administration & Absolute Privacy",
    ecosystem_desc:
      "Take full control of your reading environment. No cloud accounts, no tracking. Your data belongs exclusively to you.",

    ecosystem_login_title: "Secure Login Request",
    ecosystem_login_desc:
      "Protect your local library from the very first second with biometric access or PIN at app launch.",

    ecosystem_categories_title: "Categories & Languages",
    ecosystem_categories_desc:
      "Organize your books with custom tags and instantly switch the interface language.",

    ecosystem_delete_title: "Radical Deletion & Recovery",
    ecosystem_delete_desc:
      "Export local backups. If you delete your profile, all data is permanently wiped from the device.",

    ecosystem_image_alt:
      "Privacy and library administration settings panel in ReadMeBook",
    
    reading_experience_title: "Immersive Reading Experience",
    reading_experience_desc:
      "Designed for heavy readers. A clean interface optimized to reduce eye strain and improve focus during long reading sessions.",

    reading_experience_image_alt:
      "Immersive reading modes interface in ReadMeBook",

    reading_dark_mode_title: "Pure Dark Mode (OLED)",
    reading_dark_mode_desc:
      "Enhances night reading by turning off pixels on OLED screens to reduce eye strain and improve true text contrast.",

    reading_always_on_title: "Always-On Screen",
    reading_always_on_desc:
      "Prevents the screen from dimming or locking while reading, keeping your focus uninterrupted.",

    reading_notes_title: "Notes & Bookmarks",
    reading_notes_desc:
      "Highlight text, save ideas, and manage local bookmarks to build your own reading and study system.",
    
    books_gutenberg_badge: "70.000+ libros",
    books_elejandria_badge: "Español / diseño limpio",
    books_bdh_badge: "Biblioteca Nacional (oficial)",
    books_feedbooks_badge: "Catálogo público",

    welcome_title: "Congratulations!",
    welcome_title_highlight: "User verified.",
    welcome_desc:
      "Your account has been successfully confirmed. You can now start enjoying your smart, private library.",

    welcome_button: "Get started",

    welcome_privacy: "Your privacy, our commitment.",

    welcome_footer: "© 2026 ReadMeBook. Your local smart library.",
  },
};

export type TranslationKeys = typeof translations["es"];