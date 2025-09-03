// npm install tailwindcss
// npm install webpack
// npx shadcn add dialog

'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PathValue = string | null

export default function Home() {
  const router = useRouter()

  // const move = (path: string) => router.push(path)
  function move(path: PathValue){
    if (path!==null){
      router.push(path)
    }
  }

  return (
    <div>
      <div>Home</div>
      <div className="p-8 space-y-2">
        <Button variant="outline" onClick={()=>move('/login')}>로그인으로 이동</Button>

        <Button variant="ghost" onClick={()=>move('/register')}>회원가입으로 이동</Button>

        <Button variant="circle">
          <Link href={"/login"}>
              Link로 로그인 페이지 이동
          </Link>
        </Button>

        <Button>
          default Button
        </Button>

      </div>
    </div>
  );
}
