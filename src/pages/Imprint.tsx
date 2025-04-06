import React from 'react';

export function Imprint() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            Prof. Leonhard Zintl<br />
            Unterer Markt 35a<br />
            95478 Waldeck
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p className="mb-4">
            Telefon: +49 (0)160 3297476<br />
            E-Mail: info@zintl.magement
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            USt-ID-Nr.: 254/195/96321
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Geschäftsführung</h2>
          <p className="mb-4">
            Geschäftsführer: Leonhard Zintl
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="mb-4">
            Prof. Leonhard Zintl<br />
            Unterer Markt 35a<br />
            95478 Waldeck
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Streitschlichtung</h2>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-800">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </div>
  );
}
