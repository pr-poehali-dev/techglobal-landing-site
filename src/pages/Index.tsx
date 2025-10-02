import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ТехГлобал
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#main" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-600 hover:text-primary transition-colors">Преимущества</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Прямые поставки из <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Китая</span>
              </h2>
              <p className="text-xl text-gray-600">
                Спецтехника, промышленное оборудование и материалы напрямую от заводов до конечного потребителя
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <img 
                src="/img/5dad06c2-a20d-4a1e-b890-b37ef25d043f.jpg" 
                alt="Кран XCMG и бульдозер SANY" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">О компании ТехГлобал</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ТехГлобал — ваш надежный партнер в поставках промышленного оборудования и спецтехники из Китая. 
              Мы работаем напрямую с ведущими китайскими производителями, обеспечивая нашим клиентам доступ 
              к качественной технике по оптимальным ценам без посредников.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Наша команда экспертов обладает многолетним опытом в логистике, таможенном оформлении и 
              техническом сопровождении поставок. Мы гарантируем полный цикл обслуживания — от выбора 
              оборудования до доставки и пуско-наладочных работ.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <img src="/img/9d53b3a4-f785-4b06-b0fb-b4e0abb2f3a1.jpg" alt="Спецтехника" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold">Спецтехника</h3>
                <p className="text-gray-600">
                  Экскаваторы, бульдозеры, погрузчики, автокраны и другая строительная техника от проверенных производителей
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <img src="/img/a2176b5c-18dc-41f9-b99b-2d738e01257d.jpg" alt="Промышленное оборудование" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold">Промышленное оборудование</h3>
                <p className="text-gray-600">
                  Станки, производственные линии, компрессоры, генераторы для различных отраслей промышленности
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Package" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold">Материалы и комплектующие</h3>
                <p className="text-gray-600">
                  Запчасти, расходные материалы, комплектующие для техники и производственного оборудования
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="ShieldCheck" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold">Прямые поставки</h3>
              <p className="text-sm text-gray-600">Работаем напрямую с заводами без посредников</p>
            </div>

            <div className="text-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="BadgePercent" className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold">Лучшие цены</h3>
              <p className="text-sm text-gray-600">Оптимальные условия благодаря прямым контрактам</p>
            </div>

            <div className="text-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Clock" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">Отлаженная логистика и таможенное оформление</p>
            </div>

            <div className="text-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Headphones" className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold">Полное сопровождение</h3>
              <p className="text-sm text-gray-600">Поддержка на всех этапах от заказа до запуска</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши проекты</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы гордимся реализованными проектами и доверием наших клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/93e171a3-8bcd-4ade-ab7c-7b2f41246dab.jpg" 
                  alt="Строительный проект" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">ЖК "Солнечный"</h3>
                  <p className="text-sm">Поставка 15 единиц спецтехники XCMG</p>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/8b8b78f8-92b4-4b54-a278-13e69dff8840.jpg" 
                  alt="Промышленный проект" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Завод "Техмаш"</h3>
                  <p className="text-sm">Комплектация производственной линии</p>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/9ca1efa0-04f9-460f-a340-b38f532de3a8.jpg" 
                  alt="Горнодобывающий проект" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Карьер "Восток"</h3>
                  <p className="text-sm">Поставка горнодобывающей техники</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши партнёры</h2>
          <p className="text-center text-gray-600 mb-12">
            Работаем с ведущими производителями из Китая
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">XCMG</h3>
                <p className="text-sm text-gray-500 mt-1">Спецтехника</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">SANY</h3>
                <p className="text-sm text-gray-500 mt-1">Краны и экскаваторы</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Lonking</h3>
                <p className="text-sm text-gray-500 mt-1">Погрузчики</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Shantui</h3>
                <p className="text-sm text-gray-500 mt-1">Бульдозеры</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Каталог спецтехники XCMG</h2>
            <p className="text-lg text-gray-600">
              Скачайте полный каталог спецтехники XCMG с техническими характеристиками и ценами
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="FileText" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Каталог экскаваторов XCMG</h3>
                  <p className="text-gray-600">Полная линейка гусеничных и колесных экскаваторов</p>
                  <Button className="w-full" variant="outline">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать каталог (PDF)
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="FileText" className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Каталог кранов XCMG</h3>
                  <p className="text-gray-600">Автокраны, башенные краны, мобильные краны</p>
                  <Button className="w-full" variant="outline">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать каталог (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес офиса</h3>
                    <p className="text-gray-600">Южно-Сахалинск, пер. Солнечный, д.9А, оф. 307</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (962) 125-07-00</p>
                    <p className="text-gray-600">+7 (995) 965-80-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">sales@techglobal.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Время работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Телефон" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ТехГлобал
              </h3>
              <p className="text-gray-400">
                Прямые поставки спецтехники и промышленного оборудования из Китая
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#main" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (962) 125-07-00</li>
                <li>+7 (995) 965-80-00</li>
                <li>sales@techglobal.ru</li>
                <li>Южно-Сахалинск, пер. Солнечный, д.9А, оф. 307</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 ТехГлобал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;