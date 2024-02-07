'use client'
import { Button, Input, Logo, Text } from "@repo/ui/units";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-around  h-screen bg-brand-darkblue-5">
      <div>
        <div className=" h-12">

          <Logo variant="light" />
        </div>
        <Text variant="title_2">Welcome to the Panel</Text>
        <Text variant="paragraph">Comidu website adminstration portal</Text>
      </div>
      <div className="flex flex-col gap-3 px-6 py-10 min-w-[400px] bg-white border rounded-md border-brand-darkblue-10 shadowed">
        <div className="flex flex-col gap-2 my-3">
          <Text variant={'heading3'}>Login to panel</Text>
          <Text variant={'paragraph'}>Enter your credentials to continue</Text>
        </div>

        <Input<string> inputType="text" label="Email address" placeholder="Your email" _controller={{
          initialValue: "",
          value: "",
          setValue: () => { }
        }} />
        <Input<string> inputType="password" label="Password" placeholder="Your password" _controller={{
          initialValue: "",
          value: "",
          setValue: () => { }
        }} />
        <div className="flex items-end">
          <Link href={'/forgot-password'}><Text variant={'label'} className="text-brand-darkblue">Forgot password?</Text></Link>
        </div>
        <Button variant="primary" className="w-full">Login</Button>
      </div>

    </div >
  )
}