import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import TaskDashboard from '@/components/TaskDashboard';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <SplashScreen onLogin={handleLogin} />;
  }

  return <TaskDashboard />;
};

export default Index;
