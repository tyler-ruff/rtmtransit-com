import Hero from '@/components/hero';
import { IActionButton } from '@/components/hero/data';

export default function Home() {
  return (
    <div>
      <Hero
        title="RTM Transport"
        body="RTM Transportation LLC main website"
        action={{
          label: "Learn More",
          url: "/about"
        } as IActionButton}
      />
    </div>
  )
}
