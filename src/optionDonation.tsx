import CardDonation from "./components/cardDonation";
import FilteringOptions from "./components/filteringOptions";

export default function OptionDonation() {

  const cards = [
    {
      location: "Helpa - ponto de arrecadação",
      address: "R. Visc. de Cairú, 450-532 - Santa Barbara - Criciúma",
      time: "07:00 - 23:59"
    },
    {
      location: "Helpa - ponto de arrecadação",
      address: "R. Floriano Peixoto, 1234 - Centro - Içara - SC",
      time: "08:00 - 22:59"
    },
    {
      location: "Helpa - ponto de arrecadação",
      address: "R. Marechal Deodoro, 567 - Centro - Araranguá - SC",
      time: "07:00 - 23:59"
    },
  ]

  return (
    <main>
      <FilteringOptions />
      <section className="flex flex-col gap-14 mt-10">
        {cards.map((card) => (
          <CardDonation
            location={card.location}
            address={card.address}
            time={card.time}
          />
        ))}
      </section>
    </main>

  )
}