import CardShelter from "./components/cardShelter";
import FilteringOptions from "./components/filteringOptions";

export default function Home() {

  const cards = [
    {
      location: "Centro Criciúma",
      address: "R. Visc. de Cairú, 450-532 - Santa Barbara - Criciúma",
      vacancies: 324,
      time: "07:00 - 23:59"
    },
    {
      location: "Centro Içara",
      address: "R. Floriano Peixoto, 1234 - Centro - Içara - SC",
      vacancies: 204,
      time: "08:00 - 22:59"
    },
    {
      location: "Araranguá",
      address: "R. Marechal Deodoro, 567 - Centro - Araranguá - SC",
      vacancies: 324,
      time: "07:00 - 23:59"
    },
    {
      location: "Florianópolis",
      address: "R. Dom Jaime Câmara, 543 - Centro - Florianópolis - SC",
      vacancies: 204,
      time: "08:00 - 22:59"
    },
  ]

  return (
    <main>
      <FilteringOptions />
      <section className="flex flex-col gap-14 mt-10">
        {cards.map((card) => (
          <CardShelter
            location={card.location}
            address={card.address}
            vacancies={card.vacancies}
            time={card.time}
          />
        ))}
      </section>
    </main>

  )
}