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
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

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
  const [disabled, setDisabled] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setDisabled(true);
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
        setDisabled(false);
      } else {
        toast.success(data.message);
        localStorage.setItem("authUser", data.data.token);
        window.location.href = `/`;
      }
    } catch (error: any) {
      toast.error(error.message);
      setDisabled(false);
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
        <h2 className="my-8">Welcome Back</h2>

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
              <Button type="submit" className="w-full" disabled={disabled}>
                {disabled ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center w-full min-h-screen bg-primary">
        <div className="">
          <Image
            src="/images/stat.svg"
            alt="send 24"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default Login;
