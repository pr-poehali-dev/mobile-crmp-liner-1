import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { CRMPGame } from '@/components/CRMPGame';

const Index = () => {
  const [nickname, setNickname] = useState('');
  const [showGame, setShowGame] = useState(false);

  const handlePlayClick = () => {
    if (!nickname.trim()) {
      alert('Введите никнейм перед началом игры');
      return;
    }
    window.open('samp://play', '_self');
  };

  const handleVkClick = () => {
    window.open('https://vk.com/', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/', '_blank');
  };

  const handleForumClick = () => {
    window.open('https://forum.example.com', '_blank');
  };

  const handleDonateClick = () => {
    window.open('https://donate.example.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/227d7f2c-a45a-4b34-8bb1-ec228b1bf1de/files/d90c39dd-efca-45ec-8767-7ab97148d809.jpg)'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-2xl space-y-6">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Umbrella" size={48} className="text-primary mr-3" />
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                UMBRELLA
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">CRMP Launcher</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Онлайн</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">250 игроков</span>
            </div>
          </div>

          <Card className="p-8 bg-card/80 border-border backdrop-blur-xl animate-scale-in shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-medium">
                  Никнейм игрока
                </label>
                <Input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="bg-muted/50 border-border text-foreground text-lg font-medium h-12 focus:border-primary transition-all"
                  placeholder="Введите ваш никнейм"
                  maxLength={24}
                />
              </div>

              <Button
                onClick={handlePlayClick}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02] animate-pulse-glow shadow-lg"
              >
                <Icon name="Gamepad2" className="mr-3" size={28} />
                Играть
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleVkClick}
                  variant="outline"
                  className="h-12 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="Users" className="mr-2" size={18} />
                  ВКонтакте
                </Button>

                <Button
                  onClick={handleTelegramClick}
                  variant="outline"
                  className="h-12 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="Send" className="mr-2" size={18} />
                  Telegram
                </Button>

                <Button
                  onClick={handleForumClick}
                  variant="outline"
                  className="h-12 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="MessageSquare" className="mr-2" size={18} />
                  Форум
                </Button>

                <Button
                  onClick={handleDonateClick}
                  variant="outline"
                  className="h-12 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="CreditCard" className="mr-2" size={18} />
                  Донат
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              onClick={() => setShowGame(!showGame)}
              variant="ghost"
              className="text-primary hover:text-primary/80"
            >
              <Icon name={showGame ? "ChevronUp" : "Gamepad"} className="mr-2" size={18} />
              {showGame ? 'Скрыть игру' : 'Попробовать мини-игру'}
            </Button>
          </div>

          {showGame && (
            <div className="animate-scale-in">
              <CRMPGame />
            </div>
          )}

          <div className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Версия 1.0.0 • © 2024 Umbrella CRMP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;