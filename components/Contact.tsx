import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Check } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mnjgrjbv', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          _subject: `🎨 Заявка с сайта Vizidiz: ${formData.name}`,
          _replyto: formData.email,
          _next: window.location.href
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || 'Ошибка отправки');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('Не удалось отправить заявку. Попробуйте написать напрямую в Max или на почту.');
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">Давайте обсудим ваш проект</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Я всегда открыт для новых идей и сотрудничества. Свяжитесь со мной для получения бесплатной консультации и расчета стоимости вашего проекта.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Телефон</h4>
                  <p className="text-slate-400">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-slate-400">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Локация</h4>
                  <p className="text-slate-400">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-slate-600" 
                    placeholder="Иван Иванов" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-slate-600" 
                    placeholder="+7 (___) ___-__-__" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-slate-600" 
                  placeholder="example@mail.ru" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">О проекте</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-slate-600" 
                  placeholder="Расскажите немного о вашем проекте..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`w-full font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center ${
                  status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-accent text-slate-900 hover:bg-yellow-500 disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Заявка отправлена
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Footer — копирайт + соцсети */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-slate-800">
        <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center gap-4 text-slate-500 text-sm">
          {/* Копирайт — всегда по центру */}
          <p className="text-center">
            {COMPANY_INFO.copyright}
          </p>
          
          {/* Соцсети — на мобильном над текстом (по центру), на десктопе слева */}
          <div className="flex items-center gap-4 sm:absolute sm:left-0">
            {/* ВКонтакте */}
            <a
              href="https://vk.com/club72144247"  // ← Поменяйте на свою ссылку
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-[#0077FF] rounded-full transition-colors group"
              title="ВКонтакте"
            >
              {/* Иконка VK — исправленная, по центру */}
              <svg 
                className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" 
                viewBox="-2 -1 24 24" 
                fill="currentColor"
              >
                <path d="M15.684 13.673c.758.736 1.34 1.373 1.585 2.112.062.186.068.225.04.282-.046.095-.19.143-.45.143h-2.583c-.768 0-1.077-.282-1.742-.992-.497-.53-1.025-1.144-1.393-1.144-.19 0-.265.082-.265.485v1.272c0 .326-.104.532-.88.558-2.61.087-4.706-1.76-6.425-5.26C2.398 8.875 1.48 6.353 1.48 6.273c0-.075.093-.146.23-.146h2.585c.237 0 .428.09.544.37.587 1.417 1.573 3.336 1.972 3.996.347.574.52.696.71.696.108 0 .193-.058.193-.57V7.575c-.046-1.353-.807-1.465-.807-1.954 0-.23.197-.478.508-.478h2.836c.4 0 .53.197.53.642v3.313c0 .358.163.486.265.486.2 0 .363-.102.735-.61.76-1.04 1.305-2.553 1.305-2.553.067-.14.242-.266.58-.266h2.584c.738 0 .864.24.705.808-.344 1.222-1.895 3.328-2.56 4.14-.545.663-.612.873.12 1.57z"/>
              </svg>
            </a>
            
            {/* Max Messenger — официальная иконка */}
            <a
              href="https://max.ru/u/f9LHodD0cOLh-Isielh0dfxWNiLgSIHSruaBU2s_ocT6nn2s903vM4VDQ2c"  // ← Поменяйте на свою ссылку
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-[#0077FF] rounded-full transition-colors group"
              title="Max"
            >
              {/* Официальная иконка Max Messenger */}
              <svg 
                className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                fill="currentColor"
              >
                <path d="M83.914 77.442c8.441,-10.25 12.321,-22.922 10.453,-36.7 -1.02,-8.87 -4.809,-16.537 -10.088,-23.542 -2.73,-3.62 -7.882,-8.071 -11.912,-10.455 -21.548,-12.743 -48.523,-6.768 -63.107,12.347 -9.874,12.943 -11.264,29.017 -6.934,47.811 1.414,6.134 3.351,11.781 4.155,18.057 0.226,1.759 0.157,5.52 0.692,6.747 1.656,3.797 7.312,2.929 11.082,1.575 2.408,-0.866 5.242,-2.364 7.105,-3.989 0.794,-0.692 1.158,-1.203 1.91,-1.862 2.221,1.014 5.268,4.366 11.762,5.895 4.784,1.126 11.497,1.053 16.488,0.292 10.294,-1.569 18.007,-6.094 25.5,-13 0.957,-0.882 2.025,-2.166 2.894,-3.176zm-12.809 -35.313c1.39,4.518 0.233,11.07 -1.596,14.844 -4.026,8.307 -11.933,13.705 -21.269,14.048 -7.694,0.284 -11.594,-3.445 -13.514,-4.055 -5.191,4.237 -7.812,8.703 -10.382,-4.409 -2.48,-12.653 -0.802,-27.483 9.825,-35.204 4.379,-3.181 10.616,-4.796 16.232,-4.032 2.175,0.297 3.869,0.755 5.943,1.54 6.96,2.633 13.327,9.625 14.761,17.268z"/>
              </svg>
            </a>

            {/* Telegram — добавь этот блок после кнопки Max */}
            <a
              href="https://t.me/vizidiz"  // ← Замени на свой ник
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-[#0088cc] rounded-full transition-colors group"
              title="Telegram"
            >
              {/* Иконка Telegram — структура как у VK/Max, только твой path */}
              <svg 
                className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="3 1 20 20" 
                fill="currentColor"
              >
                <path d="M16.114,9.291c.552-.552,1.1-1.84-1.2-.276-3.268,2.255-6.489,4.372-6.489,4.372a2.7,2.7,0,0,1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0,0,7.961-3.267,10.722-4.418,1.058-.46,4.647-1.932,4.647-1.932s1.657-.645,1.519.92c-.046.644-.414,2.9-.782,5.338-.553,3.451-1.151,7.225-1.151,7.225s-.092,1.058-.874,1.242a3.787,3.787,0,0,1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872,0,0,1,.046-1.473C12.939,12.375,14.918,10.488,16.114,9.291Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;