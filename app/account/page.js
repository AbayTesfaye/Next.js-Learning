import { redirect } from 'next/navigation';

export default function Accounts() {
  const accountsInfo = null;

  if (accountsInfo === null) {
    redirect('/cart?search=product1&randomvalue=abcd'); // Server-side redirection
  }

  return <div>This is Accounts page</div>;
}
