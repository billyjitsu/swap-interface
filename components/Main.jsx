import Swap from "./Form/Swap";

export default function Main() {
  return (
    <main>
      <section>
        <inner-column>
          <h1 className="booming-voice">
            <span className="gradient-text">Swap</span> your tokens
          </h1>
        </inner-column>
      </section>
      <section>
        <inner-column>
          <Swap />
        </inner-column>
      </section>
    </main>
  );
}
