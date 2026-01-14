import { Home, Trash2, Package, Truck, Briefcase, Recycle, Building2, Warehouse, Sofa, LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  intro: {
    forWhom: string;
    situations: string[];
    emotional: string;
  };
  whatWeOffer: {
    title: string;
    description: string;
    included: string[];
  };
  benefits: string[];
  process: string[];
  features: string[];
  localRelevance: {
    areas: string[];
    description: string;
  };
  cta: {
    title: string;
    description: string;
  };
  additionalContent?: {
    title: string;
    sections: {
      heading: string;
      content: string;
    }[];
  };
  faq?: {
    question: string;
    answer: string;
  }[];
  relatedServices?: string[];
}

export const services: Service[] = [
  {
  slug: 'haushaltsaufloesung',
  icon: Home,
  title: 'Haushaltsauflösung Stuttgart',
  shortDescription: 'Professionelle Wohnungsauflösung nach Todesfall, bei Umzug ins Pflegeheim oder Immobilienverkauf. Komplettservice mit Wertanrechnung, fachgerechter Entsorgung und besenreiner Übergabe in Stuttgart und Umgebung.',
  fullDescription: 'Eine Haushaltsauflösung in Stuttgart ist oft mehr als nur Entrümpelung. Nach einem Todesfall, beim Umzug ins betreute Wohnen oder bei der Auflösung eines Erbes stehen Angehörige vor einer emotional belastenden Aufgabe. Serviceplus begleitet Sie in dieser Situation strukturiert, respektvoll und mit Einfühlungsvermögen. Als Unternehmen für Wohnungsauflösungen in Stuttgart und der Region übernehmen wir die komplette Abwicklung Ihrer Haushaltsauflösung – von der ersten Beratung über die Bewertung verwertbarer Gegenstände bis zur besenreinen Übergabe der Immobilie. Unser Team kennt die Stuttgarter Besonderheiten, arbeitet diskret und zuverlässig. Mit klaren Abläufen, transparenter Kommunikation und einem hohen Anspruch an Sorgfalt bieten wir Lösungen, die entlasten statt zusätzlich zu belasten. Ob komplette Haushaltsauflösung, Entrümpelung einzelner Räume oder besenreine Übergabe für den Immobilienverkauf – wir sind Ihr verlässlicher Ansprechpartner in Stuttgart.',

  intro: {
    forWhom: 'Unsere Haushaltsauflösungen in Stuttgart richten sich an Angehörige nach einem Todesfall in der Familie, Familien beim Umzug ins Pflegeheim oder betreute Wohnen, Erbengemeinschaften vor dem Immobilienverkauf, Hausverwaltungen bei Wohnungsübergaben, Senioren beim Wechsel in eine kleinere Wohnung sowie alle, die vor der Herausforderung einer kompletten Wohnungsauflösung stehen und professionelle Unterstützung wünschen.',
    situations: [
      'Haushaltsauflösung nach Todesfall – respektvolle Begleitung in einer schweren Zeit',
      'Umzug ins Pflegeheim oder betreutes Wohnen – schnelle und diskrete Wohnungsauflösung',
      'Nachlassauflösung für Erbengemeinschaften – faire Bewertung und strukturierte Abwicklung',
      'Immobilienverkauf vorbereiten – besenreine Übergabe für Verkauf oder Vermietung',
      'Wohnungsverkleinerung im Alter – Übergang in eine kleinere Wohnung begleiten',
      'Umzug ins Ausland – komplette Haushaltsabwicklung vor der Abreise',
      'Räumung bei Mieterwechsel – schnelle Objektfreimachung für Vermieter'
    ],
    emotional: 'Eine Haushaltsauflösung bedeutet oft Abschied. Abschied von einem geliebten Menschen, von einem Lebensabschnitt oder von vertrauten Räumen. In diesen Momenten sind es nicht nur Möbel und Gegenstände, die bewegt werden – es sind Erinnerungen, Geschichten und emotionale Werte. Unser Team von Serviceplus arbeitet mit Respekt, Einfühlungsvermögen und Diskretion. Wir nehmen uns Zeit für Ihre Anliegen, gehen behutsam mit persönlichen Gegenständen um und schaffen einen Rahmen, in dem Sie sich sicher fühlen können. Die organisatorische und körperliche Last nehmen wir Ihnen ab, damit Sie sich auf das Wesentliche konzentrieren können.'
  },

  whatWeOffer: {
    title: 'Unser Komplettservice für Haushaltsauflösungen in Stuttgart',
    description: 'Von der kostenlosen Erstberatung bis zur schlüsselfertigen oder besenreinen Übergabe übernehmen wir jeden Schritt Ihrer Wohnungsauflösung. Transparent, strukturiert und zu fairen Festpreisen.',
    included: [
      'Kostenlose Vor-Ort-Besichtigung und ausführliche Beratung in Stuttgart und Umgebung',
      'Detailliertes Festpreis-Angebot mit transparenter Aufstellung aller Leistungen',
      'Faire Bewertung und Wertanrechnung verwertbarer Gegenstände',
      'Professionelle Demontage von Möbeln und fest installierten Einbauten',
      'Komplette Räumung aller Wohn- und Nebenräume inklusive Keller, Dachboden und Garage',
      'Fachgerechte Sortierung und Trennung nach Verwertbarkeit und Entsorgungsart',
      'Umweltbewusste Entsorgung nach gesetzlichen Vorgaben',
      'Weitergabe brauchbarer Gegenstände an soziale Einrichtungen',
      'Besenreine Endreinigung oder optional schlüsselfertige Übergabe',
      'Flexible Terminplanung – auch kurzfristig möglich',
      'Diskrete Arbeitsweise und respektvoller Umgang mit persönlichen Gegenständen',
      'Koordination mit Vermietern, Maklern oder Hausverwaltungen auf Wunsch'
    ]
  },

  benefits: [
    'Alles aus einer Hand – ein fester Ansprechpartner',
    'Strukturierte, professionelle Arbeitsweise mit klaren Abläufen',
    'Diskrete und respektvolle Durchführung',
    'Termingerechte, besenreine Übergabe',
    'Wertanrechnung kann Ihre Kosten deutlich senken',
    'Transparente Festpreise ohne Nachforderungen',
    'Kurze Reaktionszeiten',
    'Haftpflichtversichertes Team',
    'Lokale Kenntnisse der Stuttgarter Gegebenheiten',
    'Nachhaltige Entsorgung und Weiterverwertung'
  ],

  process: [
    'Kostenlose Vor-Ort-Besichtigung und Beratung',
    'Bewertung verwertbarer Gegenstände',
    'Transparentes Festpreis-Angebot',
    'Terminabsprache nach Ihren Möglichkeiten',
    'Sorgfältige Sortierung persönlicher Gegenstände',
    'Professionelle Haushaltsauflösung',
    'Fachgerechte Entsorgung und Recycling',
    'Besenreine oder schlüsselfertige Übergabe',
    'Abschluss und Übergabeprotokoll'
  ],

  features: ['Komplette Abwicklung', 'Diskrete Durchführung', 'Termingerechte Übergabe'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd','Stuttgart-Nord',
      'Bad Cannstatt','Vaihingen','Degerloch','Feuerbach','Zuffenhausen','Möhringen',
      'Hedelfingen','Plieningen','Ludwigsburg','Esslingen','Böblingen','Sindelfingen',
      'Leonberg','Waiblingen','Fellbach','Kornwestheim','Filderstadt'
    ],
    description: 'Als lokales Unternehmen für Haushaltsauflösungen in Stuttgart kennen wir die regionalen Gegebenheiten: enge Treppenhäuser, Hanglagen, Parksituationen und unterschiedliche Objektstrukturen. Unser Team ist regelmäßig in Stuttgart und Umgebung im Einsatz und kann oft kurzfristig reagieren. Durch unser Netzwerk aus Entsorgungsstellen, sozialen Einrichtungen und Verwertungspartnern arbeiten wir effizient, fair und nachhaltig.'
  },

  cta: {
    title: 'Kostenlose Erstberatung für Ihre Haushaltsauflösung',
    description: 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir besichtigen die Räumlichkeiten kostenlos und erstellen Ihnen ein transparentes Festpreis-Angebot.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Haushaltsauflösung in Stuttgart',
    sections: [
      {
        heading: 'Was kostet eine Haushaltsauflösung in Stuttgart?',
        content: 'Die Kosten hängen von Größe, Hausrat, Zugänglichkeit und Verwertbarkeit ab. Nach der kostenlosen Besichtigung erhalten Sie ein transparentes Festpreis-Angebot. Durch Wertanrechnung können sich die Kosten deutlich reduzieren.'
      },
      {
        heading: 'Wie läuft eine professionelle Haushaltsauflösung ab?',
        content: 'Nach der Besichtigung planen wir den Ablauf, sortieren wichtige Gegenstände und führen die Räumung strukturiert durch. Am Ende übergeben wir die Immobilie besenrein oder schlüsselfertig.'
      },
      {
        heading: 'Haushaltsauflösung nach Todesfall – was ist wichtig?',
        content: 'Nehmen Sie sich Zeit für persönliche Entscheidungen. Wir arbeiten behutsam, respektieren Erinnerungen und unterstützen Angehörige in dieser sensiblen Phase.'
      },
      {
        heading: 'Kann man eine Haushaltsauflösung steuerlich absetzen?',
        content: 'Unter bestimmten Voraussetzungen können Kosten steuerlich geltend gemacht werden. Wir stellen ordnungsgemäße Rechnungen aus.'
      }
    ]
  },

  faq: [
    {
      question: 'Wie schnell können Sie eine Haushaltsauflösung in Stuttgart durchführen?',
      answer: 'Oft innerhalb weniger Tage, je nach Umfang und Dringlichkeit.'
    },
    {
      question: 'Was passiert mit Möbeln und Hausrat?',
      answer: 'Verwertbare Gegenstände werden angerechnet oder weitergegeben, der Rest fachgerecht entsorgt.'
    },
    {
      question: 'Muss ich anwesend sein?',
      answer: 'Nein. Auf Wunsch übernehmen wir die gesamte Durchführung eigenständig.'
    },
    {
      question: 'Was bedeutet besenrein?',
      answer: 'Die Wohnung ist vollständig geräumt und grob gereinigt, bereit zur Übergabe.'
    },
    {
      question: 'Entsorgen Sie auch Sondermüll?',
      answer: 'Ja, wir kümmern uns um fachgerechte Entsorgung von Elektrogeräten, Farben und Sonderabfällen.'
    },
    {
      question: 'Was unterscheidet Sie von anderen Entrümpelungsfirmen in Stuttgart?',
      answer: 'Wir arbeiten strukturiert, respektvoll und transparent. Unsere Kunden schätzen klare Abläufe, persönliche Betreuung und verlässliche Absprachen.'
    }
  ],

  relatedServices: ['entruempelung', 'wertanrechnung', 'immobilienraemung']
},
  {
  slug: 'entruempelung',
  icon: Trash2,
  title: 'Entrümpelung Stuttgart',
  shortDescription: 'Entrümpelung in Stuttgart vom Fachbetrieb. Wir räumen Wohnungen, Keller, Dachböden, Garagen und Gewerbeflächen. Festpreis, Wertanrechnung und fachgerechte Entsorgung inklusive.',
  fullDescription: 'Eine Entrümpelung in Stuttgart ist oft körperlich, organisatorisch und emotional belastend. Vollgestellte Keller, überladene Dachböden oder verwahrloste Wohnungen lassen sich selten allein bewältigen. Serviceplus ist Ihre professionelle Räumungsfirma für Entrümpelungen in Stuttgart und Umgebung. Wir übernehmen Wohnungsentrümpelungen, Kellerentrümpelungen, Dachbodenräumungen, Garagenräumungen und gewerbliche Entrümpelungen – strukturiert, diskret und zu transparenten Festpreisen. Unser Team kennt die Stuttgarter Gegebenheiten: enge Treppenhäuser in Altbauten, Hanglagen, schwierige Parksituationen und sensible Wohnumfelder. Wir sortieren professionell, trennen verwertbare Gegenstände, führen Wertanrechnung durch und entsorgen fachgerecht nach gesetzlichen Vorgaben. Das Ergebnis: freier Raum, klare Verhältnisse und spürbare Entlastung.',

  intro: {
    forWhom: 'Unsere Entrümpelungen in Stuttgart richten sich an Eigentümer, Mieter und Vermieter, die wieder Ordnung und Platz schaffen möchten, an Hausverwaltungen vor Neuvermietung oder Verkauf, an Erbengemeinschaften mit vollgestellten Immobilien, an Gewerbetreibende bei Geschäftsaufgabe sowie an alle, die körperlich, zeitlich oder organisatorisch Unterstützung bei Räumungsarbeiten benötigen.',
    situations: [
      'Keller entrümpeln – jahrelange Ansammlungen fachgerecht entfernen',
      'Dachboden räumen – Platz schaffen für Umbau oder Nutzung',
      'Garage entrümpeln – Stellfläche wieder nutzbar machen',
      'Wohnungsentrümpelung – bei Verwahrlosung oder nach Auszug',
      'Geerbte Immobilie räumen – unbekannte Gegenstände sortieren und entsorgen',
      'Schuppen und Gartenhäuser entrümpeln – Altlasten beseitigen',
      'Betriebs- und Lagerentrümpelung – Inventar bei Geschäftsaufgabe räumen'
    ],
    emotional: 'Unordnung wächst oft schleichend – und wird irgendwann zur Belastung. Was sich über Jahre ansammelt, wirkt nicht nur auf Räume, sondern auch auf den Kopf. Wir begegnen dieser Situation ohne Bewertung und ohne Druck. Unser Team arbeitet ruhig, strukturiert und respektvoll. Schritt für Schritt entsteht wieder Übersicht. Viele unserer Kundinnen und Kunden beschreiben den Moment nach der Entrümpelung als echte Erleichterung – wenn Räume wieder atmen können und ein neues Gefühl von Kontrolle entsteht.'
  },

  whatWeOffer: {
    title: 'Komplettservice für Entrümpelungen in Stuttgart',
    description: 'Von der einzelnen Kellerräumung bis zur kompletten Wohnungs- oder Gewerbeentrümpelung übernehmen wir alle Schritte Ihrer Entrümpelung in Stuttgart.',
    included: [
      'Kostenlose Vor-Ort-Besichtigung mit realistischer Aufwandseinschätzung',
      'Transparentes Festpreis-Angebot ohne versteckte Zusatzkosten',
      'Entrümpelung von Wohnungen, Kellern, Dachböden, Garagen und Nebenräumen',
      'Räumung stark belasteter oder verwahrloster Objekte',
      'Arbeiten in schwer zugänglichen Bereichen und Altbauten',
      'Professionelle Schutzausrüstung bei gesundheitsbelastenden Situationen',
      'Systematische Sortierung nach Wertstoffen, Recycling, Sondermüll und Restmüll',
      'Wertanrechnung für verwertbare Gegenstände',
      'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
      'Umweltbewusstes Recycling und Weiterverwertung',
      'Abschließende Grobreinigung der entrümpelten Flächen',
      'Flexible Terminplanung – auch samstags möglich'
    ]
  },

  benefits: [
    'Strukturierte, professionelle Entrümpelung aus einer Hand',
    'Fester Ansprechpartner vom Erstkontakt bis zur Übergabe',
    'Diskrete Durchführung auf Wunsch',
    'Transparente Festpreise mit Wertanrechnung',
    'Kurze Reaktionszeiten in Stuttgart und Umgebung',
    'Ausrüstung für enge Treppenhäuser und schwierige Objekte',
    'Haftpflichtversichertes Team',
    'Fachgerechte Entsorgung nach Umweltvorgaben',
    'Lokale Kenntnisse der Stuttgarter Stadtstruktur',
    'Spürbare Entlastung für Eigentümer und Angehörige'
  ],

  process: [
    'Kontaktaufnahme und Terminvereinbarung',
    'Kostenlose Besichtigung vor Ort in Stuttgart',
    'Festpreis-Angebot mit klarer Leistungsübersicht',
    'Termin nach Ihren zeitlichen Möglichkeiten',
    'Professionelle Entrümpelung durch unser Team',
    'Sortierung und fachgerechte Trennung aller Materialien',
    'Umweltgerechte Entsorgung und Recycling',
    'Abschließende Grobreinigung und Übergabe'
  ],

  features: ['Alle Räumlichkeiten', 'Schwer zugängliche Bereiche', 'Fachgerechte Entsorgung'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd','Stuttgart-Nord',
      'Bad Cannstatt','Feuerbach','Vaihingen','Degerloch','Möhringen','Zuffenhausen',
      'Esslingen','Ludwigsburg','Waiblingen','Fellbach','Sindelfingen'
    ],
    description: 'Entrümpelungen in Stuttgart bringen besondere Herausforderungen mit sich: Hanglagen, enge Altbauten, begrenzte Parkflächen und sensible Wohnumfelder. Unser Team ist regelmäßig in allen Stadtteilen im Einsatz und kennt diese Bedingungen. Wir planen Zugänge, Transportwege und Entsorgung realistisch und können dadurch effizient und sauber arbeiten.'
  },

  cta: {
    title: 'Kostenlose Erstberatung für Ihre Entrümpelung in Stuttgart',
    description: 'Kontaktieren Sie uns für ein unverbindliches Gespräch. Wir besichtigen vor Ort und erstellen ein transparentes Festpreis-Angebot.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Entrümpelung in Stuttgart',
    sections: [
      {
        heading: 'Was kostet eine Entrümpelung in Stuttgart?',
        content: 'Die Kosten hängen von Volumen, Zugänglichkeit, Entsorgungsaufwand und Verwertbarkeit ab. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot. Wertanrechnung kann die Kosten deutlich senken.'
      },
      {
        heading: 'Wann ist eine professionelle Entrümpelung sinnvoll?',
        content: 'Bei großen Mengen, körperlicher Belastung, Sondermüll, Zeitdruck oder rechtlichen Anforderungen ist eine Fachfirma sinnvoll. Sie sparen Zeit, vermeiden Risiken und erhalten eine rechtssichere Entsorgung.'
      },
      {
        heading: 'Wie wird sortiert und entsorgt?',
        content: 'Wir trennen vor Ort nach verwertbaren Gegenständen, Recyclingmaterial, Sondermüll und Restmüll. Jede Kategorie wird separat und gesetzeskonform entsorgt.'
      },
      {
        heading: 'Entrümpelung in Stuttgarter Altbauten',
        content: 'Enge Treppenhäuser, empfindliche Bausubstanz und Parksituationen erfordern Erfahrung und Schutzmaßnahmen. Wir arbeiten mit Wand- und Bodenschutz, Tragehilfen und abgestimmter Logistik.'
      }
    ]
  },

  faq: [
    {
      question: 'Wie schnell können Sie eine Entrümpelung in Stuttgart durchführen?',
      answer: 'Je nach Umfang oft innerhalb weniger Tage. Dringende Termine sind nach Absprache möglich.'
    },
    {
      question: 'Entrümpeln Sie auch Wohnungen ohne Aufzug?',
      answer: 'Ja. Wir sind auf Altbauten und höhere Stockwerke ohne Aufzug eingestellt.'
    },
    {
      question: 'Was passiert mit brauchbaren Gegenständen?',
      answer: 'Verwertbare Gegenstände werden angerechnet oder weitergegeben, der Rest fachgerecht entsorgt.'
    },
    {
      question: 'Übernehmen Sie auch Sondermüll?',
      answer: 'Ja. Wir entsorgen auch Elektrogeräte, Farben, Chemikalien und Problemstoffe gesetzeskonform.'
    },
    {
      question: 'Muss ich anwesend sein?',
      answer: 'Nein. Nach Absprache übernehmen wir die Entrümpelung vollständig eigenständig.'
    }
  ],

  relatedServices: ['keller-dachboden', 'haushaltsaufloesung', 'wertanrechnung']
},
  {
  slug: 'messie-wohnungen',
  icon: Package,
  title: 'Messie-Wohnung Stuttgart',
  shortDescription: 'Diskrete Messie-Räumung in Stuttgart. Wir entrümpeln stark vermüllte Wohnungen einfühlsam, respektvoll und fachgerecht – inklusive Desinfektion, Geruchsbeseitigung und Sonderentsorgung.',
  fullDescription: 'Die Räumung einer Messie-Wohnung in Stuttgart ist keine gewöhnliche Entrümpelung. Sie erfordert Einfühlungsvermögen, Diskretion und eine strukturierte, professionelle Vorgehensweise. Serviceplus ist auf die sensible Entrümpelung von Messie-Wohnungen spezialisiert. Wir unterstützen Betroffene, Angehörige, Vermieter und soziale Einrichtungen dabei, stark vermüllte Wohnungen Schritt für Schritt wieder bewohnbar zu machen. Unser Team arbeitet ruhig, respektvoll und ohne Vorurteile. Neben der eigentlichen Räumung übernehmen wir die fachgerechte Entsorgung, auf Wunsch die Desinfektion, Geruchsbeseitigung und Schädlingsbehandlung. In Stuttgart und Umgebung sind wir Ihr diskreter Ansprechpartner für Messie-Räumungen und Spezialentrümpelungen.',

  intro: {
    forWhom: 'Unsere Messie-Räumungen in Stuttgart richten sich an Betroffene selbst, an Angehörige, die unterstützen möchten, an Vermieter und Hausverwaltungen, an gesetzliche Betreuer, Sozialdienste und Pflegeeinrichtungen sowie an alle, die in einer sensiblen Situation professionelle, diskrete Hilfe benötigen.',
    situations: [
      'Messie-Syndrom – professionelle Unterstützung ohne Vorurteile',
      'Stark vermüllte Wohnungen wieder bewohnbar machen',
      'Animal Hoarding – spezielle Räumung nach extremer Tierhaltung',
      'Verwahrlosung im Alter – einfühlsame Begleitung',
      'Drohende Räumung oder Kündigung – schnelle Intervention',
      'Gesundheitsgefährdende Zustände – hygienische Spezialentrümpelung'
    ],
    emotional: 'Ein Messie-Syndrom ist keine Charakterschwäche, sondern eine ernstzunehmende Belastung. Wir begegnen jedem Menschen mit Respekt und ohne Bewertung. Unser Team arbeitet ruhig, verständnisvoll und in dem Tempo, das für die Situation passend ist. Auf Wunsch begleiten wir die Räumung gemeinsam mit Betreuern oder Angehörigen. Unser Ziel ist nicht nur eine leere Wohnung, sondern ein sicherer, würdevoller Neuanfang.'
  },

  whatWeOffer: {
    title: 'Spezialisierte Messie-Räumung in Stuttgart',
    description: 'Wir bieten mehr als Entrümpelung – wir schaffen die Grundlage für einen neuen Anfang.',
    included: [
      'Vertrauliches Erstgespräch und einfühlsame Beratung',
      'Diskrete Besichtigung nach Terminabsprache',
      'Individuelle Planung – schrittweise oder vollständige Räumung',
      'Geschultes, sensibles Personal',
      'Systematische Sicherung wichtiger Dokumente und Erinnerungsstücke',
      'Professionelle Entrümpelung stark vermüllter Wohnungen',
      'Fachgerechte Entsorgung inklusive Sondermüll',
      'Desinfektion und hygienische Spezialreinigung',
      'Professionelle Geruchsbeseitigung',
      'Koordination mit Sozialdiensten oder Betreuern auf Wunsch',
      'Unauffällige Durchführung und absolute Vertraulichkeit'
    ]
  },

  benefits: [
    'Absolute Diskretion und respektvoller Umgang',
    'Spezialisierung auf Messie- und Extremräumungen',
    'Einfühlsame Vorgehensweise ohne Druck',
    'Professionelle Desinfektion und Geruchsneutralisation',
    'Fachgerechte Entsorgung nach Hygienestandards',
    'Flexible Durchführung – Schritt für Schritt oder komplett',
    'Zusammenarbeit mit Betreuern und sozialen Stellen möglich',
    'Ziel: wieder sichere, bewohnbare Räume'
  ],

  process: [
    'Vertrauliche Kontaktaufnahme',
    'Diskrete Besichtigung und Beratung',
    'Individueller Räumungsplan',
    'Behutsame Durchführung der Messie-Räumung',
    'Spezialreinigung, Desinfektion und Geruchsbeseitigung',
    'Besenreine Übergabe oder weiterführende Maßnahmen'
  ],

  features: ['Absolute Diskretion', 'Geschultes Fachpersonal', 'Spezialreinigung & Geruchsbeseitigung'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd','Bad Cannstatt',
      'Vaihingen','Feuerbach','Zuffenhausen','Möhringen','Degerloch',
      'Esslingen','Ludwigsburg','Waiblingen','Sindelfingen'
    ],
    description: 'Gerade in dicht besiedelten Stadtteilen Stuttgarts ist Diskretion entscheidend. Wir arbeiten unauffällig, in neutraler Kleidung und auf Wunsch zu Randzeiten. Unser Team kennt die örtlichen Gegebenheiten und geht rücksichtsvoll vor – gegenüber Betroffenen ebenso wie gegenüber Nachbarn.'
  },

  cta: {
    title: 'Vertrauliche Beratung zur Messie-Räumung in Stuttgart',
    description: 'Nehmen Sie diskret Kontakt zu uns auf. Wir beraten Sie einfühlsam und entwickeln ein individuelles Vorgehen für Ihre Situation.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Messie-Wohnungsräumung',
    sections: [
      {
        heading: 'Was ist das Messie-Syndrom?',
        content: 'Das Messie-Syndrom beschreibt ein komplexes Krankheitsbild, bei dem das Loslassen und Ordnen von Gegenständen schwerfällt. Die Räumung ist meist nur ein Teil des Weges – psychologische und soziale Begleitung sind wichtig für nachhaltige Veränderungen.'
      },
      {
        heading: 'Wie läuft eine diskrete Messie-Räumung ab?',
        content: 'Wir arbeiten unauffällig, in neutraler Kleidung und ohne Aufsehen. Auf Wunsch sortieren wir gemeinsam, sichern wichtige Dinge und gehen etappenweise vor.'
      },
      {
        heading: 'Was kostet eine Messie-Räumung in Stuttgart?',
        content: 'Die Kosten hängen von Wohnungsgröße, Vermüllungsgrad und Zusatzleistungen ab. Nach einer vertraulichen Besichtigung erstellen wir ein individuelles Angebot.'
      },
      {
        heading: 'Arbeiten Sie mit Beratungsstellen zusammen?',
        content: 'Ja. Auf Wunsch kooperieren wir mit Betreuern, Sozialdiensten und Therapeuten. Unser Ziel ist nicht nur Sauberkeit, sondern Stabilität.'
      }
    ]
  },

  faq: [
    {
      question: 'Wie diskret arbeiten Sie?',
      answer: 'Wir kommen unauffällig, arbeiten vertraulich und passen Termine Ihren Bedürfnissen an.'
    },
    {
      question: 'Sichern Sie wichtige Gegenstände?',
      answer: 'Ja. Dokumente, Erinnerungsstücke und Wertsachen werden sorgfältig aussortiert.'
    },
    {
      question: 'Übernehmen Sie Geruchsbeseitigung und Desinfektion?',
      answer: 'Ja. Wir führen professionelle Geruchsneutralisation und hygienische Reinigung durch.'
    },
    {
      question: 'Was ist bei Ungezieferbefall?',
      answer: 'Wir koordinieren Schädlingsbekämpfung, Räumung und Desinfektion als Gesamtprozess.'
    },
    {
      question: 'Kann die Räumung in Etappen erfolgen?',
      answer: 'Ja. Wir richten uns nach der emotionalen Belastbarkeit der Betroffenen.'
    },
    {
      question: 'Gibt es finanzielle Unterstützung?',
      answer: 'In manchen Fällen sind Zuschüsse über Sozialstellen möglich. Wir beraten Sie dazu.'
    }
  ],

  relatedServices: ['entruempelung', 'haushaltsaufloesung', 'immobilienraemung']
},
  {
  slug: 'keller-dachboden',
  icon: Warehouse,
  title: 'Keller & Dachboden Stuttgart',
  shortDescription: 'Keller- und Dachbodenentrümpelung in Stuttgart. Wir räumen vollgestellte, schwer zugängliche Bereiche inklusive Sondermüll, Wertanrechnung und fachgerechter Entsorgung.',
  fullDescription: 'Keller und Dachböden werden oft über Jahre zu Abstellflächen für alles, was im Alltag keinen Platz mehr findet. Irgendwann wird aus Lagern eine Belastung. Eine professionelle Keller- oder Dachbodenentrümpelung in Stuttgart erfordert nicht nur Kraft, sondern auch Struktur, Umsicht und Fachkenntnis im Umgang mit Sondermüll, Schadstoffen und verwertbaren Gegenständen. Serviceplus unterstützt Sie dabei, Keller und Dachböden wieder nutzbar zu machen – professionell, sauber und diskret. Wir übernehmen die komplette Entrümpelung schwer zugänglicher Bereiche, sortieren systematisch, sichern Wertgegenstände und entsorgen fachgerecht nach gesetzlichen Vorgaben. So entsteht wieder Raum, Ordnung und Übersicht.',

  intro: {
    forWhom: 'Unsere Keller- und Dachbodenentrümpelungen in Stuttgart richten sich an Hausbesitzer vor Renovierung oder Verkauf, an Mieter bei Wohnungswechsel, an Erbengemeinschaften mit vollgestellten Räumen sowie an Vermieter und Hausverwaltungen, die Kellerabteile oder Dachböden wieder nutzbar machen möchten.',
    situations: [
      'Vollgestellter Keller – jahrelange Ansammlungen fachgerecht räumen',
      'Dachboden entrümpeln – Platz für Ausbau oder Nutzung schaffen',
      'Immobilienverkauf vorbereiten – Nebenräume besenrein übergeben',
      'Sondermüll im Keller – Farben, Lacke, Chemikalien sicher entsorgen',
      'Feuchte oder schimmelbelastete Räume – belastete Gegenstände entfernen',
      'Enge Zugänge – sichere Räumung trotz schwieriger Bedingungen'
    ],
    emotional: 'Keller und Dachböden schiebt man oft vor sich her. Zu voll, zu unübersichtlich, zu anstrengend. Wir nehmen Ihnen diese Aufgabe vollständig ab. Von der ersten Sortierung bis zum letzten Abtransport kümmern wir uns um alles. Und nicht selten tauchen dabei Dinge auf, die man längst vergessen hatte – Erinnerungsstücke, Werkzeuge oder kleine Schätze.'
  },

  whatWeOffer: {
    title: 'Spezialisierte Keller- und Dachbodenentrümpelung in Stuttgart',
    description: 'Schwer zugängliche Räume sind unsere Stärke. Wir arbeiten strukturiert, geschützt und mit durchdachter Logistik.',
    included: [
      'Kostenlose Vor-Ort-Besichtigung mit Prüfung der Zugänglichkeit',
      'Einschätzung von Sondermüll, Schadstoffen und verwertbaren Gegenständen',
      'Planung sicherer Transportwege und Arbeitsabläufe',
      'Schutzmaßnahmen für Böden, Wände und Treppenhäuser',
      'Entrümpelung auch bei engen Treppen, niedrigen Decken und kleinen Luken',
      'Fachgerechte Entsorgung von Farben, Lacken, Chemikalien und Sondermüll',
      'Saubere Trennung aller Materialien',
      'Aussortierung und Sicherung von Wert- und Erinnerungsstücken',
      'Abschließende Grobreinigung der geräumten Flächen',
      'Besenreine Übergabe auf Wunsch'
    ]
  },

  benefits: [
    'Entrümpelung auch schwer zugänglicher Keller und Dachböden',
    'Fachgerechte Sondermüllentsorgung',
    'Staubarme, geschützte Arbeitsweise',
    'Sorgfältige Wert- und Fundstückprüfung',
    'Sicherer Umgang mit Schadstoffen',
    'Zügige und planbare Abwicklung',
    'Faire Festpreise',
    'Lokale Kenntnisse der Stuttgarter Altbausubstanz'
  ],

  process: [
    'Kostenlose Besichtigung vor Ort',
    'Einschätzung von Aufwand, Sondermüll und Logistik',
    'Individueller Räumungsplan',
    'Systematische Keller- oder Dachbodenentrümpelung',
    'Getrennte, fachgerechte Entsorgung',
    'Grobreinigung und Übergabe'
  ],

  features: ['Auch schwer zugänglich', 'Sondermüll-Entsorgung', 'Saubere Arbeitsweise'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Bad Cannstatt',
      'Degerloch','Vaihingen','Möhringen','Feuerbach',
      'Esslingen','Ludwigsburg','Böblingen','Sindelfingen'
    ],
    description: 'Stuttgarter Keller und Dachböden sind oft eng, verwinkelt und schwer zugänglich. Unser Team kennt diese Gegebenheiten aus dem Alltag: niedrige Decken, steile Treppen, kleine Zugänge. Wir arbeiten mit angepasstem Equipment, Schutzsystemen und klarer Logistik, um auch schwierige Räume sicher und sauber zu entrümpeln.'
  },

  cta: {
    title: 'Keller oder Dachboden in Stuttgart entrümpeln lassen',
    description: 'Kontaktieren Sie uns für eine kostenlose Besichtigung. Wir erstellen einen individuellen Räumungsplan und ein transparentes Angebot.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Keller- und Dachbodenentrümpelung',
    sections: [
      {
        heading: 'Was kostet eine Keller- oder Dachbodenentrümpelung in Stuttgart?',
        content: 'Die Kosten hängen von Größe, Füllgrad, Zugänglichkeit und Art der Gegenstände ab. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreis-Angebot. Verwertbare Gegenstände können angerechnet werden.'
      },
      {
        heading: 'Wie lange dauert eine Entrümpelung?',
        content: 'Je nach Umfang dauert eine Keller- oder Dachbodenentrümpelung zwischen wenigen Stunden und ein bis zwei Tagen. Die Dauer schätzen wir vorab realistisch ein.'
      },
      {
        heading: 'Was passiert mit Sondermüll?',
        content: 'Sondermüll wird separat erfasst und gesetzeskonform entsorgt. Sie erhalten die Sicherheit einer ordnungsgemäßen Entsorgung.'
      },
      {
        heading: 'Werden Wertsachen berücksichtigt?',
        content: 'Ja. Wir sortieren sorgfältig und legen alles Wertvolle beiseite. Verwertbare Funde können kostenmindernd angerechnet werden.'
      }
    ]
  },

  faq: [
    {
      question: 'Entrümpeln Sie auch sehr niedrige oder enge Keller?',
      answer: 'Ja. Enge, niedrige Keller sind in Stuttgart häufig. Wir passen Arbeitsweise und Ausrüstung an.'
    },
    {
      question: 'Kann ich während der Räumung noch Dinge behalten?',
      answer: 'Natürlich. Wir sortieren transparent und lassen Ihnen Zeit für Entscheidungen.'
    },
    {
      question: 'Übernehmen Sie auch enge Dachböden mit Wendeltreppen?',
      answer: 'Ja. Wir prüfen die Zugänge vorab und planen Transport und Zerlegung entsprechend.'
    },
    {
      question: 'Was passiert mit alten Werkzeugen und Metallen?',
      answer: 'Verwertbares wird angerechnet, der Rest fachgerecht entsorgt oder recycelt.'
    },
    {
      question: 'Gibt es eine Endreinigung?',
      answer: 'Standard ist eine Grobreinigung. Auf Wunsch bieten wir auch eine gründlichere Übergabe an.'
    },
    {
      question: 'Wie gehen Sie mit Schimmel und Feuchtigkeit um?',
      answer: 'Belastete Gegenstände werden gesondert behandelt und entsorgt. Auf Wunsch führen wir eine Grunddesinfektion durch.'
    }
  ],

  relatedServices: ['entruempelung', 'haushaltsaufloesung', 'wertanrechnung']
},
  {
  slug: 'sperrmuell-entsorgung',
  icon: Truck,
  title: 'Sperrmüll Abholung Stuttgart',
  shortDescription: 'Private Sperrmüll Abholung in Stuttgart. Wir holen Möbel, Elektrogeräte und sperrige Gegenstände direkt bei Ihnen ab – oft kurzfristig, inklusive Trageservice und fachgerechter Entsorgung.',
  fullDescription: 'Wenn alte Möbel, defekte Elektrogeräte oder sperrige Gegenstände entsorgt werden müssen, fehlt oft die Zeit, auf einen kommunalen Sperrmülltermin zu warten. Serviceplus bietet Ihnen eine schnelle, private Sperrmüll Abholung in Stuttgart und Umgebung. Wir holen Ihren Sperrmüll direkt bei Ihnen ab – aus der Wohnung, dem Keller oder dem Dachboden – und kümmern uns um den fachgerechten Abtransport, die Sortierung und die gesetzeskonforme Entsorgung. Ob einzelne Möbelstücke oder größere Mengen: Wir schaffen Platz, zuverlässig, transparent und ohne unnötigen Aufwand für Sie.',

  intro: {
    forWhom: 'Unsere Sperrmüll Abholung in Stuttgart richtet sich an Mieter vor einem Umzug, Haushalte bei Neuanschaffungen, Vermieter nach Auszug, Senioren, Angehörige sowie alle, die sperrige Gegenstände unkompliziert und zeitnah entsorgen möchten.',
    situations: [
      'Alte Möbel entsorgen – Sofa, Schrank, Bett, Regale',
      'Elektrogeräte abholen lassen – Kühlschrank, Waschmaschine, Herd',
      'Umzugsentsorgung – was nicht mitkommt, holen wir ab',
      'Sperrige Gegenstände – Matratzen, Teppiche, große Kartons',
      'Gartenmöbel und Kellerräume leeren',
      'Kurzfristige Abholung bei Zeitdruck'
    ],
    emotional: 'Manchmal muss es einfach zügig gehen. Etwas Neues kommt – und das Alte muss weg. Wir wissen, wie belastend volle Räume sein können. Darum halten wir die Sperrmüll Abholung bewusst unkompliziert: kurze Abstimmung, klarer Termin, saubere Arbeit. Unser Team kommt, trägt, lädt ein und kümmert sich um den Rest. Sie müssen nichts vorbereiten und nichts schleppen.'
  },

  whatWeOffer: {
    title: 'Private Sperrmüll Abholung in Stuttgart',
    description: 'Wir holen Ihren Sperrmüll dort ab, wo er steht – flexibel, zuverlässig und fachgerecht.',
    included: [
      'Kurzfristige Terminvereinbarung nach Verfügbarkeit',
      'Abholung direkt aus Wohnung, Keller oder Dachboden',
      'Trageservice auch aus oberen Etagen',
      'Abholung einzelner Möbelstücke oder größerer Mengen',
      'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
      'Sortierung nach Wertstoffen, Elektroschrott und Restmüll',
      'Umweltgerechtes Recycling',
      'Transparente Preise ohne versteckte Kosten',
      'Freundliches, umsichtiges Team'
    ]
  },

  benefits: [
    'Schnelle und flexible Terminvergabe',
    'Abholung direkt vor Ort – kein Tragen für Sie',
    'Auch Einzelstücke möglich',
    'Transparente Preise',
    'Fachgerechte Entsorgung und Recycling',
    'Entlastung bei Umzug, Haushaltsauflösung oder Neuanschaffung',
    'Zuverlässige und saubere Durchführung',
    'Lokaler Service in Stuttgart'
  ],

  process: [
    'Kontaktaufnahme per Telefon oder Online-Anfrage',
    'Kurze Beschreibung von Art und Menge des Sperrmülls',
    'Terminvereinbarung',
    'Pünktliche Abholung vor Ort',
    'Professionelles Verladen',
    'Fachgerechte Entsorgung und Verwertung'
  ],

  features: ['Flexible Termine', 'Abholung aus der Wohnung', 'Fachgerechte Entsorgung'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd','Stuttgart-Nord',
      'Bad Cannstatt','Vaihingen','Feuerbach','Degerloch','Möhringen',
      'Esslingen','Ludwigsburg'
    ],
    description: 'Wir sind regelmäßig in allen Stadtteilen Stuttgarts im Einsatz und kennen die örtlichen Gegebenheiten: enge Straßen, Altbauten, begrenzte Parkmöglichkeiten. Dadurch können wir Abholungen realistisch planen und zügig durchführen.'
  },

  cta: {
    title: 'Sperrmüll Abholung in Stuttgart anfragen',
    description: 'Kontaktieren Sie uns für eine unverbindliche Anfrage. Wir nennen Ihnen zeitnah einen Termin und ein transparentes Angebot.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Sperrmüll Abholung in Stuttgart',
    sections: [
      {
        heading: 'Was kostet eine private Sperrmüll Abholung in Stuttgart?',
        content: 'Die Kosten hängen von Art, Menge, Stockwerk und Aufwand ab. Nach kurzer Abstimmung nennen wir Ihnen vorab einen klaren Preis. Sie zahlen für Flexibilität, Wunschtermin und Abholung direkt aus der Wohnung.'
      },
      {
        heading: 'Was zählt alles zum Sperrmüll?',
        content: 'Zum Sperrmüll gehören unter anderem Möbel, Matratzen, Teppiche, große Elektrogeräte, Kinderwagen, Fahrräder und sperrige Haushaltsgegenstände. Bei Unsicherheit beraten wir Sie gern.'
      },
      {
        heading: 'Wie schnell ist eine Abholung möglich?',
        content: 'Je nach Auslastung sind kurzfristige Termine möglich. Rufen Sie uns an, und wir prüfen, wann wir Sie einplanen können.'
      },
      {
        heading: 'Muss ich den Sperrmüll an die Straße stellen?',
        content: 'Nein. Wir holen direkt dort ab, wo die Gegenstände stehen. Unser Team übernimmt Tragen, Transport und Entsorgung.'
      }
    ]
  },

  faq: [
    {
      question: 'Holen Sie auch Elektrogeräte ab?',
      answer: 'Ja. Wir entsorgen Elektrogeräte fachgerecht nach den gesetzlichen Vorgaben.'
    },
    {
      question: 'Kann ich auch nur ein einzelnes Möbelstück abholen lassen?',
      answer: 'Ja. Auch einzelne Sofas, Schränke oder Geräte holen wir ab.'
    },
    {
      question: 'Arbeiten Sie auch samstags?',
      answer: 'Nach Absprache sind Samstags-Termine möglich.'
    },
    {
      question: 'Was passiert mit meinem Sperrmüll?',
      answer: 'Wir sortieren nach verwertbaren Materialien, Elektroschrott und Restmüll und führen alles der fachgerechten Entsorgung zu.'
    },
    {
      question: 'Muss ich anwesend sein?',
      answer: 'Für die Übergabe ist es sinnvoll, dass jemand vor Ort ist. Nach Absprache können wir auch mit Schlüsselübergabe arbeiten.'
    }
  ],

  relatedServices: ['entruempelung', 'haushaltsaufloesung', 'keller-dachboden']
},
  {
  slug: 'immobilienraemung',
  icon: Building2,
  title: 'Immobilienräumung Stuttgart',
  shortDescription: 'Professionelle Immobilienräumung in Stuttgart für Hausverwaltungen, Makler und Eigentümer. Schnelle Objektfreimachung, transparente Festpreise und zuverlässige Übergabe.',
  fullDescription: 'Eine Immobilie kann erst dann wieder vermietet oder verkauft werden, wenn sie vollständig geräumt und in einem ordentlichen Zustand ist. Genau hier setzt unsere Immobilienräumung in Stuttgart an. Serviceplus unterstützt Hausverwaltungen, Immobilienmakler und Eigentümer bei der zügigen und professionellen Freimachung von Wohnungen, Häusern und Gewerbeeinheiten. Wir übernehmen die komplette Räumung, kümmern uns um fachgerechte Entsorgung und bereiten Objekte auf Wunsch so vor, dass sie direkt weiterverwertet werden können. Unser Fokus liegt auf Verlässlichkeit, klarer Kommunikation und einer sauberen, dokumentierten Übergabe.',

  intro: {
    forWhom: 'Unsere Immobilienräumungen in Stuttgart richten sich an Hausverwaltungen, Immobilienmakler, Wohnungsbaugesellschaften, Eigentümer, Erbengemeinschaften sowie Investoren, die Objekte schnell wieder vermietbar oder verkaufsfähig machen müssen.',
    situations: [
      'Objektfreimachung nach Auszug oder Kündigung',
      'Räumung nach gerichtlichen Entscheidungen',
      'Nachlassimmobilien vor Verkauf',
      'Wohnungen nach Messie- oder Verwahrlosungssituationen',
      'Vorbereitung für Neuvermietung',
      'Räumung vor Sanierung oder Modernisierung'
    ],
    emotional: 'Jeder Tag Leerstand kostet Zeit, Geld und Energie. Wir wissen, dass Sie sich auf Dienstleister verlassen müssen, wenn Fristen, Übergaben oder Verkaufstermine anstehen. Unser Team arbeitet strukturiert, lösungsorientiert und zuverlässig. Sie bekommen klare Termine, realistische Einschätzungen und ein Objekt, das wieder nutzbar ist.'
  },

  whatWeOffer: {
    title: 'Immobilienräumung für Hausverwaltungen & Makler',
    description: 'Ein klar strukturierter Service für professionelle Anforderungen – von der Räumung bis zur dokumentierten Übergabe.',
    included: [
      'Zeitnahe Objektbesichtigung nach Anfrage',
      'Verbindliches Festpreis-Angebot',
      'Komplette Räumung aller Wohn- und Nebenräume',
      'Räumung von Kellern, Dachböden und Garagen',
      'Sortierung und fachgerechte Entsorgung',
      'Wertanrechnung bei verwertbaren Gegenständen',
      'Besenreine Übergabe als Standard',
      'Optional: Endreinigung und einfache Instandsetzungen',
      'Fotodokumentation vor und nach der Räumung',
      'Übergabeprotokoll für Ihre Unterlagen'
    ]
  },

  benefits: [
    'Zuverlässige und planbare Abwicklung',
    'Transparente Festpreise für sichere Kalkulation',
    'Besenreine oder erweiterte Übergabe möglich',
    'Dokumentation für Verwaltung und Eigentümer',
    'Kurze Reaktionszeiten',
    'Ein fester Ansprechpartner',
    'Erfahrung mit sensiblen und komplexen Objekten',
    'Entlastung Ihrer internen Abläufe'
  ],

  process: [
    'Anfrage und erste Abstimmung',
    'Zeitnahe Objektbesichtigung',
    'Festpreis-Angebot mit Leistungsübersicht',
    'Terminierung nach Ihren Fristen',
    'Professionelle Räumung',
    'Übergabe mit Dokumentation'
  ],

  features: ['Objektfreimachung', 'Besenreine Übergabe', 'Fotodokumentation'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd',
      'Bad Cannstatt','Vaihingen','Feuerbach','Degerloch','Möhringen',
      'Esslingen','Ludwigsburg','Böblingen'
    ],
    description: 'Wir arbeiten regelmäßig in Stuttgart und der Region und kennen die lokalen Gegebenheiten – von Altbauten über große Wohnanlagen bis zu Gewerbeobjekten. Diese Erfahrung ermöglicht eine realistische Planung und zuverlässige Umsetzung.'
  },

  cta: {
    title: 'Immobilienräumung anfragen',
    description: 'Kontaktieren Sie uns für eine unverbindliche Anfrage. Wir melden uns zeitnah zur Besichtigung und Angebotserstellung.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Immobilienräumung in Stuttgart',
    sections: [
      {
        heading: 'Was kostet eine Immobilienräumung in Stuttgart?',
        content: 'Die Kosten hängen von Objektgröße, Füllgrad, Zugänglichkeit und gewünschten Zusatzleistungen ab. Nach der Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot. Verwertbare Gegenstände können angerechnet und kostenmindernd berücksichtigt werden.'
      },
      {
        heading: 'Wie schnell ist eine Immobilienräumung möglich?',
        content: 'Je nach Auslastung und Objektgröße sind kurzfristige Termine möglich. Ziel ist immer eine schnelle und planbare Umsetzung im Rahmen Ihrer Fristen.'
      },
      {
        heading: 'Was bedeutet besenreine Übergabe?',
        content: 'Besenrein bedeutet: vollständig geräumt, grob gereinigt, leer und ordentlich. Auf Wunsch bieten wir auch erweiterte Leistungen wie Endreinigung oder Koordination kleiner Instandsetzungen.'
      },
      {
        heading: 'Arbeiten Sie auch in sensiblen oder rechtlichen Situationen?',
        content: 'Ja. Wir arbeiten strukturiert, diskret und dokumentieren unsere Arbeit sauber. Übergabeprotokolle und Fotodokumentationen gehören bei uns zum Standard.'
      }
    ]
  },

  faq: [
    {
      question: 'Arbeiten Sie regelmäßig mit Hausverwaltungen zusammen?',
      answer: 'Ja. Wir betreuen laufend Hausverwaltungen und Eigentümer und passen unsere Abläufe an professionelle Anforderungen an.'
    },
    {
      question: 'Erstellen Sie Fotodokumentationen?',
      answer: 'Ja. Vorher-/Nachher-Dokumentationen gehören bei Immobilienräumungen standardmäßig dazu.'
    },
    {
      question: 'Übernehmen Sie auch Teilräumungen?',
      answer: 'Ja. Auch einzelne Wohnungen, Kellerräume oder Nachräumungen sind möglich.'
    },
    {
      question: 'Können Zusatzleistungen koordiniert werden?',
      answer: 'Auf Wunsch unterstützen wir auch bei der Koordination weiterer Arbeiten wie Reinigung oder einfachen Instandsetzungen.'
    },
    {
      question: 'Wie erfolgt die Abrechnung?',
      answer: 'Sie erhalten eine ordentliche Rechnung mit klarer Leistungsbeschreibung für Ihre Unterlagen.'
    }
  ],

  relatedServices: ['haushaltsaufloesung', 'entruempelung', 'keller-dachboden']
},
  {
  slug: 'moebel-entsorgung',
  icon: Sofa,
  title: 'Möbel entsorgen Stuttgart',
  shortDescription: 'Möbel entsorgen in Stuttgart: Wir holen Altmöbel, Sofas, Schränke, Küchen und komplette Einrichtungen ab. Inklusive Tragen, Demontage, Recycling und optionaler Wertanrechnung.',
  fullDescription: 'Möbel zu entsorgen ist oft aufwendiger, als man denkt. Große Schränke müssen zerlegt werden, Sofas durch enge Treppenhäuser getragen, Einbauküchen sauber demontiert. Genau das übernehmen wir für Sie. Mit unserer Möbel-Entsorgung in Stuttgart holen wir einzelne Möbelstücke ebenso ab wie komplette Einrichtungen. Wir tragen aus der Wohnung, verladen professionell und kümmern uns um eine fachgerechte, umweltbewusste Entsorgung. Gut erhaltene Möbel prüfen wir auf Weiterverwertung und rechnen deren Wert fair an.',

  intro: {
    forWhom: 'Unsere Möbel-Entsorgung in Stuttgart richtet sich an Haushalte bei Neuanschaffung, Mieter vor dem Umzug, Vermieter nach Auszug, Erbengemeinschaften, Senioren bei Wohnungswechsel und alle, die Möbel loswerden möchten, ohne selbst zu schleppen oder zu organisieren.',
    situations: [
      'Sofa entsorgen, Sessel, Stühle, Betten, Matratzen',
      'Schränke, Regale und Kommoden abholen lassen',
      'Einbauküchen fachgerecht demontieren und entsorgen',
      'Komplette Einrichtungen bei Umzug oder Renovierung',
      'Schwere und sperrige Möbel aus Altbauten',
      'Büromöbel und Praxiseinrichtungen'
    ],
    emotional: 'Alte Möbel loszuwerden ist oft mit Aufwand, Stress und körperlicher Belastung verbunden. Wir nehmen Ihnen das ab. Kein Schleppen, kein Zerlegen, kein Wertstoffhof. Unser Team kommt, arbeitet ruhig und organisiert – und hinterlässt Platz, Ordnung und Klarheit. Wenn Möbel noch gut sind, sorgen wir dafür, dass sie sinnvoll weiterverwendet werden.'
  },

  whatWeOffer: {
    title: 'Professionelle Möbel-Entsorgung in Stuttgart',
    description: 'Abholung, Demontage, Transport und fachgerechte Entsorgung – zuverlässig aus einer Hand.',
    included: [
      'Abholung einzelner Möbel oder kompletter Einrichtungen',
      'Tragen aus der Wohnung – auch aus oberen Etagen',
      'Demontage von Schränken, Betten und Einbauküchen',
      'Vor-Ort-Einschätzung verwertbarer Möbel',
      'Wertanrechnung bei gut erhaltenen Stücken',
      'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
      'Umweltbewusste Materialtrennung und Recycling',
      'Weitergabe brauchbarer Möbel an soziale Einrichtungen',
      'Flexible Terminvereinbarung',
      'Transparente Preisstruktur'
    ]
  },

  benefits: [
    'Kein Schleppen, kein Zerlegen, kein Organisationsaufwand',
    'Abholung auch einzelner Möbelstücke',
    'Wertanrechnung kann Kosten deutlich senken',
    'Fachgerechte und umweltbewusste Entsorgung',
    'Erfahrung mit schweren und sperrigen Möbeln',
    'Flexible Terminvergabe',
    'Klare, faire Preise',
    'Nachhaltige Weiterverwertung wo möglich'
  ],

  process: [
    'Kontaktaufnahme mit kurzer Beschreibung',
    'Preisabschätzung und Terminvereinbarung',
    'Abholung vor Ort inkl. Demontage',
    'Tragen und professionelle Verladung',
    'Bewertung verwertbarer Möbel',
    'Entsorgung, Recycling oder Weitergabe'
  ],

  features: ['Abholung aus der Wohnung', 'Wertanrechnung möglich', 'Umweltgerechte Entsorgung'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Stuttgart-Ost','Stuttgart-Süd',
      'Bad Cannstatt','Vaihingen','Degerloch','Feuerbach',
      'Möhringen','Esslingen','Ludwigsburg','Waiblingen'
    ],
    description: 'Stuttgart bringt besondere Herausforderungen mit sich – enge Altbauten, Hanglagen, schwierige Parksituationen. Wir kennen die Stadt, die Stadtteile und die typischen Gegebenheiten. Auch schwere Möbel aus oberen Etagen ohne Aufzug sind für uns Alltag.'
  },

  cta: {
    title: 'Möbel entsorgen lassen',
    description: 'Kontaktieren Sie uns für ein unverbindliches Angebot. Wir holen Ihre Möbel in Stuttgart zeitnah ab.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Möbel-Entsorgung in Stuttgart',
    sections: [
      {
        heading: 'Was kostet es, Möbel in Stuttgart zu entsorgen?',
        content: 'Die Kosten richten sich nach Art der Möbel, Menge, Stockwerk und Aufwand. Einzelstücke wie Sofas oder Schränke liegen meist im Bereich von 60–120 Euro. Komplette Einrichtungen werden nach Gesamtaufwand kalkuliert. Gut erhaltene Möbel können angerechnet werden und senken den Preis. Nach kurzer Abstimmung nennen wir Ihnen einen transparenten Festpreis.'
      },
      {
        heading: 'Welche Möbel holen Sie ab?',
        content: 'Wir entsorgen Sofas, Sessel, Betten, Matratzen, Schränke, Regale, Kommoden, Tische, Stühle, komplette Einbauküchen mit Elektrogeräten, Gartenmöbel und Büromöbel. Auch sperrige oder schwere Möbelstücke sind kein Problem.'
      },
      {
        heading: 'Muss ich Möbel vorher zerlegen?',
        content: 'Nein. Unser Team übernimmt die Demontage vor Ort. Sie müssen nichts vorbereiten und kein Werkzeug bereitstellen.'
      },
      {
        heading: 'Was passiert mit gut erhaltenen Möbeln?',
        content: 'Gut erhaltene Möbel prüfen wir auf Wiederverwertung. Sie können verkauft, gespendet oder weitergegeben werden. Der erzielte Wert wird Ihnen angerechnet. So entstehen weniger Abfall und oft geringere Kosten.'
      }
    ]
  },

  faq: [
    {
      question: 'Holen Sie auch nur ein einzelnes Möbelstück ab?',
      answer: 'Ja. Auch einzelne Sofas, Schränke oder Betten holen wir ab.'
    },
    {
      question: 'Transportieren Sie auch aus oberen Etagen ohne Aufzug?',
      answer: 'Ja. Wir sind auf Altbauten und schwierige Zugänge eingestellt.'
    },
    {
      question: 'Wie schnell ist eine Abholung möglich?',
      answer: 'Je nach Auslastung oft innerhalb weniger Tage, manchmal auch kurzfristiger.'
    },
    {
      question: 'Entsorgen Sie auch Einbauküchen?',
      answer: 'Ja. Inklusive Demontage und fachgerechter Entsorgung aller Bestandteile.'
    },
    {
      question: 'Wie umweltgerecht arbeiten Sie?',
      answer: 'Wir trennen Materialien konsequent, führen Holz und Metalle dem Recycling zu und geben brauchbare Möbel weiter.'
    }
  ],

  relatedServices: ['sperrmuell-entsorgung', 'entruempelung', 'haushaltsaufloesung']
},
  {
  slug: 'wertanrechnung',
  icon: Recycle,
  title: 'Wertanrechnung in Stuttgart – Entrümpelung mit fairer Bewertung',
  shortDescription: 'Wertanrechnung bei Entrümpelungen in Stuttgart. Verwertbare Möbel, Antiquitäten und Gegenstände werden fair bewertet und direkt vom Gesamtpreis abgezogen.',
  fullDescription: 'Bei vielen Entrümpelungen steckt mehr Wert, als man auf den ersten Blick vermutet. Gut erhaltene Möbel, Antiquitäten, Sammlerstücke oder funktionsfähige Geräte müssen nicht entsorgt werden. Wir prüfen bei jeder Besichtigung, welche Gegenstände verwertbar sind. Diese werden realistisch bewertet und direkt vom Gesamtpreis Ihrer Entrümpelung abgezogen. Das senkt Ihre Kosten spürbar und sorgt gleichzeitig dafür, dass brauchbare Dinge weiterverwendet werden, statt im Müll zu landen.',

  intro: {
    forWhom: 'Unsere Wertanrechnung in Stuttgart ist ideal für Angehörige bei Nachlässen, Erbengemeinschaften, Haushaltsauflösungen, Umzüge, Wohnungsauflösungen und alle, die vermuten, dass sich noch verwertbare Gegenstände im Objekt befinden.',
    situations: [
      'Nachlass mit Möbeln, Porzellan, Bildern oder Hausrat',
      'Gut erhaltene Einrichtungen und Designermöbel',
      'Antiquitäten, Sammlungen, alte Uhren oder Schmuck',
      'Funktionsfähige Elektrogeräte und Werkzeuge',
      'Keller- und Dachbodenfunde mit Substanz',
      'Haushalte, die Entsorgungskosten reduzieren möchten'
    ],
    emotional: 'Es fühlt sich für viele falsch an, brauchbare Dinge einfach wegzuwerfen. Genau deshalb schauen wir genau hin. Wertanrechnung bedeutet nicht nur Kostenersparnis, sondern auch Respekt vor dem, was noch nutzbar ist. Manche Gegenstände finden neue Besitzer, andere helfen sozialen Einrichtungen. So wird aus einer Entrümpelung nicht nur ein Abschluss, sondern auch etwas Sinnvolles.'
  },

  whatWeOffer: {
    title: 'Faire Wertermittlung und transparente Anrechnung',
    description: 'Wir bewerten verwertbare Gegenstände realistisch und rechnen sie nachvollziehbar an.',
    included: [
      'Kostenlose Wertermittlung bei der Besichtigung',
      'Einschätzung verwertbarer Möbel und Gegenstände',
      'Bewertung nach realistischen Marktpreisen',
      'Transparente Auflistung im Angebot',
      'Direkter Abzug vom Entrümpelungspreis',
      'Einzelne Aufstellung der angerechneten Posten',
      'Diskreter Umgang mit Wertgegenständen',
      'Weiterverwertung über seriöse Kanäle',
      'Nachhaltige Nutzung statt Entsorgung',
      'Klare Vereinbarung vor Auftragsbeginn'
    ]
  },

  benefits: [
    'Senkung der Entrümpelungskosten durch Wertanrechnung',
    'Transparente und nachvollziehbare Bewertung',
    'Keine versteckten Abzüge',
    'Nachhaltige Weiterverwertung brauchbarer Dinge',
    'Faire Behandlung von Erinnerungsstücken',
    'Kostensicherheit durch Festpreis nach Anrechnung',
    'Oft deutliche Reduzierung der Gesamtkosten',
    'Seriöser und respektvoller Umgang'
  ],

  process: [
    'Besichtigung und gemeinsame Durchsicht',
    'Identifikation verwertbarer Gegenstände',
    'Realistische Einschätzung des Marktwerts',
    'Auflistung im schriftlichen Angebot',
    'Verrechnung mit dem Gesamtpreis',
    'Abtransport und Weiterverwertung'
  ],

  features: ['Faire Bewertung', 'Transparente Anrechnung', 'Nachhaltige Weiterverwertung'],

  localRelevance: {
    areas: [
      'Stuttgart-Mitte','Stuttgart-West','Bad Cannstatt','Vaihingen',
      'Degerloch','Feuerbach','Möhringen','Esslingen',
      'Ludwigsburg','Böblingen','Sindelfingen','Waiblingen'
    ],
    description: 'Wir arbeiten regelmäßig in Stuttgart und Umgebung und kennen den regionalen Markt für Gebrauchtmöbel, Antiquitäten und Hausrat. Durch lokale Kontakte können wir realistisch einschätzen, was verwertbar ist und was nicht.'
  },

  cta: {
    title: 'Kostenlose Wertermittlung anfragen',
    description: 'Lassen Sie prüfen, was in Ihrem Objekt noch Wert hat. Oft lassen sich die Entrümpelungskosten deutlich senken.'
  },

  additionalContent: {
    title: 'Wissenswertes zur Wertanrechnung',
    sections: [
      {
        heading: 'Wie funktioniert Wertanrechnung bei einer Entrümpelung?',
        content: 'Bei der Besichtigung prüfen wir, welche Gegenstände verwertbar sind. Diese werden realistisch bewertet und im Angebot einzeln aufgeführt. Der Gesamtwert wird anschließend direkt vom Entrümpelungspreis abgezogen. So entsteht ein klarer, transparenter Endpreis.'
      },
      {
        heading: 'Welche Gegenstände haben typischerweise Wert?',
        content: 'Oft verwertbar sind gut erhaltene Möbel, Massivholz, Designermöbel, Antiquitäten, Porzellan, Silberbesteck, Teppiche, Werkzeuge, Maschinen, funktionsfähige Elektrogeräte, Bücher, Schallplatten, Sammlungen, Schmuck oder alte Uhren. Auch Keller- und Dachbodenfunde überraschen häufig.'
      },
      {
        heading: 'Wie transparent ist die Bewertung?',
        content: 'Jeder angerechnete Gegenstand wird im Angebot benannt. Sie sehen genau, was wir mit welchem Wert berücksichtigen. Wenn Sie unsicher sind, besprechen wir das offen. Sie entscheiden immer, was wir mitnehmen und was Sie behalten.'
      },
      {
        heading: 'Kann Wertanrechnung die Kosten komplett decken?',
        content: 'In manchen Fällen ja. Wenn viele gut erhaltene oder gefragte Gegenstände vorhanden sind, kann der angerechnete Wert die Entrümpelungskosten deutlich senken oder vollständig ausgleichen. Das lässt sich seriös aber erst nach Besichtigung beurteilen.'
      }
    ]
  },

  faq: [
    {
      question: 'Bewerten Sie auch Antiquitäten und Sammlerstücke?',
      answer: 'Ja. Wir prüfen Möbel, Antiquitäten, Hausrat und Sammlungen. Bei besonderen Stücken besprechen wir das transparent und vorsichtig.'
    },
    {
      question: 'Wird der Wert vor der Entrümpelung festgelegt?',
      answer: 'Ja. Die Wertanrechnung erfolgt vor Auftragsbeginn und wird im Angebot festgehalten.'
    },
    {
      question: 'Kann ich Gegenstände selbst behalten oder verkaufen?',
      answer: 'Natürlich. Sie entscheiden jederzeit, was bei Ihnen bleibt und was angerechnet wird.'
    },
    {
      question: 'Was passiert mit verwertbaren Gegenständen?',
      answer: 'Je nach Art werden sie weiterverkauft, weitergegeben oder über soziale Stellen sinnvoll genutzt.'
    },
    {
      question: 'Ist Wertanrechnung garantiert?',
      answer: 'Nein. Ob und in welcher Höhe Wert angerechnet werden kann, hängt vom tatsächlichen Zustand und der Marktgängigkeit ab.'
    },
    {
      question: 'Ist die Wertanrechnung steuerlich relevant?',
      answer: 'In der Regel handelt es sich um eine Kostenreduzierung, nicht um Einkommen. Bei besonderen Fällen empfehlen wir, steuerlichen Rat einzuholen.'
    }
  ],

  relatedServices: ['haushaltsaufloesung', 'entruempelung', 'moebel-entsorgung']
}
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
