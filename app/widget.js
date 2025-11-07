'use client'; // Important : active le mode client-only pour éviter les erreurs SSR

import Script from 'next/script';

export default function PartooWidget() {
  return (
    <>
      <Script
        id="partoo-messaging-widget"
        src="https://cdn.partoo.co/widget/prod/latest.js"
        strategy="afterInteractive" // Charge après l'hydratation initiale, côté client
        type="module"
        data-token="407f2559-b691-4695-b95e-55839eb66a73"
        data-icon="message_whatsapp_icon"
        data-color="#25D366"
        data-policy-url="https://app.partoo.co/privacy/messaging/eb7c996b-8f9e-48cb-8c37-b8dfdc2efcf1?lang=fr"
        data-country="FR"
        data-avatar-image-url="https://cdn.partoo.co/avatar/prod/407f2559-b691-4695-b95e-55839eb66a73/2138651e-ec0d-44f5-90df-89f40903d735.png"
      />
    </>
  );
}