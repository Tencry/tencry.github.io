import Link from 'next/link';

export default function IndexPage() {
  return (<>
  <div>This is a Index page.</div>
  <Link href="/about">About me</Link>
  </>);
}
