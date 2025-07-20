// app/sign-in/[[...sign-in]]/loading.tsx
export default function SignInLoading() {
  return (
    <div className="flex h-screen items-center justify-center text-black">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-gray-500" />
      Loading.....
    </div>
  );
}
