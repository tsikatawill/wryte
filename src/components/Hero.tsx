import { AnimatedPenHead, Container } from ".";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="max-w-xl text-center pt-12 pb-24 mx-auto">
          <div className="icon-wrapper  mx-auto min-h-[80vh]">
            <AnimatedPenHead />
          </div>

          <div className="min-h-screen grid place-content-center">
            <h1 className="font-bold text-7xl leading-[7rem]">Wryte</h1>
            <p className="text-3xl font-semibold leading-10 mt-5">
              Insightful Articles Curated By A Wonderful Community For Everyone
              In The Tech Space
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
