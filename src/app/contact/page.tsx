import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <section className="section-padding bg-background">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        {/* Map */}
        <div className="h-[400px] border-t border-border">
          {/* BACKEND INTEGRATION: Replace with Google Maps API key */}
          <iframe
            src="https://maps.google.com/maps?q=Borjs+Hotel+Suites+Spa+Agadir+Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Borjs Hotel Suites & Spa Agadir"
          />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}