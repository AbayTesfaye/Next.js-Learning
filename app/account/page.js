import { redirect } from 'next/navigation';

export default function Accounts() {
  const accountsInfo = null;

  if (accountsInfo === null) {
    redirect('/profile'); // Server-side redirection
  }

  return <div>This is Accounts page</div>;
}