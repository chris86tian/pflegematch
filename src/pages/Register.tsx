import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BuildingIcon, BriefcaseIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';

type UserType = 'facility' | 'recruiter';

interface RegisterFormData {
  email: string;
  password: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  type: UserType;
}

export function Register() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);
      
      // Register user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            type: data.type,
            company_name: data.companyName,
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Store additional user data in profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              type: data.type,
              company_name: data.companyName,
              contact_person: data.contactPerson,
              phone: data.phone,
              street: data.street,
              postal_code: data.postalCode,
              city: data.city,
            }
          ]);

        if (profileError) throw profileError;

        // Redirect to dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Wählen Sie Ihren Account-Typ
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sind Sie eine Pflegeeinrichtung oder ein Personalvermittler?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <button
              onClick={() => setUserType('facility')}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <BuildingIcon className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Pflegeeinrichtung</h3>
              <p className="mt-2 text-gray-600 text-center">
                Für Krankenhäuser, Pflegeheime und ambulante Dienste
              </p>
            </button>

            <button
              onClick={() => setUserType('recruiter')}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <BriefcaseIcon className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Personalvermittler</h3>
              <p className="mt-2 text-gray-600 text-center">
                Für Vermittlungsagenturen und Personalberater
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Registrierung als {userType === 'facility' ? 'Pflegeeinrichtung' : 'Personalvermittler'}
          </h2>

          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input type="hidden" {...register('type')} value={userType} />
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unternehmensname
              </label>
              <input
                type="text"
                {...register('companyName', { required: 'Pflichtfeld' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ansprechpartner
              </label>
              <input
                type="text"
                {...register('contactPerson', { required: 'Pflichtfeld' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.contactPerson && (
                <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <input
                type="email"
                {...register('email', { required: 'Pflichtfeld' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passwort
              </label>
              <input
                type="password"
                {...register('password', { required: 'Pflichtfeld', minLength: {
                  value: 8,
                  message: 'Passwort muss mindestens 8 Zeichen lang sein'
                }})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                {...register('phone', { required: 'Pflichtfeld' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Straße und Hausnummer
              </label>
              <input
                type="text"
                {...register('street', { required: 'Pflichtfeld' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.street && (
                <p className="mt-1 text-sm text-red-600">{errors.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  PLZ
                </label>
                <input
                  type="text"
                  {...register('postalCode', { required: 'Pflichtfeld' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Ort
                </label>
                <input
                  type="text"
                  {...register('city', { required: 'Pflichtfeld' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setUserType(null)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Zurück zur Auswahl
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Registrieren
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}