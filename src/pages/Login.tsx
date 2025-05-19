import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { supabase } from '@/lib/supabase'; // Import the Supabase client
import { showError, showSuccess } from '@/utils/toast'; // Import toast utilities

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false); // State to manage loading button state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setIsLoading(false); // Reset loading state

    if (error) {
      console.error('Login error:', error.message);
      showError(`உள்நுழைவு தோல்வியடைந்தது: ${error.message}`); // Show error toast
    } else {
      console.log('Login successful');
      showSuccess('உள்நுழைவு வெற்றி!'); // Show success toast
      navigate('/'); // Redirect to home page on success
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">உள்நுழைவு</CardTitle>
          <CardDescription className="text-center">
            உங்கள் கணக்கில் உள்நுழையவும்
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">மின்னஞ்சல்</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">கடவுச்சொல்</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'உள்நுழைகிறது...' : 'உள்நுழை'} {/* Change button text while loading */}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;