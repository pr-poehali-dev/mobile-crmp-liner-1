import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [nickname, setNickname] = useState('Player_2024');

  const handlePlayClick = () => {
    window.open('samp://play', '_self');
  };

  const handleVkClick = () => {
    window.open('https://vk.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            КРМП
          </h1>
          <p className="text-muted-foreground">Мобильный сервер</p>
        </div>

        <Card className="p-6 bg-card border-border backdrop-blur-sm animate-scale-in">
          <div className="space-y-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Твой никнейм
              </label>
              <Input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="bg-muted border-border text-foreground text-center text-lg font-medium"
                placeholder="Введи никнейм"
              />
            </div>

            <Button
              onClick={handlePlayClick}
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <Icon name="Gamepad2" className="mr-2" size={24} />
              Играть
            </Button>

            <Button
              onClick={handleVkClick}
              variant="outline"
              className="w-full h-12 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Наше сообщество VK
            </Button>
          </div>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Лучший мобильный SAMP сервер</p>
          <p className="mt-1">Онлайн 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
