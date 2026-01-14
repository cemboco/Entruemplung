import { Home, Trash2, Package, Truck, Briefcase, Recycle, Building2, Warehouse, Sofa, LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  features: string[];
  cta: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: 'haushaltsaufloesung',
    icon: Home,
    title: 'Haushaltsauflösungen Stuttgart',
    shortDescription: 'Komplette Wohnungsauflösungen nach Todesfall, Umzug oder bei Pflegebedürftigkeit. Wir übernehmen die gesamte Abwicklung inklusive Verwertung, Entsorgung und besenreiner Übergabe.',
    fullDescription: 'Eine Haushaltsauflösung ist oft mit emotionalen Belastungen verbunden - sei es nach einem Todesfall, bei Umzug ins Pflegeheim oder bei einer notwendigen Verkleinerung. Wir von Serviceplus verstehen diese sensible Situation und bieten Ihnen professionelle Unterstützung in Stuttgart und Umgebung. Unser erfahrenes Team übernimmt die komplette Abwicklung: von der Bewertung verwertbarer Gegenstände über die fachgerechte Entsorgung bis zur besenreinen Übergabe der Immobilie.',
    benefits: [
      'Komplette Abwicklung aus einer Hand',
      'Diskrete und respektvolle Durchführung',
      'Termingerechte und besenreine Übergabe',
      'Wertanrechnung für gut erhaltene Gegenstände',
      'Professionelle Entsorgung nach gesetzlichen Vorgaben',
      'Faire und transparente Preisgestaltung'
    ],
    process: [
      'Kostenlose Besichtigung und Beratung vor Ort',
      'Faire Bewertung verwertbarer Gegenstände',
      'Terminabsprache nach Ihren Wünschen',
      'Professionelle Räumung durch geschultes Personal',
      'Fachgerechte Trennung und Entsorgung',
      'Besenreine Übergabe der Räumlichkeiten'
    ],
    features: ['Komplette Abwicklung', 'Diskrete Durchführung', 'Termingerechte Übergabe'],
    cta: {
      title: 'Kostenlose Erstberatung vereinbaren',
      description: 'Lassen Sie sich unverbindlich beraten. Wir erstellen Ihnen ein individuelles Angebot für Ihre Haushaltsauflösung in Stuttgart.'
    }
  },
  {
    slug: 'entruempelung',
    icon: Trash2,
    title: 'Entrümpelung Stuttgart',
    shortDescription: 'Professionelle Entrümpelung von Kellern, Dachböden, Garagen und Scheunen. Auch bei stark vermüllten Objekten sind wir der richtige Partner.',
    fullDescription: 'Vollgestellte Keller, unzugängliche Dachböden oder überladene Garagen - wir räumen auf, wo andere aufgeben. Mit über 10 Jahren Erfahrung in der professionellen Entrümpelung sind wir Ihr zuverlässiger Partner in Stuttgart. Egal ob Privathaushalt, Gewerbeimmobilie oder schwer zugängliche Objekte: Unser Team arbeitet schnell, sauber und zu fairen Festpreisen.',
    benefits: [
      'Entrümpelung aller Räumlichkeiten und Objekte',
      'Auch schwer zugängliche Bereiche',
      'Fachgerechte Entsorgung und Recycling',
      'Schnelle Terminvergabe, auch kurzfristig',
      'Professionelles Equipment für jede Situation',
      'Umweltgerechte Verwertung'
    ],
    process: [
      'Unverbindliche Anfrage per Telefon oder Online',
      'Kostenlose Besichtigung und Angebotserstellung',
      'Flexible Terminvereinbarung',
      'Zügige und professionelle Entrümpelung',
      'Sortierung nach verwertbaren Materialien',
      'Abschließende Reinigung der Räumlichkeiten'
    ],
    features: ['Alle Räumlichkeiten', 'Schwer zugängliche Bereiche', 'Fachgerechte Entsorgung'],
    cta: {
      title: 'Jetzt Entrümpelung anfragen',
      description: 'Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir entrümpeln schnell und zuverlässig in ganz Stuttgart.'
    }
  },
  {
    slug: 'messie-wohnungen',
    icon: Package,
    title: 'Messie-Wohnungen Stuttgart',
    shortDescription: 'Einfühlsame und diskrete Reinigung von Messie-Wohnungen. Unser geschultes Team arbeitet respektvoll und verständnisvoll.',
    fullDescription: 'Die Räumung einer Messie-Wohnung erfordert besonderes Einfühlungsvermögen, Diskretion und Fachkompetenz. Unser speziell geschultes Team ist auf diese sensiblen Aufträge vorbereitet und arbeitet stets respektvoll und verständnisvoll. Wir bringen nicht nur das nötige Equipment mit, sondern vor allem die menschliche Komponente, die in solchen Situationen entscheidend ist. In Stuttgart und Umgebung sind wir Ihr diskreter Partner für Messie-Räumungen.',
    benefits: [
      'Absolute Diskretion garantiert',
      'Geschultes und erfahrenes Personal',
      'Professionelle Geruchsbeseitigung',
      'Einfühlsamer und respektvoller Umgang',
      'Entsorgung nach gesetzlichen Vorgaben',
      'Möglichkeit der Begleitung durch Sozialdienste'
    ],
    process: [
      'Vertrauliches Erstgespräch und Beratung',
      'Diskrete Besichtigung nach Terminabsprache',
      'Individueller Räumungsplan',
      'Behutsame Durchführung der Räumung',
      'Spezialreinigung und Geruchsneutralisation',
      'Besenreine Übergabe oder weiterführende Sanierung'
    ],
    features: ['Diskretion garantiert', 'Geschultes Personal', 'Geruchsbeseitigung'],
    cta: {
      title: 'Vertrauliche Beratung anfragen',
      description: 'Kontaktieren Sie uns diskret und unverbindlich. Wir beraten Sie einfühlsam und erstellen ein individuelles Konzept für Ihre Situation.'
    }
  },
  {
    slug: 'keller-dachboden',
    icon: Warehouse,
    title: 'Keller & Dachboden Entrümpelung Stuttgart',
    shortDescription: 'Professionelle Entrümpelung von vollgestellten Kellern und Dachböden. Inklusive Entsorgung von Sondermüll und Schadstoffen.',
    fullDescription: 'Keller und Dachböden entwickeln sich oft über Jahre zu Lagerstätten für alles, was im Haushalt keinen Platz mehr findet. Die Entrümpelung dieser Bereiche erfordert nicht nur körperliche Arbeit, sondern auch Fachkenntnis im Umgang mit Sondermüll, Schadstoffen und wertvollen Fundstücken. Unser Team ist spezialisiert auf die professionelle Entrümpelung auch schwer zugänglicher Bereiche in Stuttgart und Umgebung.',
    benefits: [
      'Entrümpelung auch schwer zugänglicher Bereiche',
      'Fachgerechte Sondermüll-Entsorgung',
      'Staubfreie und saubere Arbeitsweise',
      'Identifikation von Wertsachen und Erinnerungsstücken',
      'Berücksichtigung von Schadstoffen',
      'Schnelle und effiziente Abwicklung'
    ],
    process: [
      'Vor-Ort-Besichtigung und Zugänglichkeit prüfen',
      'Identifikation von Sondermüll und Wertsachen',
      'Planung von Transportwegen und Logistik',
      'Systematische Räumung nach Plan',
      'Getrennte Entsorgung nach Materialarten',
      'Abschließende Reinigung und Besenreinheit'
    ],
    features: ['Auch schwer zugänglich', 'Sondermüll-Entsorgung', 'Staubfreie Arbeit'],
    cta: {
      title: 'Keller oder Dachboden entrümpeln lassen',
      description: 'Fordern Sie jetzt ein kostenloses Angebot an. Wir besichtigen Ihren Keller oder Dachboden und erstellen einen individuellen Räumungsplan.'
    }
  },
  {
    slug: 'sperrmuell-entsorgung',
    icon: Truck,
    title: 'Sperrmüll-Abholung Stuttgart',
    shortDescription: 'Schnelle und unkomplizierte Abholung von Sperrmüll, Altmöbeln und Elektrogeräten. Wir holen direkt bei Ihnen ab - ohne Wartezeit.',
    fullDescription: 'Sie möchten alte Möbel, Elektrogeräte oder sperrige Gegenstände loswerden, aber die kommunale Sperrmüllabfuhr lässt auf sich warten? Wir bieten Ihnen die schnelle Alternative: Unsere Sperrmüll-Abholung in Stuttgart erfolgt termingerecht und unkompliziert. Ob Einzelstücke oder komplette Wohnungsräumungen - wir holen alles direkt bei Ihnen ab und entsorgen fachgerecht.',
    benefits: [
      'Flexible Terminvereinbarung',
      'Sofort-Abholung oft möglich',
      'Faire und transparente Preise',
      'Abholung auch aus Etagen',
      'Fachgerechte Entsorgung und Recycling',
      'Keine langen Wartezeiten'
    ],
    process: [
      'Anfrage per Telefon oder Online-Formular',
      'Kurze Beschreibung des Sperrmülls',
      'Terminvereinbarung nach Verfügbarkeit',
      'Pünktliche Abholung zum vereinbarten Termin',
      'Verladung durch unser Team',
      'Umweltgerechte Entsorgung'
    ],
    features: ['Flexible Termine', 'Sofort-Abholung möglich', 'Faire Preise'],
    cta: {
      title: 'Sperrmüll-Abholung beauftragen',
      description: 'Kontaktieren Sie uns für eine schnelle Sperrmüll-Abholung in Stuttgart. Oft können wir noch am selben oder nächsten Tag bei Ihnen sein.'
    }
  },
  {
    slug: 'gewerbe-entruempelung',
    icon: Briefcase,
    title: 'Gewerbe-Entrümpelung Stuttgart',
    shortDescription: 'Effiziente Räumung von Büros, Praxen, Geschäftsräumen und Lagerhallen. Auch außerhalb der Geschäftszeiten möglich.',
    fullDescription: 'Bei der Räumung von Gewerbeobjekten sind Schnelligkeit, Diskretion und Zuverlässigkeit entscheidend. Ob Büroauflösung, Praxisräumung, Geschäftsliquidation oder Lagerhallen-Entrümpelung - wir arbeiten termingenau und minimieren Ihre Betriebsunterbrechung. Auf Wunsch führen wir die Arbeiten außerhalb Ihrer Geschäftszeiten oder am Wochenende durch. Für Unternehmen in Stuttgart bieten wir maßgeschneiderte Lösungen.',
    benefits: [
      'Termingerechte Abwicklung',
      'Wochenend-Service verfügbar',
      'Minimale Betriebsunterbrechung',
      'Direkte Abrechnung mit Unternehmen',
      'Entsorgung von Büromöbeln und IT-Equipment',
      'Aktenvernichtung nach Bedarf'
    ],
    process: [
      'Bedarfsanalyse und Objektbesichtigung',
      'Angebotserstellung mit Festpreis',
      'Terminkoordination nach Ihren Anforderungen',
      'Professionelle Räumung im vereinbarten Zeitfenster',
      'Getrennte Verwertung und Entsorgung',
      'Dokumentation und Übergabeprotokoll'
    ],
    features: ['Termingerechte Abwicklung', 'Wochenend-Service', 'Minimale Betriebsunterbrechung'],
    cta: {
      title: 'Gewerbeobjekt entrümpeln lassen',
      description: 'Fordern Sie ein individuelles Angebot für Ihre Gewerbeentrümpelung an. Wir beraten Sie zu optimalen Zeitfenstern und Ablauf.'
    }
  },
  {
    slug: 'immobilienraemung',
    icon: Building2,
    title: 'Immobilienräumung Stuttgart',
    shortDescription: 'Spezialservice für Hausverwaltungen und Immobilienmakler. Schnelle Objektfreimachung für Neuvermietung oder Verkauf.',
    fullDescription: 'Als Immobilienmakler oder Hausverwaltung kennen Sie die Herausforderung: Ein Objekt muss schnell geräumt werden, damit es wieder vermietet oder verkauft werden kann. Jeder Tag Leerstand kostet Geld. Wir sind spezialisiert auf die zügige und professionelle Räumung von Immobilien in Stuttgart und bieten Ihnen einen Komplettservice - von der Entrümpelung über Endreinigung bis zur schlüsselfertigen Übergabe.',
    benefits: [
      'Express-Service für eilige Fälle',
      'Besenreine oder schlüsselfertige Übergabe',
      'Direkte Abrechnung mit Hausverwaltungen',
      'Erfahrung mit Räumungsklagen',
      'Kurze Reaktionszeiten',
      'Transparente Festpreise'
    ],
    process: [
      'Schnelle Objektbesichtigung nach Anfrage',
      'Verbindliches Festpreis-Angebot',
      'Flexible Terminplanung',
      'Zügige und professionelle Räumung',
      'Optional: Endreinigung und kleine Reparaturen',
      'Übergabe mit Protokoll'
    ],
    features: ['Express-Service', 'Besenreine Übergabe', 'Direkte Abrechnung'],
    cta: {
      title: 'Express-Räumung anfragen',
      description: 'Kontaktieren Sie uns für eine schnelle Immobilienräumung. Wir machen Ihr Objekt wieder vermietbar oder verkaufsbereit.'
    }
  },
  {
    slug: 'moebel-entsorgung',
    icon: Sofa,
    title: 'Möbel-Entsorgung Stuttgart',
    shortDescription: 'Fachgerechte Entsorgung von Altmöbeln, Küchen, Sofas und kompletten Einrichtungen. Mit Wertanrechnung für gut erhaltene Stücke.',
    fullDescription: 'Alte Möbel entsorgen ist oft mühsam: Sie müssen demontiert, aus der Wohnung getragen und fachgerecht entsorgt werden. Wir übernehmen das alles für Sie. Von einzelnen Möbelstücken bis zu kompletten Einrichtungen - unser Team holt Ihre Altmöbel in Stuttgart ab und sorgt für eine umweltgerechte Entsorgung. Gut erhaltene Möbel werden fair bewertet und vom Preis abgezogen.',
    benefits: [
      'Wertanrechnung für gut erhaltene Möbel möglich',
      'Umweltgerechte Entsorgung und Recycling',
      'Auch Einzelstücke werden abgeholt',
      'Demontage und Transport inklusive',
      'Flexible Terminvereinbarung',
      'Faire Preisgestaltung'
    ],
    process: [
      'Beschreibung der zu entsorgenden Möbel',
      'Preisauskunft und Terminvereinbarung',
      'Demontage bei Bedarf',
      'Transport aus der Wohnung',
      'Bewertung verwertbarer Stücke',
      'Fachgerechte Entsorgung oder Weiterverwertung'
    ],
    features: ['Wertanrechnung möglich', 'Umweltgerechte Entsorgung', 'Auch Einzelstücke'],
    cta: {
      title: 'Möbel entsorgen lassen',
      description: 'Kontaktieren Sie uns für die Entsorgung Ihrer Altmöbel. Wir erstellen Ihnen ein faires Angebot und holen zeitnah ab.'
    }
  },
  {
    slug: 'wertanrechnung',
    icon: Recycle,
    title: 'Wertanrechnung Stuttgart',
    shortDescription: 'Verwertbare Möbel, Antiquitäten und Gegenstände werden von unseren Experten fair bewertet und vom Gesamtpreis abgezogen.',
    fullDescription: 'Was für Sie nicht mehr gebraucht wird, kann für andere noch wertvoll sein. Bei jeder Entrümpelung prüfen unsere geschulten Mitarbeiter, welche Gegenstände noch verwertbar sind. Möbel, Antiquitäten, Elektrogeräte und andere Wertgegenstände werden fair bewertet und vom Gesamtpreis Ihrer Entrümpelung abgezogen. So sparen Sie Kosten und handeln nachhaltig. In vielen Fällen kann die Wertanrechnung die Entrümpelungskosten erheblich reduzieren.',
    benefits: [
      'Faire Bewertung durch Experten',
      'Sofortige Verrechnung mit dem Auftragspreis',
      'Maximale Ersparnis für Sie',
      'Nachhaltige Wiederverwertung',
      'Transparente Wertermittlung',
      'Keine versteckten Kosten'
    ],
    process: [
      'Begutachtung vor Ort bei der Besichtigung',
      'Bewertung verwertbarer Gegenstände',
      'Transparente Aufstellung im Angebot',
      'Abzug vom Gesamtpreis',
      'Abtransport und Weiterverwertung',
      'Finale Abrechnung nach tatsächlichem Wert'
    ],
    features: ['Faire Bewertung', 'Sofortige Verrechnung', 'Maximale Ersparnis'],
    cta: {
      title: 'Wertermittlung anfragen',
      description: 'Lassen Sie den Wert Ihrer Gegenstände kostenlos ermitteln. Oft können wir die Entrümpelungskosten durch Wertanrechnung deutlich senken.'
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
