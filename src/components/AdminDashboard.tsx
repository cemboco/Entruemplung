import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Download, Mail, Phone, Calendar, MapPin } from 'lucide-react';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

type QuoteRequest = {
  id: string;
  objekt: string;
  objekt_sonstiges: string;
  flaeche: string;
  flaeche_hinweis: string;
  etage: string;
  aufzug: boolean;
  etage_hinweis: string;
  fuellgrad: string;
  plz: string;
  ort: string;
  termin: string;
  termin_datum: string;
  termin_hinweis: string;
  name: string;
  email: string;
  telefon: string;
  rueckruf_zeit: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'contacts' | 'quotes'>('contacts');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsResult, quotesResult] = await Promise.all([
        supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('quote_requests')
          .select('*')
          .order('created_at', { ascending: false }),
      ]);

      if (contactsResult.data) setContacts(contactsResult.data);
      if (quotesResult.data) setQuotes(quotesResult.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row =>
      Object.values(row).map(val =>
        typeof val === 'string' ? `"${val.replace(/"/g, '""')}"` : val
      ).join(',')
    );

    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Lade Daten...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-midnight mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Übersicht aller Kontaktanfragen und Schnellanfragen</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === 'contacts'
                    ? 'border-b-2 border-midnight text-midnight'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Kontaktformular ({contacts.length})
              </button>
              <button
                onClick={() => setActiveTab('quotes')}
                className={`px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === 'quotes'
                    ? 'border-b-2 border-midnight text-midnight'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Schnellanfragen ({quotes.length})
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'contacts' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium text-gray-900">Kontaktformular-Einträge</h2>
                  <button
                    onClick={() => exportToCSV(contacts, 'kontaktformular')}
                    className="flex items-center gap-2 px-4 py-2 bg-midnight text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Download size={16} />
                    CSV Export
                  </button>
                </div>

                {contacts.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Noch keine Kontaktanfragen vorhanden.</p>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-medium text-gray-900">{contact.name}</h3>
                          <span className="text-xs text-gray-500">
                            {formatDate(contact.created_at)}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail size={14} />
                            <a href={`mailto:${contact.email}`} className="hover:text-midnight">
                              {contact.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone size={14} />
                            <a href={`tel:${contact.phone}`} className="hover:text-midnight">
                              {contact.phone}
                            </a>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'quotes' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium text-gray-900">Schnellanfrage-Einträge</h2>
                  <button
                    onClick={() => exportToCSV(quotes, 'schnellanfragen')}
                    className="flex items-center gap-2 px-4 py-2 bg-midnight text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Download size={16} />
                    CSV Export
                  </button>
                </div>

                {quotes.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Noch keine Schnellanfragen vorhanden.</p>
                ) : (
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <div
                        key={quote.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-medium text-gray-900">{quote.name}</h3>
                          <span className="text-xs text-gray-500">
                            {formatDate(quote.created_at)}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Kontaktdaten</h4>
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Mail size={14} />
                                <a href={`mailto:${quote.email}`} className="hover:text-midnight">
                                  {quote.email}
                                </a>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Phone size={14} />
                                <a href={`tel:${quote.telefon}`} className="hover:text-midnight">
                                  {quote.telefon}
                                </a>
                              </div>
                              {quote.rueckruf_zeit && (
                                <div className="text-gray-600">
                                  Rückruf: {quote.rueckruf_zeit}
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Objektdetails</h4>
                            <div className="space-y-1.5 text-gray-600">
                              <div>Objekt: <span className="font-medium">{quote.objekt}</span></div>
                              {quote.objekt_sonstiges && (
                                <div>Details: {quote.objekt_sonstiges}</div>
                              )}
                              <div>Fläche: {quote.flaeche}</div>
                              {quote.flaeche_hinweis && <div>Hinweis: {quote.flaeche_hinweis}</div>}
                              <div>Etage: {quote.etage} {quote.aufzug && '(Aufzug vorhanden)'}</div>
                              {quote.etage_hinweis && <div>Hinweis: {quote.etage_hinweis}</div>}
                              <div>Füllgrad: {quote.fuellgrad}</div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Standort</h4>
                            <div className="flex items-start gap-2 text-gray-600">
                              <MapPin size={14} className="mt-0.5" />
                              <div>
                                <div>{quote.plz}</div>
                                {quote.ort && <div>{quote.ort}</div>}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Termin</h4>
                            <div className="flex items-start gap-2 text-gray-600">
                              <Calendar size={14} className="mt-0.5" />
                              <div>
                                <div>{quote.termin}</div>
                                {quote.termin_datum && <div>Datum: {quote.termin_datum}</div>}
                                {quote.termin_hinweis && <div>Hinweis: {quote.termin_hinweis}</div>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
