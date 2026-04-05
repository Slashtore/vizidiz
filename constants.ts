import { Project, Service, Testimonial, WorkflowStep, ProjectCategory } from './types';

// --- Общая информация о компании ---
export const COMPANY_INFO = {
  name: "VIZIDIZ",
  subtitle: "3D Visualization",
  phone: "+7 (916) 716-93-21",
  email: "info.vizidiz@gmail.com",
  address: "Воронеж",
  copyright: `© 2014 - ${new Date().getFullYear()} Vizidiz 3D Studio. Все права защищены.`
};

// --- Секция Hero (Главный экран) ---
export const HERO_CONTENT = {
  title: "Воплощаю ваши идеи \n в фотореализм",
  description: "Создаю высококачественные 3D-визуализации интерьеров, экстерьеров и предметов для архитекторов, дизайнеров, девелоперов и предпринимателей.",
  avatarUrl: '/vizidiz/image/Me.jpg',
  bgImage: '/vizidiz/image/hero_bg.jpg', // Ссылка на фоновое изображение
  ctaPrimary: "Смотреть работы",
  ctaSecondary: "Связаться со мной"
};

// --- Услуги ---
export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Интерьерная визуализация',
    description: 'Фотореалистичные изображения жилых и коммерческих пространств. Передача атмосферы, освещения и материалов.',
    iconName: 'Home'
  },
  {
    id: 2,
    title: 'Экстерьерная визуализация',
    description: 'Визуализация фасадов зданий, жилых комплексов и благоустройства территории. Вписывание в окружение.',
    iconName: 'Building'
  },
  {
    id: 3,
    title: 'Предметная визуализация',
    description: 'Студийная визуализация мебели, декора и товаров для каталогов и интернет-магазинов на белом фоне или в интерьере.',
    iconName: 'Box'
  },
  {
    id: 4,
    title: '3D Моделирование',
    description: 'Создание высокополигональных и низкополигональных моделей любой сложности по чертежам или эскизам.',
    iconName: 'Monitor'
  }
];

// --- Этапы работы ---
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Техническое задание',
    description: 'Вы присылаете чертежи, мудборды, ссылки на мебель и материалы. Мы обсуждаем детали, сроки и стоимость.'
  },
  {
    id: 2,
    number: '02',
    title: 'Черновые рендеры',
    description: 'Я собираю геометрию (серый материал) и настраиваю ракурсы. Вы утверждаете композицию кадра.'
  },
  {
    id: 3,
    number: '03',
    title: 'Цвет и Свет',
    description: 'Настраиваю материалы, текстуры и освещение. Делаю предфинальные рендеры в низком разрешении.'
  },
  {
    id: 4,
    number: '04',
    title: 'Финал',
    description: 'После утверждения всех правок я запускаю финальный рендер в высоком разрешении и делаю постобработку.'
  }
];

// --- Портфолио ---
export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Rada Doors', 
    category: ProjectCategory.PRODUCT, 
    imageUrls: [
      '/vizidiz/image/Rada_doors_1.jpg',
      '/vizidiz/image/Rada_doors_2.jpg'
    ],
    description: 'Визуализация стильных дверей от компании Rada Doors в интерьере. Изображение для каталога и рекламы.',
    client: 'Rada Doors',
    year: '2016'
  },
  { 
    id: 20, 
    title: 'Панели МДФ', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Leto_1.jpg',
      '/vizidiz/image/Leto_2.jpg',
      '/vizidiz/image/Leto_3.jpg',
    ],
    description: 'Моделирование и визуализация панелей из МДФ. Соблюдение размеров фрезеровки. Работа с настройкой материалов и освещения.',
    client: 'LETO',
    year: '2021'
  },
  { 
    id: 2, 
    title: 'Шелепихинская"', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Shelepihinskaya_1.jpg',
      '/vizidiz/image/Shelepihinskaya_2.jpg',
      '/vizidiz/image/Shelepihinskaya_3.jpg',
      '/vizidiz/image/Shelepihinskaya_4.jpg',
      '/vizidiz/image/Shelepihinskaya_5.jpg',
    ],
    description: 'Визуализация интерьера малогабаритной квартиры. Современный минимализм с элементами скандинавского стиля.',
    client: 'Елена Кондратьева',
    year: '2019'
  },
  { 
    id: 5, 
    title: 'Беседка', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Besedka_2.jpg',
      '/vizidiz/image/Besedka_1.jpg',
      '/vizidiz/image/Besedka_3.jpg',
      '/vizidiz/image/Besedka_4.jpg',
      '/vizidiz/image/Besedka_5.jpg',
      '/vizidiz/image/Besedka_6.jpg',
    ],
    description: 'Современный садовый павильон. Открытое пространство с зонированием, вертикальные ламели, интеграция в ландшафт, вписывание модели в фото. Работа с дневным освещением, моделирование уличной мебели.',
    client: 'Артур. Частный заказчик',
    year: '2023'
  },
  { 
    id: 3, 
    title: 'Анастаси', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Anastasi_Gostinaya_1.jpg',
      '/vizidiz/image/Anastasi_Gostinaya_3.jpg',
      '/vizidiz/image/Anastasi_Gostinaya_4.jpg',
      '/vizidiz/image/Anastasi_Gostinaya_5.jpg',
      '/vizidiz/image/Anastasi_Gostinaya_6.jpg',
      '/vizidiz/image/Anastasi_Sanuzel_1.jpg',
      '/vizidiz/image/Anastasi_Sanuzel_2.jpg',
      '/vizidiz/image/Anastasi_Sanuzel_3.jpg',
      '/vizidiz/image/Anastasi_Sanuzel_4.jpg',
      '/vizidiz/image/Anastasi_Detskaya_2.jpg',
      '/vizidiz/image/Anastasi_Detskaya_1.jpg',
      '/vizidiz/image/Anastasi_Detskaya_3.jpg',
      '/vizidiz/image/Anastasi_Detskaya_4.jpg',
      '/vizidiz/image/Anastasi_Spalnya_1.jpg',
      '/vizidiz/image/Anastasi_Spalnya_5.jpg',
      '/vizidiz/image/Anastasi_Spalnya_3.jpg',
      '/vizidiz/image/Anastasi_Spalnya_2.jpg',
      '/vizidiz/image/Anastasi_Spalnya_4.jpg',
    ],
    description: 'Интерьер в стиле минимализм с тёплой цветовой гаммой. Ванная с панорамным окном, компактная столовая со встроенным хранением, уютная спальня с акцентной стеной. Натуральные материалы: мрамор, дерево, текстиль.',
    client: 'Кристина. Частный дизайнер',
    year: '2024'
  },
  { 
    id: 6, 
    title: 'Современная роскошь', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Vorobev_Gostinaya_2.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_1.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_5.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_7.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_6.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_3.jpg',
      '/vizidiz/image/Vorobev_Gostinaya_4.jpg',
      '/vizidiz/image/Vorobev_Sanuzel_1.jpg',
      '/vizidiz/image/Vorobev_Sanuzel_2.jpg',
      '/vizidiz/image/Vorobev_Sanuzel_3.jpg',
      '/vizidiz/image/Vorobev_Spalnya_2.jpg',
      '/vizidiz/image/Vorobev_Spalnya_4.jpg',
      '/vizidiz/image/Vorobev_Spalnya_3.jpg',
      '/vizidiz/image/Vorobev_Spalnya_1.jpg',
      '/vizidiz/image/Vorobev_Kabinet_3.jpg',
      '/vizidiz/image/Vorobev_Kabinet_1.jpg',
      '/vizidiz/image/Vorobev_Kabinet_2.jpg',
    ],
    description: 'Современная квартира в стиле неоклассика с элементами ар-деко. Задачи: проработка материалов, встроенное освещение в шкафах, текстиль (велюр, гусиная лапка), композиция кадра, детализация мебели и декора.',
    client: 'Елена Кондратьева',
    year: '2020'
  },
  { 
    id: 13, 
    title: 'Мебель в интерьере', 
    category: ProjectCategory.PRODUCT, 
    imageUrls: [
      '/vizidiz/image/Shishkin_Interior_2.jpg',
      '/vizidiz/image/Shishkin_Interior_1.jpg',
      '/vizidiz/image/Shishkin_Interior_3.jpg',
    ],
    description: 'Моделирование мягкой мебели. Визуализация в интерьере. Наложение текста, инфографика. Кровать Виклент, диван Томас, диван Дональд.',
    client: 'Шишкин мебель',
    year: '2023'
  },
  { 
    id: 17, 
    title: 'Просто и стильно', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Mosfilm_2.jpg',
      '/vizidiz/image/Mosfilm_1.jpg',
      '/vizidiz/image/Mosfilm_3.jpg',
      '/vizidiz/image/Mosfilm_4.jpg',
      '/vizidiz/image/Mosfilm_5.jpg',
    ],
    description: 'Интерьер с акцентами. Простые решения с эффектом: белые фасады, пол под мрамор, яркие барные стулья, кольцевые LED-светильники. Функциональное зонирование без лишних перегородок. Задачи: создание визуальной дороговизны на бюджетных материалах, работа с отражениями на глянцевых поверхностях, баланс освещения без сложных сценариев, композиция кадра с акцентом на цветовые пятна.',
    client: 'Елена Кондратьева',
    year: '2018'
  },
  { 
    id: 7, 
    title: 'Гребной канал', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Grebnoj_Kanal_2.jpg',
      '/vizidiz/image/Grebnoj_Kanal.jpg',
    ],
    description: 'Концептуальный проект развития территории. Высотное моделирование ландшафта, симуляция текущей воды, доводка изображения нейросетью.',
    client: 'Частный проект',
    year: '2022'
  },
  { 
    id: 18, 
    title: 'Нелли', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Nelli_1.jpg',
      '/vizidiz/image/Nelli_2.jpg',
      '/vizidiz/image/Nelli_3.jpg',
    ],
    description: 'Минималистичный интерьер с акцентом на прозрачность и свет. Скандинавская эстетика: прозрачные акриловые стулья, белые встроенные системы хранения, деревянные панели с вертикальными рейками. Натуральная гамма с жёлтыми акцентами. Задачи: работа с прозрачными материалами, передача фактуры дерева и мрамора, встроенное LED-освещение за панелями, композиция с акцентом на лёгкость и воздушность пространства.',
    client: 'Елена Кондратьева',
    year: '2018'
  },
  { 
    id: 24, 
    title: 'Полки', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Korpusnaya_Mebel_1.jpg',
      '/vizidiz/image/Korpusnaya_Mebel_2.jpg',
      '/vizidiz/image/Korpusnaya_Mebel_3.jpg',
      '/vizidiz/image/Korpusnaya_Mebel_4.jpg',
    ],
    description: 'Моделирование и визуализация полок для использования в карточках Ozon и Wildberries. Наполнение декором. Визуализация в интерьере. Инфографика.',
    client: 'Валерий',
    year: '2023'
  },
  { 
    id: 4, 
    title: 'Многогранный дом', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_4.jpg',
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_3.jpg',
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_5.jpg',
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_6.jpg',
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_1.jpg',
      '/vizidiz/image/Artur_Kuhnya-Gostinaya_2.jpg',
      '/vizidiz/image/Artur_Vhod_1.jpg',
      '/vizidiz/image/Artur_Hol_1.jpg',
      '/vizidiz/image/Artur_Koridor_1.jpg',
      '/vizidiz/image/Artur_Vannaya_1.jpg',
      '/vizidiz/image/Artur_Sanuzel_1.jpg',
      '/vizidiz/image/Artur_Predbannik_1.jpg',
      '/vizidiz/image/Artur_Predbannik_2.jpg',
      '/vizidiz/image/Artur_Predbannik_3.jpg',
      '/vizidiz/image/Artur_Predbannik_4.jpg'
    ],
    description: 'Частный дом — эклектика + бохо. Натуральные материалы. Настройка фактур, освещение, композиция. Индивидуальное 3D моделирование мебели',
    client: 'Артур. Частный заказчик',
    year: '2016'
  },
  { 
    id: 8, 
    title: 'Детский сад', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Detskij_Sad_1.jpg',
      '/vizidiz/image/Detskij_Sad_2.jpg',
      '/vizidiz/image/Detskij_Sad_3.jpg',
      '/vizidiz/image/Detskij_Sad_4.jpg',
      '/vizidiz/image/Detskij_Sad_5.jpg',
      '/vizidiz/image/Detskij_Sad_6.jpg',
      '/vizidiz/image/Detskij_Sad_7.jpg',
      '/vizidiz/image/Detskij_Sad_8.jpg',
      '/vizidiz/image/Detskij_Sad_9.jpg',
      '/vizidiz/image/Detskij_Sad_10.jpg',
      '/vizidiz/image/Detskij_Sad_11.jpg',
      '/vizidiz/image/Detskij_Sad_12.jpg',
      '/vizidiz/image/Detskij_Sad_13.jpg',
    ],
    description: 'Концептуальный проект детского сада. Разработка архитектуры и интерьеров. Вставка изображений людей. Эксперименты с нейросетью',
    client: 'Частный проект',
    year: '2021'
  },
  { 
    id: 9, 
    title: 'Свет и мрамор', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Kembridzh_1.jpg',
      '/vizidiz/image/Kembridzh_2.jpg',
      '/vizidiz/image/Kembridzh_3.jpg',
      '/vizidiz/image/Kembridzh_4.jpg',
      '/vizidiz/image/Kembridzh_5.jpg',
      '/vizidiz/image/Kembridzh_6.jpg',
      '/vizidiz/image/Kembridzh_7.jpg',
      '/vizidiz/image/Kembridzh_8.jpg',
      '/vizidiz/image/Kembridzh_9.jpg',
      '/vizidiz/image/Kembridzh_10.jpg',
      '/vizidiz/image/Kembridzh_11.jpg',
      '/vizidiz/image/Kembridzh_12.jpg',
      '/vizidiz/image/Kembridzh_13.jpg',
      '/vizidiz/image/Kembridzh_14.jpg',
      '/vizidiz/image/Kembridzh_15.jpg',
      '/vizidiz/image/Kembridzh_16.jpg',
      '/vizidiz/image/Kembridzh_17.jpg',
      '/vizidiz/image/Kembridzh_18.jpg',
      '/vizidiz/image/Kembridzh_19.jpg',
      '/vizidiz/image/Kembridzh_20.jpg',
      '/vizidiz/image/Kembridzh_21.jpg',
      '/vizidiz/image/Kembridzh_22.jpg',
      '/vizidiz/image/Kembridzh_23.jpg',
    ],
    description: 'Светлый интерьер в духе современной неоклассики. Монохромная гамма с акцентами, мраморные поверхности, классическая лепнина в современной интерпретации. Настройка естественного света.',
    client: 'Елена Кондратьева',
    year: '2023'
  },
  { 
    id: 10, 
    title: 'Игра фактур', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Lena_1.jpg',
      '/vizidiz/image/Lena_2.jpg',
      '/vizidiz/image/Lena_3.jpg',
      '/vizidiz/image/Lena_4.jpg',
      '/vizidiz/image/Lena_5.jpg',
      '/vizidiz/image/Lena_6.jpg',
      '/vizidiz/image/Lena_7.jpg',
      '/vizidiz/image/Lena_8.jpg',
      '/vizidiz/image/Lena_9.jpg',
      '/vizidiz/image/Lena_10.jpg',
      '/vizidiz/image/Lena_11.jpg',
      '/vizidiz/image/Lena_12.jpg',
      '/vizidiz/image/Lena_13.jpg',
    ],
    description: 'Эклектичный интерьер с акцентом на фактуры и свет. Смешение классики и современности: зелёная плитка, мрамор, медная фурнитура. Тёплая натуральная гамма с яркими акцентами. Задачи: работа со сложной мозаичной плиткой, передача фактуры мрамора, настройка многоуровневого освещения, детализация медной фурнитуры, композиция кадра.',
    client: 'Елена Кондратьева',
    year: '2022'
  },
  { 
    id: 27, 
    title: 'Ванные миры', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Salini_1.jpg',
      '/vizidiz/image/Salini_2.jpg',
      '/vizidiz/image/Salini_3.jpg',
    ],
    description: 'Роскошные ванные комнаты в разных стилях. Три концепции: ар-деко с чёрным мрамором и витражным окном, спа с ванной и панорамными видами, барокко с тёмно-зелёным мрамором и классической лепниной. Задачи: работа со сложным мрамором (чёрный с прожилками, зелёный полированный), передача фактур (бархат, шёлк, позолота), настройка драматичного освещения (свечи + люстры + естественный свет), детализация витражей и декоративных элементов, композиция с акцентом на архитектурные доминанты (круглое окно, панорама, арочные окна).',
    client: 'Salini S.R.L.',
    year: '2023'
  },
  { 
    id: 15, 
    title: 'Корпусная мебель', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Shkaf_1.jpg',
      '/vizidiz/image/Shkaf_2.jpg',
      '/vizidiz/image/Shkaf_3.jpg',
      '/vizidiz/image/Shkaf_4.jpg',
      '/vizidiz/image/Shkaf_5.jpg',
    ],
    description: 'Моделирование и визуализация корпусной мебели для наполнения сайта.',
    client: 'Kupesalon',
    year: '2016'
  },
  { 
    id: 12, 
    title: 'Игра контрастов', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Lomonosovskij_Park_1.jpg',
      '/vizidiz/image/Lomonosovskij_Park_2.jpg',
      '/vizidiz/image/Lomonosovskij_Park_3.jpg',
      '/vizidiz/image/Lomonosovskij_Park_4.jpg',
      '/vizidiz/image/Lomonosovskij_Park_5.jpg',
      '/vizidiz/image/Lomonosovskij_Park_6.jpg',
      '/vizidiz/image/Lomonosovskij_Park_7.jpg',
      '/vizidiz/image/Lomonosovskij_Park_8.jpg',
      '/vizidiz/image/Lomonosovskij_Park_9.jpg',
    ],
    description: 'Яркий эклектичный интерьер квартиры-студии. Смелый микс стилей: зелёная кухня, тропические принты, геометрический арт, деревянные рейки. Функциональное зонирование с барной стойкой и перегородками. Задачи: работа с насыщенными цветами без визуального шума, сочетание активных принтов, реалистичная передача фактур, композиция кадра.',
    client: 'Артур. Частный заказчик',
    year: '2020'
  },
  { 
    id: 14, 
    title: 'Стул в интерьере', 
    category: ProjectCategory.PRODUCT, 
    imageUrls: [
      '/vizidiz/image/Stul_1.jpg',
      '/vizidiz/image/Stul_2.jpg',
      '/vizidiz/image/Stul_3.jpg',
      '/vizidiz/image/Stul_4.jpg',
    ],
    description: 'Моделирование стула и визуализация его в интерьере, для использования в карточках товара Ozon. Сверхточное моделирование по фотографиям. Моделирование фактуры ткани через геометрию для ближних ракурсов. Инфографика.',
    client: 'Чёрное дерево',
    year: '2025'
  },
  { 
    id: 16, 
    title: 'Мягкая мебель', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Shishkin_Mebel_1.jpg',
      '/vizidiz/image/Shishkin_Mebel_2.jpg',
      '/vizidiz/image/Shishkin_Mebel_3.jpg',
      '/vizidiz/image/Shishkin_Mebel_4.jpg',
      '/vizidiz/image/Shishkin_Mebel_5.jpg',
      '/vizidiz/image/Shishkin_Mebel_6.jpg',
      '/vizidiz/image/Shishkin_Mebel_7.jpg',
      '/vizidiz/image/Shishkin_Mebel_8.jpg',
    ],
    description: 'Моделирование и визуализация мягкой мебели для наполнения сайта. Передача моделей. Текстурирование, создание моделей в разобраном и собраном состоянии.',
    client: 'Шишкин мебель',
    year: '2023'
  },
  { 
    id: 19, 
    title: 'Брызги шампанского', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Novocheremushkinskaya_1.jpg',
      '/vizidiz/image/Novocheremushkinskaya_2.jpg',
      '/vizidiz/image/Novocheremushkinskaya_3.jpg',
      '/vizidiz/image/Novocheremushkinskaya_4.jpg',
      '/vizidiz/image/Novocheremushkinskaya_5.jpg',
      '/vizidiz/image/Novocheremushkinskaya_6.jpg',
      '/vizidiz/image/Novocheremushkinskaya_7.jpg',
      '/vizidiz/image/Novocheremushkinskaya_8.jpg',
      '/vizidiz/image/Novocheremushkinskaya_9.jpg',
      '/vizidiz/image/Novocheremushkinskaya_10.jpg',
      '/vizidiz/image/Novocheremushkinskaya_11.jpg',
      '/vizidiz/image/Novocheremushkinskaya_12.jpg',
      '/vizidiz/image/Novocheremushkinskaya_13.jpg',
      '/vizidiz/image/Novocheremushkinskaya_14.jpg',
      '/vizidiz/image/Novocheremushkinskaya_15.jpg',
      '/vizidiz/image/Novocheremushkinskaya_16.jpg',
      '/vizidiz/image/Novocheremushkinskaya_17.jpg',
    ],
    description: 'Тёплый современный интерьер с акцентом на натуральные материалы. Бежево-золотистая гамма, мрамор с активным рисунком, бархат, латунные детали. Авторские светильники как доминанты пространства — облако из сфер, янтарные кольца, органичные формы. Задачи: сочетание активных текстур (камень + дерево + текстиль), настройка тёплого многоуровневого освещения, детализация бархата и велюра с правильным рассеиванием света, композиция с акцентом на тактильность материалов.',
    client: 'Елена Кондратьева',
    year: '2022'
  },
  { 
    id: 11, 
    title: 'Дом из кирпича', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Lesnaya_Polyana_1.jpg',
      '/vizidiz/image/Lesnaya_Polyana_2.jpg',
      '/vizidiz/image/Lesnaya_Polyana_3.jpg',
      '/vizidiz/image/Lesnaya_Polyana_4.jpg',
    ],
    description: 'Кирпичный частный дом. Традиционная архитектура с двускатной крышей, сочетание полноразмерных и арочных окон, металлическая кровля. Задачи: реалистичная текстура кирпича с естественными неровностями максимально приближенная к реальному объекту, детализация кровли и водосточной системы. Работа на основе фотографий и эскизов.',
    client: 'Сергей. Частный заказчик',
    year: '2024'
  },
  { 
    id: 22, 
    title: 'Баночка БАД', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Prostoptima.jpg',
      '/vizidiz/image/Prostoptima_2.jpg',
    ],
    description: 'Моделирование и визуализация баночки биологически активной добавки.',
    client: 'FL',
    year: '2016'
  },
  { 
    id: 35, 
    title: 'Гранд-деко', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Townhouse_13.jpg',
      '/vizidiz/image/Townhouse_2.jpg',
      '/vizidiz/image/Townhouse_3.jpg',
      '/vizidiz/image/Townhouse_4.jpg',
      '/vizidiz/image/Townhouse_5.jpg',
      '/vizidiz/image/Townhouse_6.jpg',
      '/vizidiz/image/Townhouse_7.jpg',
      '/vizidiz/image/Townhouse_8.jpg',
      '/vizidiz/image/Townhouse_9.jpg',
      '/vizidiz/image/Townhouse_10.jpg',
      '/vizidiz/image/Townhouse_11.jpg',
      '/vizidiz/image/Townhouse_12.jpg',
      '/vizidiz/image/Townhouse_1.jpg',
      '/vizidiz/image/Townhouse_14.jpg',
      '/vizidiz/image/Townhouse_15.jpg',
      '/vizidiz/image/Townhouse_16.jpg',
      '/vizidiz/image/Townhouse_17.jpg',
    ],
    description: 'Роскошный современный интерьер с элементами ар-деко. Открытое пространство с чётким зонированием: гостиная с линейным камином и мраморной стеной, барная стойка, лаунж-зона с кинотеатром и бильярдом, столовая. Тёмное дерево, серый стёганый велюр, хромированные детали и каскадные хрустальные люстры. Задачи: сложный сценарный свет (мощные LED-контуры в потолке + детализация хрустальных люстр без пересветов). Настройка фактур: стёганый велюр, полированный мрамор, дерево с порами. Работа с отражениями в стеклянных перегородках и глянцевых поверхностях. Композиция открытых зон с сохранением глубины кадра..',
    client: 'Soleart',
    year: '2022'
  },
  { 
    id: 23, 
    title: 'Эмуляторы', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Emulyator_1.jpg',
      '/vizidiz/image/Emulyator_2.jpg',
      '/vizidiz/image/Emulyator_3.jpg',
    ],
    description: 'Моделирование и визуализация эмуляторов для грузовиков для отключения мочевины. Проработка материалов, постановка света.',
    client: 'Get-Off',
    year: '2025'
  },
  { 
    id: 26, 
    title: 'Офис с видом', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Ofis.jpg',
    ],
    description: 'Драматичный офисный интерьер с панорамным остеклением. Тёмные текстурированные стены, панорамные окна с закатом, латунный светильник в форме ветвей. Рабочая зона с эргономичным креслом и лаунж с бонсаем. Контраст тёмных поверхностей и розового неба. Задачи: передача фактуры тёмных стен без визуальной тяжести, работа с закатным освещением (контраст тёплого неба и тёмного интерьера), композиция кадра с акцентом на панорамный вид и зонирование пространства.',
    client: 'Артур',
    year: '2020'
  },
  { 
    id: 25, 
    title: 'Баннер', 
    category: ProjectCategory.PRODUCT, 
    imageUrls: [
      '/vizidiz/image/Baner.jpg',
      '/vizidiz/image/Baner_2.jpg',
    ],
    description: 'Моделирование и визуализация кухонного гарнитура максимально близко к референсу. Проработка материалов, освещения, моделирование мебели. Большой финальный размер изображения (6К).',
    client: 'Частный заказчик',
    year: '2023'
  },
  { 
    id: 28, 
    title: 'Киоск', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Pavilion_2.jpg',
      '/vizidiz/image/Pavilion_1.jpg',
    ],
    description: 'Обмер существующего объекта, его моделирование и визуализация. Доработка дизайна кофейного киоска. Разработка полиграфических материалов.',
    client: 'Частный заказчик',
    year: '2023'
  },
  { 
    id: 29, 
    title: 'Серо-голубая гармония', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Rasskazovo_1.jpg',
      '/vizidiz/image/Rasskazovo_2.jpg',
      '/vizidiz/image/Rasskazovo_3.jpg',
      '/vizidiz/image/Rasskazovo_4.jpg',
      '/vizidiz/image/Rasskazovo_5.jpg',
      '/vizidiz/image/Rasskazovo_6.jpg',
      '/vizidiz/image/Rasskazovo_7.jpg',
      '/vizidiz/image/Rasskazovo_8.jpg',
      '/vizidiz/image/Rasskazovo_9.jpg',
      '/vizidiz/image/Rasskazovo_10.jpg',
      '/vizidiz/image/Rasskazovo_11.jpg',
      '/vizidiz/image/Rasskazovo_12.jpg',
      '/vizidiz/image/Rasskazovo_13.jpg',
      '/vizidiz/image/Rasskazovo_14.jpg',
    ],
    description: 'Светлый интерьер в классическом стиле с синими акцентами. Спокойная серо-голубая гамма, классические молдинги, двухцветная кухня (синий верх + белый низ), белая плитка «ёлочкой» с чёрной мозаикой. Функциональные решения: шкаф-лестница, встроенное хранение, панорамное остекление. Задача: Работа с текстилем (передача фактуры бархата и льна), настройка естественного света из панорамных окон, композиция узких пространств (коридор, балкон). Разработка дизайн проекта под ключ.',
    client: 'Екатерина',
    year: '2019'
  },
  { 
    id: 30, 
    title: 'Семейная симфония', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Rasskazovo2_1.jpg',
      '/vizidiz/image/Rasskazovo2_2.jpg',
      '/vizidiz/image/Rasskazovo2_3.jpg',
      '/vizidiz/image/Rasskazovo2_4.jpg',
      '/vizidiz/image/Rasskazovo2_5.jpg',
      '/vizidiz/image/Rasskazovo2_6.jpg',
      '/vizidiz/image/Rasskazovo2_7.jpg',
      '/vizidiz/image/Rasskazovo2_8.jpg',
      '/vizidiz/image/Rasskazovo2_9.jpg',
      '/vizidiz/image/Rasskazovo2_10.jpg',
      '/vizidiz/image/Rasskazovo2_11.jpg',
      '/vizidiz/image/Rasskazovo2_12.jpg',
      '/vizidiz/image/Rasskazovo2_13.jpg',
      '/vizidiz/image/Rasskazovo2_14.jpg',
      '/vizidiz/image/Rasskazovo2_15.jpg',
      '/vizidiz/image/Rasskazovo2_16.jpg',
      '/vizidiz/image/Rasskazovo2_17.jpg',
      '/vizidiz/image/Rasskazovo2_18.jpg',
      '/vizidiz/image/Rasskazovo2_19.jpg',
      '/vizidiz/image/Rasskazovo2_20.jpg',
      '/vizidiz/image/Rasskazovo2_21.jpg',
      '/vizidiz/image/Rasskazovo2_22.jpg',
      '/vizidiz/image/Rasskazovo2_23.jpg',
      '/vizidiz/image/Rasskazovo2_24.jpg',
      '/vizidiz/image/Rasskazovo2_25.jpg',
      '/vizidiz/image/Rasskazovo2_26.jpg',
      '/vizidiz/image/Rasskazovo2_27.jpg',
      '/vizidiz/image/Rasskazovo2_28.jpg',
    ],
    description: 'Современная неоклассика для семьи. Взрослая элегантность и детский комфорт. Классические молдинги, сложные люстры с латунью, бархатная обивка и спокойная гамма. В детских — игривые сценарии (звёздный блэкаут, облачные светильники). Ванная — микс геометрии: шестигранная плитка с золотой затиркой и активный пол. Задачи: баланс между «взрослой» классикой и детским декором в рамках одного проекта. Настройка сложного составного света (многорожковые люстры + закарнизная подсветка), чтобы избежать пересветов. Работа с активными паттернами (звёзды, динозавры, гексагоны) без визуального шума. Реалистичная передача фактур бархата и лёгкости тюля на панорамных окнах. Разработка дизайн проекта под ключ.',
    client: 'Екатерина',
    year: '2023'
  },
  { 
    id: 31, 
    title: 'Игра форм', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Serebryanyj_Bor_1.jpg',
      '/vizidiz/image/Serebryanyj_Bor_2.jpg',
      '/vizidiz/image/Serebryanyj_Bor_3.jpg',
      '/vizidiz/image/Serebryanyj_Bor_4.jpg',
      '/vizidiz/image/Serebryanyj_Bor_5.jpg',
      '/vizidiz/image/Serebryanyj_Bor_6.jpg',
      '/vizidiz/image/Serebryanyj_Bor_7.jpg',
      '/vizidiz/image/Serebryanyj_Bor_8.jpg',
      '/vizidiz/image/Serebryanyj_Bor_9.jpg',
      '/vizidiz/image/Serebryanyj_Bor_10.jpg',
      '/vizidiz/image/Serebryanyj_Bor_11.jpg',
      '/vizidiz/image/Serebryanyj_Bor_12.jpg',
      '/vizidiz/image/Serebryanyj_Bor_13.jpg',
      '/vizidiz/image/Serebryanyj_Bor_14.jpg',
      '/vizidiz/image/Serebryanyj_Bor_15.jpg',
      '/vizidiz/image/Serebryanyj_Bor_16.jpg',
      '/vizidiz/image/Serebryanyj_Bor_17.jpg',
      '/vizidiz/image/Serebryanyj_Bor_18.jpg',
      '/vizidiz/image/Serebryanyj_Bor_19.jpg',
      '/vizidiz/image/Serebryanyj_Bor_20.jpg',
      '/vizidiz/image/Serebryanyj_Bor_21.jpg',
      '/vizidiz/image/Serebryanyj_Bor_22.jpg',
      '/vizidiz/image/Serebryanyj_Bor_23.jpg',
      '/vizidiz/image/Serebryanyj_Bor_24.jpg',
    ],
    description: 'Неоклассика с яркими цветовыми акцентами. Подлинники картин Энди Уорхола. Контрастный проект, где классические молдинги соседствуют с футуристичными мягкими панелями. Акцент на тактильность: велюр, высокие изголовья, фактурный камень. Цветовая схема: благородный серый + энергичный оранжевый + глубокий синий. Задачи: сложный сценарий освещения (линейный свет + скульптурные люстры + закарнизная подсветка). Настройка велюровой обивки с правильным рассеиванием света. Работа с активными текстурами (геометричный мраморный пол, крупное терразо в ванной) без визуального шума. Балансировка ярких цветовых пятен в кадре.',
    client: 'Елена Кондратьева',
    year: '2021'
  },
  { 
    id: 32, 
    title: 'Этно-уют', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Srub_1.jpg',
      '/vizidiz/image/Srub_2.jpg',
      '/vizidiz/image/Srub_3.jpg',
      '/vizidiz/image/Srub_4.jpg',
      '/vizidiz/image/Srub_5.jpg',
      '/vizidiz/image/Srub_6.jpg',
      '/vizidiz/image/Srub_7.jpg',
      '/vizidiz/image/Srub_8.jpg',
      '/vizidiz/image/Srub_9.jpg',
      '/vizidiz/image/Srub_10.jpg',
      '/vizidiz/image/Srub_11.jpg',
      '/vizidiz/image/Srub_12.jpg',
    ],
    description: 'Деревянный дом с элементами этно и бохо. Натуральное дерево (оцилиндрованное бревно) в сочетании с современными материалами — плитка под бетон, минималистичная сантехника, белые двери. Акцент на ручную работу: макраме, этнические ковры, льняной текстиль. Задачи: передача фактуры дерева с естественными сучками и неровностями без эффекта «пластика». Контраст тёплого дерева и холодного бетона. Работа с натуральным дневным освещением. Детализация текстиля (лён, шерсть, моделинг ручного плетения) с "живой" мягкостью. Композиция уютных камерных пространств без визуального перегруза декором.',
    client: 'Артур',
    year: '2023'
  },
  { 
    id: 33, 
    title: 'Искусство в деталях', 
    category: ProjectCategory.INTERIOR, 
    imageUrls: [
      '/vizidiz/image/Studiya7_10.jpg',
      '/vizidiz/image/Studiya7_9.jpg',
      '/vizidiz/image/Studiya7_7.jpg',
      '/vizidiz/image/Studiya7_8.jpg',
      '/vizidiz/image/Studiya7_11.jpg',
      '/vizidiz/image/Studiya7_6.jpg',
      '/vizidiz/image/Studiya7_4.jpg',
      '/vizidiz/image/Studiya7_5.jpg',
      '/vizidiz/image/Studiya7_1.jpg',
      '/vizidiz/image/Studiya7_2.jpg',
      '/vizidiz/image/Studiya7_3.jpg',
      '/vizidiz/image/Studiya7_12.jpg',
    ],
    description: 'Авторский интерьер в пастельных тонах с художественными акцентами. Современный минимализм с элементами поп-арта: стена с гипсовыми бюстами известных личностей и силуэтом лица из цветных пятен, подвесные светильники из деревянных сфер, натуральное дерево в мебели. Спокойная гамма (беж, оливковый, пудровый), тёплый закатный свет. Задачи: композиция сложной стены с декором (бюсты + графика) без визуального шума. Настройка подвесных светильников (множество источников света). Передача фактур: матовые фасады, дерево с порами, вязаный текстиль. Баланс естественного закатного света и тёплой интерьерной подсветки.',
    client: 'Артур',
    year: '2023'
  },
  { 
    id: 34, 
    title: 'Внутренний двор', 
    category: ProjectCategory.EXTERIOR, 
    imageUrls: [
      '/vizidiz/image/Townhouse_Dvor.jpg',
    ],
    description: 'Ландшафтный дизайн внутреннего двора. Компактное пространство с акцентом на функциональность: мощёная дорожка, водный элемент с отражением фасада, зонирование растениями (деревья, кустарники, живая изгородь). Задачи: создание полноценного ландшафта в ограниченном пространстве двора. Реалистичная текстура мощения с естественными неровностями. Настройка водной поверхности с отражением здания, опавшие листья. Работа с разными типами растений (лиственные деревья, кустарники, газон). Композиция кадра с акцентом на глубину пространства, несмотря на замкнутость территории.',
    client: 'Soleart',
    year: '2022'
  },
  { 
    id: 21, 
    title: 'Чехлы', 
    category: ProjectCategory.MODELING, 
    imageUrls: [
      '/vizidiz/image/Chehly_1.jpg',
      '/vizidiz/image/Chehly_2.jpg',
      '/vizidiz/image/Chehly_3.jpg',
      '/vizidiz/image/Chehly_4.jpg',
    ],
    description: 'Моделирование и визуализация чехлов для автокресел. Для использования в карточках Ozon и Wildberries. Варианты цветов.',
    client: 'Gainmarket',
    year: '2023'
  },
  { 
    id: 36, 
    title: 'TV-зеркала', 
    category: ProjectCategory.PRODUCT, 
    imageUrls: [
      '/vizidiz/image/Teleart_1.jpg',
      '/vizidiz/image/Teleart_2.jpg',
      '/vizidiz/image/Teleart_3.jpg',
      '/vizidiz/image/Teleart_4.jpg',
      '/vizidiz/image/Teleart_5.jpg',
      '/vizidiz/image/Teleart_6.jpg',
    ],
    description: 'Серия интерьеров с TV-зеркалами. Разные пространства (спальня, гостиная, зона отдыха), объединённые одной технической задачей — визуализация скрытых телевизоров за стеклом или зеркалом. Задачи: настройка материалов, создание масок для вставки телевизионной картинки. Работа с отражениями в зеркальных поверхностях (чтобы не было «каши»). Разные ракурсы, демонстрации в дневном и вечернем освещении. Каталожное качество',
    client: 'Teleart',
    year: '2018'
  },
];

// --- Отзывы ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Артур Сальников',
    role: 'Артдиректор',
    text: 'Святослав не раз проявил себя в качестве достойного исполнителя. Для моих смелых и нетривиальных задач удалось привлечь человека, способного погрузиться в сложный проект, проработать каждую мелочь и выдать результат сравнимый, порой, с реальным фото. В процессе моделирования Святослав редко идет на компромиссы с самим собой. Он скорее готов потратить личное время и ресурсы, но добиться поставленной задачи и выдать достойный результат. Обладает образованием и опытом, чтобы не только предоставить «красивые картинки», но и подготовить пакеет профессиональных чертежей, на которые не жалуются прорабы и рабочие. Владеет широким инструментарием, умеет работать как в 3D, так и в растре, открытость к внесению правок и участливое отношение к процессу позволяет мне охарактеризовать Святослава как профессионала своего дела.  Этим отзывом мне приятно рекомендовать его как надежного исполнителя, с которым приятно работать.',
    avatarUrl: '/vizidiz/image/Artur.jpg'
  },
  {
    id: 2,
    name: 'Валентин',
    role: 'Директор',
    company: 'Kupesalon',
    text: 'Долго искали специалиста, который создаёт фотореалистичные модели мебели за разумные деньги. После того, как нашли Святослава работаем с ним уже несколько лет. Полностью заполнили моделями товаров наш интернет магазин и продолжаем сотрудничество по сей день. Покупатели в разговоре постоянно выделяют наш сайт среди других за красивые картинки.',
    avatarUrl: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Елена Кондратьева',
    role: 'Дизайнер интерьера',
    company: 'Alchimia LAB',
    text: 'Со Святославом нас связывают долгие годы сотрудничества и множество реализованных проектов. Святослав - настоящий мастер своего дела, его визуализации отличает высокая реалистичность и точность исполнения, их часто даже принимают за фотографии. К тому же я нередко печатаюсь в интерьерных изданиях и мои проекты всегда отмечали за высокое эстетичное исполнение, в чём есть заслуга и Святослава. Работать с ним мне всегда было удобно, поскольку он отлично понимает ТЗ, даже, когда я делаю эскизы от руки. Всегда соблюдает сроки и, на мой взгляд, умеет воплощать самые смелые и оригинальные идеи дизайнера. Работа со Святославом - это тот редкий случай, когда тебя понимают с полуслова.',
    avatarUrl: '/vizidiz/image/Elena_Kondrateva.jpg'
  }
];