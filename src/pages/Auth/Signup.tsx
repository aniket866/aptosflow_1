
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/AuthProvider';
import { Loader2, Mail, Lock, User, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      await signup(values.email, values.password, values.name);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-aptos-blue to-aptos-coral p-[1px]">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <svg height="30" width="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M84.2,96H50.5l-3.5-2.5c-2.2-1.5-3.4-4-3.4-6.7V32.7c0-2.6,1.3-5.1,3.5-6.7l3.2-2.2h34.2c2.6,0,5.1,1.3,6.6,3.5l2,3v59.3 c0,2.6-1.3,5.1-3.4,6.7L84.2,96z" fill="#0891b2"/>
                  <path d="M49.6,23.8H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,23.8z" fill="#f97316"/>
                  <path d="M49.6,75.2H15.9l-3-2.1c-2.3-1.6-3.4-4.3-3-7l0.2-1.4c0.4-2.8,2.2-5.3,4.8-6.3l3-1.2h34c2.6,0,5.1,1.3,6.6,3.5l2,3 v4.1c0,2.6-1.3,5.1-3.5,6.7L49.6,75.2z" fill="#1e293b"/>
                </svg>
              </div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-aptos-blue to-aptos-coral bg-clip-text text-transparent">
              AptosFlow
            </span>
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create an account</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Join AptosFlow today</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="John Doe" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="your@email.com" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-aptos-blue to-aptos-coral text-white mt-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-aptos-blue hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
