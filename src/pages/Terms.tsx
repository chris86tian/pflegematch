import React from 'react';

export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">§1 Geltungsbereich</h2>
          <p className="mb-4">
            Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der PflegeMatch-Plattform, 
            betrieben von Prof. Leonhard Zintl, Unterer Markt 35a, 95478 Waldeck (nachfolgend "Betreiber" genannt).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§2 Vertragsgegenstand</h2>
          <p className="mb-4">
            PflegeMatch ist eine B2B-Plattform, die Pflegeeinrichtungen mit Personalvermittlern 
            zusammenbringt. Die Plattform ermöglicht:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Das Erstellen und Verwalten von Stellenanzeigen durch Pflegeeinrichtungen</li>
            <li>Die Vermittlung von qualifizierten Pflegekräften durch registrierte Personalvermittler</li>
            <li>Die Kommunikation zwischen den Vertragsparteien</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§3 Registrierung und Nutzerkonto</h2>
          <p className="mb-4">
            (1) Die Nutzung der Plattform setzt eine Registrierung voraus. Diese steht ausschließlich 
            juristischen Personen und Unternehmern im Sinne des § 14 BGB offen.
          </p>
          <p className="mb-4">
            (2) Der Nutzer ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen 
            und diese bei Änderungen zu aktualisieren.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§4 Leistungen und Pflichten</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Pflegeeinrichtungen</h3>
          <p className="mb-4">
            (1) Pflegeeinrichtungen können Stellenanzeigen erstellen und verwalten.
          </p>
          <p className="mb-4">
            (2) Sie verpflichten sich zur wahrheitsgemäßen Angabe der Stellenanforderungen und Konditionen.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Personalvermittler</h3>
          <p className="mb-4">
            (1) Personalvermittler können auf Stellenanzeigen reagieren und Kandidatenprofile einreichen.
          </p>
          <p className="mb-4">
            (2) Sie garantieren die Richtigkeit der eingereichten Kandidateninformationen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§5 Vergütung und Zahlungsbedingungen</h2>
          <p className="mb-4">
            (1) Die Nutzung der Plattform ist für beide Parteien kostenfrei.
          </p>
          <p className="mb-4">
            (2) Vermittlungsprovisionen werden direkt zwischen Pflegeeinrichtung und Personalvermittler vereinbart.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§6 Datenschutz</h2>
          <p className="mb-4">
            (1) Der Betreiber verarbeitet personenbezogene Daten gemäß der Datenschutzerklärung.
          </p>
          <p className="mb-4">
            (2) Alle Nutzer verpflichten sich zur Einhaltung der DSGVO bei der Verarbeitung 
            von Kandidatendaten.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§7 Haftung</h2>
          <p className="mb-4">
            (1) Der Betreiber haftet nicht für die Richtigkeit der von Nutzern eingestellten Informationen.
          </p>
          <p className="mb-4">
            (2) Die Haftung des Betreibers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§8 Vertragslaufzeit und Kündigung</h2>
          <p className="mb-4">
            (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
          </p>
          <p className="mb-4">
            (2) Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende kündigen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§9 Schlussbestimmungen</h2>
          <p className="mb-4">
            (1) Es gilt das Recht der Bundesrepublik Deutschland.
          </p>
          <p className="mb-4">
            (2) Gerichtsstand ist Waldeck, sofern der Nutzer Kaufmann ist.
          </p>
          <p className="mb-4">
            (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen 
            Bestimmungen unberührt.
          </p>

          <div className="mt-8 text-sm text-gray-600">
            <p>Stand: März 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
