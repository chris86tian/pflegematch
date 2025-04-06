import React from 'react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Impressum dieser Website entnehmen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mb-4">
            Prof. Leonhard Zintl<br />
            Unterer Markt 35a<br />
            95478 Waldeck<br />
            Telefon: +49 (0)160 3297476<br />
            E-Mail: info@zintl.magement
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Datenerfassung auf unserer Website</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
          <p className="mb-4">
            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden 
            an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer 
            zu machen.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
