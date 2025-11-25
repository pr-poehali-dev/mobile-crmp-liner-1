import { CRMPGame } from '@/components/CRMPGame';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Game = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    const gameUrl = window.location.href;
    navigator.clipboard.writeText(gameUrl).then(() => {
      toast.success('Ссылка скопирована!', {
        description: 'Теперь можешь поделиться игрой с друзьями'
      });
    });
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
              <Icon name="Gamepad" size={48} className="text-primary mr-3" />
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                CRMP ИГРА
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">Зарабатывай деньги и покупай уровни!</p>
          </div>

          <div className="animate-scale-in">
            <CRMPGame />
          </div>

          <div className="flex justify-center gap-3">
            <Button
              onClick={handleShare}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Icon name="Share2" className="mr-2" size={18} />
              Поделиться
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              К лаунчеру
            </Button>
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Umbrella CRMP • Мини-игра
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;