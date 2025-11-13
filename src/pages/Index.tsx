import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const achievements = [
  { id: 1, title: 'Первая Кровь', description: 'Совершите первое убийство', icon: 'Sword', rarity: 'common', points: 10, unlocked: true },
  { id: 2, title: 'Киберниндзя', description: 'Завершите миссию незамеченным', icon: 'Eye', rarity: 'rare', points: 25, unlocked: true },
  { id: 3, title: 'Хакер Легенда', description: 'Взломайте 50 систем', icon: 'Terminal', rarity: 'epic', points: 50, unlocked: false },
  { id: 4, title: 'Повелитель Неона', description: 'Соберите все артефакты', icon: 'Crown', rarity: 'legendary', points: 100, unlocked: false },
  { id: 5, title: 'Снайпер', description: 'Попадите в голову 100 раз', icon: 'Target', rarity: 'rare', points: 30, unlocked: true },
  { id: 6, title: 'Скоростной Бегун', description: 'Завершите игру за 4 часа', icon: 'Zap', rarity: 'epic', points: 75, unlocked: false },
];

const characters = [
  { name: 'Рэйвен', role: 'Киберниндзя', description: 'Мастер скрытности и ближнего боя', image: 'https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/4446832e-3c6f-42bf-a055-463ef28063f9.jpg' },
  { name: 'Нова', role: 'Хакер', description: 'Взламывает любые системы за секунды', image: 'https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/4446832e-3c6f-42bf-a055-463ef28063f9.jpg' },
  { name: 'Титан', role: 'Тяжеловес', description: 'Неудержимая разрушительная сила', image: 'https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/4446832e-3c6f-42bf-a055-463ef28063f9.jpg' },
];

const rarityColors = {
  common: 'bg-gray-500/20 border-gray-500 text-gray-300',
  rare: 'bg-blue-500/20 border-blue-500 text-blue-300',
  epic: 'bg-purple-500/20 border-purple-500 text-purple-300',
  legendary: 'bg-amber-500/20 border-amber-500 text-amber-300',
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-primary/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black neon-text neon-glow">CYBERNOVA</h1>
            <div className="flex gap-6">
              {['Главная', 'Персонажи', 'Достижения', 'Геймплей', 'Магазин', 'Сообщество'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-semibold tracking-wide hover:neon-text"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/4446832e-3c6f-42bf-a055-463ef28063f9.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 text-center animate-fade-in">
            <h2 className="text-8xl font-black mb-6 glitch neon-text" data-text="CYBERNOVA">
              CYBERNOVA
            </h2>
            <p className="text-2xl text-foreground/80 mb-8 font-light tracking-widest">
              ПОГРУЗИТЕСЬ В МИР КИБЕРПАНКА
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 neon-border font-bold text-lg px-8 py-6 animate-glow-pulse">
                ИГРАТЬ СЕЙЧАС
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/20 font-bold text-lg px-8 py-6">
                ТРЕЙЛЕР
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 neon-text">
              <Icon name="Trophy" className="inline mr-4" size={48} />
              ВИТРИНА ДОСТИЖЕНИЙ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className={`p-6 bg-card border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up ${
                    achievement.unlocked ? rarityColors[achievement.rarity as keyof typeof rarityColors] : 'bg-muted/50 border-muted opacity-60'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-background/50">
                      <Icon name={achievement.icon as any} size={32} className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'} />
                    </div>
                    <Badge variant={achievement.unlocked ? 'default' : 'secondary'} className="font-bold">
                      {achievement.points} XP
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs uppercase tracking-wider">
                      {achievement.rarity}
                    </Badge>
                    {achievement.unlocked ? (
                      <Icon name="Check" size={20} className="text-primary" />
                    ) : (
                      <Icon name="Lock" size={20} className="text-muted-foreground" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 neon-text">
              <Icon name="Users" className="inline mr-4" size={48} />
              ПЕРСОНАЖИ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {characters.map((character, index) => (
                <Card
                  key={character.name}
                  className="overflow-hidden bg-card border-2 border-primary/30 hover:border-primary transition-all duration-500 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-secondary text-secondary-foreground font-bold">{character.role}</Badge>
                    <h3 className="text-3xl font-black mb-2 neon-text">{character.name}</h3>
                    <p className="text-foreground/70">{character.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 neon-text">
              <Icon name="Gamepad2" className="inline mr-4" size={48} />
              ГЕЙМПЛЕЙ
            </h2>
            <Tabs defaultValue="combat" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-muted h-auto p-2">
                <TabsTrigger value="combat" className="text-base font-bold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Sword" className="mr-2" size={20} />
                  БОЙ
                </TabsTrigger>
                <TabsTrigger value="hacking" className="text-base font-bold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Terminal" className="mr-2" size={20} />
                  ВЗЛОМ
                </TabsTrigger>
                <TabsTrigger value="exploration" className="text-base font-bold py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Map" className="mr-2" size={20} />
                  ИССЛЕДОВАНИЕ
                </TabsTrigger>
              </TabsList>
              <TabsContent value="combat" className="animate-fade-in">
                <Card className="p-8 bg-card border-2 border-primary/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 neon-text">Динамичная Боевая Система</h3>
                      <p className="text-foreground/80 mb-4 text-lg">
                        Используйте арсенал футуристического оружия и кибернетические имплантаты для уничтожения врагов.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>50+ видов оружия</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Кастомизация имплантатов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Разнообразные боевые стили</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden neon-border">
                      <img
                        src="https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/1f5aa23c-15d5-41b6-ad6e-3545b1fb83e8.jpg"
                        alt="Combat"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="hacking" className="animate-fade-in">
                <Card className="p-8 bg-card border-2 border-primary/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 neon-text">Взлом Систем</h3>
                      <p className="text-foreground/80 mb-4 text-lg">
                        Проникайте в защищенные сети, взламывайте вражеские имплантаты и управляйте технологиями города.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Реалистичные хакерские мини-игры</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Контроль над турелями и дронами</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Информационная война</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden neon-border">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon name="Terminal" size={120} className="text-primary opacity-50" />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="exploration" className="animate-fade-in">
                <Card className="p-8 bg-card border-2 border-primary/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 neon-text">Огромный Открытый Мир</h3>
                      <p className="text-foreground/80 mb-4 text-lg">
                        Исследуйте мегаполис будущего с вертикальными районами, секретными локациями и живым городом.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>15 уникальных районов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Динамичная погода и время суток</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary" size={20} />
                          <span>Сотни квестов и активностей</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden neon-border">
                      <img
                        src="https://cdn.poehali.dev/projects/c216a0b4-f19b-4db1-81d9-6d724cf562a7/files/4446832e-3c6f-42bf-a055-463ef28063f9.jpg"
                        alt="World"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 neon-text">
              <Icon name="ShoppingCart" className="inline mr-4" size={48} />
              МАГАЗИН
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 bg-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                <Badge className="mb-4 bg-primary text-primary-foreground font-bold">СТАНДАРТНОЕ ИЗДАНИЕ</Badge>
                <h3 className="text-3xl font-black mb-4">1 990 ₽</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Базовая игра</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Цифровой артбук</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-bold">
                  КУПИТЬ
                </Button>
              </Card>

              <Card className="p-6 bg-card border-2 border-secondary hover:border-secondary transition-all duration-300 hover:scale-110 relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground font-bold animate-glow-pulse">
                  ПОПУЛЯРНОЕ
                </Badge>
                <Badge className="mb-4 bg-secondary text-secondary-foreground font-bold">ДЕЛЮКС ИЗДАНИЕ</Badge>
                <h3 className="text-3xl font-black mb-4">2 990 ₽</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Всё из стандартного</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Season Pass</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Эксклюзивное оружие</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold">
                  КУПИТЬ
                </Button>
              </Card>

              <Card className="p-6 bg-card border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <Badge className="mb-4 bg-amber-500 text-black font-bold">КОЛЛЕКЦИОННОЕ</Badge>
                <h3 className="text-3xl font-black mb-4">5 990 ₽</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-amber-500" size={20} />
                    <span>Всё из делюкс</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-amber-500" size={20} />
                    <span>Физическая фигурка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-amber-500" size={20} />
                    <span>Саундтрек на CD</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 text-black hover:bg-amber-600 font-bold">
                  КУПИТЬ
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 neon-text">
              <Icon name="Users" className="inline mr-4" size={48} />
              ПРИСОЕДИНЯЙТЕСЬ К СООБЩЕСТВУ
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Миллионы игроков уже исследуют неоновые улицы CyberNova. Станьте частью легенды!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/20 font-bold">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                DISCORD
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/20 font-bold">
                <Icon name="Share2" className="mr-2" size={20} />
                TWITTER
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/20 font-bold">
                <Icon name="Youtube" className="mr-2" size={20} />
                YOUTUBE
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-card/80 backdrop-blur-xl border-t border-primary/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-black mb-4 neon-text">CYBERNOVA</h3>
          <p className="text-foreground/60 mb-4">© 2025 CyberNova Studios. Все права защищены.</p>
          <div className="flex gap-6 justify-center text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
