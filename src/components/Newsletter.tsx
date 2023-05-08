import { ChangeEvent, FormEvent, useState } from "react";
import { Container, SectionHeader } from ".";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send email to subscriber
    toast.success("Subscribed successfully");
    setEmail("");
  };

  return (
    <section className="bg-white dark:bg-blue-950">
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10 py-10 sm:py-20">
          <SectionHeader
            title="Sign up for our Newsletter"
            description="We send weekly newsletters out to our cherised members. These include top articles for the week and other articles we think you might find interesting"
          />

          <form
            className="mt-5 max-w-sm md:max-w-lg w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className="flex items-center gap-2 mb-2 font-semibold text-xl"
            >
              <FaEnvelope /> Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              id="email"
              placeholder="Enter your email"
              className="input"
            />
            <button className="submit">Sign up</button>
          </form>
        </div>
      </Container>
    </section>
  );
};
