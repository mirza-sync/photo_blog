import React from "react";
import Hero from "../components/Hero";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <ContactForm />
    </div>
  );
}
