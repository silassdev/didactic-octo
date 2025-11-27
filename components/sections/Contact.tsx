'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: '-120px' });

  const [formReady, setFormReady] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (inView) setFormReady(true);
  }, [inView]);

  function validate() {
    if (!name.trim()) return 'Please enter your name.';
    if (!email.trim()) return 'Please enter your email.';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email.';
    if (!message.trim() || message.trim().length < 10) return 'Message must be at least 10 characters.';
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setSubmitting(true);
    const payload = { name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() };

    const toastId = toast.loading('Sending message…');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.error || 'Failed to send message', { id: toastId });
        setSubmitting(false);
        return;
      }

      // success
      const ref = data?.referenceId ? ` (ref: ${data.referenceId})` : '';
      toast.success(`Message sent successfully${ref}`, { id: toastId });

      // clear form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Contact submit error:', error);
      toast.error('Network error — please try again later.', { id: toastId });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 px-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              Want to collaborate or hire? Send me a message — I usually reply within 48 hours.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {!formReady ? (
            <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-8 text-center">
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300">Scroll down to reveal the contact form</div>
              <div className="text-sm mt-2 text-gray-500">Form will be created when you reach this section.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 dark:text-gray-300 mb-1">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="px-3 py-2 rounded-md border bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
                    disabled={submitting}
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 dark:text-gray-300 mb-1">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    type="email"
                    className="px-3 py-2 rounded-md border bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
                    disabled={submitting}
                  />
                </label>
              </div>

              <label className="flex flex-col mt-4">
                <span className="text-sm text-gray-600 dark:text-gray-300 mb-1">Subject</span>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief subject"
                  className="px-3 py-2 rounded-md border bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
                  disabled={submitting}
                />
              </label>

              <label className="flex flex-col mt-4">
                <span className="text-sm text-gray-600 dark:text-gray-300 mb-1">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or question..."
                  className="px-3 py-2 rounded-md border bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none min-h-[140px]"
                  disabled={submitting}
                />
              </label>

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
