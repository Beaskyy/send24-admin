"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type FormValues = z.input<typeof formSchema>;

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const options = {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          role: "admin",
        }),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
        options
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "error") {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        localStorage.setItem("authUser", data.data.token)
        // window.location.href = `/`
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image
          src="/images/logo.svg"
          alt="send 24 logo"
          width={119}
          height={31}
        />
        <h2 className="mt-5">Welcome Back</h2>

        <div className="w-3/4 m-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="enter email address" {...field} />
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
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex w-full min-h-screen bg-primary"></div>
    </main>
  );
};

export default Login;
