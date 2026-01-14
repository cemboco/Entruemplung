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
}

export const services: Service[] = [
  {
    slug: 'haushaltsaufloesung',
    icon: Home,
    title: 'Haushaltsauflösungen Stuttgart',
    shortDescription: 'Komplette Wohnungsauflösungen nach Todesfall, Umzug oder bei Pflegebedürftigkeit. Wir übernehmen die gesamte Abwicklung inklusive Verwertung, Entsorgung und besenreiner Übergabe.',
    fullDescription: 'Eine Haushaltsauflösung ist oft mit emotionalen Belastungen verbunden - sei es nach einem Todesfall, bei Umzug ins Pflegeheim oder bei einer notwendigen Verkleinerung. Wir von Serviceplus verstehen diese sensible Situation und bieten Ihnen professionelle Unterstützung in Stuttgart und Umgebung. Unser erfahrenes Team übernimmt die komplette Abwicklung: von der Bewertung verwertbarer Gegenstände über die fachgerechte Entsorgung bis zur besenreinen Übergabe der Immobilie.',
    intro: {
      forWhom: 'Unsere Haushaltsauflösungen richten sich an Angehörige nach einem Todesfall, Familien beim Umzug ins Pflegeheim, Erbengemeinschaften vor Immobilienverkauf und alle, die vor der Herausforderung einer kompletten Wohnungsauflösung stehen.',
      situations: [
        'Nach einem Todesfall: Einfühlsame Unterstützung in einer schweren Zeit',
        'Umzug ins Pflegeheim: Schnelle und diskrete Abwicklung',
        'Immobilienverkauf: Besenreine Übergabe für Verkauf oder Vermietung',
        'Verkleinerung: Übergang in eine kleinere Wohnung',
        'Umzug ins Ausland: Komplette Haushaltsabwicklung vor Abreise'
      ],
      emotional: 'Wir wissen, dass eine Haushaltsauflösung oft mehr ist als nur das Wegräumen von Gegenständen. Es sind Erinnerungen, Lebensgeschichten und emotionale Momente. Unser Team arbeitet mit Respekt, Einfühlungsvermögen und Diskretion. Wir nehmen Ihnen die organisatorische Last ab, damit Sie sich auf das Wesentliche konzentrieren können.'
    },
    whatWeOffer: {
      title: 'Unser Komplettservice für Ihre Haushaltsauflösung',
      description: 'Von der ersten Besichtigung bis zur besenreinen Übergabe übernehmen wir alle Schritte Ihrer Haushaltsauflösung. Professionell, zügig und zu fairen Festpreisen.',
      included: [
        'Kostenlose Vor-Ort-Besichtigung und Beratung in Stuttgart und Umgebung',
        'Detailliertes Festpreis-Angebot ohne versteckte Kosten',
        'Faire Bewertung und Anrechnung verwertbarer Gegenstände (Möbel, Antiquitäten, etc.)',
        'Professionelle Demontage von Möbeln und Einbauten',
        'Komplette Räumung aller Räume inklusive Keller, Dachboden und Garage',
        'Fachgerechte Trennung und Entsorgung nach gesetzlichen Vorgaben',
        'Umweltbewusste Verwertung - Recycling und Weitergabe an soziale Einrichtungen',
        'Besenreine Endreinigung oder optional schlüsselfertige Übergabe',
        'Flexible Terminplanung nach Ihren Bedürfnissen',
        'Diskrete Arbeitsweise und respektvoller Umgang mit persönlichen Gegenständen'
      ]
    },
    benefits: [
      'Komplette Abwicklung aus einer Hand - Sie haben nur einen Ansprechpartner',
      'Diskrete und respektvolle Durchführung in jeder Phase',
      'Termingerechte und besenreine Übergabe garantiert',
      'Wertanrechnung für gut erhaltene Gegenstände senkt Ihre Kosten',
      'Professionelle Entsorgung nach gesetzlichen Vorgaben',
      'Faire und transparente Festpreise ohne Nachforderungen',
      'Kurze Reaktionszeiten - oft noch in derselben Woche möglich',
      'Versicherter Transport und haftpflichtversichertes Team'
    ],
    process: [
      'Kostenlose Besichtigung und ausführliche Beratung vor Ort',
      'Faire Bewertung verwertbarer Gegenstände durch unsere Experten',
      'Transparentes Festpreis-Angebot mit detaillierter Aufstellung',
      'Terminabsprache nach Ihren Wünschen - auch kurzfristig möglich',
      'Professionelle Räumung durch unser geschultes und erfahrenes Personal',
      'Fachgerechte Trennung und umweltbewusste Entsorgung aller Materialien',
      'Besenreine Endreinigung und Übergabe der Räumlichkeiten'
    ],
    features: ['Komplette Abwicklung', 'Diskrete Durchführung', 'Termingerechte Übergabe'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Bad Cannstatt',
        'Vaihingen',
        'Degerloch',
        'Feuerbach',
        'Zuffenhausen',
        'Ludwigsburg',
        'Esslingen',
        'Böblingen',
        'Sindelfingen',
        'Leonberg',
        'Waiblingen'
      ],
      description: 'Als lokales Unternehmen kennen wir Stuttgart und die Region bestens. Wir sind schnell vor Ort, verstehen die örtlichen Gegebenheiten und haben ein Netzwerk an Partnern für Sonderfälle. Enge Treppenhäuser in Stuttgarter Altbauten, schwierige Parksituationen am Hang oder besondere Zugangsbedingungen - für uns keine Herausforderung. Unser Team ist täglich in Stuttgart und Umgebung unterwegs und kann oft kurzfristig, manchmal sogar am selben Tag, bei Ihnen sein.'
    },
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
    intro: {
      forWhom: 'Unsere Entrümpelungen sind ideal für Eigentümer und Mieter, die endlich wieder Platz schaffen möchten, Hausverwalter vor Neuvermietung, Erben mit vollgestellten Räumen und alle, die professionelle Hilfe beim Aufräumen benötigen.',
      situations: [
        'Vollgestellter Keller: Jahrelange Ansammlungen entfernen',
        'Überladener Dachboden: Platz schaffen und nutzbaren Raum gewinnen',
        'Vermüllte Garage: Wieder Platz fürs Auto schaffen',
        'Geerbte Immobilie: Unbekannte Gegenstände fachgerecht entsorgen',
        'Gartenhäuser und Schuppen: Alte Gartengeräte und Materialien entsorgen',
        'Firmenauflösung: Alte Lagerbestände und Betriebsmittel entfernen'
      ],
      emotional: 'Manchmal wächst einem das Chaos über den Kopf. Was jahrelang liegen geblieben ist, wird zur Last. Wir verstehen das und helfen Ihnen ohne Vorurteile. Unser Team packt an, wo Sie nicht mehr weiterkommen - professionell, diskret und ohne zu urteilen. Sie gewinnen nicht nur Raum, sondern auch Erleichterung.'
    },
    whatWeOffer: {
      title: 'Professionelle Entrümpelung für jeden Bedarf',
      description: 'Egal wie groß die Herausforderung - wir haben das richtige Equipment und die Erfahrung, um jeden Raum wieder nutzbar zu machen.',
      included: [
        'Kostenlose Besichtigung vor Ort mit ehrlicher Einschätzung',
        'Transparentes Festpreis-Angebot basierend auf Volumen und Aufwand',
        'Entrümpelung von Kellern, Dachböden, Garagen, Scheunen und allen anderen Räumen',
        'Auch schwer zugängliche Bereiche (enge Treppen, niedrige Decken, verwinkelte Räume)',
        'Professionelles Equipment: Schutzkleidung, Werkzeug, Transportmittel',
        'Sortierung vor Ort: Wertsachen, Recycling-Material, Sondermüll, Restmüll',
        'Fachgerechte Entsorgung nach gesetzlichen Vorgaben',
        'Umweltbewusste Verwertung - was möglich ist, wird recycelt',
        'Abschließende Grobreinigung der entrümpelten Räume',
        'Flexible Arbeitszeiten - auch abends und am Wochenende möglich'
      ]
    },
    benefits: [
      'Entrümpelung aller Räumlichkeiten und Objekte ohne Ausnahme',
      'Auch schwer zugängliche Bereiche mit speziellem Equipment',
      'Fachgerechte Entsorgung und professionelles Recycling',
      'Schnelle Terminvergabe, auch kurzfristig oder in Notfällen',
      'Professionelles Equipment für jede Situation',
      'Umweltgerechte Verwertung und Trennung aller Materialien',
      'Faire Festpreise ohne versteckte Zusatzkosten',
      'Versicherter Transport und haftpflichtversichertes Team'
    ],
    process: [
      'Unverbindliche Anfrage per Telefon, WhatsApp oder Online-Formular',
      'Kostenlose Besichtigung und ehrliche Angebotserstellung vor Ort',
      'Flexible Terminvereinbarung nach Ihrem Zeitplan',
      'Zügige und professionelle Entrümpelung durch erfahrenes Team',
      'Sortierung nach verwertbaren Materialien und fachgerechte Trennung',
      'Abschließende Grobreinigung der entrümpelten Räumlichkeiten'
    ],
    features: ['Alle Räumlichkeiten', 'Schwer zugängliche Bereiche', 'Fachgerechte Entsorgung'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Bad Cannstatt',
        'Feuerbach',
        'Vaihingen',
        'Esslingen',
        'Ludwigsburg',
        'Waiblingen',
        'Fellbach',
        'Kornwestheim'
      ],
      description: 'Stuttgart mit seinen Hanglagen und alten Gebäuden stellt besondere Anforderungen an Entrümpelungen. Wir kennen die Stuttgarter Architektur mit engen Treppenhäusern, niedrigen Kellern und verwinkelten Dachböden. Unser Team ist täglich in der Region unterwegs und kann oft noch in derselben Woche anrücken. Parkgenehmigungen, enge Gassen, steile Anstiege - für uns Routine, nicht Problem.'
    },
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
    intro: {
      forWhom: 'Unsere Messie-Räumungen sind für Betroffene selbst, Angehörige, die helfen möchten, Vermieter vor drohenden Problemen, Sozialdienste und Betreuungsstellen sowie Nachbarn, die diskret unterstützen wollen.',
      situations: [
        'Messie-Syndrom: Professionelle Hilfe ohne Vorurteile',
        'Vermüllte Wohnungen: Schritt für Schritt wieder bewohnbar machen',
        'Animal Hoarding: Spezielle Reinigung nach Tierhaltung',
        'Verwahrlosung im Alter: Einfühlsame Begleitung',
        'Drohende Räumungsklage: Schnelle Intervention',
        'Nachbarschaftsprobleme: Diskrete Lösung'
      ],
      emotional: 'Ein Messie-Syndrom ist keine Schande, sondern eine Herausforderung, die Hilfe verdient. Wir begegnen jedem Auftrag ohne Urteil und mit vollem Respekt. Unser Team ist geschult, versteht die psychologischen Hintergründe und arbeitet auf Wunsch eng mit Ihnen oder Beratungsstellen zusammen. Wir schaffen nicht nur Ordnung, sondern auch einen Neuanfang - diskret, einfühlsam und professionell.'
    },
    whatWeOffer: {
      title: 'Spezialisierte Messie-Räumung mit Einfühlungsvermögen',
      description: 'Wir bieten mehr als nur Entrümpelung - wir bieten einen sensiblen Neuanfang mit allem, was dazu gehört.',
      included: [
        'Vertrauliches Erstgespräch - telefonisch oder persönlich',
        'Diskrete Besichtigung zu einem Wunschtermin',
        'Individuelle Planung - Schritt für Schritt oder komplette Räumung',
        'Geschultes Personal mit Messie-Erfahrung und Einfühlungsvermögen',
        'Begleitung bei der Sortierung - wenn gewünscht',
        'Professionelle Geruchsbeseitigung und Desinfektion',
        'Spezialreinigung aller Oberflächen, Böden und Sanitäranlagen',
        'Behandlung gegen Ungeziefer, falls notwendig',
        'Zusammenarbeit mit Sozialdiensten und Therapeuten möglich',
        'Absolut diskrete Durchführung - keine auffälligen Firmenfahrzeuge'
      ]
    },
    benefits: [
      'Absolute Diskretion garantiert - Ihr Vertrauen ist uns wichtig',
      'Geschultes und erfahrenes Personal im Umgang mit Messie-Situationen',
      'Professionelle Geruchsbeseitigung und Spezialreinigung',
      'Einfühlsamer und respektvoller Umgang ohne Vorurteile',
      'Entsorgung nach gesetzlichen Vorgaben und Hygienestandards',
      'Möglichkeit der Begleitung durch Sozialdienste oder Therapeuten',
      'Flexible Vorgehensweise - in Ihrem Tempo oder als Kompletträumung',
      'Nachbetreuung und Empfehlungen für weitere Unterstützung'
    ],
    process: [
      'Vertrauliches Erstgespräch und sensible Beratung',
      'Diskrete Besichtigung nach Terminabsprache',
      'Individueller Räumungsplan mit Ihren Wünschen',
      'Behutsame Durchführung der Räumung Schritt für Schritt',
      'Spezialreinigung und professionelle Geruchsneutralisation',
      'Besenreine Übergabe oder weiterführende Sanierung nach Bedarf'
    ],
    features: ['Diskretion garantiert', 'Geschultes Personal', 'Geruchsbeseitigung'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Bad Cannstatt',
        'Vaihingen',
        'Feuerbach',
        'Zuffenhausen',
        'Möhringen',
        'Degerloch',
        'Esslingen',
        'Ludwigsburg',
        'Waiblingen',
        'Sindelfingen'
      ],
      description: 'Diskretion ist besonders in dicht besiedelten Stadtteilen wichtig. Wir kennen Stuttgart und arbeiten unauffällig. Keine auffälligen Firmenfahrzeuge, flexible Arbeitszeiten nach Ihren Bedürfnissen, Rücksicht auf Nachbarn. Unser Team kommt in ziviler Kleidung und behandelt jeden Auftrag streng vertraulich. Wir kooperieren auch mit lokalen Beratungsstellen und Sozialdiensten in Stuttgart.'
    },
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
