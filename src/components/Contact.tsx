import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/myzoayyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontakt" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-midnight mb-6">
            Jetzt kostenlos beraten lassen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Kontaktieren Sie uns für ein unverbindliches Angebot
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-midnight mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-midnight focus:outline-none focus:ring-0 transition-colors duration-300 text-midnight"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-midnight mb-2 uppercase tracking-wide">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-midnight focus:outline-none focus:ring-0 transition-colors duration-300 text-midnight"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-midnight mb-2 uppercase tracking-wide">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-midnight focus:outline-none focus:ring-0 transition-colors duration-300 text-midnight"
                  placeholder="01573 2649483"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-midnight mb-2 uppercase tracking-wide">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 transition-colors duration-300 resize-none text-gray-900"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen"
                />
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-midnight text-white py-4 rounded-full font-medium text-base hover:bg-midnight-dark transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-medium text-midnight mb-4 uppercase tracking-wide">Kontakt</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 font-light mb-1">Telefon</div>
                  <a
                    href="tel:+4915732649483"
                    className="text-base text-midnight hover:text-gray-600 transition-colors"
                  >
                    01573 2649483
                  </a>
                </div>

                <div>
                  <div className="text-sm text-gray-600 font-light mb-1">E-Mail</div>
                  <a
                    href="mailto:info@serviceplus-entruempelung.de"
                    className="text-base text-gray-900 hover:text-gray-600 transition-colors break-all"
                  >
                    info@serviceplus-entruempelung.de
                  </a>
                </div>

              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xs font-medium text-midnight mb-4 uppercase tracking-wide">Erreichbarkeit</h3>
              <div className="text-base text-midnight space-y-1">
                <p>Mo - Fr: 07:00 - 20:00 Uhr</p>
                <p>Sa: 08:00 - 18:00 Uhr</p>
                <p>So: Notfall-Hotline</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xs font-medium text-midnight mb-4 uppercase tracking-wide">24h Express-Hotline</h3>
              <a
                href="tel:+4915732649483"
                className="text-2xl font-light text-midnight hover:text-gray-600 transition-colors"
              >
                01573 2649483
              </a>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xs font-medium text-midnight mb-4 uppercase tracking-wide">Einzugsgebiet</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Stuttgart und Umgebung (30 km Radius): Esslingen, Ludwigsburg, Böblingen, Sindelfingen,
                Waiblingen, Fellbach, Kornwestheim, Leonberg und weitere Ortschaften.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
