import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 min-h-[200px] sm:min-h-0">
      <p className="text-center text-base sm:text-xl px-6 py-8 sm:py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
