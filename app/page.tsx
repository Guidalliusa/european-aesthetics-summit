import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import FeaturedOrganizer from "@/components/FeaturedOrganizer";
import Speakers from "@/components/Speakers";
import Topics from "@/components/Topics";
import SpecialPanel from "@/components/SpecialPanel";
import Certification from "@/components/Certification";
import Venue from "@/components/Venue";
import FinalCTA from "@/components/FinalCTA";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import RevealObserver from "@/components/RevealObserver";
import {
  EVENT_ADDRESS,
  EVENT_LOCATION,
  EVENT_NAME,
  EVENT_TIME,
  SITE_URL,
  siteUrl,
  TICKET_PRICE,
  TICKET_URL,
} from "@/config/event";
import { organizer, speakers } from "@/data/speakers";

/** Schema.org Event apenas com dados confirmados nos materiais oficiais. */
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_NAME,
  startDate: EVENT_TIME.startISO,
  endDate: EVENT_TIME.endISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: SITE_URL,
  image: [siteUrl("og.jpg")],
  location: {
    "@type": "Place",
    name: `${EVENT_LOCATION.venue}, ${EVENT_LOCATION.venueDetail}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: EVENT_ADDRESS.street,
      postalCode: EVENT_ADDRESS.postalCode,
      addressLocality: EVENT_ADDRESS.locality,
      addressCountry: EVENT_ADDRESS.countryCode,
    },
  },
  offers: {
    "@type": "Offer",
    price: TICKET_PRICE.value.toFixed(2),
    priceCurrency: TICKET_PRICE.currency,
    url: TICKET_URL,
  },
  organizer: { "@type": "Person", name: organizer.name },
  performer: [organizer, ...speakers].map((s) => ({ "@type": "Person", name: s.name })),
};

export default function Home() {
  return (
    <>
      <a
        href="#summit"
        className="sr-only z-[70] bg-champagne px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <FeaturedOrganizer />
        <Speakers />
        <Topics />
        <SpecialPanel />
        <Certification />
        <Venue />
        <FinalCTA />
        <Partners />
      </main>
      <Footer />
      <StickyCTA />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
