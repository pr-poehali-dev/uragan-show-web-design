import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

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
    { title: 'Современные хиты', icon: 'Music2' },
    { title: 'Рок классика', icon: 'Guitar' },
    { title: 'Поп музыка', icon: 'Radio' },
    { title: 'Танцевальные треки', icon: 'Headphones' },
  ];

  const bandMembers = [
    { name: 'Алексей Иванов', role: 'Вокал', icon: 'Mic2' },
    { name: 'Мария Петрова', role: 'Клавиши', icon: 'Music' },
    { name: 'Дмитрий Сидоров', role: 'Гитара', icon: 'Guitar' },
    { name: 'Ольга Смирнова', role: 'Ударные', icon: 'Drum' },
  ];

  const videos = [
    { title: 'Live выступление 2024', id: 'dQw4w9WgXcQ' },
    { title: 'Корпоративное мероприятие', id: 'dQw4w9WgXcQ' },
    { title: 'Свадебная церемония', id: 'dQw4w9WgXcQ' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-primary font-heading">URAGAN SHOW</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О группе', 'Репертуар', 'Видео', 'Состав', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
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
            backgroundImage: 'url(https://v3b.fal.media/files/b/zebra/QkxRUU_if9sgs_-TmMoPh_output.png)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 font-heading">URAGAN SHOW</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Кавер-группа №1 для вашего мероприятия</p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
            onClick={() => scrollToSection('контакты')}
          >
            Забронировать выступление
          </Button>
        </div>
      </section>

      <section id="о-группе" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-heading">О группе</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                  URAGAN SHOW — это профессиональная кавер-группа, которая создает незабываемую атмосферу 
                  на любых мероприятиях. Мы специализируемся на живых выступлениях с репертуаром от 
                  классических хитов до современных треков.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Наша команда — это опытные музыканты с консерваторским образованием и многолетним 
                  опытом работы на крупнейших площадках страны. Мы гарантируем качественный звук, 
                  энергичное шоу и море позитивных эмоций!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="репертуар" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-heading">Репертуар</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {repertoire.map((item, idx) => (
              <Card 
                key={idx} 
                className="hover:scale-105 transition-transform duration-300 border-2 border-primary/20 hover:border-primary cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon name={item.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="видео" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-heading">Видео</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg font-heading">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="состав" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-heading">Состав</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bandMembers.map((member, idx) => (
              <Card 
                key={idx} 
                className="hover:scale-105 transition-transform duration-300 border-2 border-primary/20 hover:border-primary"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={member.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 font-heading">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-primary/30">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/90 text-secondary border-primary/20"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white/90 text-secondary border-primary/20"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Тип мероприятия"
                      value={formData.event}
                      onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                      required
                      className="bg-white/90 text-secondary border-primary/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Дополнительная информация"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/90 text-secondary border-primary/20 min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6"
                  >
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-white/20 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <span className="text-lg">info@uragan-show.ru</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <span className="text-lg">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2024 URAGAN SHOW. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
