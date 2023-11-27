"use client";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCredentialValidator, AuthCredentialValidatorType } from "@/lib/validators/account-credential-validators";

export default function SignUp() {
	const { register, handleSubmit, formState: { errors: { email, password } } } = useForm<AuthCredentialValidatorType>({
		resolver: zodResolver(AuthCredentialValidator),
	});

	const onSubmit = ({ email, password }: AuthCredentialValidatorType) => {
		// TODO: send data to the server.
	};

	return (
		<Fragment>
			<div className="container relative flex pt-20 flex-col items-center lg:px-0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Icons.logo className="h-20 w-20" />

						<h1 className="text-2xl font-bold">Create an Account</h1>

						<Link href="/sign-in" className={buttonVariants({ variant: "link", className: "gap-1.5" })}>Already have an account? Sign-in <ArrowRight className="h-4 w-4" /> </Link>
					</div>

					<div className="grid gap-6">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="grid gap-1 py-2">
								<Label htmlFor="email">Email</Label>
								<Input {...register('email')} className={cn({ "focus-visible:ring-red-500": email, })} placeholder="you@example.com" />
							</div>

							<div className="grid gap-1 py-2">
								<Label htmlFor="email">Password</Label>
								<Input {...register('password')} className={cn({ "focus-visible:ring-red-500": password, })} placeholder="Password" />
							</div>

						</form>

						<Button type="submit">Sign Up</Button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}