import { useSession, signIn, signOut } from "next-auth/react"

export default function IndexPage() {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data, status } = useSession()
  if (status === 'loading') return <h1>loading... please wait</h1>
  if (status === 'authenticated') {
      return (
        <div>
          <h1>
            {data.user.name} is logged in
          </h1>
          <button onClick={signOut}>sign out</button>
        </div>
      );
  }
  return (
    <div>
      <button onClick={()=> signIn('google')}>sign in with google</button>
    </div>
  );


}