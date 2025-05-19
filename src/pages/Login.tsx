import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the schema for the login form using Zod
const formSchema = z.object({
  email: z.string().email({
    message: "தவறான மின்னஞ்சல் முகவரி.",
  }),
  password: z.string().min(6, {
    message: "கடவுச்சொல் குறைந்தபட்சம் 6 எழுத்துக்கள் கொண்டதாக இருக்க வேண்டும்.",
  }),
});

const Login = () => {
  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This is where you would typically handle login logic (e.g., send to an API)
    console.log("Login form submitted with values:", values);
    // For now, just log the values and show a success message
    console.log("Login successful (placeholder)");
    // You might want to add a toast notification here later
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">உள்நுழைவு</CardTitle>
          <CardDescription className="text-center">
            உங்கள் கணக்கில் உள்நுழையவும்
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>மின்னஞ்சல்</FormLabel>
                    <FormControl>
                      <Input placeholder="உங்கள் மின்னஞ்சல்" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>கடவுச்சொல்</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="உங்கள் கடவுச்சொல்" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                உள்நுழை
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;