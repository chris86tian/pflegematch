import React from 'react';

const faqs = [
  {
    question: 'Was ist PflegeMatch?',
    answer: 'PflegeMatch ist eine Online-Plattform, die Pflegeeinrichtungen und spezialisierte Personalvermittler zusammenbringt, um den Prozess der Rekrutierung und Vermittlung von internationalen Pflegekräften zu vereinfachen und zu standardisieren.',
  },
  {
    question: 'Für wen ist die Plattform gedacht?',
    answer: 'Die Plattform richtet sich an zwei Hauptzielgruppen: Pflegeeinrichtungen (Krankenhäuser, Altenheime etc.), die qualifiziertes Pflegepersonal suchen, und Personalvermittlungsagenturen, die auf internationale Pflegekräfte spezialisiert sind.',
  },
  {
    question: 'Wie profitieren Pflegeeinrichtungen?',
    answer: 'Einrichtungen können einfach Stellen ausschreiben, erhalten Zugang zu einem Pool von Kandidaten spezialisierter Vermittler, verwalten Bewerbungen zentral und behalten den Überblick über den gesamten Vermittlungsprozess.',
  },
  {
    question: 'Welche Vorteile haben Personalvermittler?',
    answer: 'Vermittler erhalten Zugang zu aktuellen Stellenangeboten von Pflegeeinrichtungen, können Kandidatenprofile effizient einreichen und den Status ihrer Vermittlungen transparent nachverfolgen.',
  },
  {
    question: 'Ist die Nutzung der Plattform DSGVO-konform?',
    answer: 'Ja, Datenschutz hat für uns höchste Priorität. Die Plattform ist so konzipiert, dass alle Prozesse und die Datenverarbeitung den Anforderungen der Datenschutz-Grundverordnung (DSGVO) entsprechen.',
  },
  {
    question: 'Fallen Kosten für die Nutzung an?',
    answer: 'Informationen zu unserem Preismodell finden Sie nach der Registrierung oder kontaktieren Sie uns direkt für ein individuelles Angebot.',
  },
];

export function FAQ() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Antworten auf die wichtigsten Fragen rund um PflegeMatch und unsere Services.
          </p>
        </div>
        <div className="mt-16">
          <dl className="space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
