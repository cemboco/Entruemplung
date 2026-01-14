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
    title: 'Keller & Dachboden Entrümpelung Stuttgart',
    shortDescription: 'Professionelle Entrümpelung von vollgestellten Kellern und Dachböden. Inklusive Entsorgung von Sondermüll und Schadstoffen.',
    fullDescription: 'Keller und Dachböden entwickeln sich oft über Jahre zu Lagerstätten für alles, was im Haushalt keinen Platz mehr findet. Die Entrümpelung dieser Bereiche erfordert nicht nur körperliche Arbeit, sondern auch Fachkenntnis im Umgang mit Sondermüll, Schadstoffen und wertvollen Fundstücken. Unser Team ist spezialisiert auf die professionelle Entrümpelung auch schwer zugänglicher Bereiche in Stuttgart und Umgebung.',
    intro: {
      forWhom: 'Ideal für Hausbesitzer vor Renovierung oder Verkauf, Mieter bei Wohnungswechsel, Erbengemeinschaften mit vollgestellten Räumen und Vermieter, die Kellerabteile oder Dachböden wieder nutzbar machen möchten.',
      situations: [
        'Vollgestellter Keller: Jahrzehnte alte Ansammlungen professionell räumen',
        'Dachboden entrümpeln: Von Gerümpel bis zu wertvollen Fundstücken',
        'Vor Immobilienverkauf: Keller und Dachboden besenrein übergeben',
        'Sondermüll-Problematik: Alte Farben, Lacke, Chemikalien fachgerecht entsorgen',
        'Feuchte Keller: Schimmelbelastete Gegenstände sicher entfernen',
        'Enge Zugänge: Spezial-Transport bei schwierigen Bedingungen'
      ],
      emotional: 'Keller und Dachböden sind oft die letzten Ecken, die man aufräumen möchte. Zu viel ist da, zu unübersichtlich, zu anstrengend. Wir verstehen das und nehmen Ihnen diese Last komplett ab. Von der Sortierung über den Transport bis zur fachgerechten Entsorgung - wir kümmern uns um alles. Und manchmal finden wir dabei auch vergessene Schätze.'
    },
    whatWeOffer: {
      title: 'Spezialisierte Keller- und Dachboden-Entrümpelung',
      description: 'Schwer zugängliche Räume sind unsere Spezialität. Mit dem richtigen Equipment und viel Erfahrung schaffen wir auch die schwierigsten Entrümpelungen.',
      included: [
        'Kostenlose Besichtigung mit Prüfung der Zugänglichkeit',
        'Identifikation von Wertsachen, Sondermüll und Schadstoffen',
        'Planung optimaler Transportwege und Logistik',
        'Professionelle Schutzvorkehrungen (Staubschutz, Bodenabdeckung)',
        'Entrümpelung auch bei engen Treppen, niedrigen Decken, kleinen Luken',
        'Fachgerechte Entsorgung von Sondermüll (Farben, Lacke, Chemikalien)',
        'Umweltgerechte Trennung aller Materialien',
        'Identifikation und Aussortierung von Wertsachen',
        'Abschließende Reinigung der entrümpelten Räume',
        'Optional: Grobreinigung oder besenreine Übergabe'
      ]
    },
    benefits: [
      'Entrümpelung auch schwer zugänglicher Bereiche mit Spezial-Equipment',
      'Fachgerechte Sondermüll-Entsorgung nach gesetzlichen Vorgaben',
      'Staubfreie und saubere Arbeitsweise mit Schutzmaßnahmen',
      'Identifikation von Wertsachen und Erinnerungsstücken',
      'Berücksichtigung von Schadstoffen und Gefahrstoffen',
      'Schnelle und effiziente Abwicklung',
      'Faire Preise auch bei schwierigen Bedingungen',
      'Erfahrung mit Stuttgarter Altbauten und engen Verhältnissen'
    ],
    process: [
      'Vor-Ort-Besichtigung und Prüfung der Zugänglichkeit',
      'Identifikation von Sondermüll, Wertsachen und besonderen Gegenständen',
      'Planung von Transportwegen und notwendiger Logistik',
      'Systematische Räumung nach durchdachtem Plan',
      'Getrennte Entsorgung nach Materialarten und Vorschriften',
      'Abschließende Reinigung und besenreine Übergabe'
    ],
    features: ['Auch schwer zugänglich', 'Sondermüll-Entsorgung', 'Staubfreie Arbeit'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Bad Cannstatt',
        'Degerloch',
        'Vaihingen',
        'Möhringen',
        'Feuerbach',
        'Esslingen',
        'Ludwigsburg',
        'Böblingen',
        'Sindelfingen'
      ],
      description: 'Stuttgarter Altbauten haben oft besonders enge und verwinkelte Keller und Dachböden. Niedrige Deckenhöhen, steile Treppen, kleine Luken - wir kennen diese Herausforderungen aus hunderten Einsätzen. Unser Team weiß, wie man in Stuttgarter Gebäuden arbeitet, welche Schutzvorkehrungen nötig sind und wo die nächsten Entsorgungsstellen sind. Wir haben das richtige Equipment und die Erfahrung für jede Situation.'
    },
    cta: {
      title: 'Keller oder Dachboden entrümpeln lassen',
      description: 'Fordern Sie jetzt ein kostenloses Angebot an. Wir besichtigen Ihren Keller oder Dachboden und erstellen einen individuellen Räumungsplan.'
    },
    additionalContent: {
      title: 'Wichtiges zu Keller- und Dachboden-Entrümpelungen',
      sections: [
        {
          heading: 'Was kostet eine Keller- oder Dachbodenentrümpelung in Stuttgart?',
          content: 'Die Kosten hängen von mehreren Faktoren ab: Volumen, Stockwerk, Zugänglichkeit und Art der Gegenstände. Ein durchschnittlicher Keller (15-20qm) kostet 400-800 Euro, ein Dachboden ähnlicher Größe 300-600 Euro. Entscheidend ist die Zugänglichkeit - enge Wendeltreppen, niedrige Deckenhöhen oder fehlende Beleuchtung erhöhen den Aufwand. Positiv wirkt sich aus, wenn verwertbare Gegenstände vorhanden sind - Werkzeuge, Möbel, Metalle werden bewertet und angerechnet. Bei Sondermüll (alte Farben, Chemikalien) entstehen zusätzliche Entsorgungskosten. Wir erstellen nach kostenloser Besichtigung ein transparentes Festpreis-Angebot.'
        },
        {
          heading: 'Wie lange dauert eine Keller- oder Dachbodenentrümpelung?',
          content: 'Die Dauer variiert je nach Füllgrad und Zugänglichkeit. Ein leicht bis mittelmäßig gefüllter Keller ist in 2-4 Stunden entrümpelt. Ein vollgestellter Keller mit engen Treppenhäusern kann einen ganzen Arbeitstag in Anspruch nehmen. Dachböden sind oft schneller erledigt (2-3 Stunden), da sie meist weniger vollgestellt sind. Bei extremen Fällen - etwa wenn sich über Jahrzehnte Gerümpel angesammelt hat - können auch 1-2 Tage nötig sein. Wir schätzen die Dauer bei der Besichtigung realistisch ein, damit Sie planen können.'
        },
        {
          heading: 'Was passiert mit Sondermüll im Keller oder auf dem Dachboden?',
          content: 'Keller und Dachböden enthalten oft Sondermüll: alte Farb- und Lackdosen, Lösungsmittel, Pflanzenschutzmittel, Altöl, asbesthaltige Materialien. Diese dürfen nicht in den Hausmüll und erfordern Fachkenntnis bei der Entsorgung. Wir identifizieren Sondermüll, trennen ihn konsequent ab und führen ihn den zuständigen Entsorgungsstellen zu. Dabei dokumentieren wir die ordnungsgemäße Entsorgung. Sie als Eigentümer erhalten Sicherheit, dass alles gesetzeskonform entsorgt wurde - das ist besonders bei Immobilienverkäufen wichtig.'
        },
        {
          heading: 'Finden Sie bei der Entrümpelung auch Wertsachen?',
          content: 'Ja, erstaunlich oft finden wir auf Dachböden und in Kellern vergessene Schätze: alte Werkzeuge, Antiquitäten, Sammlerstücke, vergessene Erbstücke oder einfach gut erhaltene Möbel. Unser Team ist geschult, solche Dinge zu erkennen. Wir sortieren systematisch und legen alles Wertvolle beiseite. Verwertbare Gegenstände werden fair bewertet und vom Entrümpelungspreis abgezogen. Wertvolle Einzelstücke besprechen wir mit Ihnen, bevor wir etwas entsorgen. So haben Sie Kontrolle und profitieren finanziell von Funden.'
        }
      ]
    },
    faq: [
      {
        question: 'Entrümpeln Sie auch niedrige Keller mit nur 1,60m Deckenhöhe?',
        answer: 'Ja, selbstverständlich. Niedrige Decken und verwinkelte Kellergänge sind in Stuttgarter Altbauten häufig. Unser Team ist darauf eingestellt und arbeitet auch unter erschwerten Bedingungen. Die geringere Deckenhöhe verlangsamt zwar die Arbeit etwas, ist aber kein Hindernis. Wir passen die Arbeitsweise an die Gegebenheiten an.'
      },
      {
        question: 'Was ist mit Gegenständen, die ich noch nicht behalten will?',
        answer: 'Vor der Entrümpelung besprechen wir mit Ihnen, was entsorgt werden soll und was bleibt. Sie können uns auch eine Liste oder Markierungen vorgeben. Wenn Sie unsicher sind, sortieren wir zunächst aus und Sie entscheiden dann, was endgültig weg kann. Wir drängen nie - es ist Ihr Eigentum und Sie bestimmen das Tempo.'
      },
      {
        question: 'Können Sie auch enge Wendeltreppen zum Dachboden bewältigen?',
        answer: 'Ja, enge Wendeltreppen sind eine Herausforderung, die wir gewohnt sind. Wir nutzen spezielle Tragetechniken und Hilfsmittel für solche Situationen. Sperrige Gegenstände zerlegen wir wenn nötig. Was physisch durchpasst, bekommen wir auch transportiert. Bei der Besichtigung prüfen wir die Zugänglichkeit und planen die Logistik entsprechend.'
      },
      {
        question: 'Was machen Sie mit alten Werkzeugen und Maschinen?',
        answer: 'Funktionsfähige Werkzeuge und Maschinen haben oft noch Wert. Wir bewerten sie nach Zustand und Marktwert und rechnen diesen vom Entrümpelungspreis ab. Gut erhaltenes Werkzeug verkaufen wir an Gebrauchtwarenhändler, defekte Geräte führen wir der fachgerechten Entsorgung zu. Metalle werden separat gesammelt und dem Recycling zugeführt.'
      },
      {
        question: 'Übernehmen Sie auch die Endreinigung nach der Entrümpelung?',
        answer: 'Ja, Standar dmäßig führen wir eine Grobreinigung durch - also Entfernung von grobem Schmutz und Staub. Gegen Aufpreis bieten wir auch eine gründliche Endreinigung an, bei der Keller oder Dachboden besenrein oder sogar wischfertig übergeben werden. Das ist besonders sinnvoll vor Vermietung, Verkauf oder wenn die Räume anschließend renoviert werden sollen.'
      },
      {
        question: 'Wie gehen Sie mit Feuchtigkeit und Schimmel im Keller um?',
        answer: 'Schimmel und Feuchtigkeit kommen in Kellern häufig vor. Unsere Mitarbeiter tragen bei Bedarf Atemschutz und behandeln schimmelbelastete Gegenstände als Sondermüll. Wir entsorgen sie gesondert und können nach der Entrümpelung auch eine Grund-Desinfektion durchführen. Für Schimmelsanierung selbst empfehlen wir Fachfirmen, mit denen wir zusammenarbeiten.'
      },
      {
        question: 'Können wir während der Entrümpelung noch einzelne Sachen rausholen?',
        answer: 'Ja, das ist kein Problem. Viele Kunden möchten während der Entrümpelung noch mal durchschauen und einzelne Dinge doch behalten. Das ist völlig in Ordnung. Wir arbeiten transparent, zeigen Ihnen Fundstücke und lassen Ihnen Zeit für Entscheidungen. Ihr Eigentum, Ihr Tempo.'
      }
    ],
    relatedServices: ['entruempelung', 'haushaltsaufloesung', 'wertanrechnung']
  },
  {
    slug: 'sperrmuell-entsorgung',
    icon: Truck,
    title: 'Sperrmüll-Abholung Stuttgart',
    shortDescription: 'Schnelle und unkomplizierte Abholung von Sperrmüll, Altmöbeln und Elektrogeräten. Wir holen direkt bei Ihnen ab - ohne Wartezeit.',
    fullDescription: 'Sie möchten alte Möbel, Elektrogeräte oder sperrige Gegenstände loswerden, aber die kommunale Sperrmüllabfuhr lässt auf sich warten? Wir bieten Ihnen die schnelle Alternative: Unsere Sperrmüll-Abholung in Stuttgart erfolgt termingerecht und unkompliziert. Ob Einzelstücke oder komplette Wohnungsräumungen - wir holen alles direkt bei Ihnen ab und entsorgen fachgerecht.',
    intro: {
      forWhom: 'Perfekt für alle, die schnell Platz schaffen müssen: Mieter vor Umzug, Haushalte bei Neuanschaffung, Vermieter nach Auszug und alle, die nicht wochenlang auf die städtische Sperrmüllabholung warten möchten.',
      situations: [
        'Alte Möbel entsorgen: Sofa, Schrank, Bett und mehr',
        'Elektrogeräte loswerden: Kühlschrank, Waschmaschine, TV',
        'Umzugsentsorgung: Was nicht mitkommt, holen wir ab',
        'Sperrige Gegenstände: Matratzen, Teppiche, große Kartons',
        'Gartenabfälle: Alte Gartenmöbel, Sonnenschirme',
        'Schnellabholung: Oft noch am selben oder nächsten Tag möglich'
      ],
      emotional: 'Manchmal muss es einfach schnell gehen. Die alte Couch muss raus, die neue kommt. Der Kühlschrank ist kaputt, ein neuer wird geliefert. Wir verstehen, dass Sie nicht wochenlang warten können. Darum bieten wir flexible Termine, oft kurzfristig, manchmal sogar noch am selben Tag. Unkompliziert, zuverlässig, zu fairen Preisen.'
    },
    whatWeOffer: {
      title: 'Schnelle Sperrmüll-Abholung in Stuttgart',
      description: 'Wir holen Ihren Sperrmüll ab - oft noch am selben oder nächsten Tag, direkt vor Ihrer Tür oder aus Ihrer Wohnung.',
      included: [
        'Flexible Terminvereinbarung - auch kurzfristig möglich',
        'Oft Abholung noch am selben oder nächsten Tag',
        'Abholung von der Straße oder direkt aus Ihrer Wohnung',
        'Auch aus höheren Etagen - kein Problem',
        'Alle Arten von Sperrmüll: Möbel, Elektrogeräte, sperrige Gegenstände',
        'Professionelle Verladung durch unser Team',
        'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
        'Umweltbewusstes Recycling wo möglich',
        'Transparente Preise ohne versteckte Kosten',
        'Freundlicher und zuverlässiger Service'
      ]
    },
    benefits: [
      'Flexible Terminvereinbarung nach Ihren Bedürfnissen',
      'Sofort-Abholung oft möglich - manchmal noch am selben Tag',
      'Faire und transparente Preise ohne Nachforderungen',
      'Abholung auch aus Etagen - kein Tragen für Sie',
      'Fachgerechte Entsorgung und professionelles Recycling',
      'Keine langen Wartezeiten wie bei kommunaler Abholung',
      'Auch Einzelstücke werden abgeholt',
      'Pünktlich und zuverlässig'
    ],
    process: [
      'Anfrage per Telefon, WhatsApp oder Online-Formular',
      'Kurze Beschreibung des Sperrmülls (Art, Menge, Standort)',
      'Sofortige Terminvereinbarung nach Verfügbarkeit',
      'Pünktliche Abholung zum vereinbarten Termin',
      'Professionelle Verladung durch unser Team',
      'Umweltgerechte Entsorgung und Recycling'
    ],
    features: ['Flexible Termine', 'Sofort-Abholung möglich', 'Faire Preise'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Stuttgart-Nord',
        'Bad Cannstatt',
        'Vaihingen',
        'Feuerbach',
        'Degerloch',
        'Möhringen',
        'Esslingen',
        'Ludwigsburg'
      ],
      description: 'Wir sind täglich in ganz Stuttgart unterwegs und können daher oft sehr kurzfristig bei Ihnen sein. Auch schwierige Parksituationen in der Stuttgarter Innenstadt oder enge Wohnstraßen sind für uns kein Problem. Wir kennen die Gegend, wissen wo wir parken können und arbeiten schnell und professionell. In vielen Fällen können wir Ihre Anfrage noch am selben oder am nächsten Tag umsetzen.'
    },
    cta: {
      title: 'Sperrmüll-Abholung beauftragen',
      description: 'Kontaktieren Sie uns für eine schnelle Sperrmüll-Abholung in Stuttgart. Oft können wir noch am selben oder nächsten Tag bei Ihnen sein.'
    },
    additionalContent: {
      title: 'Wissenwertes zur Sperrmüll-Abholung in Stuttgart',
      sections: [
        {
          heading: 'Was kostet eine private Sperrmüll-Abholung in Stuttgart?',
          content: 'Die Kosten für eine private Sperrmüll-Abholung hängen von Menge, Art und Stockwerk ab. Einzelstücke wie ein Sofa oder Schrank kosten ab 50-80 Euro, mehrere Möbelstücke 100-200 Euro, eine Komplettentsorgung bei Umzug 200-400 Euro. Die Preise sind transparent und werden vorab verbindlich genannt. Im Vergleich zur kostenlosen kommunalen Sperrmüllabholung zahlen Sie für Schnelligkeit und Flexibilität - dafür müssen Sie nicht wochenlang warten und bekommen einen Wunschtermin. Gerade bei Zeitdruck vor Umzügen oder Wohnungsübergaben ist der private Service Gold wert.'
        },
        {
          heading: 'Was zählt alles zum Sperrmüll?',
          content: 'Als Sperrmüll gelten grundsätzlich alle Gegenstände aus Haushalten, die zu groß für die normale Mülltonne sind: Möbel wie Sofas, Schränke, Betten, Tische und Stühle, Matratzen und Lattenroste, Teppiche und Läufer, große Elektrogeräte wie Kühlschränke, Waschmaschinen, Herde, große Kartons und Verpackungsmaterial, Kinderwagen und Fahrräder, Gartenmöbel und Sonnenschirme. Nicht zum Sperrmüll gehören: Bauschutt, Gartenabfälle, Sondermüll, gefährliche Stoffe. Bei Unsicherheit beraten wir Sie gern telefonisch, was wir mitnehmen können und was separat entsorgt werden muss.'
        },
        {
          heading: 'Wie schnell können Sie Sperrmüll in Stuttgart abholen?',
          content: 'Das ist unser Vorteil gegenüber der städtischen Sperrmüllabholung: Wir sind flexibel und schnell. In vielen Fällen können wir noch am selben oder nächsten Tag bei Ihnen sein. Spätestens innerhalb von 2-3 Werktagen ist ein Termin möglich. Die kommunale Sperrmüllabholung in Stuttgart hat dagegen oft Wartezeiten von 2-4 Wochen. Gerade vor Umzügen, Wohnungsübergaben oder wenn schnell Platz geschaffen werden muss, ist unsere Express-Abholung die ideale Lösung. Rufen Sie uns an und wir finden einen passenden Termin.'
        },
        {
          heading: 'Muss ich den Sperrmüll an die Straße stellen?',
          content: 'Nein, das müssen Sie nicht. Im Gegensatz zur städtischen Sperrmüllabholung holen wir direkt bei Ihnen ab - ob aus dem Keller, aus der Wohnung im 4. Stock oder vom Dachboden. Sie müssen nichts schleppen, nichts vorbereiten. Unser Team kommt, lädt alles ein und kümmert sich um den Transport. Das ist besonders praktisch bei schweren oder sperrigen Gegenständen, bei körperlichen Einschränkungen oder wenn Sie einfach keine Zeit haben, alles rauszutragen. Lehnen Sie sich zurück - wir machen die Arbeit.'
        }
      ]
    },
    faq: [
      {
        question: 'Ist die private Sperrmüll-Abholung teurer als die städtische?',
        answer: 'Die städtische Sperrmüllabholung in Stuttgart ist grundsätzlich kostenlos (über Gebühren finanziert), aber mit langen Wartezeiten und Einschränkungen verbunden. Unsere private Abholung kostet Geld, bietet aber Wunschtermin, oft Expressabholung am selben Tag, Abholung aus der Wohnung statt von der Straße und keine Mengenbeschränkungen. Bei Zeitdruck ist die private Abholung oft die einzige praktikable Lösung.'
      },
      {
        question: 'Nehmen Sie auch Elektrogeräte mit?',
        answer: 'Ja, wir entsorgen alle Arten von Elektrogeräten fachgerecht: Kühlschränke, Waschmaschinen, Trockner, Herde, Geschirrspüler, Fernseher, Computer, Kleingeräte. Die Entsorgung erfolgt nach den gesetzlichen Vorgaben für Elektroschrott. Wertvolle Metalle werden recycelt, Schadstoffe fachgerecht entsorgt.'
      },
      {
        question: 'Kann ich auch nur ein einzelnes Möbelstück abholen lassen?',
        answer: 'Selbstverständlich! Wir holen auch Einzelstücke ab. Ob ein Sofa, ein Schrank oder eine Waschmaschine - Sie müssen keine Mindestmenge erreichen. Der Preis richtet sich nach dem konkreten Gegenstand und dem Aufwand. Oft ist die Abholung eines Einzelstücks günstiger als gedacht.'
      },
      {
        question: 'Arbeiten Sie auch am Wochenende?',
        answer: 'Ja, nach Absprache führen wir Sperrmüll-Abholungen auch samstags durch. Das ist besonders praktisch für Berufstätige oder wenn unter der Woche keine Zeit ist. Samstags-Termine sollten Sie möglichst frühzeitig anfragen, da diese stark nachgefragt sind.'
      },
      {
        question: 'Was passiert mit meinem Sperrmüll nach der Abholung?',
        answer: 'Wir sortieren nach der Abholung: Verwertbare Möbel werden an Second-Hand-Händler oder soziale Einrichtungen weitergegeben, Elektrogeräte werden fachgerecht recycelt, Holz wird der Verwertung zugeführt, Metalle werden dem Recycling zugeführt, nicht verwertbare Reste werden ordnungsgemäß entsorgt. So tragen wir zur Nachhaltigkeit bei und vermeiden unnötigen Müll.'
      },
      {
        question: 'Brauche ich einen festen Termin oder können Sie spontan kommen?',
        answer: 'Wir arbeiten nach Terminvereinbarung, damit wir pünktlich und planbar arbeiten können. Aber: Termine sind oft kurzfristig möglich. Wenn Sie heute anrufen, können wir morgen oder übermorgen da sein. In dringenden Fällen manchmal sogar noch am selben Tag. Rufen Sie uns einfach an und wir schauen, was möglich ist.'
      }
    ],
    relatedServices: ['moebel-entsorgung', 'entruempelung', 'haushaltsaufloesung']
  },
  {
    slug: 'gewerbe-entruempelung',
    icon: Briefcase,
    title: 'Gewerbe-Entrümpelung Stuttgart',
    shortDescription: 'Effiziente Räumung von Büros, Praxen, Geschäftsräumen und Lagerhallen. Auch außerhalb der Geschäftszeiten möglich.',
    fullDescription: 'Bei der Räumung von Gewerbeobjekten sind Schnelligkeit, Diskretion und Zuverlässigkeit entscheidend. Ob Büroauflösung, Praxisräumung, Geschäftsliquidation oder Lagerhallen-Entrümpelung - wir arbeiten termingenau und minimieren Ihre Betriebsunterbrechung. Auf Wunsch führen wir die Arbeiten außerhalb Ihrer Geschäftszeiten oder am Wochenende durch. Für Unternehmen in Stuttgart bieten wir maßgeschneiderte Lösungen.',
    intro: {
      forWhom: 'Unsere Gewerbe-Entrümpelung richtet sich an Unternehmen bei Liquidation oder Umzug, Vermieter gewerblicher Immobilien, Insolvenzverwalter, Facility Manager und alle Gewerbetreibenden, die schnelle und professionelle Räumungen benötigen.',
      situations: [
        'Büroauflösung: Komplette Räumung von Büroräumen und Verwaltungsgebäuden',
        'Praxisräumung: Arztpraxen, Anwaltskanzleien, Steuerberater',
        'Geschäftsliquidation: Einzelhandel, Gastronomie, Dienstleister',
        'Lagerhallen-Entrümpelung: Große Flächen schnell und effizient räumen',
        'Filialschließung: Professionelle Abwicklung im ganzen Stadtgebiet',
        'Insolvenzräumung: Termingerecht und nach rechtlichen Vorgaben'
      ],
      emotional: 'Eine Geschäftsaufgabe ist oft emotional belastend und zeitkritisch. Wir verstehen die Dringlichkeit und arbeiten professionell, diskret und ohne unnötige Fragen. Ihr Fokus soll auf Ihrem Business bleiben - die Räumung übernehmen wir zuverlässig und termingerecht. Auf Wunsch arbeiten wir außerhalb der Geschäftszeiten, damit Ihr Betrieb bis zum Schluss weiterlaufen kann.'
    },
    whatWeOffer: {
      title: 'Professionelle Gewerbe-Entrümpelung für Unternehmen',
      description: 'Maßgeschneiderte Lösungen für gewerbliche Räumungen - termingenau, diskret und mit minimalem Betriebsausfall.',
      included: [
        'Kostenlose Objektbesichtigung und Bedarfsanalyse',
        'Detailliertes Festpreis-Angebot für Ihre Buchhaltung',
        'Flexible Terminplanung - auch außerhalb der Geschäftszeiten',
        'Wochenend-Service und Nacht-Einsätze möglich',
        'Räumung von Büromöbeln, IT-Equipment, Akten, Lagerbeständen',
        'Fachgerechte Entsorgung von Betriebsmitteln',
        'Optional: Aktenvernichtung nach DIN 66399',
        'Optional: Datenlöschung von IT-Geräten',
        'Direkte Rechnungsstellung an Unternehmen',
        'Übergabeprotokoll und Dokumentation'
      ]
    },
    benefits: [
      'Termingerechte Abwicklung ohne Verzögerungen',
      'Wochenend-Service und Arbeit außerhalb der Geschäftszeiten verfügbar',
      'Minimale Betriebsunterbrechung durch flexible Planung',
      'Direkte Abrechnung mit Unternehmen und ordentliche Buchhaltung',
      'Fachgerechte Entsorgung von Büromöbeln und IT-Equipment',
      'Aktenvernichtung nach Bedarf und nach DIN-Norm',
      'Erfahrung mit großen Gewerbeobjekten und Lagerhallen',
      'Versichert und zuverlässig'
    ],
    process: [
      'Bedarfsanalyse und professionelle Objektbesichtigung',
      'Angebotserstellung mit Festpreis und detaillierter Aufstellung',
      'Terminkoordination nach Ihren geschäftlichen Anforderungen',
      'Professionelle Räumung im vereinbarten Zeitfenster',
      'Getrennte Verwertung und fachgerechte Entsorgung',
      'Dokumentation und Übergabeprotokoll für Ihre Unterlagen'
    ],
    features: ['Termingerechte Abwicklung', 'Wochenend-Service', 'Minimale Betriebsunterbrechung'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Feuerbach',
        'Vaihingen',
        'Möhringen',
        'Zuffenhausen',
        'Ludwigsburg',
        'Esslingen',
        'Böblingen',
        'Sindelfingen',
        'Kornwestheim',
        'Leinfelden-Echterdingen'
      ],
      description: 'Stuttgart ist ein starker Wirtschaftsstandort mit vielen Gewerbegebieten. Wir kennen die örtlichen Gegebenheiten, Parkmöglichkeiten und Zufahrtswege in allen Stuttgarter Gewerbegebieten. Von kleinen Büros in der Innenstadt bis zu großen Lagerhallen in Vaihingen oder Feuerbach - wir haben Erfahrung mit allen Objekttypen. Unser Team arbeitet diskret, professionell und versteht die Anforderungen von Unternehmen.'
    },
    cta: {
      title: 'Gewerbeobjekt entrümpeln lassen',
      description: 'Fordern Sie ein individuelles Angebot für Ihre Gewerbeentrümpelung an. Wir beraten Sie zu optimalen Zeitfenstern und Ablauf.'
    },
    additionalContent: {
      title: 'Wichtiges zur Gewerbe-Entrümpelung',
      sections: [
        {
          heading: 'Was kostet eine Gewerbe-Entrümpelung in Stuttgart?',
          content: 'Die Kosten für gewerbliche Räumungen variieren stark nach Objektgröße und Ausstattung. Ein kleines Büro (50-80qm) kostet etwa 800-1.500 Euro, mittelgroße Praxen oder Büros (100-200qm) 1.500-3.500 Euro, große Objekte und Lagerhallen ab 3.500 Euro aufwärts. Entscheidend sind: Menge der Einrichtung, Art der Gegenstände (Möbel, IT, Akten), Stockwerk und Zugänglichkeit, Zeitdruck und gewünschte Zusatzleistungen wie Aktenvernichtung. Wir erstellen nach Objektbesichtigung ein detailliertes Festpreis-Angebot, das Sie für Ihre Buchhaltung nutzen können. Verwertbare Gegenstände (Büromöbel, IT) werden angerechnet und senken die Kosten.'
        },
        {
          heading: 'Können Sie auch außerhalb der Geschäftszeiten räumen?',
          content: 'Ja, das ist sogar einer unserer wichtigsten Services für Unternehmen. Wir verstehen, dass Ihr Geschäftsbetrieb nicht unterbrochen werden soll. Deshalb bieten wir Räumungen nach Feierabend (ab 18 Uhr), am Wochenende, sogar nachts bei Bedarf. So können Sie tagsüber normal weiterarbeiten und wir räumen, wenn das Objekt leer ist. Das ist besonders wichtig bei Filialschließungen, wo der Laden bis zum letzten Tag geöffnet bleiben soll, oder bei Umzügen, wo der Betrieb nicht stillstehen darf. Sprechen Sie uns auf Ihre Zeitfenster an - wir finden eine Lösung.'
        },
        {
          heading: 'Was passiert mit Akten und sensiblen Dokumenten?',
          content: 'Akten und Dokumente behandeln wir besonders sorgfältig. Sie haben mehrere Optionen: Aktenvernichtung nach DIN 66399 (verschiedene Sicherheitsstufen je nach Vertraulichkeit), sichere Zwischenlagerung, wenn Sie noch nicht sicher sind, was entsorgt werden kann, oder getrennte Aussortierung und Übergabe an Sie zur eigenen Prüfung. Wir arbeiten diskret und verstehen die Bedeutung von Datenschutz. Gerade bei Arztpraxen, Anwaltskanzleien oder Steuerberatern ist absolute Vertraulichkeit selbstverständlich. Auf Wunsch arbeiten Mitarbeiter mit erweitertem Führungszeugnis.'
        },
        {
          heading: 'Wie entsorgen Sie IT-Equipment und Elektronik?',
          content: 'IT-Entsorgung erfolgt nach gesetzlichen Vorgaben: Datenlöschung nach DIN-Standard auf Wunsch, fachgerechtes Recycling von Computer, Servern, Druckern, Monitoren, Telefonen, Verwertung von Metallen und Edelmetallen, umweltgerechte Entsorgung von Schadstoffen. Funktionsfähige IT-Geräte können wir bewerten und anrechnen - das senkt Ihre Kosten. Defekte Geräte werden dem zertifizierten Elektroschrott-Recycling zugeführt. Sie erhalten auf Wunsch Entsorgungsnachweise für Ihre Dokumentation.'
        }
      ]
    },
    faq: [
      {
        question: 'Wie schnell können Sie ein Gewerbeobjekt räumen?',
        answer: 'Das hängt von der Größe ab. Ein kleines Büro schaffen wir an einem Tag, mittelgroße Objekte in 1-2 Tagen, große Lagerhallen können 3-5 Tage dauern. Wir planen realistisch und halten Termine verbindlich ein. Bei Zeitdruck können wir mit größerem Team arbeiten, um schneller fertig zu werden. Sprechen Sie uns auf Ihre Deadline an.'
      },
      {
        question: 'Stellen Sie Rechnungen für Unternehmen aus?',
        answer: 'Ja, selbstverständlich. Sie erhalten eine ordentliche Rechnung mit allen Details, Steuernummer und allen Angaben, die Sie für Ihre Buchhaltung benötigen. Auf Wunsch auch mit Zahlungsziel. Wir arbeiten regelmäßig mit Unternehmen, Hausverwaltungen und Insolvenzverwaltern zusammen und kennen die Anforderungen.'
      },
      {
        question: 'Was passiert mit Lagerbeständen und Inventar?',
        answer: 'Lagerbestände behandeln wir je nach Wert: Verwertbare Waren können wir ankaufen oder vermitteln, wertlose Bestände entsorgen wir fachgerecht, B-Ware und beschädigte Waren trennen wir separat, Gefahrstoffe entsorgen wir nach Vorgaben. Wir erstellen auf Wunsch ein Inventar, damit Sie nachvollziehen können, was entsorgt wurde.'
      },
      {
        question: 'Arbeiten Sie auch mit Insolvenzverwaltern zusammen?',
        answer: 'Ja, wir haben Erfahrung mit Insolvenzräumungen und kennen die rechtlichen Anforderungen. Wir arbeiten termingerecht, dokumentieren alles und halten Fristen ein. Die Zusammenarbeit mit Insolvenzverwaltern, Gerichten und Gläubigern ist für uns Routine.'
      },
      {
        question: 'Können Sie auch nur Teilbereiche räumen?',
        answer: 'Selbstverständlich. Sie müssen nicht alles räumen lassen. Wir können auch nur das Lager entrümpeln, nur bestimmte Büros räumen oder nur Altakten entsorgen. Flexibilität ist unser Vorteil - sprechen Sie uns an, was Sie benötigen.'
      },
      {
        question: 'Übernehmen Sie auch die Endreinigung des Objekts?',
        answer: 'Ja, auf Wunsch bieten wir Grundreinigung oder besenreine Übergabe an. So können Sie das Objekt direkt weitervermieten oder verkaufen. Wir koordinieren auf Wunsch auch Malerarbeiten oder kleinere Reparaturen mit Partnerfirmen.'
      }
    ],
    relatedServices: ['entruempelung', 'immobilienraemung', 'haushaltsaufloesung']
  },
  {
    slug: 'immobilienraemung',
    icon: Building2,
    title: 'Immobilienräumung Stuttgart',
    shortDescription: 'Spezialservice für Hausverwaltungen und Immobilienmakler. Schnelle Objektfreimachung für Neuvermietung oder Verkauf.',
    fullDescription: 'Als Immobilienmakler oder Hausverwaltung kennen Sie die Herausforderung: Ein Objekt muss schnell geräumt werden, damit es wieder vermietet oder verkauft werden kann. Jeder Tag Leerstand kostet Geld. Wir sind spezialisiert auf die zügige und professionelle Räumung von Immobilien in Stuttgart und bieten Ihnen einen Komplettservice - von der Entrümpelung über Endreinigung bis zur schlüsselfertigen Übergabe.',
    intro: {
      forWhom: 'Unser Service richtet sich an Immobilienmakler, Hausverwaltungen, Wohnungsbaugesellschaften, Erbengemeinschaften bei Immobilienverkauf und alle, die schnell ein vermietbares oder verkaufsfähiges Objekt benötigen.',
      situations: [
        'Nach Räumungsurteil: Schnelle und rechtskonforme Objektfreimachung',
        'Messie-Nachlass: Professionelle Räumung schwieriger Objekte',
        'Mieterwechsel: Schnell wieder vermietbar machen',
        'Immobilienverkauf: Besenreine oder schlüsselfertige Übergabe',
        'Erbe: Schnelle Abwicklung für Verkauf oder Vermietung',
        'Zwangsvollstreckung: Erfahrung mit rechtlichen Rahmenbedingungen'
      ],
      emotional: 'Jeder Tag Leerstand ist für Sie ein Verlust. Wir verstehen, dass Tempo und Zuverlässigkeit für Sie entscheidend sind. Unser Team arbeitet schnell, professionell und bringt Ihr Objekt zügig wieder in einen vermietbaren oder verkaufsfähigen Zustand. Sie können sich auf uns verlassen - mit klaren Terminen, transparenten Preisen und sauberer Arbeit.'
    },
    whatWeOffer: {
      title: 'Immobilien-Räumung für Profis',
      description: 'Komplettservice von der Entrümpelung bis zur schlüsselfertigen Übergabe - speziell für Immobilienprofis entwickelt.',
      included: [
        'Express-Besichtigung innerhalb von 24 Stunden',
        'Verbindliches Festpreis-Angebot für Ihre Kalkulation',
        'Komplette Entrümpelung aller Räume und Nebenräume',
        'Wertanrechnung für verwertbare Gegenstände',
        'Fachgerechte Entsorgung aller Materialien',
        'Optional: Besenreine Endreinigung',
        'Optional: Schlüsselfertige Übergabe mit kleinen Reparaturen',
        'Optional: Malerarbeiten, Bodenreinigung, Schönheitsreparaturen',
        'Direkte Abrechnung mit Hausverwaltungen',
        'Übergabeprotokoll mit Fotodokumentation'
      ]
    },
    benefits: [
      'Express-Service für eilige Fälle - oft innerhalb weniger Tage',
      'Besenreine oder schlüsselfertige Übergabe nach Wunsch',
      'Direkte Abrechnung mit Hausverwaltungen und ordentliche Rechnungsstellung',
      'Erfahrung mit Räumungsklagen und rechtlichen Vorgaben',
      'Kurze Reaktionszeiten - wir verstehen Ihre Dringlichkeit',
      'Transparente Festpreise für Ihre sichere Kalkulation',
      'Ein Ansprechpartner für alle Gewerke',
      'Fotodokumentation vorher/nachher'
    ],
    process: [
      'Schnelle Objektbesichtigung innerhalb von 24 Stunden nach Anfrage',
      'Verbindliches Festpreis-Angebot mit allen Leistungen',
      'Flexible und kurzfristige Terminplanung',
      'Zügige und professionelle Räumung',
      'Optional: Endreinigung und kleine Reparaturen für Vermietbarkeit',
      'Übergabe mit Protokoll und Fotodokumentation'
    ],
    features: ['Express-Service', 'Besenreine Übergabe', 'Direkte Abrechnung'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Bad Cannstatt',
        'Vaihingen',
        'Feuerbach',
        'Degerloch',
        'Möhringen',
        'Esslingen',
        'Ludwigsburg',
        'Böblingen'
      ],
      description: 'Der Stuttgarter Immobilienmarkt ist dynamisch und jeder Tag Leerstand ist teuer. Wir verstehen die lokalen Anforderungen und arbeiten mit vielen Hausverwaltungen und Maklern in der Region zusammen. Wir kennen die Besonderheiten des Stuttgarter Wohnungsmarktes, die Anforderungen an vermietbare Objekte und die rechtlichen Rahmenbedingungen. Unser Netzwerk ermöglicht uns auch kurzfristige Einsätze.'
    },
    cta: {
      title: 'Express-Räumung anfragen',
      description: 'Kontaktieren Sie uns für eine schnelle Immobilienräumung. Wir machen Ihr Objekt wieder vermietbar oder verkaufsbereit.'
    },
    additionalContent: {
      title: 'Wichtiges zur Immobilienräumung',
      sections: [
        {
          heading: 'Was kostet eine Immobilienräumung in Stuttgart?',
          content: 'Die Kosten hängen von Objektgröße, Füllgrad und gewünschten Zusatzleistungen ab. Eine 2-Zimmer-Wohnung kostet etwa 800-1.500 Euro, eine 3-Zimmer-Wohnung 1.200-2.200 Euro, eine 4-Zimmer-Wohnung 1.800-3.000 Euro. Mit Wertanrechnung für verwertbare Gegenstände sinken die Kosten oft deutlich. Zusatzleistungen wie besenreine Übergabe (+150-300 Euro), kleine Reparaturen (nach Aufwand) oder Malerarbeiten (nach qm) können optional gebucht werden. Für Hausverwaltungen erstellen wir detaillierte Angebote mit Festpreisen, damit Sie sicher kalkulieren können.'
        },
        {
          heading: 'Wie schnell können Sie eine Immobilie räumen?',
          content: 'Geschwindigkeit ist unser Vorteil. Express-Besichtigung erfolgt innerhalb von 24 Stunden nach Ihrer Anfrage. Angebot erhalten Sie oft noch am selben Tag. Räumung selbst können wir meist innerhalb von 2-4 Werktagen durchführen, bei extremer Dringlichkeit manchmal sogar schneller. Eine durchschnittliche Wohnung räumen wir an einem Tag. Sie teilen uns Ihre Deadline mit - wir halten sie ein. Das ist besonders wichtig bei Räumungsurteilen, Verkaufsterminen oder wenn Neuvermietung ansteht.'
        },
        {
          heading: 'Was bedeutet besenreine vs. schlüsselfertige Übergabe?',
          content: 'Besenrein bedeutet: Alle Gegenstände sind entfernt, Räume sind grob gereinigt, gefegt, Spinnweben entfernt, Oberflächen abgewischt. Die Wohnung ist leer und sauber, aber nicht perfekt. Schlüsselfertig bedeutet: Zusätzlich zur Entrümpelung erfolgen gründliche Endreinigung, kleine Reparaturen (Bohrlöcher spachteln, kaputte Steckdosen etc.), optional Malerarbeiten, Bodenreinigung/-aufbereitung. Das Objekt ist bezugsfertig. Als Hausverwaltung können Sie wählen, was Sie benötigen. Viele nehmen besenreine Übergabe und beauftragen eigene Handwerker, andere wollen Komplettservice. Beides bieten wir.'
        },
        {
          heading: 'Arbeiten Sie auch nach Räumungsklagen?',
          content: 'Ja, wir haben umfangreiche Erfahrung mit Räumungen nach gerichtlichen Urteilen. Wir kennen die rechtlichen Rahmenbedingungen, arbeiten nach gesetzlichen Vorgaben, dokumentieren alles sorgfältig mit Fotos, verwahren Wertgegenstände vorschriftsmäßig und erstellen ordentliche Übergabeprotokolle. Auf Wunsch arbeiten wir mit Gerichtsvollziehern zusammen. Diskretion ist selbstverständlich - wir arbeiten unaufdringlich und professionell.'
        }
      ]
    },
    faq: [
      {
        question: 'Bieten Sie Staffelpreise für Hausverwaltungen mit mehreren Objekten?',
        answer: 'Ja, für Stammkunden und Hausverwaltungen, die regelmäßig Objekte räumen lassen, bieten wir Rahmenverträge mit attraktiven Konditionen. Bei mehreren Objekten im Jahr können wir über Mengenrabatte sprechen. Kontaktieren Sie uns für ein individuelles Angebot.'
      },
      {
        question: 'Wie läuft die Abrechnung mit Hausverwaltungen?',
        answer: 'Wir stellen ordentliche Rechnungen mit allen Details für Ihre Buchhaltung aus. Auf Wunsch mit Zahlungsziel (z.B. 14 oder 30 Tage). Die Rechnung enthält Steuernummer, detaillierte Leistungsbeschreibung und alle Angaben, die Sie benötigen. Wir arbeiten mit vielen Hausverwaltungen zusammen und kennen die Anforderungen.'
      },
      {
        question: 'Was passiert mit zurückgelassenen Wertgegenständen?',
        answer: 'Wertgegenstände und persönliche Dokumente behandeln wir besonders sorgfältig. Sie werden separat verwahrt, fotografisch dokumentiert und Ihnen zur Verfügung gestellt oder dem ehemaligen Mieter nachweislich angeboten. Wir halten uns an alle rechtlichen Vorgaben bei Räumungen. Ihre Absicherung als Vermieter ist uns wichtig.'
      },
      {
        question: 'Können Sie auch nur Teilräumungen durchführen?',
        answer: 'Selbstverständlich. Manchmal soll nur der Keller geräumt werden, manchmal nur einzelne Zimmer. Wir sind flexibel und passen uns Ihren Anforderungen an. Auch Nachräumungen, wenn Mieter nur teilweise geräumt haben, übernehmen wir gern.'
      },
      {
        question: 'Koordinieren Sie auch Handwerker für Reparaturen?',
        answer: 'Ja, auf Wunsch koordinieren wir alle nötigen Gewerke: Maler, Bodenleger, Elektriker, Sanitär. So haben Sie einen Ansprechpartner für alles und bekommen das Objekt wirklich vermietfertig zurück. Das spart Ihnen Zeit und Aufwand.'
      },
      {
        question: 'Erstellen Sie Fotodokumentationen?',
        answer: 'Ja, standardmäßig fotografieren wir den Zustand vorher und nachher. Das ist für Sie als Hausverwaltung wichtig für die Dokumentation und ggf. für rechtliche Auseinandersetzungen. Die Fotos erhalten Sie digital zusammen mit dem Übergabeprotokoll.'
      }
    ],
    relatedServices: ['haushaltsaufloesung', 'entruempelung', 'gewerbe-entruempelung']
  },
  {
    slug: 'moebel-entsorgung',
    icon: Sofa,
    title: 'Möbel-Entsorgung Stuttgart',
    shortDescription: 'Fachgerechte Entsorgung von Altmöbeln, Küchen, Sofas und kompletten Einrichtungen. Mit Wertanrechnung für gut erhaltene Stücke.',
    fullDescription: 'Alte Möbel entsorgen ist oft mühsam: Sie müssen demontiert, aus der Wohnung getragen und fachgerecht entsorgt werden. Wir übernehmen das alles für Sie. Von einzelnen Möbelstücken bis zu kompletten Einrichtungen - unser Team holt Ihre Altmöbel in Stuttgart ab und sorgt für eine umweltgerechte Entsorgung. Gut erhaltene Möbel werden fair bewertet und vom Preis abgezogen.',
    intro: {
      forWhom: 'Für alle, die alte Möbel loswerden möchten: Haushalte bei Neuanschaffung, Mieter vor Umzug, Vermieter nach Auszug, Entrümpler, die Unterstützung brauchen, und alle, die keine Lust auf Schleppen haben.',
      situations: [
        'Einzelmöbel entsorgen: Sofa, Schrank, Bett, Tisch, Stühle',
        'Komplette Küche: Einbauküche inklusive Elektrogeräte',
        'Ganze Einrichtung: Bei Wohnungsauflösung oder Neueinrichtung',
        'Sperrige Möbel: Schrankwände, Eckbänke, schwere Kommoden',
        'Outdoor-Möbel: Gartenmöbel, Sonnenschirme, Lounges',
        'Büromöbel: Schreibtische, Bürostühle, Regale'
      ],
      emotional: 'Das alte Sofa hat ausgedient, der Schrank passt nicht mehr zum neuen Stil. Aber wohin damit? Wir nehmen Ihnen die Last ab - wortwörtlich. Keine Sorgen um Transport, Entsorgung oder Anmeldung beim Wertstoffhof. Wir kommen, laden auf und kümmern uns um die fachgerechte Entsorgung. Und wenn Ihre Möbel noch gut sind, rechnen wir den Wert sogar an.'
    },
    whatWeOffer: {
      title: 'Möbel-Entsorgung leicht gemacht',
      description: 'Von einzelnen Stücken bis zur kompletten Einrichtung - wir holen ab, entsorgen fachgerecht und rechnen Werte an.',
      included: [
        'Abholung von Einzelmöbeln oder kompletten Einrichtungen',
        'Auch aus höheren Etagen - wir tragen für Sie',
        'Demontage bei Bedarf (Schränke, Betten, Einbauküchen)',
        'Bewertung gut erhaltener Möbel vor Ort',
        'Wertanrechnung - reduziert Ihre Kosten',
        'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
        'Umweltbewusstes Recycling und Materialverwertung',
        'Weitergabe brauchbarer Möbel an soziale Einrichtungen',
        'Flexible Terminvereinbarung',
        'Faire und transparente Preisgestaltung'
      ]
    },
    benefits: [
      'Wertanrechnung für gut erhaltene Möbel möglich - spart Kosten',
      'Umweltgerechte Entsorgung und professionelles Recycling',
      'Auch Einzelstücke werden abgeholt - keine Mindestmenge',
      'Demontage und Transport inklusive - kein Schleppen für Sie',
      'Flexible Terminvereinbarung auch kurzfristig',
      'Faire Preisgestaltung ohne versteckte Kosten',
      'Erfahrenes Team kennt alle Möbeltypen',
      'Nachhaltig: Weitergabe brauchbarer Möbel an gemeinnützige Organisationen'
    ],
    process: [
      'Beschreibung der zu entsorgenden Möbel (Art, Zustand, Standort)',
      'Preisauskunft und flexible Terminvereinbarung',
      'Demontage bei Bedarf (Schränke, Betten, etc.)',
      'Transport aus der Wohnung - auch aus höheren Etagen',
      'Vor-Ort-Bewertung verwertbarer Stücke',
      'Fachgerechte Entsorgung oder nachhaltige Weiterverwertung'
    ],
    features: ['Wertanrechnung möglich', 'Umweltgerechte Entsorgung', 'Auch Einzelstücke'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Bad Cannstatt',
        'Vaihingen',
        'Degerloch',
        'Feuerbach',
        'Möhringen',
        'Esslingen',
        'Ludwigsburg',
        'Waiblingen'
      ],
      description: 'In Stuttgart ist Transport oft eine Herausforderung - Hanglage, enge Straßen, Parksituation. Wir kennen die Gegend und haben Erfahrung mit allen Stuttgarter Stadtteilen. Auch aus höheren Etagen in Altbauten ohne Aufzug - für uns kein Problem. Wir arbeiten mit lokalen Verwertungsstellen und sozialen Einrichtungen zusammen, um brauchbare Möbel sinnvoll weiterzugeben.'
    },
    cta: {
      title: 'Möbel entsorgen lassen',
      description: 'Kontaktieren Sie uns für die Entsorgung Ihrer Altmöbel. Wir erstellen Ihnen ein faires Angebot und holen zeitnah ab.'
    },
    additionalContent: {
      title: 'Alles zur Möbel-Entsorgung in Stuttgart',
      sections: [
        {
          heading: 'Was kostet die Entsorgung von Möbeln in Stuttgart?',
          content: 'Die Kosten hängen von Art, Menge und Stockwerk ab. Einzelmöbel wie ein Sofa kosten 50-100 Euro, ein Kleiderschrank 60-120 Euro, ein Bett 50-90 Euro. Eine komplette Küchenzeile kostet 200-400 Euro. Bei ganzen Einrichtungen (Wohnzimmer, Schlafzimmer etc.) kalkulieren wir nach Gesamtaufwand, oft 300-800 Euro. Gut erhaltene Möbel werden bewertet und angerechnet - das kann die Kosten erheblich senken, manchmal sogar auf null reduzieren. Wir nennen Ihnen vorab einen transparenten Preis, damit Sie wissen, was auf Sie zukommt. Keine versteckten Kosten, keine Nachforderungen.'
        },
        {
          heading: 'Welche Möbel können entsorgt werden?',
          content: 'Wir entsorgen grundsätzlich alle Arten von Möbeln: Sitzmöbel wie Sofas, Sessel, Stühle, Eckbänke, Schränke aller Art (Kleiderschränke, Küchenschränke, Vitrinen), Betten, Matratzen, Lattenroste, Tische (Ess-, Couchtische, Schreibtische), Regale und Kommoden, komplette Einbauküchen mit Elektrogeräten, Gartenmöbel und Outdoor-Lounges, Büromöbel. Auch sperrige Schrankwände, die zerlegt werden müssen, sind kein Problem. Wichtig: Asbest-haltige Möbel (sehr alt) müssen speziell entsorgt werden - sprechen Sie uns an, wenn Sie unsicher sind.'
        },
        {
          heading: 'Müssen Möbel vorher auseinandergebaut werden?',
          content: 'Nein, das müssen Sie nicht. Unser Team bringt Werkzeug mit und demontiert bei Bedarf vor Ort. Große Schränke, Bettgestelle, Einbauküchen - wir zerlegen alles fachgerecht, tragen die Teile raus und laden sie auf. Sie müssen nichts vorbereiten, nichts schrauben. Lehnen Sie sich zurück, wir machen die Arbeit. Das ist besonders praktisch, wenn Sie keine Zeit, kein Werkzeug oder körperliche Einschränkungen haben.'
        },
        {
          heading: 'Was passiert mit gut erhaltenen Möbeln?',
          content: 'Gut erhaltene Möbel sind zu schade zum Wegwerfen. Wir prüfen den Zustand und haben mehrere Optionen: Verkauf an Gebrauchtmöbel-Händler mit Wertanrechnung für Sie, Weitergabe an Second-Hand-Shops, Spende an soziale Einrichtungen (Caritas, Diakonie etc.), Verkauf an Privatpersonen über unsere Kanäle. So bekommen brauchbare Möbel ein zweites Leben und Sie profitieren finanziell. In manchen Fällen übersteigt der Wert der Möbel sogar die Entsorgungskosten - dann zahlen wir Ihnen die Differenz aus. Nachhaltigkeit und faire Preise gehen bei uns Hand in Hand.'
        }
      ]
    },
    faq: [
      {
        question: 'Holen Sie auch nur ein einzelnes Möbelstück ab?',
        answer: 'Ja, selbstverständlich. Sie brauchen keine Mindestmenge. Ob ein einzelnes Sofa, ein Schrank oder eine Kommode - wir holen auch Einzelstücke ab. Der Preis richtet sich nach dem konkreten Stück und dem Aufwand. Oft ist das günstiger, als Sie denken.'
      },
      {
        question: 'Transportieren Sie auch aus höheren Etagen?',
        answer: 'Ja, auch aus dem 5. Stock ohne Aufzug. Unser Team ist trainiert und kennt die Stuttgarter Altbauten mit ihren engen Treppenhäusern. Die Stockwerkshöhe fließt in die Preiskalkulation ein, aber grundsätzlich holen wir aus jeder Etage ab. Sie müssen nichts schleppen.'
      },
      {
        question: 'Wie schnell können Sie Möbel abholen?',
        answer: 'In den meisten Fällen innerhalb von 2-4 Werktagen. Bei dringenden Fällen manchmal auch schneller. Kontaktieren Sie uns mit Ihrem Wunschtermin und wir schauen, was möglich ist. Flexibilität ist einer unserer Vorteile.'
      },
      {
        question: 'Was passiert mit Polstermöbeln und Matratzen?',
        answer: 'Polstermöbel und Matratzen werden fachgerecht entsorgt. Gut erhaltene Stücke können ggf. wiederverwertet werden. Stark beschädigte oder unhygienische Polster werden der professionellen Entsorgung zugeführt. Wir arbeiten nach gesetzlichen Vorgaben und mit zertifizierten Entsorgungsbetrieben.'
      },
      {
        question: 'Entsorgen Sie auch Einbauküchen?',
        answer: 'Ja, komplette Einbauküchen inklusive Elektrogeräte. Wir demontieren die Küche vor Ort, entfernen alle Schränke, Arbeitsplatten, Geräte und entsorgen alles fachgerecht. Verwertbare Elemente (z.B. neuere Elektrogeräte) werden bewertet und angerechnet. Das senkt Ihre Kosten.'
      },
      {
        question: 'Kann ich zusehen oder muss ich da sein?',
        answer: 'Bei der ersten Besichtigung zur Preisfindung sollten Sie da sein. Bei der eigentlichen Abholung ist Ihre Anwesenheit nicht zwingend nötig, wenn Sie uns vertrauen. Viele Kunden überlassen uns einen Schlüssel und wir erledigen alles in ihrer Abwesenheit. Sie entscheiden, was Ihnen lieber ist.'
      },
      {
        question: 'Wie umweltfreundlich ist Ihre Entsorgung?',
        answer: 'Nachhaltigkeit ist uns wichtig. Wir trennen konsequent nach Material: Holz wird recycelt, Metalle werden dem Recycling zugeführt, brauchbare Möbel werden wiederverwertet, Polster werden fachgerecht entsorgt. Nur was wirklich nicht mehr verwertbar ist, wird entsorgt. So minimieren wir Müll und schonen Ressourcen.'
      }
    ],
    relatedServices: ['sperrmuell-entsorgung', 'wertanrechnung', 'haushaltsaufloesung']
  },
  {
    slug: 'wertanrechnung',
    icon: Recycle,
    title: 'Wertanrechnung Stuttgart',
    shortDescription: 'Verwertbare Möbel, Antiquitäten und Gegenstände werden von unseren Experten fair bewertet und vom Gesamtpreis abgezogen.',
    fullDescription: 'Was für Sie nicht mehr gebraucht wird, kann für andere noch wertvoll sein. Bei jeder Entrümpelung prüfen unsere geschulten Mitarbeiter, welche Gegenstände noch verwertbar sind. Möbel, Antiquitäten, Elektrogeräte und andere Wertgegenstände werden fair bewertet und vom Gesamtpreis Ihrer Entrümpelung abgezogen. So sparen Sie Kosten und handeln nachhaltig. In vielen Fällen kann die Wertanrechnung die Entrümpelungskosten erheblich reduzieren.',
    intro: {
      forWhom: 'Ideal für alle, die bei der Entrümpelung Kosten sparen möchten: Angehörige bei Nachlässen, Erbengemeinschaften, Haushaltsauflöser, Umziehende und alle, die vermuten, dass noch brauchbare oder wertvolle Gegenstände vorhanden sind.',
      situations: [
        'Nachlass mit Antiquitäten: Faire Bewertung von Möbeln, Bildern, Porzellan',
        'Gut erhaltene Möbel: Wertanrechnung für neuwertige oder Designer-Möbel',
        'Sammlerartikel: Münzen, Briefmarken, Bücher, Schallplatten',
        'Elektrogeräte: Funktionsfähige Geräte haben Wert',
        'Schmuck und Wertgegenstände: Diskrete und faire Bewertung',
        'Hausrat mit Substanz: Qualitätsgeschirr, Besteck, Textilien'
      ],
      emotional: 'Es fühlt sich oft falsch an, Dinge wegzuwerfen, die noch brauchbar sind. Das müssen Sie auch nicht. Wir schauen genau hin, was noch Wert hat - nicht nur finanziell, sondern auch für Menschen, die diese Dinge gebrauchen können. So wird aus Ihrer Entrümpelung nicht nur Kosteneinsparung, sondern auch eine gute Tat. Nachhaltig und fair.'
    },
    whatWeOffer: {
      title: 'Faire Wertermittlung und Anrechnung',
      description: 'Unsere Experten bewerten Ihre Gegenstände professionell und ehrlich. Was Wert hat, wird vom Preis abgezogen.',
      included: [
        'Kostenlose Wertermittlung bei der Besichtigung vor Ort',
        'Professionelle Begutachtung durch geschulte Experten',
        'Bewertung von Möbeln, Antiquitäten, Sammlerstücken',
        'Faire Marktpreise - keine Dumpingpreise',
        'Transparente Aufstellung im Angebot',
        'Sofortige Verrechnung mit dem Auftragspreis',
        'Separate Auflistung jedes bewerteten Gegenstands',
        'Bei hohen Werten: Zweitmeinung möglich',
        'Diskrete Behandlung wertvoller Gegenstände',
        'Weiterverwertung über seriöse Kanäle'
      ]
    },
    benefits: [
      'Faire Bewertung durch erfahrene Experten',
      'Sofortige Verrechnung mit dem Auftragspreis - Sie sparen direkt',
      'Maximale Ersparnis für Sie durch realistische Marktpreise',
      'Nachhaltige Wiederverwertung - gut für die Umwelt',
      'Transparente Wertermittlung mit detaillierter Aufstellung',
      'Keine versteckten Kosten oder nachträgliche Änderungen',
      'Auch kleinere Werte werden berücksichtigt',
      'In vielen Fällen: Entrümpelung zum Nulltarif oder sogar mit Auszahlung möglich'
    ],
    process: [
      'Begutachtung vor Ort bei der ersten Besichtigung',
      'Professionelle Bewertung verwertbarer Gegenstände',
      'Transparente Aufstellung im schriftlichen Angebot',
      'Sofortiger Abzug vom Gesamtpreis der Entrümpelung',
      'Abtransport und seriöse Weiterverwertung',
      'Finale Abrechnung nach tatsächlichem Wert'
    ],
    features: ['Faire Bewertung', 'Sofortige Verrechnung', 'Maximale Ersparnis'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Bad Cannstatt',
        'Vaihingen',
        'Degerloch',
        'Feuerbach',
        'Möhringen',
        'Esslingen',
        'Ludwigsburg',
        'Böblingen',
        'Sindelfingen',
        'Waiblingen'
      ],
      description: 'Stuttgart und Umgebung hat eine lebendige Antiquitäten- und Gebrauchtwarenszene. Wir kennen den lokalen Markt, arbeiten mit seriösen Händlern zusammen und wissen, was Stuttgarter Kunden schätzen. Durch unser Netzwerk können wir faire Preise bieten und gleichzeitig sicherstellen, dass brauchbare Gegenstände eine zweite Chance bekommen - bei Sammlern, in Vintage-Shops oder bei gemeinnützigen Organisationen.'
    },
    cta: {
      title: 'Wertermittlung anfragen',
      description: 'Lassen Sie den Wert Ihrer Gegenstände kostenlos ermitteln. Oft können wir die Entrümpelungskosten durch Wertanrechnung deutlich senken.'
    },
    additionalContent: {
      title: 'Alles zur Wertanrechnung bei Entrümpelungen',
      sections: [
        {
          heading: 'Wie funktioniert die Wertanrechnung bei Entrümpelungen?',
          content: 'Bei der Wertanrechnung bewerten unsere Experten alle verwertbaren Gegenstände fair nach aktuellen Marktpreisen. Gut erhaltene Möbel, funktionsfähige Elektrogeräte, Werkzeuge, Antiquitäten, Sammlerstücke - alles was einen Wiederverkaufswert hat, wird erfasst. Diese Werte werden dann vom Entrümpelungspreis abgezogen. Beispiel: Ihre Entrümpelung würde 1.500 Euro kosten. Wir finden verwertbare Möbel und Gegenstände im Wert von 800 Euro. Sie zahlen nur noch 700 Euro. In manchen Fällen übersteigt der Wert der Gegenstände sogar die Entrümpelungskosten - dann zahlen wir Ihnen die Differenz aus. Die Wertanrechnung macht Entrümpelungen oft deutlich günstiger und fördert nachhaltiges Handeln.'
        },
        {
          heading: 'Welche Gegenstände haben Wiederverkaufswert?',
          content: 'Viele Dinge haben noch Wert, auch wenn Sie sie nicht mehr brauchen. Gut erhaltene Möbel aus Massivholz, Designermöbel, Antiquitäten, funktionsfähige Elektrogeräte, Werkzeuge und Maschinen, Porzellan und Geschirr von Qualitätsmarken, Silberbesteck, Teppiche, Bücher und Schallplatten, Schmuck, Münzsammlungen, alte Uhren, Bilder und Kunstgegenstände. Selbst scheinbar wertlose Dinge können überraschen - alte Werkzeugkisten, Vintage-Lampen oder Retro-Elektronik sind bei Sammlern begehrt. Unser Team erkennt Wertsachen und schätzt sie realistisch ein. Sie profitieren von unserer Erfahrung und unserem Marktwissen.'
        },
        {
          heading: 'Wie transparent ist die Wertermittlung?',
          content: 'Absolute Transparenz ist uns wichtig. Bei der Besichtigung erfassen wir verwertbare Gegenstände und bewerten sie vor Ort. Im schriftlichen Angebot erhalten Sie eine detaillierte Aufstellung: Jeder bewertete Gegenstand ist einzeln aufgeführt mit Beschreibung und angerechneetem Wert. Sie sehen genau, was wir mit welchem Betrag ansetzen. Wenn Sie Zweifel an einer Bewertung haben, besprechen wir das. Bei besonders wertvollen Stücken bieten wir eine Zweitmeinung an. Keine versteckten Abzüge, keine unklaren Kalkulationen. Sie wissen immer, woran Sie sind und können die Fairness unserer Bewertung nachvollziehen.'
        },
        {
          heading: 'Kann ich mich auf die Wertanrechnung verlassen?',
          content: 'Ja, absolut. Die Wertanrechnung ist vertraglich fixiert und wird im Angebot schriftlich festgehalten. Was wir zusagen, gilt. Wir arbeiten seit über 10 Jahren in Stuttgart mit diesem System und haben hunderte zufriedene Kunden. Unsere Bewertungen sind fair und realistisch - weder schätzen wir zu hoch (um Sie anzulocken), noch zu niedrig (um zu profitieren). Wir leben von Empfehlungen und gutem Ruf, daher ist Ehrlichkeit für uns selbstverständlich. Die meisten Kunden sind überrascht, wie viel Wert in ihren scheinbar wertlosen Sachen steckt. Vertrauen Sie auf unsere Expertise und lokale Marktkenntnis.'
        }
      ]
    },
    faq: [
      {
        question: 'Bewerten Sie auch Antiquitäten und Kunstgegenstände?',
        answer: 'Ja, unser Team hat Erfahrung in der Bewertung von Antiquitäten, alten Möbeln, Porzellan, Bildern und Kunstgegenständen. Bei besonders wertvollen oder seltenen Stücken arbeiten wir mit Experten zusammen, um eine faire Bewertung sicherzustellen. Wir wollen nicht, dass Sie unter Wert verkaufen - Ihre Zufriedenheit ist uns wichtig.'
      },
      {
        question: 'Was passiert mit den verwertbaren Gegenständen nach der Entrümpelung?',
        answer: 'Verwertbare Gegenstände werden je nach Art und Wert über verschiedene Kanäle weiterverkauft: an Gebrauchtwaren händler, Second-Hand-Shops, Antiquitätenhändler, über Online-Plattformen oder an Privatpersonen. Sozial wertvolle Dinge ohne großen Marktwert geben wir an gemeinnützige Organisationen weiter. So bekommen brauchbare Gegenstände ein zweites Leben und werden nicht unnötig zu Müll.'
        },
      {
        question: 'Wird der Wert vor oder nach der Entrümpelung ermittelt?',
        answer: 'Die Wertermittlung erfolgt bei der kostenlosen Besichtigung vor der Entrümpelung. So können Sie das Angebot mit Wertanrechnung sehen und in Ruhe entscheiden. Der ermittelte Wert wird im Angebot festgeschrieben. Bei der Entrümpelung überprüfen wir den Zustand noch einmal, aber in der Regel bleibt die Bewertung unverändert.'
      },
      {
        question: 'Können wir auch Gegenstände zurückbehalten und selbst verkaufen?',
        answer: 'Selbstverständlich! Es ist Ihr Eigentum. Wenn Sie bestimmte Wertgegenstände lieber selbst verkaufen möchten, ist das kein Problem. Wir zeigen Ihnen, was verwertbar ist und Sie entscheiden. Was Sie behalten, rechnen wir nicht an. Was wir mitnehmen sollen, wird bewertet und angerechnet. Völlig flexible Handhabung nach Ihren Wünschen.'
      },
      {
        question: 'Wie hoch ist die durchschnittliche Wertanrechnung bei Entrümpelungen?',
        answer: 'Das variiert stark je nach Objektart und Gegenständen. Bei Haushaltsauflösungen liegt die Wertanrechnung oft zwischen 300 und 1.500 Euro. Bei gut erhaltenen Wohnungen mit Qualitätsmöbeln auch deutlich mehr. Keller und Dachböden bringen oft 100-500 Euro. Entscheidend ist der Zustand und die Marktgängigkeit. Manche Entrümpelungen kosten Sie nach Wertanrechnung gar nichts mehr - die verwertbaren Gegenstände decken die Kosten komplett.'
      },
      {
        question: 'Muss ich die Wertanrechnung versteuern?',
        answer: 'Als Privatperson in der Regel nein. Die Wertanrechnung ist eine Reduzierung Ihrer Entrümpelungskosten, kein Einkommen. Anders kann es sein, wenn Sie gewerblich handeln oder Erbschaften verkaufen - dann fragen Sie Ihren Steuerberater. Wir stellen ordentliche Rechnungen aus, die Sie für steuerliche Zwecke nutzen können.'
      },
      {
        question: 'Kaufen Sie die Gegenstände an oder rechnen Sie sie nur an?',
        answer: 'Wir rechnen die Gegenstände an - das heißt, wir verrechnen ihren Wert mit den Entrümpelungskosten. Rechtlich bleibt das Eigentum zunächst bei Ihnen, geht aber mit Abtransport auf uns über. Das ist unkomplizierter als ein formeller Ankauf und für beide Seiten vorteilhaft. Sie sparen Kosten, wir können die Gegenstände weiterverwerten. Bei sehr hochwertigen Einzelstücken können wir auch einen direkten Ankauf besprechen.'
      }
    ],
    relatedServices: ['haushaltsaufloesung', 'entruempelung', 'moebel-entsorgung']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
