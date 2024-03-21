import { SignUp } from "@clerk/nextjs";

export default function Page() {
  // Some problem with the redirectUrl
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />;
}
