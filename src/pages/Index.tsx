import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import Logo from '@/components/Logo';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', event: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const repertoire = [
    { artist: 'Metallica', song: 'Enter Sandman' },
    { artist: 'AC/DC', song: 'Highway to Hell' },
    { artist: 'Nirvana', song: 'Smells Like Teen Spirit' },
    { artist: 'Queen', song: 'Bohemian Rhapsody' },
    { artist: 'Led Zeppelin', song: 'Stairway to Heaven' },
    { artist: 'The Beatles', song: 'Come Together' },
    { artist: 'Pink Floyd', song: 'Comfortably Numb' },
    { artist: 'Guns N\' Roses', song: 'Sweet Child O\' Mine' },
  ];

  const events = [
    { 
      title: 'День рождения',
      description: 'Сделаем ваш праздник незабываемым! Играем любимые хиты именинника и его гостей.',
      icon: 'Cake'
    },
    { 
      title: 'Свадьба',
      description: 'Нежные баллады для первого танца и энергичные хиты для веселья гостей.',
      icon: 'Heart'
    },
    { 
      title: 'Корпоратив',
      description: 'Превратим ваш корпоратив в яркое событие года! Энергичные рок-хиты и интерактив.',
      icon: 'Briefcase'
    },
    { 
      title: 'Выпускной',
      description: 'Современные хиты, культовые рок-композиции и мощная энергетика сцены.',
      icon: 'GraduationCap'
    },
  ];

  const advantages = [
    { text: 'Мощный live-звук с профессиональной световой шоу-программой', icon: 'Volume2' },
    { text: 'Состав адаптируем под ваш формат и бюджет', icon: 'Users' },
    { text: 'Играем то, что зажигает именно вашу публику', icon: 'Music' },
    { text: 'Ответственность, драйв и отличное настроение гарантируем', icon: 'Zap' },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/a53d9572-77f4-43ca-8e66-cc20d77ca592.jpg',
    'https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/8249d3c2-e28a-4a1a-9694-1a87d71b06b1.jpg',
    'https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/1fff8671-2142-4820-9478-eff977b28e09.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="hidden md:flex gap-8">
              {['Главная', 'Мероприятия', 'Репертуар', 'Галерея', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-all duration-300 font-light tracking-wider text-sm uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/a53d9572-77f4-43ca-8e66-cc20d77ca592.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-pink-100/70 to-purple-100/80"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 glass rounded-full">
            <span className="text-primary font-light tracking-widest text-sm uppercase">Премиальное музыкальное шоу</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-heading font-bold mb-6 text-foreground">
            URAGAN SHOW
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground/80 font-elegant italic">
            Легендарные хиты в роскошном исполнении
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-7 text-lg font-light tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => scrollToSection('контакты')}
            >
              Забронировать выступление
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-7 text-lg font-light tracking-wider rounded-full transition-all duration-300"
              onClick={() => scrollToSection('галерея')}
            >
              Смотреть галерею
            </Button>
          </div>
        </div>
      </section>

      <section id="мероприятия" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block w-20 h-1 gold-shimmer mb-6 rounded-full"></div>
            <h2 className="text-6xl font-heading font-bold mb-6 text-foreground">Мероприятия</h2>
            <p className="text-xl text-muted-foreground font-elegant italic max-w-2xl mx-auto">
              Создаём незабываемую атмосферу на любом празднике
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {events.map((event, idx) => (
              <Card key={idx} className="glass border-2 border-white/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 rounded-3xl overflow-hidden group">
                <CardContent className="p-10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
                      <Icon name={event.icon} size={36} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-heading mb-3 text-foreground">{event.title}</h3>
                      <p className="text-foreground/70 leading-relaxed font-light">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-5xl mx-auto glass rounded-3xl p-10 border border-white/50">
            <h3 className="text-3xl font-heading text-center mb-10 text-foreground">Наши преимущества</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex-shrink-0">
                    <Icon name={adv.icon} size={24} className="text-primary" />
                  </div>
                  <p className="text-foreground/80 font-light pt-2">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="репертуар" className="py-32 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block w-20 h-1 gold-shimmer mb-6 rounded-full"></div>
            <h2 className="text-6xl font-heading font-bold mb-6 text-foreground">Репертуар</h2>
            <p className="text-xl text-muted-foreground font-elegant italic">
              Лучшие хиты мировой рок-сцены
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {repertoire.map((item, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-2xl border border-white/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
                    <Icon name="Music" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-primary mb-1">
                      {item.artist}
                    </h3>
                    <p className="text-muted-foreground font-light">{item.song}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-muted-foreground text-lg font-elegant italic">
            И многие другие хиты мировой рок-сцены!
          </p>
        </div>
      </section>

      <section id="галерея" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block w-20 h-1 gold-shimmer mb-6 rounded-full"></div>
            <h2 className="text-6xl font-heading font-bold mb-6 text-foreground">Галерея</h2>
            <p className="text-xl text-muted-foreground font-elegant italic">
              Моменты наших выступлений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block w-20 h-1 gold-shimmer mb-6 rounded-full"></div>
            <h2 className="text-6xl font-heading font-bold mb-6 text-foreground">Контакты</h2>
            <p className="text-xl text-muted-foreground font-elegant italic">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="glass border-2 border-white/50 rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <h3 className="text-3xl font-heading mb-8 text-foreground">Наши контакты</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
                      <Icon name="Phone" size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-light text-sm text-muted-foreground mb-1 tracking-wider uppercase">Телефон</p>
                      <a href="tel:+79991234567" className="text-2xl hover:text-primary transition-colors font-light">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
                      <Icon name="Mail" size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-light text-sm text-muted-foreground mb-1 tracking-wider uppercase">Email</p>
                      <a href="mailto:info@uragan-show.ru" className="text-2xl hover:text-primary transition-colors font-light">
                        info@uragan-show.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
                      <Icon name="MapPin" size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-light text-sm text-muted-foreground mb-1 tracking-wider uppercase">Город</p>
                      <p className="text-2xl font-light">Москва, Россия</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-border/30">
                    <p className="font-light text-sm text-muted-foreground mb-6 tracking-wider uppercase">Социальные сети</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center hover:from-pink-200 hover:to-purple-200 transition-all hover:scale-110">
                        <Icon name="Instagram" size={24} className="text-primary" fallback="Music" />
                      </a>
                      <a href="#" className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center hover:from-pink-200 hover:to-purple-200 transition-all hover:scale-110">
                        <Icon name="Facebook" size={24} className="text-primary" fallback="Music" />
                      </a>
                      <a href="#" className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center hover:from-pink-200 hover:to-purple-200 transition-all hover:scale-110">
                        <Icon name="Youtube" size={24} className="text-primary" fallback="Music" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-2 border-white/50 rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <h3 className="text-3xl font-heading mb-8 text-foreground">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2 tracking-wider uppercase">Имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      required
                      className="h-12 rounded-xl border-border/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2 tracking-wider uppercase">Телефон</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="h-12 rounded-xl border-border/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2 tracking-wider uppercase">Тип мероприятия</label>
                    <Input
                      value={formData.event}
                      onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                      placeholder="Свадьба, корпоратив..."
                      required
                      className="h-12 rounded-xl border-border/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-muted-foreground mb-2 tracking-wider uppercase">Сообщение</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем мероприятии..."
                      rows={4}
                      className="rounded-xl border-border/30 focus:border-primary resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-lg font-light tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-border/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <Logo className="justify-center mb-6" />
          <p className="text-muted-foreground font-light">
            © 2024 URAGAN SHOW. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
