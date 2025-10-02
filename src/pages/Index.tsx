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

  const products = [
    {
      title: "Самосвалы",
      description: "Тяжелые самосвалы для горнодобывающей и строительной промышленности",
      icon: "Truck"
    },
    {
      title: "Автокраны",
      description: "Краны различной грузоподъемности для строительных работ",
      icon: "Construction"
    },
    {
      title: "Дорожные катки",
      description: "Виброкатки и грунтовые катки для дорожного строительства",
      icon: "Disc"
    },
    {
      title: "Бетононасосы",
      description: "Стационарные и мобильные бетононасосы",
      icon: "Workflow"
    },
    {
      title: "Бульдозеры",
      description: "Гусеничные бульдозеры для землеройных работ",
      icon: "HardDrive"
    },
    {
      title: "Экскаваторы",
      description: "Гусеничные и колесные экскаваторы различной мощности",
      icon: "Pickaxe"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-orange-600">
              ТехГлобал
            </h1>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">ГЛАВНАЯ</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">ПРОДУКЦИЯ</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">О НАС</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">КОНТАКТЫ</a>
            </div>
            <Button className="hidden md:block bg-orange-600 hover:bg-orange-700">
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-20 pb-32 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Промышленная техника
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Прямые поставки спецтехники из Китая
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                ТехГлобал — ведущий поставщик промышленной техники и оборудования. Работаем напрямую с заводами XCMG, SANY, Shantui.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-20 blur-3xl rounded-3xl"></div>
              <img 
                src="/img/16d94eb9-ab9c-43f8-aaaa-152d8df4c30b.jpg" 
                alt="Промышленная техника XCMG" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Наша продукция
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог техники</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Широкий ассортимент строительной и промышленной техники от ведущих китайских производителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={product.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/57c22136-6a10-4e8b-b858-d35d66062f77.jpg" 
                alt="Коллекция спецтехники" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-semibold">
                Качество и надежность
              </div>
              <h2 className="text-4xl font-bold">Почему выбирают ТехГлобал</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Icon name="Factory" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Прямые контракты с заводами</h3>
                    <p className="text-gray-400">Работаем напрямую с производителями без посредников</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Icon name="BadgePercent" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Конкурентные цены</h3>
                    <p className="text-gray-400">Лучшие цены благодаря прямым поставкам</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Icon name="ShieldCheck" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                    <p className="text-gray-400">Все оборудование проходит строгий контроль качества</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Icon name="Truck" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                    <p className="text-gray-400">Налаженная логистика по всей России</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                О компании
              </div>
              <h2 className="text-4xl font-bold">ТехГлобал — надежный партнер в поставках техники</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Наша компания специализируется на прямых поставках промышленного оборудования и спецтехники из Китая. 
                Мы работаем с ведущими заводами-производителями: XCMG, SANY, Shantui, Lonking.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                За годы работы мы зарекомендовали себя как надежный поставщик качественной техники. 
                Наши специалисты помогут подобрать оптимальное решение для вашего проекта и обеспечат 
                полное сопровождение сделки от заказа до доставки.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-gray-600">единиц техники</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/006e5409-bdbb-4419-a0e1-88dd2c35313b.jpg" 
                alt="Команда ТехГлобал" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-gray-600 text-lg">
              Сотрудничаем с ведущими производителями строительной техники
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['XCMG', 'SANY', 'Shantui', 'Lonking'].map((brand) => (
              <div key={brand} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-3xl font-bold text-orange-600">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Свяжитесь с нами
            </div>
            <h2 className="text-4xl font-bold mb-4">Получите консультацию</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">Южно-Сахалинск, пер. Солнечный, д.9А, оф. 307</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефоны</h3>
                    <p className="text-gray-600">+7 (962) 125-07-00</p>
                    <p className="text-gray-600">+7 (995) 965-80-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">sales@techglobal.ru</p>
                  </div>
                </div>
              </div>

              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Телефон" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
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
                    <Button type="submit" className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-orange-600 mb-4">
                ТехГлобал
              </h3>
              <p className="text-gray-400 max-w-md">
                Ведущий поставщик промышленной техники и оборудования из Китая. 
                Прямые контракты с заводами, гарантия качества, быстрая доставка.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-orange-500 transition-colors">Главная</a></li>
                <li><a href="#products" className="hover:text-orange-500 transition-colors">Продукция</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition-colors">О нас</a></li>
                <li><a href="#contacts" className="hover:text-orange-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+7 (962) 125-07-00</li>
                <li>+7 (995) 965-80-00</li>
                <li>sales@techglobal.ru</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 ТехГлобал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
