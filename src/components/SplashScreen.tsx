import { useState } from 'react';
import { Button } from '@/components/ui/button';

const SplashScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (type: 'login' | 'signup') => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      onLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Star Particles */}
      <div className="star-particle absolute top-20 left-10" />
      <div className="star-particle absolute top-32 right-16" />
      <div className="star-particle absolute bottom-20 left-20" />
      <div className="star-particle absolute bottom-32 right-12" />

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Animated Glowing Orb */}
        <div className="relative mb-8">
          <div className="orb-glow w-32 h-32 rounded-full mx-auto relative flex items-center justify-center">
            {/* Welcome Text Inside Orb */}
            <div className="gradient-text text-2xl font-bold tracking-wider">
              Welcome
            </div>
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-4xl font-bold mb-2 gradient-text">
          TaskOrb
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Your tasks, beautifully organized
        </p>

        {/* Loading Progress Bar */}
        {isLoading ? (
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mb-8 mx-auto">
            <div className="progress-bar h-full w-1/3 rounded-full"></div>
          </div>
        ) : (
          <div className="mb-8 h-2"></div>
        )}

        {/* Login and Sign Up Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => handleLogin('login')}
            disabled={isLoading}
            className="google-btn w-64 h-14 text-lg font-medium"
          >
            {isLoading ? (
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-1">
                <span className="font-semibold">Login</span>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm">with Google</span>
                </div>
              </div>
            )}
          </Button>

          <Button
            onClick={() => handleLogin('signup')}
            disabled={isLoading}
            variant="outline"
            className="google-btn w-64 h-14 text-lg font-medium"
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Sign Up</span>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm">with Google</span>
              </div>
            </div>
          </Button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-muted-foreground mt-8 max-w-xs mx-auto">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    </div>
  );
};

export default SplashScreen;