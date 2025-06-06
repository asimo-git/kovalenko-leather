import Contacts from "../components/Contacts";
import CallbackForm from "../components/CallbackForm";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <Contacts />
      <CallbackForm />
    </section>
  );
}
