import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
    <ul>
      <li>
        <Link href = "recipes/1">Recipe 1</Link>
      </li>
      <li>
        <Link href = "recipes/2">Recipe 3</Link>
      </li>
      <li>
        <Link href = "recipes/3">Recipe 2</Link>
      </li>
    </ul>
    <button>Test</button>
    </>
  )
}