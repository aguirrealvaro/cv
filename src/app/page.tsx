import { Wrapper } from "@/components";
import { H1 } from "@/components/ui";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    return <H1>{"In progress :)"}</H1>;
  }

  return (
    <div className="my-16">
      <Wrapper>
        <H1>Alvaro Aguirre</H1>
      </Wrapper>
    </div>
  );
}
