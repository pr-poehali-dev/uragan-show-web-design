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
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-primary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="hidden md:flex gap-6">
              {['Главная', 'Мероприятия', 'Репертуар', 'Галерея', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(227,30,36,0.6)] transition-all duration-300 font-medium font-bebas text-lg tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/a53d9572-77f4-43ca-8e66-cc20d77ca592.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in px-4">
          <h1 className="text-7xl md:text-9xl font-bebas mb-6 text-white tracking-[0.15em] glow-text">
            URAGAN SHOW
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-white/90 font-bebas tracking-wider">Легендарные хиты в живом исполнении</p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-xl font-bebas tracking-wide shadow-[0_0_20px_rgba(227,30,36,0.6)] hover:shadow-[0_0_30px_rgba(227,30,36,0.8)] transition-all duration-300"
            onClick={() => scrollToSection('контакты')}
          >
            <Icon name="Phone" size={24} className="mr-2" />
            Забронировать выступление
          </Button>
        </div>
      </section>

      <section id="мероприятия" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-4 text-primary tracking-wider">Мероприятия</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Создаём незабываемую атмосферу на любом празднике</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {events.map((event, idx) => (
              <Card key={idx} className="bg-card border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name={event.icon} size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bebas mb-2 text-primary tracking-wide">{event.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bebas text-center mb-8 text-white tracking-wide">Наши преимущества</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-card/50 p-6 rounded-lg border border-primary/10">
                  <Icon name={adv.icon} size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="репертуар" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-4 text-primary tracking-wider">Репертуар</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Лучшие хиты мировой рок-сцены</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {repertoire.map((item, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <Icon name="Music" size={24} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bebas text-xl text-primary mb-1 tracking-wide">
                      {item.artist}
                    </h3>
                    <p className="text-muted-foreground">{item.song}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground text-lg">
            И многие другие хиты мировой рок-сцены!
          </p>
        </div>
      </section>

      <section id="галерея" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-4 text-primary tracking-wider">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Моменты наших выступлений</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg glow-border hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="контакты" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bebas text-center mb-4 text-primary tracking-wider">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами для бронирования</p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bebas mb-6 text-primary tracking-wide">Наши контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Телефон</p>
                      <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@uragan-show.ru" className="text-lg hover:text-primary transition-colors">
                        info@uragan-show.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Город</p>
                      <p className="text-lg">Москва, Россия</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-sm text-muted-foreground mb-4">Социальные сети</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Icon name="Instagram" size={24} className="text-primary" fallback="Music" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Icon name="Facebook" size={24} className="text-primary" fallback="Music" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Icon name="Youtube" size={24} className="text-primary" fallback="Music" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bebas mb-6 text-primary tracking-wide">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-primary/20"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-primary/20"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Тип мероприятия"
                      value={formData.event}
                      onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                      required
                      className="bg-background border-primary/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Дополнительная информация"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-primary/20 min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6 shadow-[0_0_20px_rgba(227,30,36,0.6)] hover:shadow-[0_0_30px_rgba(227,30,36,0.8)] transition-all duration-300"
                  >
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-primary/20 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={24} className="text-primary drop-shadow-[0_0_10px_rgba(227,30,36,0.6)]" />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={24} className="text-primary drop-shadow-[0_0_10px_rgba(227,30,36,0.6)]" />
                    <span className="text-lg">info@uragan-show.ru</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary drop-shadow-[0_0_10px_rgba(227,30,36,0.6)]" />
                    <span className="text-lg">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 URAGAN SHOW. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;