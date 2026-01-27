import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// components
import Iconify from '../components/Iconify';
import SocialLinks from '../components/social/SocialLinks';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { contactEmail } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);

      await emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.PUBLIC_KEY
      );

      formRef.current?.reset();
    } catch (error) {
      // intentional
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto mt-16 px-5 text-center sm:mt-10 md:px-1 scroll-mt-28">
      {/* ✅ Same heading effect style as Skills/Certifications */}
      <HeadingAnimate>
        <h2 className="mb-3 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Get In Touch
        </h2>
      </HeadingAnimate>

      <p className="mx-auto mb-10 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
        I’m open to full-time opportunities in Java / Backend / Full Stack. If you’d like to connect, discuss a role, or
        collaborate — feel free to reach out.
      </p>

      <div className="mx-auto w-full max-w-2xl text-left">
        <LoadAnimate amount={0}>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="name" className="text-sm leading-7 text-neutral-700 dark:text-neutral-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full Name"
                  name="user_name"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-2 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>

              <div className="w-full p-2 sm:w-1/2">
                <label htmlFor="email" className="text-sm leading-7 text-neutral-700 dark:text-neutral-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  name="user_email"
                  className="w-full rounded border border-primary-700/70 bg-primary-100/20 py-2 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                />
              </div>

              <div className="w-full p-2">
                <label htmlFor="message" className="text-sm leading-7 text-neutral-700 dark:text-neutral-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="h-32 w-full resize-none rounded border border-primary-700/70 bg-primary-100/20 py-2 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-primary-700/70 dark:border-primary-300/50 dark:bg-primary-300/10 dark:focus:ring-primary-300/50"
                  defaultValue="Hello Vignesh,"
                />
              </div>

              <div className="flex w-full justify-end p-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-700/40 disabled:opacity-60 dark:bg-primary-300 dark:text-black dark:hover:bg-primary-400 dark:focus:ring-primary-300/40"
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send <Iconify classes="ml-2" icon="fluent:send-16-filled" />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 w-full border-t border-neutral-200 p-2 pt-6 text-center dark:border-neutral-800">
                <a
                  href={`mailto:${contactEmail}?subject=Inquiry&body=Hello%20Vignesh`}
                  className="inline-flex items-center space-x-2 font-semibold text-neutral-800 hover:text-primary-700 dark:text-neutral-100 dark:hover:text-primary-300"
                >
                  <Iconify classes="text-lg text-primary-700 dark:text-primary-300" icon="clarity:email-solid" />
                  <span>{contactEmail}</span>
                </a>

                <p className="my-5 leading-normal text-neutral-600 dark:text-neutral-300">
                  <Iconify
                    classes="inline-block mr-1 text-lg text-primary-700 dark:text-primary-300"
                    icon="bytesize:location"
                  />
                  Albany, New York
                  <br />
                  United States
                </p>

                <div className="flex w-full justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </form>
        </LoadAnimate>
      </div>
    </section>
  );
}

Contact.propTypes = {};
