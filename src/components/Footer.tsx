import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Über uns
            </h4>
            <p className="mt-4 text-gray-600">
              PflegeMatch verbindet Pflegeeinrichtungen mit spezialisierten Personalvermittlern für internationale Pflegekräfte.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/datenschutz" className="text-gray-600 hover:text-blue-600">Datenschutz</Link>
              </li>
              <li>
                <Link to="/agb" className="text-gray-600 hover:text-blue-600">AGB</Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-600 hover:text-blue-600">Impressum</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="mt-4 space-y-2 text-gray-600">
              <p className="font-semibold">Inh. Prof. Leonhard Zintl</p>
              <p>Unterer Markt 35a<br />95478 Waldeck</p>
              <p>
                <a href="tel:+491603297476" className="hover:text-blue-600">
                  +49 (0)160 3297476
                </a>
              </p>
              <p>
                <a href="mailto:info@zintl.magement" className="hover:text-blue-600">
                  info@zintl.magement
                </a>
              </p>
              <p className="mt-4">
                USt-ID-Nr.: 254/195/96321<br />
                Geschäftsführer: Leonhard Zintl
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">
            © 2025 PflegeMatch. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
