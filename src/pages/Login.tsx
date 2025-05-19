import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  // Basic state for form inputs (can be expanded later with form libraries like react-hook-form)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // TODO: Implement actual login logic here (e.g., call an API)
    // You will need a backend service (like Supabase) to handle authentication
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
                />
              </div>
              <Button type="submit" className="w-full">
                உள்நுழை
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;