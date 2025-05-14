import Team from "./presentation";
import Explication from "./explication";
import Mission from "./mission";

export default function Home() {
  return (
    <main className="bg-cool">
      <Mission />
      <Explication />
      <Team />
    </main>
  );
}