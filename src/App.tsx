import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BriefcaseIcon, BuildingIcon, UserCheck } from 'lucide-react';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ'; // Import FAQ component
import { Privacy } from './pages/Privacy';
import { Imprint } from './pages/Imprint';
import { Terms } from './pages/Terms';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Pflegekräfte finden.<br />
              Einfach. Effizient. Transparent.
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Die zentrale Plattform für Pflegeeinrichtungen und Personalvermittler
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <BuildingIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Für Pflegeeinrichtungen
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Stellen unkompliziert ausschreiben
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Qualifizierte Bewerber zentral verwalten
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Vermittlungsprozess transparent steuern
                </li>
              </ul>
              <Link
                to="/registrieren"
                className="mt-8 block w-full text-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Als Einrichtung registrieren
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <BriefcaseIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Für Personalvermittler
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Zugang zu aktuellen Stellenangeboten
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Kandidatenprofile effizient einreichen
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Vermittlungsstatus in Echtzeit verfolgen
                </li>
              </ul>
              <Link
                to="/registrieren"
                className="mt-8 block w-full text-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Als Vermittler registrieren
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Unsere Plattform-Vorteile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Standardisierter Prozess
                </h4>
                <p className="text-gray-600">
                  Strukturierte Abläufe von der Stellenausschreibung bis zur erfolgreichen Vermittlung
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  DSGVO-konform
                </h4>
                <p className="text-gray-600">
                  Sichere und geschützte Verarbeitung aller Bewerber- und Einrichtungsdaten
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Effiziente Kommunikation
                </h4>
                <p className="text-gray-600">
                  Direkter Austausch zwischen Einrichtungen und Vermittlern auf der Plattform
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

      </main>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <UserCheck className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-semibold text-gray-900">PflegeMatch</h1>
            </Link>
            <nav className="flex space-x-4">
              {/* Change button to Link */}
              <Link
                to="/anmelden"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Anmelden
              </Link>
              <Link
                to="/registrieren"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Registrieren
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datenschutz" element={<Privacy />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/agb" element={<Terms />} />
        <Route path="/registrieren" element={<Register />} />
        <Route path="/anmelden" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
