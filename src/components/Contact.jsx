import { useState } from "react";
import { Phone, Linkedin, Github, Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { site } from "../data/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const empty = { name: "", email: "", message: "" };
const fieldClass = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy dark:border-slate-600 dark:bg-slate-800 dark:text-white";

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!emailPattern.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.message.trim()) e.message = "Please enter a message.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => { setSent(false); setValues({ ...values, [e.target.name]: e.target.value }); };
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setValues(empty); // No backend: nothing is sent anywhere
    setSent(true);
  };

  const shared = (name) => ({
    id: name, name, value: values[name], onChange, required: true,
    "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${name}-error` : undefined, className: fieldClass,
  });
  const label = (name, text) => <label htmlFor={name} className="text-sm font-semibold text-navy dark:text-white">{text}</label>;
  const error = (name) => errors[name] && <p id={`${name}-error`} className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">{errors[name]}</p>;

  const contacts = [
    { icon: Phone, label: "WhatsApp / Phone", text: site.phone, href: site.whatsapp, external: true },
    { icon: Linkedin, label: "LinkedIn", text: "Hafiza Ayesha Karamat", href: site.linkedin, external: true },
    { icon: Github, label: "GitHub", text: "ayesha004-creator", href: site.github, external: true },
    { icon: Mail, label: "Email", text: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", text: site.location },
  ];

  return (
    <Section id="contact" title="Let's work together.">
      <div className="grid gap-10 lg:grid-cols-2">
        <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-card">
          <div>{label("name", "Name")}<input type="text" autoComplete="name" {...shared("name")} />{error("name")}</div>
          <div>{label("email", "Email")}<input type="email" autoComplete="email" {...shared("email")} />{error("email")}</div>
          <div>{label("message", "Message")}<textarea rows="5" {...shared("message")} />{error("message")}</div>
          <button type="submit" className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-800 sm:w-auto">Send Message</button>
          <div role="status">
            {sent && <p className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">This demo form does not send messages yet. Please contact me using the email or social links.</p>}
          </div>
        </form>

        <div>
          <p className="mb-6">I’m open to job opportunities, collaborations, and web development projects. Feel free to get in touch using the contact details below.</p>
          <ul className="space-y-5">
            {contacts.map(({ icon: Icon, label: title, text, href, external }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="rounded-xl bg-sky-accent/15 p-3 text-brand dark:text-sky-accent"><Icon size={22} aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-navy dark:text-white">{title}</p>
                  {href
                    ? <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-words hover:text-brand dark:hover:text-sky-accent">{text}</a>
                    : <p>{text}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
