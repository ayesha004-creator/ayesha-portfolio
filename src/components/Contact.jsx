import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Linkedin, Github, Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { site } from "../data/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const empty = { name: "", email: "", message: "" };
const fieldClass = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy dark:border-slate-600 dark:bg-slate-800 dark:text-white";
const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
};

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (v.name.trim().length > 100) e.name = "Your name must be 100 characters or fewer.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!emailPattern.test(v.email.trim())) e.email = "Please enter a valid email address.";
  else if (v.email.trim().length > 254) e.email = "Please enter an email address under 255 characters.";
  if (!v.message.trim()) e.message = "Please enter a message.";
  else if (v.message.trim().length > 5000) e.message = "Your message must be 5,000 characters or fewer.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [website, setWebsite] = useState("");
  const sendingRef = useRef(false);

  const onChange = (e) => {
    setFeedback(null);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sendingRef.current) return;

    if (website) {
      setFeedback({ type: "error", message: "Unable to send your message. Please try again." });
      return;
    }

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setFeedback({
        type: "error",
        message: "Email sending is unavailable because this site is missing its EmailJS setup. The site owner must add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in Netlify, then redeploy. No email was sent.",
      });
      return;
    }

    sendingRef.current = true;
    setIsSending(true);
    setFeedback(null);
    try {
      await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, {
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        message: values.message.trim(),
      }, {
        publicKey: emailJsConfig.publicKey,
      });
      setValues(empty);
      setErrors({});
      setFeedback({ type: "success", message: "Thanks for your message! It has been sent successfully." });
    } catch {
      setFeedback({
        type: "error",
        message: "I couldn't send your message right now. Please try again or email me directly at ayeshakaramat004@gmail.com.",
      });
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
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
        <form onSubmit={onSubmit} noValidate className="relative space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-card">
          <div>{label("name", "Name")}<input type="text" autoComplete="name" maxLength={100} {...shared("name")} />{error("name")}</div>
          <div>{label("email", "Email")}<input type="email" autoComplete="email" maxLength={254} {...shared("email")} />{error("email")}</div>
          <div>{label("message", "Message")}<textarea rows="5" maxLength={5000} {...shared("message")} />{error("message")}</div>
          <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <button type="submit" disabled={isSending} className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
            {isSending ? "Sending..." : "Send Message"}
          </button>
          <div aria-live="polite">
            {feedback && <p role={feedback.type === "error" ? "alert" : "status"} className={`rounded-xl p-4 text-sm font-medium ${feedback.type === "success" ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"}`}>{feedback.message}</p>}
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
