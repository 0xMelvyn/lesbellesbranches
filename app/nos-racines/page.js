import Team from "./presentation";
import Explication from "./explication";
import Mission from "./mission";

export const metadata = {
  title: "L'Opticien éco-réfléchi indépendant à Toulouse - Nos engagements, notre histoire, notre savoir-faire",
  description: "Les Belles Branches, opticien indépendant à Toulouse, vous racontent leur histoire : une optique locale, humaine, durable. Engagements forts, savoir-faire métier vision partagée.",
};

export default function Home() {
  return (
    <main className="bg-cool">
      <Mission />
      <Explication />
      <Team />
    </main>
  );
}