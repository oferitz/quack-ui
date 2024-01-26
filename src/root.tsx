import './globals.css'
import { Button } from '~/components/button/button'
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Quack UI</title>
      </head>
      <body>
        <div class="p-8">
          <h2 class="text-lg py-2 border-b">Button</h2>
          <div class="py-2 space-x-2">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="subtle">Subtle</Button>
          </div>
          <div class="py-2 space-x-2">
            <Button>Default</Button>
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="lg">lg</Button>
            <Button size="xl">xl</Button>
            <Button size="2xl">2xl</Button>
          </div>
          <pre>
            {`
            import { Button } from '~/components/button/button'
            <Button onClick$={() => alert('Hi')}>Click me</Button>
              `}
          </pre>
        </div>
      </body>
    </>
  )
}
