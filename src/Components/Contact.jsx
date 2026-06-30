import { useState } from "react";
import { youssef } from "../data/youssef";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    msg: "",
    phone: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "201115658096";
  const defaultText = encodeURIComponent(
    "Hello Youssef! I saw your portfolio and would love to chat about a project.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultText}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData();
    formData.append("name", contact.name);
    formData.append("email", contact.email);
    formData.append("phone", contact.phone);
    formData.append("message", contact.msg);
    formData.append("_captcha", "false");

    try {
      const res = await fetch(
        `https://formsubmit.co/${youssef.contactForm.emailReceiver}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setContact({ name: "", email: "", msg: "", phone: "" });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white p-6 mx-auto flex flex-col justify-center max-w-4xl"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[12px] tracking-[0.08em] text-sky-400">
        <span className="inline-block h-px w-6 bg-sky-400"></span>
        {`<contact />`}
      </div>

      <div className="rounded shadow-sm bg-slate-800/40 border border-slate-800 overflow-hidden w-full mx-auto">
        <div className="flex items-center gap-2 border-b border-slate-800 bg-[#0d1117] px-4 py-[10px]">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="flex-1" />
          <span className="font-mono text-xs text-gray-500">
            guest@youssef:~
          </span>
          <span className="flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <p className="text-gray-400 text-sm mb-2">
            // Leave a message through the standard gateway or connect
            immediately via secure chat.
          </p>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-mono text-xs text-sky-400">
              const travelerName =
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 text-sm text-white bg-[#0d1117]/60 border border-slate-800 rounded outline-none focus:border-sky-500/50 placeholder-gray-600 transition-colors"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-mono text-xs text-sky-400">
              const returnEmail =
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 text-sm text-white bg-[#0d1117]/60 border border-slate-800 rounded outline-none focus:border-sky-500/50 placeholder-gray-600 transition-colors"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="font-mono text-xs text-sky-400">
              const contactPhone ={" "}
              <span className="text-gray-500">// optional</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2.5 text-sm text-white bg-[#0d1117]/60 border border-slate-800 rounded outline-none focus:border-sky-500/50 placeholder-gray-600 transition-colors"
              value={contact.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-mono text-xs text-sky-400">
              const messagePayload =
            </label>
            <textarea
              required
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 text-sm text-white bg-[#0d1117]/60 border border-slate-800 rounded outline-none focus:border-sky-500/50 placeholder-gray-600 transition-colors resize-none"
              value={contact.msg}
              onChange={(e) => setContact({ ...contact, msg: e.target.value })}
            />
          </div>

          {status && (
            <div className="w-full p-3 font-mono text-xs text-center bg-[#0d1117] border border-slate-800 rounded text-gray-300">
              {status}
            </div>
          )}

          <hr className="border-slate-800 mt-2" />

          <div className="flex justify-around bg-[#0d1117]/50 -mx-6 -mb-6 p-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-gray-400 hover:text-sky-400 font-medium text-sm transition-colors flex items-center gap-2 disabled:opacity-40 outline-none cursor-pointer disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="18"
                height="18"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>{isSubmitting ? "Sending..." : "executeSubmit()"}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 font-medium text-sm transition-colors flex items-center gap-2 outline-none"
              title="Instant WhatsApp Redirection"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.165.001 6.14 1.233 8.377 3.469 2.237 2.236 3.466 5.21 3.466 8.377-.003 6.582-5.338 11.93-11.87 11.93h-.007c-2.018 0-3.99-.513-5.732-1.492L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.397 0 9.786-4.385 9.788-9.782.002-2.615-1.012-5.074-2.857-6.922m-10.13 11.12l-.286-.17C4.173 17.65 2.164 16.48 2.164 13.14c.002-4.914 4.004-8.913 8.924-8.913 2.383.001 4.625.93 6.312 2.618 1.688 1.689 2.615 3.932 2.612 6.315-.005 4.914-4.008 8.914-8.924 8.914H11.13c-1.464-.002-2.905-.363-4.186-1.047l-.3-.18zm11.332-3.664c.264.13.424.21.467.28.043.07.043.41-.128.892-.17.482-.996.945-1.41 1.002-.414.057-.828.114-2.33-.483-1.503-.597-2.474-2.128-2.545-2.22-.072-.093-.578-.771-.578-1.472 0-.7.368-1.05.5-1.193.131-.143.286-.18.38-.18.096 0 .193.001.275.005.085.004.2.032.304.28.106.252.362.883.394.948.032.065.053.142.01.227-.042.085-.096.143-.162.221-.066.079-.14.165-.2.23-.066.073-.136.153-.058.287.078.134.348.573.746.927.514.457.948.599 1.084.667.135.068.214.057.264-.001.05-.058.214-.25.27-.374.058-.124.115-.104.194-.075z" />
              </svg>
              <span>openWhatsApp()</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
