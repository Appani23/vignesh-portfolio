import React, { useRef, useState } from 'react';
import Iconify from '../components/Iconify';
import SocialLinks from '../components/social/SocialLinks';
import SectionHeader from '../components/SectionHeader';
import LoadAnimate from '../components/animate/LoadAnimate';
import { contactEmail } from '../mock/profile';

const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xykqnzko';

// Simple email regex
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const formRef = useRef(null);

  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const set = (field) => (e) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Name is required.';
    if (!fields.email.trim()) e.email = 'Email is required.';
    else if (!validEmail(fields.email)) e.email = 'Please enter a valid email.';
    if (!fields.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-white/60 py-2.5 px-4 text-sm leading-8 outline-none backdrop-blur-sm transition-all duration-200 focus:ring-2 dark:bg-neutral-800/60';
  const inputNormal =
    `${inputBase} border-neutral-200 focus:border-violet-400 focus:ring-violet-400/20 dark:border-neutral-700 dark:focus:border-violet-400`;
  const inputError =
    `${inputBase} border-red-400 focus:ring-red-400/20`;

  return (
    <section id="contact" className="container mx-auto mt-20 px-5 text-center sm:mt-16 md:px-1 scroll-mt-28">
      <SectionHeader
        kicker="LET'S TALK"
        title="Get"
        highlight="In Touch"
        subtitle="Currently open to full-time, W2, and C2C contract roles in Java, Backend, and Full Stack engineering. Let's connect."
      />

      <div className="mx-auto w-full max-w-2xl text-left">
        <LoadAnimate amount={0}>
          {/* Glass form card */}
          <div className="rounded-2xl border border-white/30 bg-white/60 p-8 shadow-[0_8px_40px_rgba(139,92,246,0.08)] backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-900/60">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <Iconify icon="mdi:check-circle-outline" classes="text-3xl text-emerald-500" />
                </div>
                <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                  Thanks! I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="text-sm text-neutral-500 underline hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from humans, catches bots */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

                <div className="-m-2 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full p-2 sm:w-1/2">
                    <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Full Name"
                      value={fields.name}
                      onChange={set('name')}
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="w-full p-2 sm:w-1/2">
                    <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={set('email')}
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div className="w-full p-2">
                    <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Hello Vignesh,"
                      value={fields.message}
                      onChange={set('message')}
                      className={`resize-none ${errors.message ? inputError : inputNormal}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {/* Status + Submit */}
                  <div className="flex w-full items-center justify-between p-2">
                    <div className="text-sm">
                      {status === 'error' && (
                        <span className="text-red-500">
                          ❌ Something went wrong — please email me directly.
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-violet-700 hover:to-blue-600 hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send <Iconify classes="ml-1" icon="fluent:send-16-filled" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Footer links */}
          <div className="mt-8 border-t border-neutral-200 pt-8 text-center dark:border-neutral-800">
            <a
              href={`mailto:${contactEmail}?subject=Inquiry&body=Hello%20Vignesh`}
              className="inline-flex items-center gap-2 font-semibold text-neutral-800 transition hover:text-violet-600 dark:text-neutral-100 dark:hover:text-violet-400"
            >
              <Iconify classes="text-lg text-violet-600 dark:text-violet-400" icon="clarity:email-solid" />
              <span>{contactEmail}</span>
            </a>

            <p className="my-5 text-sm leading-normal text-neutral-600 dark:text-neutral-300">
              <Iconify classes="inline-block mr-1 text-violet-600 dark:text-violet-400" icon="bytesize:location" />
              Albany, NY · Open to Remote / Hybrid / Relocation
            </p>

            <div className="flex w-full justify-center">
              <SocialLinks />
            </div>
          </div>
        </LoadAnimate>
      </div>
    </section>
  );
}
