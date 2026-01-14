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
    title: 'Haushaltsauflösung in Stuttgart',
    shortDescription: 'Professionelle Wohnungsauflösung nach Todesfall, bei Umzug ins Pflegeheim oder Immobilienverkauf. Komplettservice mit Wertanrechnung, fachgerechter Entsorgung und besenreiner Übergabe in Stuttgart und Umgebung.',
    fullDescription: 'Eine Haushaltsauflösung in Stuttgart ist oft mehr als nur Entrümpelung. Nach einem Todesfall, beim Umzug ins betreute Wohnen oder bei der Auflösung eines Erbes stehen Angehörige vor einer emotional belastenden Aufgabe. Serviceplus begleitet Sie mit Erfahrung, Respekt und Einfühlungsvermögen durch diesen Prozess. Als etabliertes Unternehmen für Wohnungsauflösungen in Stuttgart und der Region übernehmen wir die komplette Abwicklung Ihrer Haushaltsauflösung - von der ersten Beratung über die Bewertung verwertbarer Gegenstände bis zur besenreinen Übergabe der Immobilie. Unser Team kennt die Stuttgarter Besonderheiten, arbeitet diskret und zuverlässig. Mit über zehn Jahren Erfahrung in der professionellen Nachlassauflösung verstehen wir die sensiblen Situationen unserer Kunden und bieten Lösungen, die entlasten statt zu belasten. Ob komplette Haushaltsauflösung, Entrümpelung einzelner Räume oder besenreine Übergabe für den Immobilienverkauf - wir sind Ihr Partner in Stuttgart.',
    intro: {
      forWhom: 'Unsere Haushaltsauflösungen in Stuttgart richten sich an Angehörige nach einem Todesfall in der Familie, Familien beim Umzug ins Pflegeheim oder betreute Wohnen, Erbengemeinschaften vor dem Immobilienverkauf, Hausverwaltungen bei Wohnungsübergabe, Senioren beim Wechsel in eine kleinere Wohnung sowie alle, die vor der Herausforderung einer kompletten Wohnungsauflösung stehen und professionelle Unterstützung benötigen.',
      situations: [
        'Haushaltsauflösung nach Todesfall - mit Respekt und Einfühlungsvermögen in einer schweren Zeit',
        'Umzug ins Pflegeheim oder betreutes Wohnen - schnelle und diskrete Wohnungsauflösung',
        'Nachlassauflösung für Erbengemeinschaften - faire Bewertung und zügige Abwicklung',
        'Immobilienverkauf vorbereiten - besenreine Übergabe für optimale Vermarktung',
        'Wohnungsverkleinerung im Alter - Übergang in eine kleinere Wohnung begleiten',
        'Umzug ins Ausland - komplette Haushaltsabwicklung und Entsorgung vor der Abreise',
        'Räumung bei Mieterwechsel - schnelle Objektfreimachung für Vermieter'
      ],
      emotional: 'Eine Haushaltsauflösung bedeutet oft Abschied. Abschied von einem geliebten Menschen, von einem Lebensabschnitt oder von vertrauten Räumen. In diesen Momenten sind es nicht nur Möbel und Gegenstände, die bewegt werden - es sind Erinnerungen, Geschichten und emotionale Werte. Unser Team von Serviceplus versteht diese besondere Situation. Wir arbeiten nicht nur professionell und zügig, sondern vor allem mit Respekt, Einfühlungsvermögen und Diskretion. Wir nehmen uns Zeit für Ihre Anliegen, gehen behutsam mit persönlichen Gegenständen um und schaffen einen Raum, in dem Sie sich sicher fühlen. Die organisatorische und körperliche Last nehmen wir Ihnen ab, damit Sie sich auf das Wesentliche konzentrieren können - auf die Verarbeitung, auf wichtige Entscheidungen oder einfach auf sich selbst.'
    },
    whatWeOffer: {
      title: 'Unser Komplettservice für Haushaltsauflösungen in Stuttgart',
      description: 'Von der kostenlosen Erstberatung bis zur schlüsselfertigen Übergabe übernehmen wir jeden Schritt Ihrer Wohnungsauflösung. Mit Erfahrung, Transparenz und fairen Festpreisen - so funktioniert professionelle Haushaltsauflösung in Stuttgart.',
      included: [
        'Kostenlose Vor-Ort-Besichtigung und ausführliche Beratung in ganz Stuttgart und Umgebung',
        'Detailliertes Festpreis-Angebot mit transparenter Aufstellung aller Kosten',
        'Faire Bewertung und Wertanrechnung für verwertbare Gegenstände - Möbel, Antiquitäten, Hausrat',
        'Professionelle Demontage von Einbauküchen, Möbeln und fest installierten Einbauten',
        'Komplette Räumung aller Wohn- und Nebenräume inklusive Keller, Dachboden und Garage',
        'Fachgerechte Sortierung und Trennung nach Verwertbarkeit und Entsorgungsart',
        'Umweltbewusste Entsorgung nach gesetzlichen Vorgaben mit Recycling-Nachweis',
        'Weitergabe brauchbarer Gegenstände an soziale Einrichtungen und Bedürftige',
        'Besenreine Endreinigung aller Räume oder optional schlüsselfertige Übergabe',
        'Flexible Terminplanung - auch kurzfristig und am Wochenende möglich',
        'Diskrete Arbeitsweise ohne auffällige Firmenbeschriftung auf Wunsch',
        'Respektvoller Umgang mit persönlichen Gegenständen und Erinnerungsstücken',
        'Koordination mit Behörden, Vermietern und Maklern auf Wunsch',
        'Fotodokumentation vorher/nachher für Ihre Unterlagen'
      ]
    },
    benefits: [
      'Alles aus einer Hand - ein Ansprechpartner für die gesamte Haushaltsauflösung',
      'Über 10 Jahre Erfahrung mit Wohnungsauflösungen in Stuttgart und Region',
      'Diskrete und respektvolle Durchführung in jeder Phase der Auflösung',
      'Termingerechte und zuverlässige Übergabe - besenrein oder schlüsselfertig',
      'Wertanrechnung senkt Ihre Kosten erheblich - oft Nulltarif oder Auszahlung möglich',
      'Professionelle Entsorgung nach aktuellen gesetzlichen Vorgaben',
      'Faire und transparente Festpreise ohne versteckte Zusatzkosten oder Nachforderungen',
      'Kurze Reaktionszeiten - häufig noch in derselben Woche Termine verfügbar',
      'Versicherter Transport und vollständig haftpflichtversichertes Team',
      'Lokale Expertise für Stuttgarter Besonderheiten - Altbauten, Hanglagen, Parksituation',
      'Nachhaltige Arbeitsweise durch Recycling und Weitergabe brauchbarer Gegenstände',
      'Kostenlose Beratung zu steuerlichen Absetzbarkeit und Fördermöglichkeiten'
    ],
    process: [
      'Kostenlose Vor-Ort-Besichtigung mit ausführlicher Beratung zu Ablauf und Möglichkeiten',
      'Professionelle Bewertung verwertbarer Gegenstände durch erfahrene Experten vor Ort',
      'Transparentes Festpreis-Angebot mit detaillierter Aufstellung und Wertanrechnung',
      'Flexible Terminabsprache nach Ihren Wünschen - auch kurzfristig und am Wochenende',
      'Sorgfältige Sortierung wertvoller Gegenstände und Erinnerungsstücke gemeinsam mit Ihnen',
      'Professionelle Räumung durch unser geschultes, erfahrenes und versichertes Personal',
      'Fachgerechte Trennung und umweltbewusste Entsorgung aller Materialien mit Nachweis',
      'Besenreine Endreinigung oder optional schlüsselfertige Übergabe der Immobilie',
      'Abschließende Dokumentation und Übergabeprotokoll für Vermieter oder Käufer'
    ],
    features: ['Komplette Abwicklung', 'Diskrete Durchführung', 'Termingerechte Übergabe'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Stuttgart-Nord',
        'Bad Cannstatt',
        'Vaihingen',
        'Degerloch',
        'Feuerbach',
        'Zuffenhausen',
        'Möhringen',
        'Hedelfingen',
        'Plieningen',
        'Ludwigsburg',
        'Esslingen',
        'Böblingen',
        'Sindelfingen',
        'Leonberg',
        'Waiblingen',
        'Fellbach',
        'Kornwestheim',
        'Filderstadt'
      ],
      description: 'Als etabliertes Stuttgarter Unternehmen für Haushaltsauflösungen kennen wir die Region wie unsere Westentasche. Die Besonderheiten der Stuttgarter Architektur - enge Treppenhäuser in Gründerzeit-Altbauten, steile Hanglagen in Degerloch oder am Killesberg, verwinkelte Kellergeschosse und historische Gebäudestrukturen - stellen uns vor keine Probleme. Wir wissen, wo man kurzfristig Parkgenehmigungen beantragen muss, kennen die besten Zufahrtswege und haben Erfahrung mit den örtlichen Entsorgungsbetrieben und Wertstoffhöfen. Unser Team ist täglich in Stuttgart und den umliegenden Landkreisen unterwegs und kann daher oft sehr kurzfristig reagieren. In dringenden Fällen sind Termine manchmal sogar noch am selben Tag möglich. Durch unser lokales Netzwerk aus Partnern, sozialen Einrichtungen und Verwertungsbetrieben können wir Ihnen faire Konditionen bieten und gleichzeitig nachhaltig arbeiten. Wir verstehen die Stuttgarter Mentalität, sprechen die Sprache unserer Kunden und wissen, was in sensiblen Situationen wichtig ist - Zuverlässigkeit, Diskretion und ein vertrauensvolles Miteinander.'
    },
    cta: {
      title: 'Kostenlose Erstberatung für Ihre Haushaltsauflösung',
      description: 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir besichtigen die Räumlichkeiten kostenlos und erstellen Ihnen ein transparentes Festpreis-Angebot für Ihre Wohnungsauflösung in Stuttgart.'
    },
    additionalContent: {
      title: 'Wissenswert zur Haushaltsauflösung in Stuttgart',
      sections: [
        {
          heading: 'Was kostet eine Haushaltsauflösung in Stuttgart?',
          content: 'Die Kosten einer Haushaltsauflösung in Stuttgart hängen von verschiedenen Faktoren ab: Größe der Wohnung, Menge des Hausrats, Zugänglichkeit der Räume und Verwertbarkeit der Gegenstände. Eine 3-Zimmer-Wohnung kostet durchschnittlich zwischen 800 und 2.500 Euro. Wichtig ist die Wertanrechnung: Gut erhaltene Möbel, Antiquitäten oder wertvoller Hausrat werden fair bewertet und vom Gesamtpreis abgezogen. In vielen Fällen reduzieren sich die Kosten dadurch erheblich - manchmal entstehen sogar gar keine Kosten oder es wird eine Auszahlung fällig. Wir erstellen nach der kostenlosen Besichtigung ein transparentes Festpreis-Angebot, sodass Sie genau wissen, was auf Sie zukommt. Keine versteckten Kosten, keine Nachforderungen.'
        },
        {
          heading: 'Wie läuft eine professionelle Wohnungsauflösung ab?',
          content: 'Eine professionelle Haushaltsauflösung in Stuttgart beginnt immer mit einer kostenlosen Besichtigung vor Ort. Dabei schauen wir uns alle Räume an, besprechen Ihre Wünsche und Anforderungen und bewerten verwertbare Gegenstände. Danach erhalten Sie ein detailliertes Festpreis-Angebot. Nach Ihrer Beauftragung vereinbaren wir einen Termin - oft schon in derselben Woche. Am Räumungstag kommt unser Team pünktlich, arbeitet systematisch durch alle Räume, sortiert dabei wichtige Gegenstände aus und kümmert sich um den fachgerechten Abtransport. Wertvolle Stücke werden separat behandelt, Erinnerungsstücke beiseite gelegt. Am Ende übergeben wir die Wohnung besenrein oder auf Wunsch schlüsselfertig. Die gesamte Abwicklung dauert je nach Größe zwischen einem halben und zwei Tagen.'
        },
        {
          heading: 'Haushaltsauflösung nach Todesfall - Was ist zu beachten?',
          content: 'Nach einem Todesfall steht die Haushaltsauflösung oft unter emotionalem und zeitlichem Druck. Besonders wichtig: Nehmen Sie sich Zeit für die Entscheidung, welche Gegenstände Sie behalten möchten. Wir unterstützen Sie dabei mit Geduld und Verständnis. Rechtlich sollten Sie vor der Auflösung klären: Gibt es ein Testament, wer sind die Erben, gibt es Auflagen zur Wohnungsübergabe? Wertvolle Gegenstände sollten zunächst zurückgestellt werden. Unser Team kennt diese sensiblen Situationen und arbeitet mit Respekt vor der Lebensgeschichte des Verstorbenen. Wir nehmen uns Zeit, gehen behutsam vor und respektieren emotionale Momente. Viele Angehörige schätzen unsere Erfahrung in diesen schweren Zeiten.'
        },
        {
          heading: 'Kann man eine Haushaltsauflösung steuerlich absetzen?',
          content: 'Ja, die Kosten einer Haushaltsauflösung können unter bestimmten Umständen steuerlich geltend gemacht werden. Bei einer Erbschaft lassen sich die Kosten als Nachlassverbindlichkeiten von der Erbschaftssteuer abziehen. Wenn die Auflösung aufgrund eines Umzugs in ein Pflegeheim oder betreutes Wohnen erfolgt, können die Kosten als außergewöhnliche Belastungen oder haushaltsnahe Dienstleistungen abgesetzt werden. Wichtig ist eine ordentliche Rechnung mit ausgewiesener Mehrwertsteuer und detaillierter Leistungsbeschreibung - genau das liefern wir Ihnen. Wir empfehlen, die steuerliche Absetzbarkeit im Vorfeld mit Ihrem Steuerberater zu besprechen. Gerne erstellen wir die Rechnung so, dass sie alle erforderlichen Angaben für das Finanzamt enthält.'
        }
      ]
    },
    faq: [
      {
        question: 'Wie schnell können Sie eine Haushaltsauflösung in Stuttgart durchführen?',
        answer: 'In den meisten Fällen können wir innerhalb einer Woche nach Ihrer Anfrage mit der Haushaltsauflösung beginnen. Bei dringenden Fällen - etwa wenn ein Räumungstermin unmittelbar bevorsteht - sind oft auch kurzfristigere Termine möglich, manchmal sogar innerhalb von 2-3 Tagen. Die eigentliche Räumung dauert je nach Wohnungsgröße zwischen einem halben Tag und zwei Tagen. Kontaktieren Sie uns einfach, und wir finden gemeinsam einen passenden Termin.'
      },
      {
        question: 'Was passiert mit den Möbeln und dem Hausrat?',
        answer: 'Wir sortieren alle Gegenstände nach Verwertbarkeit. Gut erhaltene Möbel und brauchbarer Hausrat werden entweder an Aufkäufer vermittelt, an soziale Einrichtungen weitergegeben oder auf dem Gebrauchtwarenmarkt verkauft. Der Wert wird Ihnen angerechnet. Wertlose oder beschädigte Gegenstände werden fachgerecht nach gesetzlichen Vorgaben entsorgt und professionell recycelt. Sie können vorab festlegen, wenn bestimmte Dinge gesondert behandelt werden sollen.'
      },
      {
        question: 'Müssen wir bei der Haushaltsauflösung anwesend sein?',
        answer: 'Das ist nicht zwingend erforderlich, aber oft empfehlenswert - zumindest zu Beginn. Bei der ersten Besichtigung sollte jemand dabei sein, um wichtige Details zu besprechen. Während der eigentlichen Räumung können Sie selbst entscheiden: Viele Kunden möchten dabei sein, um letzte persönliche Gegenstände zu sichern. Andere ziehen es vor, sich nicht der emotionalen Belastung auszusetzen und überlassen uns die Arbeit komplett. Beides ist möglich - wir richten uns nach Ihren Wünschen.'
      },
      {
        question: 'Wie wird der Wert der Gegenstände ermittelt?',
        answer: 'Unsere Mitarbeiter haben langjährige Erfahrung in der Bewertung von Hausrat, Möbeln und Wertgegenständen. Wir orientieren uns an aktuellen Marktpreisen für Gebrauchtware, berücksichtigen Zustand, Alter, Marke und Nachfrage. Bei besonders wertvollen Stücken wie Antiquitäten oder Kunst können wir bei Bedarf Experten hinzuziehen. Die Bewertung erfolgt transparent und nachvollziehbar - jeder bewertete Gegenstand wird in unserem Angebot aufgeführt. Sie können die Bewertung jederzeit nachvollziehen und bei Bedarf auch diskutieren.'
      },
      {
        question: 'Was ist eine besenreine Übergabe?',
        answer: 'Besenrein bedeutet, dass die Wohnung vollständig geräumt und grob gereinigt ist - also in einem Zustand, wie man ihn mit einem Besen erreichen kann. Alle Möbel und Gegenstände sind entfernt, grober Schmutz ist beseitigt, die Räume sind frei zugänglich. Eine besenreine Übergabe ist der Standard bei den meisten Mietverträgen. Auf Wunsch bieten wir auch eine schlüsselfertige Übergabe an - mit gründlicher Endreinigung, kleinen Ausbesserungen und vollständig vermietbarem Zustand.'
      },
      {
        question: 'Übernehmen Sie auch die Entsorgung von Sondermüll?',
        answer: 'Ja, wir kümmern uns um die fachgerechte Entsorgung aller Arten von Hausrat, einschließlich Sondermüll wie alte Farben, Lacke, Chemikalien, Elektrogeräte oder Batterien. Wir trennen professionell nach gesetzlichen Vorgaben und bringen alles zu den entsprechenden Entsorgungsstellen. Sie müssen sich um nichts kümmern - wir haben die nötigen Genehmigungen und Kontakte zu allen relevanten Entsorgungsbetrieben in Stuttgart.'
      },
      {
        question: 'Arbeiten Sie auch am Wochenende?',
        answer: 'Ja, wir bieten nach Absprache auch Termine am Samstag an. Dies ist besonders praktisch, wenn Sie unter der Woche beruflich eingespannt sind oder wenn die Haushaltsauflösung diskret außerhalb der normalen Geschäftszeiten erfolgen soll. Samstags-Termine sollten rechtzeitig vereinbart werden, da diese Zeitfenster oft stark nachgefragt sind.'
      },
      {
        question: 'Was unterscheidet Sie von anderen Entrümpelungsfirmen in Stuttgart?',
        answer: 'Als lokales Unternehmen mit über 10 Jahren Erfahrung kennen wir Stuttgart und die Region genau. Wir arbeiten nicht nur professionell und zuverlässig, sondern vor allem mit Respekt und Einfühlungsvermögen in sensiblen Situationen. Unsere Preise sind fair und transparent, die Wertanrechnung ist ehrlich, und wir legen Wert auf Nachhaltigkeit. Viele Kunden schätzen unsere persönliche Betreuung, kurze Reaktionszeiten und die Tatsache, dass wir Termine verbindlich einhalten. Sie haben einen festen Ansprechpartner vom ersten Kontakt bis zur Übergabe.'
      }
    ],
    relatedServices: ['entruempelung', 'wertanrechnung', 'immobilienraemung']
  },
  {
    slug: 'entruempelung',
    icon: Trash2,
    title: 'Entrümpelung in Stuttgart',
    shortDescription: 'Professionelle Räumungsfirma für Wohnungen, Keller, Dachböden und Garagen in Stuttgart. Schnelle Entrümpelung mit Festpreis, Wertanrechnung und fachgerechter Entsorgung.',
    fullDescription: 'Eine Entrümpelung in Stuttgart erfordert lokale Expertise und professionelles Equipment. Ob vollgestellter Keller in Bad Cannstatt, zugewachsener Dachboden in Degerloch oder überladene Garage in Vaihingen - Serviceplus ist Ihre erfahrene Räumungsfirma für alle Stadtteile Stuttgarts. Mit über zehn Jahren Erfahrung kennen wir die Herausforderungen Stuttgarter Immobilien: enge Treppenhäuser in Altbauten, steile Hanglage, schwierige Parksituationen. Unser Team räumt auf, wo andere aufgeben - schnell, gründlich und zu fairen Festpreisen. Von der Wohnungsentrümpelung über Kellerräumung bis zur Gewerbeentrümpelung übernehmen wir alle Arten von Räumungen in Stuttgart und Umgebung. Dabei trennen wir professionell nach verwertbaren Materialien, entsorgen fachgerecht und rechnen Wertsachen fair an. Das Ergebnis: Wieder nutzbarer Raum und spürbare Erleichterung für Sie.',
    intro: {
      forWhom: 'Unsere Entrümpelungen in Stuttgart richten sich an Eigentümer und Mieter, die wieder Ordnung schaffen möchten, Hausverwalter vor Neuvermietung oder Verkauf, Erbengemeinschaften mit vollgestellten Immobilien, Gewerbetreibende bei Geschäftsaufgabe sowie alle, die professionelle Hilfe bei Räumungsarbeiten benötigen.',
      situations: [
        'Kellenentrümpelung - jahrelange Ansammlungen endlich loswerden',
        'Dachbodenräumung - Platz schaffen für Wohnraumerweiterung',
        'Garagenentrümpelung - wieder Stellplatz fürs Fahrzeug gewinnen',
        'Wohnungsentrümpelung - nach Messie-Situation oder Verwahrlosung',
        'Geerbte Immobilie räumen - unbekannte Gegenstände fachgerecht entsorgen',
        'Schuppen und Gartenhäuser - alte Materialien und Geräte entfernen',
        'Betriebsräumung - Lagerbestände und Inventar bei Geschäftsaufgabe'
      ],
      emotional: 'Chaos kann erdrückend sein. Was über Jahre gewachsen ist, wird zur mentalen und räumlichen Last. Wir verstehen das - ohne zu urteilen, ohne Vorwürfe. Unser Team packt an, sortiert systematisch und schafft wieder Ordnung. Sie gewinnen nicht nur physischen Raum zurück, sondern vor allem Freiheit und Erleichterung. Viele Kunden berichten uns, wie befreiend der Moment ist, wenn der letzte LKW abfährt und die Räume endlich leer sind.'
    },
    whatWeOffer: {
      title: 'Komplettservice Entrümpelung Stuttgart',
      description: 'Von schwierigen Kellerräumungen bis zu großflächigen Gewerbeentrümpelungen - wir haben das Equipment, die Erfahrung und das Team für jeden Auftrag in Stuttgart.',
      included: [
        'Kostenlose Vor-Ort-Besichtigung mit realistischer Aufwandseinschätzung',
        'Transparentes Festpreis-Angebot ohne versteckte Zusatzkosten',
        'Entrümpelung aller Räumlichkeiten - Keller, Dachboden, Garage, Schuppen, Wohnungen',
        'Auch extreme Fälle und stark vermüllte Objekte',
        'Schwer zugängliche Bereiche mit Spezialequipment - enge Treppen, niedrige Decken, verwinkelte Zugänge',
        'Professionelle Schutzausrüstung bei gesundheitsgefährdenden Situationen',
        'Vor-Ort-Sortierung nach Wertsachen, Recycling-Material, Sondermüll und Restmüll',
        'Wertanrechnung für verwertbare Gegenstände senkt Ihre Kosten',
        'Fachgerechte Entsorgung nach gesetzlichen Vorgaben mit Nachweisen',
        'Umweltbewusstes Recycling - Wiederverwertung wo möglich',
        'Abschließende Grobreinigung der entrümpelten Räume',
        'Flexible Arbeitszeiten - auch abends und samstags'
      ]
    },
    benefits: [
      'Über 10 Jahre Erfahrung mit Entrümpelungen in Stuttgart und Region',
      'Alle Räumlichkeiten ohne Ausnahme - auch extreme Situationen',
      'Lokale Expertise für Stuttgarter Altbauten, Hanglagen und enge Verhältnisse',
      'Schnelle Terminvergabe - oft noch in derselben Woche',
      'Professionelles Equipment für jeden Schwierigkeitsgrad',
      'Fachgerechte Entsorgung und umweltbewusstes Recycling',
      'Faire Festpreise mit Wertanrechnung',
      'Diskrete Arbeitsweise auf Wunsch',
      'Vollständig versichertes und geschultes Personal',
      'Ein Ansprechpartner für alles - von Besichtigung bis Übergabe'
    ],
    process: [
      'Kontaktaufnahme per Telefon, WhatsApp oder Online-Formular',
      'Kostenlose Besichtigung vor Ort in ganz Stuttgart',
      'Transparente Angebotserstellung mit Festpreis und Wertanrechnung',
      'Flexible Terminvereinbarung nach Ihren Bedürfnissen',
      'Professionelle Entrümpelung durch erfahrenes Team',
      'Sortierung und fachgerechte Trennung aller Materialien',
      'Umweltgerechte Entsorgung mit Nachweisen',
      'Abschließende Grobreinigung und Übergabe'
    ],
    features: ['Alle Räumlichkeiten', 'Schwer zugängliche Bereiche', 'Fachgerechte Entsorgung'],
    localRelevance: {
      areas: [
        'Stuttgart-Mitte',
        'Stuttgart-West',
        'Stuttgart-Ost',
        'Stuttgart-Süd',
        'Stuttgart-Nord',
        'Bad Cannstatt',
        'Feuerbach',
        'Vaihingen',
        'Degerloch',
        'Möhringen',
        'Zuffenhausen',
        'Esslingen',
        'Ludwigsburg',
        'Waiblingen',
        'Fellbach',
        'Sindelfingen'
      ],
      description: 'Stuttgart stellt besondere Anforderungen an Entrümpelungen. Die Hanglage in Degerloch und am Killesberg, enge Treppenhäuser in Gründerzeit-Altbauten von Stuttgart-West, verwinkelte Keller in Bad Cannstatt - wir kennen diese Herausforderungen aus hunderten Einsätzen. Unser Team weiß, wo man kurzfristig Parkgenehmigungen beantragen muss, welche Zufahrtswege praktikabel sind und wie man in historischen Gebäuden arbeitet, ohne Schaden anzurichten. Täglich sind wir in Stuttgart und den umliegenden Gemeinden unterwegs. Das ermöglicht uns kurze Reaktionszeiten - oft können wir noch in derselben Woche anrücken. Durch unser Netzwerk lokaler Entsorgungsbetriebe und Verwertungsstellen arbeiten wir effizient und können Ihnen faire Konditionen bieten.'
    },
    cta: {
      title: 'Kostenlose Erstberatung für Ihre Entrümpelung',
      description: 'Kontaktieren Sie uns für ein unverbindliches Gespräch und kostenloses Angebot. Wir besichtigen vor Ort, bewerten den Aufwand und erstellen einen transparenten Festpreis.'
    },
    additionalContent: {
      title: 'Wichtiges zur Entrümpelung in Stuttgart',
      sections: [
        {
          heading: 'Was kostet eine Entrümpelung in Stuttgart?',
          content: 'Die Kosten einer Entrümpelung hängen von mehreren Faktoren ab: Volumen des Entrümpelungsguts, Zugänglichkeit der Räume, Stockwerk, Entsorgungsaufwand und Verwertbarkeit von Gegenständen. Ein vollgestellter Keller kostet durchschnittlich 400-800 Euro, ein Dachboden 300-600 Euro, eine komplette Wohnungsentrümpelung je nach Größe 800-3000 Euro. Entscheidend ist die Wertanrechnung: Verwertbare Möbel, Werkzeuge, Elektrogeräte oder Metalle werden fair bewertet und vom Preis abgezogen. So reduzieren sich die Entrümpelungskosten oft erheblich. Wir erstellen nach der kostenlosen Besichtigung ein verbindliches Festpreis-Angebot ohne Nachforderungen.'
        },
        {
          heading: 'Wann ist eine professionelle Entrümpelung sinnvoll?',
          content: 'Eine professionelle Entrümpelung lohnt sich immer dann, wenn der Aufwand in Eigenregie unverhältnismäßig wäre: bei großen Mengen, schwer zu transportierenden Gegenständen, Sondermüll, fehlendem Transportmittel oder körperlichen Einschränkungen. Auch zeitlich macht es oft Sinn - was Sie über Wochen in Eigenarbeit schaffen würden, erledigen wir an einem Tag. Gerade bei Erbschaften, Haushaltsauflösungen oder Immobilienverkauf ist Tempo gefragt. Zudem kennen wir die gesetzlichen Vorgaben für Entsorgung und Recycling, besitzen die nötigen Genehmigungen und arbeiten versichert. Das gibt Ihnen Rechtssicherheit und schützt vor Haftungsrisiken.'
        },
        {
          heading: 'Wie wird bei der Entrümpelung sortiert und entsorgt?',
          content: 'Professionelle Entrümpelung bedeutet fachgerechte Sortierung. Wir trennen vor Ort nach: verwertbaren Gegenständen (werden bewertet und angerechnet), Recycling-Material (Metall, Papier, Glas, Kunststoff), Sondermüll (Farben, Chemikalien, Elektrogeräte) und Restmüll. Jede Kategorie wird separat transportiert und den entsprechenden Verwertungs- oder Entsorgungsstellen zugeführt. Dabei dokumentieren wir die ordnungsgemäße Entsorgung. Brauchbare Gegenstände ohne Marktwert geben wir an soziale Einrichtungen weiter. Diese systematische Arbeitsweise ist nicht nur gesetzlich vorgeschrieben, sondern auch ökologisch sinnvoll und spart Entsorgungskosten.'
        },
        {
          heading: 'Entrümpelung in Stuttgarter Altbauten - was ist zu beachten?',
          content: 'Altbauten in Stuttgart stellen besondere Anforderungen an Entrümplungen: Enge, steile Treppenhäuser ohne Aufzug erfordern körperliche Fitness und Geschick. Historische Bausubstanz muss geschont werden - Treppengeländer, Wände, Böden dürfen nicht beschädigt werden. Die Statik alter Holzböden setzt Grenzen für schwere Lasten. Parkplätze sind oft rar und Halteverbot muss beantragt werden. Wir haben Erfahrung mit diesen Herausforderungen: Wir arbeiten mit Schutzmaßnahmen für Wände und Böden, nutzen Tragehilfen für enge Wendeltreppen, kalkulieren realistisch Zeitaufwand und Personalbedarf und kümmern uns um Parkgenehmigungen. So verläuft die Entrümpelung auch in denkmalgeschützten Stuttgarter Gebäuden reibungslos.'
        }
      ]
    },
    faq: [
      {
        question: 'Wie schnell können Sie eine Entrümpelung in Stuttgart durchführen?',
        answer: 'In den meisten Fällen können wir innerhalb von 3-5 Werktagen nach Ihrer Anfrage mit der Entrümpelung beginnen. Bei dringenden Fällen sind auch kurzfristigere Termine möglich. Die eigentliche Entrümpelung dauert je nach Umfang zwischen wenigen Stunden und zwei Tagen. Kontaktieren Sie uns für eine realistische Einschätzung Ihres konkreten Falls.'
      },
      {
        question: 'Übernehmen Sie auch Entrümpelungen in höheren Stockwerken ohne Aufzug?',
        answer: 'Ja, selbstverständlich. Wir sind auf Altbauten ohne Aufzug spezialisiert. Unser Team ist trainiert für körperlich anspruchsvolle Arbeiten und nutzt Tragehilfen für enge Treppenhäuser. Die Stockwerkshöhe fließt natürlich in die Preiskalkulation ein, aber grundsätzlich übernehmen wir Entrümpelungen in jedem Stockwerk.'
      },
      {
        question: 'Was passiert mit brauchbaren Gegenständen bei der Entrümpelung?',
        answer: 'Brauchbare Gegenstände werden von uns bewertet und vom Entrümpelungspreis abgezogen. Je nach Zustand und Marktwert verkaufen wir sie an Aufkäufer, vermitteln sie an Sozialkaufhäuser oder geben sie an gemeinnützige Organisationen weiter. Diese Wertanrechnung senkt Ihre Kosten erheblich. In manchen Fällen übersteigt der Wert sogar die Entrümpelungskosten - dann zahlen wir Ihnen die Differenz aus.'
      },
      {
        question: 'Können Sie auch Sondermüll und Schadstoffe entsorgen?',
        answer: 'Ja, wir haben die erforderlichen Genehmigungen und Kontakte zu allen relevanten Entsorgungsfachmäßen in Stuttgart. Ob alte Farben, Lacke, Chemikalien, Asbest, Elektroschrott oder andere Schadstoffe - wir kümmern uns um die fachgerechte und gesetzeskonforme Entsorgung. Das gibt Ihnen Rechtssicherheit und schützt die Umwelt.'
      },
      {
        question: 'Wie läuft die Preisfindung bei einer Entrümpelung ab?',
        answer: 'Nach Ihrer Kontaktaufnahme besichtigen wir das Objekt kostenlos vor Ort. Dabei erfassen wir Volumen, Zugänglichkeit, besondere Herausforderungen und bewerten verwertbare Gegenstände. Auf dieser Basis erstellen wir ein transparentes Festpreis-Angebot. Dieses beinhaltet alle Leistungen - Arbeitskräfte, Transport, Entsorgung, abzüglich der Wertanrechnung. Sie wissen also genau, was auf Sie zukommt. Nachforderungen gibt es bei uns nicht.'
      },
      {
        question: 'Muss ich bei der Entrümpelung anwesend sein?',
        answer: 'Bei der Besichtigung sollte jemand anwesend sein, um uns Zugang zu gewähren und wichtige Fragen zu klären. Bei der eigentlichen Entrümpelung ist Ihre Anwesenheit nicht zwingend erforderlich, wenn Sie uns vertrauen und vorab geklärt ist, was entsorgt werden soll. Viele Kunden ziehen es vor, nicht dabei zu sein. Andere möchten persönlich sicherstellen, dass nichts Wichtiges versehentlich entsorgt wird. Beides ist möglich.'
      },
      {
        question: 'Bieten Sie auch Entrümpelungen am Wochenende an?',
        answer: 'Ja, nach Absprache führen wir Entrümpelungen auch samstags durch. Dies ist besonders praktisch für Berufstätige oder wenn die Entrümpelung möglichst unauffällig erfolgen soll. Samstags-Termine sollten Sie rechtzeitig anfragen, da die Nachfrage hoch ist.'
      }
    ],
    relatedServices: ['keller-dachboden', 'haushaltsaufloesung', 'wertanrechnung']
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
    },
    additionalContent: {
      title: 'Wissenswertes zur Messie-Wohnungsräumung',
      sections: [
        {
          heading: 'Was ist das Messie-Syndrom?',
          content: 'Das Messie-Syndrom (von englisch "mess" = Unordnung) bezeichnet ein komplexes Verhaltensmuster, bei dem Betroffene Schwierigkeiten haben, Ordnung zu halten und sich von Gegenständen zu trennen. Die Wohnung füllt sich zunehmend mit Dingen, Müll wird nicht entsorgt, Hygiene vernachlässigt. Oft ist das Syndrom Folge oder Begleiter psychischer Belastungen wie Depressionen, Traumata oder Zwangsstörungen. Wichtig zu wissen: Es ist keine Faulheit oder Charakterschwäche, sondern eine Erkrankung, die professionelle Hilfe benötigt. Die Räumung einer Messie-Wohnung ist daher nur ein erster Schritt - psychologische Begleitung ist essentiell für nachhaltigen Erfolg.'
        },
        {
          heading: 'Wie läuft eine diskrete Messie-Räumung ab?',
          content: 'Diskretion hat bei uns oberste Priorität. Wir kommen in neutralen Fahrzeugen ohne Firmenbeschriftung und in Zivilkleidung. Termine legen wir nach Ihren Wünschen - auch zu Zeiten, wenn Nachbarn nicht da sind. Die Räumung erfolgt schrittweise oder komplett, je nach Ihrem Wunsch und Ihrer Belastbarkeit. Auf Wunsch sortieren wir gemeinsam mit Ihnen, um wichtige Gegenstände zu sichern. Bei starker Vermüllung arbeiten wir mit Schutzausrüstung, bei Geruchsbelastung setzen wir professionelle Neutralisatoren ein. Alles geschieht vertraulich - wir behandeln jeden Fall mit Respekt und Verschwiegenheit.'
        },
        {
          heading: 'Was kostet eine Messie-Wohnungsräumung in Stuttgart?',
          content: 'Die Kosten variieren je nach Grad der Vermüllung, Wohnungsgröße und Zusatzleistungen wie Desinfektion oder Geruchsbeseitigung. Eine leichte Messie-Situation in einer 2-Zimmer-Wohnung beginnt bei etwa 1.500 Euro. Mittelschwere Fälle kosten 2.500-4.000 Euro, extreme Fälle mit Geruchsbeseitigung, Desinfektion und Ungezieferbehandlung können 5.000-8.000 Euro oder mehr erreichen. Wir erstellen nach vertraulicher Besichtigung ein individuelles Angebot. Oft gibt es Unterstützungsmöglichkeiten durch Sozialämter, Krankenkassen oder Betreuungsstellen - wir beraten Sie gern dazu.'
        },
        {
          heading: 'Arbeiten Sie mit Therapeuten und Beratungsstellen zusammen?',
          content: 'Ja, auf Wunsch arbeiten wir eng mit therapeutischen Einrichtungen, Sozialberatungsstellen und Betreuern zusammen. Die Räumung allein löst das Problem oft nicht nachhaltig - psychologische Begleitung ist wichtig. Wir haben Kontakte zu Messie-Selbsthilfegruppen und Beratungsstellen in Stuttgart und können Empfehlungen aussprechen. Bei der Räumung selbst können Betreuer oder Therapeuten auf Wunsch anwesend sein. Unser Ziel ist nicht nur eine saubere Wohnung, sondern ein Neuanfang mit Perspektive.'
        }
      ]
    },
    faq: [
      {
        question: 'Wie diskret arbeiten Sie wirklich bei Messie-Räumungen?',
        answer: 'Diskretion ist für uns selbstverständlich. Wir kommen in neutralen Fahrzeugen ohne Firmenbeschriftung, arbeiten in Zivilkleidung und vereinbaren Termine nach Ihren Wünschen. Nachbarn erfahren nichts vom Grund unseres Einsatzes. Wir tragen nichts offen durch Treppenhäuser, sondern nutzen Säcke und geschlossene Container. Unsere Mitarbeiter sind geschult, vertraulich zu arbeiten und respektvoll zu kommunizieren.'
      },
      {
        question: 'Wie gehen Sie mit Erinnerungsstücken und wichtigen Dokumenten um?',
        answer: 'Bevor wir räumen, besprechen wir genau, welche Gegenstände wichtig für Sie sind. Auf Wunsch sortieren wir gemeinsam mit Ihnen und legen Erinnerungsstücke, Dokumente, Wertgegenstände beiseite. Bei extremer Vermüllung durchsuchen unsere Mitarbeiter systematisch alle Bereiche, um nichts Wichtiges zu übersehen. Wir wissen, dass zwischen Müll oft Wertvolles versteckt ist und gehen entsprechend sorgfältig vor.'
      },
      {
        question: 'Können Sie auch Geruchsbeseitigung und Desinfektion durchführen?',
        answer: 'Ja, das gehört zu unseren Spezialleistungen. Wir setzen professionelle Geruchsneutralisierer ein, die Gerüche nicht überdecken, sondern chemisch binden. Nach der Räumung erfolgt eine gründliche Desinfektion aller Oberflächen, Böden und Sanitärbereiche. Bei Bedarf führen wir auch eine Ozonbehandlung durch, die selbst hartnäckige Gerüche beseitigt. Die Wohnung wird wieder bewohnbar und riecht neutral.'
      },
      {
        question: 'Was passiert, wenn Ungeziefer in der Wohnung ist?',
        answer: 'Ungezieferbefall kommt bei Messie-Wohnungen leider häufig vor. Wir arbeiten mit zertifizierten Schädlingsbekämpfern zusammen und koordinieren die Behandlung. Zunächst erfolgt die Räumung, dann die professionelle Schädlingsbekämpfung, anschließend Desinfektion und Geruchsbeseitigung. Wir betrachten die Situation ohne Ekel oder Vorurteile - für uns ist es ein Job, den wir professionell erledigen.'
      },
      {
        question: 'Kann die Räumung in mehreren Etappen erfolgen?',
        answer: 'Ja, das ist oft sogar besser. Viele Betroffene sind mit einer Komplettumg überfordert. Wir können schrittweise vorgehen - erst ein Raum, dann der nächste. So haben Sie Zeit zu verarbeiten und können sich an die Veränderung gewöhnen. Therapeutisch begleitete Räumungen erfolgen fast immer etappenweise. Wir richten uns nach Ihrem Tempo und Ihrer Belastbarkeit.'
      },
      {
        question: 'Gibt es finanzielle Unterstützung für Messie-Räumungen?',
        answer: 'In manchen Fällen ja. Sozialämter können bei nachgewiesener Bedürftigkeit Kosten übernehmen. Manche Krankenkassen bezuschussen die Räumung, wenn sie medizinisch notwendig ist und therapeutisch begleitet wird. Auch gesetzliche Betreuer können Kostenübernahmen beantragen. Wir stellen Ihnen ordentliche Rechnungen aus und beraten Sie zu Unterstützungsmöglichkeiten. Sprechen Sie mit Ihrem Sozialarbeiter oder Therapeuten darüber.'
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
