import React, { useState, useEffect } from 'react';
import {
  Calculator as CalcIcon,
  Settings,
  X,
  Info,
  Check,
  Copy,
  Clock,
  Briefcase,
  Shield,
  Zap,
  FileText,
  DollarSign
} from 'lucide-react';

// --- Types ---
interface Rates {
  interior: number;
  exteriorBase: number;
  exteriorView: number;
  product: number;
  modeling: number;
  promo: number;
  [key: string]: number;
}

interface TimelineBaselines {
  interior: number;
  exterior: number;
  product: number;
  modeling: number;
  promo: number;
  [key: string]: number;
}

interface Multipliers {
  low: number;
  medium: number;
  high: number;
  urgency: number;
  noBrief: number;
  revision: number;
  buyout: number;
  nda: number;
  resolutionFactor: number;
  busyClient: number;
  [key: string]: number;
}

interface CalculatorConfig {
  rates: Rates;
  timelineBaselines: TimelineBaselines;
  multipliers: Multipliers;
  minHourlyRate: number;
  minOrderPrice: number;
}

// --- Components ---
const NumberInput = ({ label, subLabel, className = '', ...props }: any) => (
  <div className="flex flex-col gap-1 mb-4">
    <label className="text-sm font-medium text-slate-300">{label}</label>
    <div className="relative">
      <input
        type="number"
        className={`w-full bg-slate-900 border border-slate-600 rounded-lg py-2 px-3 text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all ${className}`}
        {...props}
      />
      {subLabel && (
        <span className="absolute right-3 top-2 text-slate-500 text-sm">{subLabel}</span>
      )}
    </div>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 flex justify-center items-center";
  const variants: any = {
    primary: "bg-accent text-slate-900 hover:bg-yellow-500 shadow-md shadow-accent/20 font-bold",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-200"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Main Calculator Component ---
const Calculator: React.FC = () => {
  // Logic Constants
  const HARDCODED_PASSWORD = "3dviz";
  const DEFAULT_CONFIG: CalculatorConfig = {
    rates: {
      interior: 400,
      exteriorBase: 15000,
      exteriorView: 5000,
      product: 4000,
      modeling: 4000,
      promo: 6000
    },
    timelineBaselines: {
      interior: 1,
      exterior: 4,
      product: 1,
      modeling: 1,
      promo: 2
    },
    multipliers: {
      low: 1.0,
      medium: 1.5,
      high: 2.5,
      urgency: 1.5,
      noBrief: 1.3,
      revision: 0.1,
      buyout: 1.5,
      nda: 1.2,
      resolutionFactor: 0.1,
      busyClient: 1.2
    },
    minHourlyRate: 500,
    minOrderPrice: 5000
  };

  const CURRENCIES = [
    { code: 'USD', symbol: '$', label: 'USD ($) - Доллар США' },
    { code: 'EUR', symbol: '€', label: 'EUR (€) - Евро' },
    { code: 'GBP', symbol: '£', label: 'GBP (£) - Фунт' },
    { code: 'CNY', symbol: '¥', label: 'CNY (¥) - Юань' },
    { code: 'KZT', symbol: '₸', label: 'KZT (₸) - Тенге' },
    { code: 'BYN', symbol: 'Br', label: 'BYN (Br) - Бел. рубль' },
    { code: 'TRY', symbol: '₺', label: 'TRY (₺) - Лира' },
    { code: 'UAH', symbol: '₴', label: 'UAH (₴) - Гривна' },
  ];

  const CONTENT: any = {
    interior: {
      title: 'Визуализация Интерьера',
      tabName: 'Интерьер',
      desc: 'Фотореалистичная подача жилых и коммерческих пространств. Расчет по площади.',
      complexity: {
        low: 'Минимализм / Сканди. Прямые линии, готовые модели. Стандартный свет.',
        medium: 'Современная классика / Лофт. Индивидуальная мебель, сложные материалы, вечерний свет.',
        high: 'Классика / Люкс. Лепнина, симуляция тканей, авторская мебель, макро-детали.'
      }
    },
    promo: {
      title: 'Рекламный кадр',
      tabName: 'Promo',
      desc: 'Маркетинговая визуализация продукта в среде (Lifestyle).',
      complexity: {
        low: 'Вписывание в готовую сцену. Стандартный дневной свет.',
        medium: 'Сборка сцены под продукт (Set Design). Акцентное освещение.',
        high: 'Креативная арт-дирекция. Симуляции (вода, дым), сторителлинг.'
      }
    },
    exterior: {
      title: 'Визуализация Экстерьера',
      tabName: 'Экстерьер',
      desc: 'Архитектурная визуализация зданий и ландшафта.',
      complexity: {
        low: 'Коттедж. Простая геометрия, готовое окружение.',
        medium: 'Таунхаусы / ЖК. Детальные фасады, благоустройство, люди.',
        high: 'Квартальная застройка. Огромная территория, уникальные объекты, атмосфера.'
      }
    },
    product: {
      title: 'Предметная Визуализация',
      tabName: 'Предметы',
      desc: 'Студийная подача продукта на нейтральном фоне.',
      complexity: {
        low: 'Упаковка / Коробки. Простые формы, простые материалы.',
        medium: 'Мебель / Техника. Швы, стыки, реалистичные несовершенства.',
        high: 'Ювелирка / Сложная механика. Внутреннее устройство, макро-текстуры.'
      }
    },
    modeling: {
      title: '3D Моделирование',
      tabName: 'Моделинг',
      desc: 'Создание 3D модели (сетки) без окружения.',
      complexity: {
        low: 'Low Poly. Игровые объекты дальнего плана.',
        medium: 'Mid Poly. Техника, мебель под сглаживание.',
        high: 'High Poly / Sculpt. Персонажи, органические формы, сложный декор.'
      }
    }
  };

  const BRIEF_REQS: any = {
    interior: ["Обмерный план", "План расстановки", "Мудборд / Референсы", "Ведомость материалов"],
    exterior: ["Архитектурный проект", "Генплан", "Ведомость отделки", "Фотофиксация / Координаты"],
    promo: ["Описание идеи", "Референсы настроения", "Палитра цветов", "Формат кадра"],
    product: ["Референсы материалов", "Чертежи / Фото", "Список ракурсов", "Тип фона"],
    modeling: ["Чертежи / Фото со всех сторон", "Габаритные размеры", "Требования к детализации", "Требования к сетке"]
  };

  // --- State ---
  const [service, setService] = useState('interior');
  const [complexity, setComplexity] = useState('medium');
  const [showSettings, setShowSettings] = useState(false);
  const [showBriefInfo, setShowBriefInfo] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auth State - загружаем из localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('calc_auth') === 'true';
    }
    return false;
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  const [hasBrief, setHasBrief] = useState(true);
  const [needModeling, setNeedModeling] = useState(false);
  const [modelsCost, setModelsCost] = useState(0);

  // Currency State
  const [currencyRate, setCurrencyRate] = useState<number | string>(90);
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('USD');
  const [isCurrencyConverted, setIsCurrencyConverted] = useState(false);

  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [extraRevisions, setExtraRevisions] = useState(0);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isBusyClient, setIsBusyClient] = useState(false);
  const [nda, setNda] = useState(false);
  const [buyout, setBuyout] = useState(false);
  const [prepayment, setPrepayment] = useState(50);

  const [area, setArea] = useState(40);
  const [views, setViews] = useState(1);
  const [items, setItems] = useState(1);

  // Config Persistence
  const [config, setConfig] = useState<CalculatorConfig>(() => {
    if (typeof window !== 'undefined') {
      const savedConfig = localStorage.getItem('3d_calculator_config');
      if (savedConfig) {
        try {
          const parsed = JSON.parse(savedConfig);
          return {
            rates: { ...DEFAULT_CONFIG.rates, ...parsed.rates },
            timelineBaselines: { ...DEFAULT_CONFIG.timelineBaselines, ...parsed.timelineBaselines },
            multipliers: { ...DEFAULT_CONFIG.multipliers, ...parsed.multipliers },
            minHourlyRate: parsed.minHourlyRate || DEFAULT_CONFIG.minHourlyRate,
            minOrderPrice: parsed.minOrderPrice || DEFAULT_CONFIG.minOrderPrice
          };
        } catch (e) {
          console.error('Error parsing saved config:', e);
          return DEFAULT_CONFIG;
        }
      }
    }
    return DEFAULT_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem('3d_calculator_config', JSON.stringify(config));
  }, [config]);

  // Reset modeling toggle when service changes
  useEffect(() => {
    setNeedModeling(false);
  }, [service]);

  // 🔒 Вход через URL: https://ваш-сайт/?admin=secret123
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'secret123') { // ← Поменяйте на своё слово
        setShowSettings(true);
        // Очистить параметр из адресной строки
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  // --- Calculations ---
  const getMegapixels = () => (width * height) / 1000000;

  const calculateResolutionMultiplier = () => {
    const mp = getMegapixels();
    const baseMP = 2.0736;
    if (mp <= baseMP + 0.001) return 1.0;
    const extraMP = mp - baseMP;
    return 1.0 + (extraMP * config.multipliers.resolutionFactor);
  };

  const calculateTimeline = () => {
    let days = config.timelineBaselines[service];
    let volumeFactor = 0;
    switch (service) {
      case 'interior': volumeFactor = area / 20; break;
      case 'exterior': volumeFactor = views * 2; break;
      case 'promo': volumeFactor = views * 2; break;
      case 'product':
        volumeFactor = items * 1;
        if (needModeling) volumeFactor += items * 2;
        break;
      case 'modeling': volumeFactor = items * 1.5; break;
    }
    const timeComplexityMap: any = { low: 0.7, medium: 1.0, high: 2.0 };
    const cFactor = timeComplexityMap[complexity];
    days = (days + volumeFactor) * cFactor;
    days += extraRevisions * 1.3;
    if (!hasBrief) days += 2;
    if (isUrgent) days *= 0.7;
    if (isBusyClient) days *= 1.0;
    const finalDays = Math.max(1, Math.round(days));
    const maxDays = Math.ceil(finalDays * 1.3);
    return { min: finalDays, max: maxDays };
  };

  const calculateTotal = () => {
    let cost = 0;
    const cm = config.multipliers[complexity];
    switch (service) {
      case 'interior': cost = area * config.rates.interior * cm; break;
      case 'promo': cost = views * config.rates.promo * cm; break;
      case 'exterior': cost = (config.rates.exteriorBase * cm) + (views * config.rates.exteriorView); break;
      case 'product':
        cost = items * config.rates.product * cm;
        if (needModeling) cost += items * config.rates.modeling * cm;
        break;
      case 'modeling': cost = items * config.rates.modeling * cm; break;
    }
    if (!hasBrief) cost *= config.multipliers.noBrief;
    if (service !== 'modeling') cost *= calculateResolutionMultiplier();
    if (extraRevisions > 0) cost *= (1 + (extraRevisions * config.multipliers.revision));
    if (isUrgent) cost *= config.multipliers.urgency;
    if (isBusyClient) cost *= config.multipliers.busyClient;
    if (buyout) cost *= config.multipliers.buyout;
    if (nda) cost *= config.multipliers.nda;
    cost += modelsCost;
    return Math.max(Math.round(cost), config.minOrderPrice);
  };

  const getCurrentCurrency = () => {
    return CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0];
  };

  const formatPrice = (valueInBase: number) => {
    let finalValue = valueInBase;
    let symbol = '₽';
    const numericRate = typeof currencyRate === 'string' ? parseFloat(currencyRate) : currencyRate;
    const isValidRate = !isNaN(numericRate) && numericRate > 0;
    if (isCurrencyConverted && isValidRate) {
      finalValue = valueInBase / numericRate;
      const currency = getCurrentCurrency();
      symbol = currency.symbol;
    }
    const formattedNum = new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(finalValue);
    return `${formattedNum} ${symbol}`;
  };

  // Anti-Dumping Logic for color coding in Settings
  const getRateStatusClass = (rateType: string) => {
    const minRate = config.minHourlyRate;
    let simulatedCost = 0;
    let simulatedDays = 0;
    if (rateType === 'interior') {
      simulatedCost = 40 * config.rates.interior;
      simulatedDays = config.timelineBaselines.interior + (40 / 20);
    } else if (rateType === 'promo') {
      simulatedCost = 2 * config.rates.promo;
      simulatedDays = config.timelineBaselines.promo + 4;
    } else if (rateType === 'product') {
      simulatedCost = 3 * config.rates.product;
      simulatedDays = config.timelineBaselines.product + 3;
    } else if (rateType === 'modeling') {
      simulatedCost = 1 * config.rates.modeling;
      simulatedDays = config.timelineBaselines.modeling + 1.5;
    } else if (rateType === 'exteriorBase' || rateType === 'exteriorView') {
      simulatedCost = config.rates.exteriorBase + (2 * config.rates.exteriorView);
      simulatedDays = config.timelineBaselines.exterior + 4;
    }
    simulatedCost *= 1.5;
    const effectiveHoursPerDay = 4;
    const totalEffectiveHours = Math.max(1, simulatedDays) * effectiveHoursPerDay;
    const hourlyRate = simulatedCost / totalEffectiveHours;
    if (hourlyRate < minRate) return 'border-red-500 text-red-200 bg-red-900/10';
    if (hourlyRate < minRate * 1.5) return 'border-yellow-500 text-yellow-200 bg-yellow-900/10';
    return 'border-green-500 text-green-200 bg-green-900/10';
  };

  // Handlers
  const handleRateChange = (key: string, value: string) => {
    const num = parseInt(value) || 0;
    setConfig(prev => ({ ...prev, rates: { ...prev.rates, [key]: num } }));
  };

  const handleBaselineChange = (key: string, value: string) => {
    const num = parseInt(value) || 0;
    setConfig(prev => ({
      ...prev,
      timelineBaselines: { ...prev.timelineBaselines, [key]: num }
    }));
  };

  const handleMultiplierChange = (key: string, value: string) => {
    const num = parseFloat(value) || 0;
    setConfig(prev => ({ ...prev, multipliers: { ...prev.multipliers, [key]: num } }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === HARDCODED_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('calc_auth', 'true'); // Сохраняем аутентификацию
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('calc_auth');
  };

  const handleCopyEstimate = () => {
    const totalVal = calculateTotal();
    const total = formatPrice(totalVal);
    const date = new Date().toLocaleDateString('ru-RU');
    const validUntilDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU');
    const timeline = calculateTimeline();
    let details = '';
    if (service === 'interior') details = `📏 Объем: ${area} м²`;
    if (service === 'exterior') details = `📸 Ракурсов: ${views} шт`;
    if (service === 'promo') details = `📸 Рекламных кадров: ${views} шт`;
    if (service === 'product' || service === 'modeling') details = `📦 Объектов: ${items} шт`;
    const resMult = calculateResolutionMultiplier();
    const mp = getMegapixels().toFixed(1);
    const options: string[] = [];
    if (!hasBrief) options.push(`🔸 Разработка концепции (Нет ТЗ)`);
    if (service === 'product' && needModeling) options.push(`🔸 Включено: Создание 3D модели`);
    if (service !== 'modeling' && resMult > 1.001) options.push(`🔸 Разрешение ${width}x${height} (${mp} MP)`);
    if (extraRevisions > 0) options.push(`🔸 Доп. правки: ${extraRevisions} круга`);
    if (modelsCost > 0) {
      const mCost = (isCurrencyConverted && typeof currencyRate === 'number') ? modelsCost / currencyRate : modelsCost;
      const mSym = isCurrencyConverted ? getCurrentCurrency().symbol : '₽';
      options.push(`🔸 Покупка моделей: ${Math.round(mCost)} ${mSym}`);
    }
    const conditions: string[] = [];
    if (isUrgent) conditions.push(`🔥 СРОЧНОСТЬ (Высший приоритет)`);
    if (isBusyClient) conditions.push(`🐢 Комфорт (Долгий фидбек)`);
    if (buyout) conditions.push(`💿 Исходники (Buyout)`);
    if (nda) conditions.push(`🔒 NDA (Конфиденциальность)`);
    const prepayAmount = formatPrice(totalVal * (prepayment / 100));
    const timelineText = isBusyClient
      ? `⏳ Срок реализации: Гибкий график`
      : `⏳ Срок реализации: ~${timeline.min}-${timeline.max} раб. дней`;
    const text = `
📋 СМЕТА ПРОЕКТА | VIZIDIZ 3D STUDIO
📅 Дата: ${date}
---------------------------
🔹 Услуга: ${CONTENT[service].title}
🔹 Уровень: ${complexity === 'low' ? 'Базовый' : complexity === 'medium' ? 'Стандарт' : 'Премиум'}
${details}
⚙️ Опции:
${options.length > 0 ? options.join('\n') : 'Стандартный пакет'}
${timelineText}
⚖️ Условия:
${conditions.length > 0 ? conditions.join('\n') : 'Стандартные условия'}
---------------------------
💰 ИТОГО: ${total}
📝 ВАЖНО:
• Предложение действительно до: ${validUntilDate}
• Бронь времени: после предоплаты ${prepayment}% (${prepayAmount})
`.trim();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resolutionPresets = [
    { label: 'FHD (Web)', w: 1920, h: 1080, desc: 'Стандарт для экранов' },
    { label: 'Instagram', w: 1080, h: 1350, desc: 'Вертикальный пост (4:5)' },
    { label: 'Stories', w: 1080, h: 1920, desc: 'Reels / TikTok' },
    { label: '4K Print', w: 3840, h: 2160, desc: 'Для печати и Zoom-in' },
  ];

  const timeline = calculateTimeline();
  const totalCost = calculateTotal();
  const isMinPriceApplied = totalCost === config.minOrderPrice && totalCost > 0;

  return (
    <section id="calculator" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modals */}
        {showBriefInfo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowBriefInfo(false)}>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl p-6 relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowBriefInfo(false)} className="absolute right-4 top-4 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" /> Состав ТЗ: {CONTENT[service].tabName}
              </h3>
              <ul className="space-y-3">
                {BRIEF_REQS[service].map((req: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-300 text-sm bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    <span className="text-accent font-bold">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {showSettings && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh]">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-900 rounded-t-2xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Settings className="w-5 h-5 text-accent" /> Конфигурация цен</h3>
                <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {!isAuthenticated ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-center space-y-1">
                      <h4 className="text-xl font-bold text-white">Доступ для сотрудников</h4>
                      <p className="text-sm text-slate-400">Введите пароль администратора</p>
                    </div>
                    <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
                      <input
                        type="password"
                        placeholder="Пароль (admin)"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className={`w-full bg-slate-950 border ${authError ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white text-center tracking-widest outline-none focus:border-accent`}
                      />
                      <Button type="submit" className="w-full py-3">Войти</Button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Header with Logout */}
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-green-400 flex items-center gap-2">
                        <Check className="w-4 h-4" /> Авторизовано
                      </p>
                      <button onClick={handleLogout} className="text-xs text-slate-400 hover:text-red-400 underline">
                        Выйти
                      </button>
                    </div>

                    {/* Currency */}
                    <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xs font-bold text-yellow-400 uppercase">Конвертация валют</h4>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <span className="text-xs text-slate-400">Включить</span>
                          <div className={`w-10 h-5 rounded-full relative transition-colors ${isCurrencyConverted ? 'bg-accent' : 'bg-slate-600'}`} onClick={() => setIsCurrencyConverted(!isCurrencyConverted)}>
                            <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${isCurrencyConverted ? 'left-6' : 'left-1'}`}></div>
                          </div>
                        </label>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs text-slate-400">Курс (1 {getCurrentCurrency().symbol} = ? RUB)</label>
                          <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white" value={currencyRate} onChange={(e) => setCurrencyRate(e.target.value)} />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs text-slate-400">Валюта</label>
                          <select className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white outline-none" value={selectedCurrencyCode} onChange={(e) => setSelectedCurrencyCode(e.target.value)}>
                            {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                          </select>
                        </div>
                      </div>
                    </section>

                    {/* Anti-Dumping */}
                    <section className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                      <h4 className="text-xs font-bold text-red-400 uppercase mb-4">Контроль прибыльности (Anti-Dumping)</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <NumberInput label="Мин. ставка в час (KPI) - RUB" value={config.minHourlyRate} onChange={(e: any) => setConfig({ ...config, minHourlyRate: parseInt(e.target.value) || 0 })} />
                        <NumberInput label="Минимальный заказ (Floor) - RUB" value={config.minOrderPrice} onChange={(e: any) => setConfig({ ...config, minOrderPrice: parseInt(e.target.value) || 0 })} />
                      </div>
                    </section>

                    {/* Rates Grid */}
                    <section>
                      <h4 className="text-xs font-bold text-accent uppercase mb-4 border-b border-slate-800 pb-2">Базовые ставки (RUB)</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {Object.keys(config.rates).map(key => (
                          <NumberInput key={key} className={getRateStatusClass(key)} label={key} value={config.rates[key]} onChange={(e: any) => handleRateChange(key, e.target.value)} />
                        ))}
                      </div>
                    </section>

                    {/* Timeline Baselines - ДОБАВЛЕНО */}
                    <section>
                      <h4 className="text-xs font-bold text-blue-400 uppercase mb-4 border-b border-slate-800 pb-2">Базовые сроки (дней)</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {Object.keys(config.timelineBaselines).map(key => (
                          <NumberInput key={key} label={key} value={config.timelineBaselines[key]} onChange={(e: any) => handleBaselineChange(key, e.target.value)} />
                        ))}
                      </div>
                    </section>

                    {/* Multipliers */}
                    <section>
                      <h4 className="text-xs font-bold text-green-400 uppercase mb-4 border-b border-slate-800 pb-2">Коэффициенты (x)</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Object.keys(config.multipliers).map(key => (
                          <div key={key} className="space-y-1">
                            <label className="text-xs text-slate-400">{key}</label>
                            <input type="number" step="0.1" className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white" value={config.multipliers[key]} onChange={(e) => handleMultiplierChange(key, e.target.value)} />
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- Public UI --- */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-slate-800 p-4 rounded-full border border-slate-700">
              <CalcIcon className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Профессиональный калькулятор</h2>
          <p className="text-slate-400">Рассчитайте стоимость проекта с учетом всех деталей</p>
        </div>

        {/* Tabs */}
        <div className="relative flex flex-wrap gap-2 justify-center items-center bg-slate-900/50 p-2 rounded-2xl border border-slate-800 mb-8">
          {Object.keys(CONTENT).map((tab) => (
            <button
              key={tab}
              onClick={() => { setService(tab); setComplexity('medium'); }}
              className={`px-4 sm:px-6 py-3 rounded-xl text-sm font-semibold transition-all flex-grow sm:flex-grow-0 ${
                service === tab
                  ? 'bg-accent text-slate-900 shadow-lg shadow-accent/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {CONTENT[tab].tabName}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Card */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              <div className="mb-8 border-b border-slate-700 pb-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{CONTENT[service].title}</h3>
                <p className="text-slate-400">{CONTENT[service].desc}</p>
              </div>
              <div className="space-y-8">
                {/* Inputs based on service */}
                <div className="grid grid-cols-1 gap-6">
                  {service === 'interior' && (
                    <NumberInput label="Площадь помещения (м²)" subLabel="мин. 10" value={area} onChange={(e: any) => setArea(Math.max(10, parseInt(e.target.value) || 0))} />
                  )}
                  {(service === 'exterior' || service === 'promo') && (
                    <NumberInput label={service === 'promo' ? "Количество кадров" : "Количество ракурсов"} subLabel="шт" value={views} onChange={(e: any) => setViews(Math.max(1, parseInt(e.target.value) || 0))} />
                  )}
                  {(service === 'product' || service === 'modeling') && (
                    <NumberInput label="Количество объектов" subLabel="шт" value={items} onChange={(e: any) => setItems(Math.max(1, parseInt(e.target.value) || 0))} />
                  )}
                </div>

                {/* Complexity */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block">Уровень проработки</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['low', 'medium', 'high'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setComplexity(level)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          complexity === level
                            ? 'bg-accent/10 border-accent text-white shadow-sm'
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        <div className="text-sm font-bold capitalize">
                          {level === 'low' ? 'Basic' : level === 'medium' ? 'Standard' : 'Premium'}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 p-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-sm text-slate-300">
                    <span className="text-accent font-bold text-xs uppercase mr-2">Детализация:</span>
                    {CONTENT[service].complexity[complexity]}
                  </div>
                </div>

                {/* Params Block */}
                <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-700/50">
                  {/* Brief */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-300">Наличие ТЗ</span>
                      <button onClick={() => setShowBriefInfo(true)} className="text-slate-500 hover:text-accent"><Info className="w-4 h-4" /></button>
                    </div>
                    <button onClick={() => setHasBrief(!hasBrief)} className={`px-3 py-1 rounded text-xs font-bold transition-colors ${hasBrief ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {hasBrief ? 'ЕСТЬ' : 'НЕТ'}
                    </button>
                  </div>

                  {/* Modeling Switch */}
                  {service === 'product' && (
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-300">Нужно моделирование?</span>
                        <span className="text-[10px] text-slate-500">Добавит стоимость моделинга</span>
                      </div>
                      <button onClick={() => setNeedModeling(!needModeling)} className={`w-10 h-5 rounded-full relative transition-colors ${needModeling ? 'bg-accent' : 'bg-slate-700'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all ${needModeling ? 'left-6' : 'left-1'}`}></div>
                      </button>
                    </div>
                  )}

                  {/* Models Cost */}
                  <div className="mb-4 pb-4 border-b border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm text-slate-300">Расходы на модели (₽)</label>
                    </div>
                    <input type="number" value={modelsCost === 0 ? '' : modelsCost} onChange={(e) => setModelsCost(Math.max(0, parseInt(e.target.value) || 0))} placeholder="0" className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-accent" />
                  </div>

                  {/* Resolution */}
                  {service !== 'modeling' && (
                    <div className="mb-4 pb-4 border-b border-slate-800">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-slate-300">Разрешение</span>
                        <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{getMegapixels().toFixed(1)} MP</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="relative">
                          <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 0)} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm" />
                          <span className="absolute right-3 top-2 text-slate-500 text-xs">W</span>
                        </div>
                        <div className="relative">
                          <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value) || 0)} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm" />
                          <span className="absolute right-3 top-2 text-slate-500 text-xs">H</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {resolutionPresets.map(p => (
                          <button key={p.label} onClick={() => { setWidth(p.w); setHeight(p.h); }} className={`px-2 py-1 rounded border text-[10px] ${width === p.w && height === p.h ? 'bg-accent border-accent text-slate-900' : 'bg-slate-800 border-slate-600 text-slate-400'}`}>
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Revisions */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <span className="text-sm text-slate-300">Доп. круги правок</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setExtraRevisions(Math.max(0, extraRevisions - 1))} className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center border border-slate-600 text-slate-300 hover:text-white">-</button>
                      <span className="text-sm font-bold w-4 text-center">{extraRevisions}</span>
                      <button onClick={() => setExtraRevisions(extraRevisions + 1)} className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center border border-slate-600 text-slate-300 hover:text-white">+</button>
                    </div>
                  </div>

                  {/* Toggles Grid WITH TOOLTIPS - ДОБАВЛЕНО */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Срочность */}
                    <div className="relative group">
                      <button onClick={() => { setIsUrgent(!isUrgent); if (!isUrgent) setIsBusyClient(false); }} className={`w-full p-3 rounded-lg border text-left transition-all ${isUrgent ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        <div className="font-bold text-sm flex items-center gap-2"><Zap className="w-4 h-4" /> Срочность</div>
                      </button>
                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 border border-slate-700 text-white text-[10px] p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        Работа в сжатые сроки, овертаймы, выходные. Высший приоритет.
                        <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>

                    {/* Комфорт */}
                    <div className="relative group">
                      <button onClick={() => { setIsBusyClient(!isBusyClient); if (!isBusyClient) setIsUrgent(false); }} className={`w-full p-3 rounded-lg border text-left transition-all ${isBusyClient ? 'bg-yellow-900/30 border-yellow-500 text-yellow-200' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        <div className="font-bold text-sm flex items-center gap-2"><Clock className="w-4 h-4" /> Комфорт</div>
                      </button>
                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 border border-slate-700 text-white text-[10px] p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        Легализует ваши задержки фидбека. Дедлайн становится плавающим. Комфортный темп.
                        <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>

                    {/* Исходники */}
                    <div className="relative group">
                      <button onClick={() => setBuyout(!buyout)} className={`w-full p-3 rounded-lg border text-left transition-all ${buyout ? 'bg-purple-900/30 border-purple-500 text-purple-200' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        <div className="font-bold text-sm flex items-center gap-2"><DollarSign className="w-4 h-4" /> Исходники</div>
                      </button>
                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 border border-slate-700 text-white text-[10px] p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        Передача исходных файлов сцены и прав на них.
                        <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>

                    {/* NDA */}
                    <div className="relative group">
                      <button onClick={() => setNda(!nda)} className={`w-full p-3 rounded-lg border text-left transition-all ${nda ? 'bg-emerald-900/30 border-emerald-500 text-emerald-200' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                        <div className="font-bold text-sm flex items-center gap-2"><Shield className="w-4 h-4" /> NDA</div>
                      </button>
                      <div className="absolute bottom-full left-0 mb-2 w-48 bg-slate-900 border border-slate-700 text-white text-[10px] p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        Строгая конфиденциальность. Без публикации в портфолио исполнителя.
                        <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total / Summary Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" /> Итоговая смета
              </h3>
              <div className="space-y-4 mb-8">
                {/* Timeline */}
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-wider block mb-1">Срок реализации</span>
                  <div className="text-white font-bold text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    {isBusyClient ? 'Гибкий график' : `${timeline.min} - ${timeline.max} дней`}
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center py-4">
                  <div className="text-slate-400 text-sm mb-1">Ориентировочная стоимость</div>
                  <div className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">
                    {formatPrice(totalCost)}
                  </div>
                  {isMinPriceApplied && (
                    <div className="text-xs text-orange-400 bg-orange-900/20 py-1 px-2 rounded inline-block">
                      Минимальный заказ
                    </div>
                  )}
                </div>

                {/* Prepayment Selector */}
                <div className="flex justify-between items-center bg-slate-900 p-2 rounded-lg">
                  <span className="text-xs text-slate-400 ml-2">Предоплата</span>
                  <div className="flex bg-slate-800 rounded p-1">
                    <button onClick={() => setPrepayment(50)} className={`px-3 py-1 text-xs font-bold rounded ${prepayment === 50 ? 'bg-accent text-slate-900' : 'text-slate-400'}`}>50%</button>
                    <button onClick={() => setPrepayment(100)} className={`px-3 py-1 text-xs font-bold rounded ${prepayment === 100 ? 'bg-accent text-slate-900' : 'text-slate-400'}`}>100%</button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleCopyEstimate} className="w-full py-4 text-lg">
                  {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                  {copied ? 'Скопировано!' : 'Копировать смету'}
                </Button>
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  Расчет является предварительным. Итоговая сумма фиксируется после утверждения ТЗ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;