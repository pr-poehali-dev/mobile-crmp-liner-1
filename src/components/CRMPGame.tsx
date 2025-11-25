import { useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GameStats {
  money: number;
  level: number;
  respect: number;
}

export const CRMPGame = () => {
  const [gameStats, setGameStats] = useState<GameStats>({
    money: 500,
    level: 1,
    respect: 0
  });
  const [currentActivity, setCurrentActivity] = useState<string>('');
  const [isWorking, setIsWorking] = useState(false);

  const activities = [
    { name: 'Работа таксистом', money: 50, respect: 5, icon: 'Car', time: 2000 },
    { name: 'Доставка грузов', money: 100, respect: 10, icon: 'Truck', time: 3000 },
    { name: 'Охранник в банке', money: 150, respect: 15, icon: 'Shield', time: 4000 },
    { name: 'Ограбление магазина', money: 200, respect: 25, icon: 'DollarSign', time: 5000 }
  ];

  const calculateLevelPrice = (currentLevel: number) => {
    return currentLevel * 300;
  };

  const doActivity = useCallback((activity: typeof activities[0]) => {
    if (isWorking) return;
    
    setIsWorking(true);
    setCurrentActivity(activity.name);

    setTimeout(() => {
      setGameStats(prev => {
        const newMoney = prev.money + activity.money;
        const newRespect = prev.respect + activity.respect;
        
        return {
          ...prev,
          money: newMoney,
          respect: newRespect
        };
      });
      setIsWorking(false);
      setCurrentActivity('');
    }, activity.time);
  }, [isWorking]);

  const buyLevel = () => {
    const price = calculateLevelPrice(gameStats.level);
    
    if (gameStats.money >= price) {
      setGameStats(prev => ({
        ...prev,
        money: prev.money - price,
        level: prev.level + 1
      }));
    }
  };

  const nextLevelPrice = calculateLevelPrice(gameStats.level);
  const canBuyLevel = gameStats.money >= nextLevelPrice;

  return (
    <Card className="p-6 bg-card/80 border-border backdrop-blur-xl shadow-2xl">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Мини-игра CRMP
          </h2>
          <p className="text-sm text-muted-foreground">Зарабатывай деньги и покупай уровни!</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <Icon name="Coins" className="mx-auto mb-1 text-yellow-400" size={24} />
            <p className="text-xs text-muted-foreground">Деньги</p>
            <p className="text-lg font-bold text-yellow-400">${gameStats.money}</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <Icon name="TrendingUp" className="mx-auto mb-1 text-blue-400" size={24} />
            <p className="text-xs text-muted-foreground">Уровень</p>
            <p className="text-lg font-bold text-blue-400">{gameStats.level}</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <Icon name="Award" className="mx-auto mb-1 text-purple-400" size={24} />
            <p className="text-xs text-muted-foreground">Уважение</p>
            <p className="text-lg font-bold text-purple-400">{gameStats.respect}</p>
          </div>
        </div>

        <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 rounded-full p-2">
                <Icon name="ArrowUpCircle" className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-bold text-foreground">Купить уровень {gameStats.level + 1}</p>
                <p className="text-xs text-muted-foreground">Увеличь свой статус</p>
              </div>
            </div>
            <Button
              onClick={buyLevel}
              disabled={!canBuyLevel}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold disabled:opacity-50"
            >
              <Icon name="Coins" className="mr-1" size={16} />
              ${nextLevelPrice}
            </Button>
          </div>
        </Card>

        {currentActivity && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center animate-pulse">
            <p className="text-sm font-medium text-primary">{currentActivity}...</p>
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Заработать деньги:</h3>
          <div className="grid grid-cols-2 gap-3">
            {activities.map((activity, index) => (
              <Button
                key={index}
                onClick={() => doActivity(activity)}
                disabled={isWorking}
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 disabled:opacity-50"
              >
                <Icon name={activity.icon as any} size={24} className="text-primary" />
                <span className="text-xs font-medium">{activity.name}</span>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="text-yellow-400">+${activity.money}</span>
                  <span className="text-purple-400">+{activity.respect}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          Зарабатывай деньги и покупай уровни для повышения статуса!
        </div>
      </div>
    </Card>
  );
};
