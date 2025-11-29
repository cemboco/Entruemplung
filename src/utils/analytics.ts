declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'Contact',
    event_label: 'Phone Number Click',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Button Click',
  });
};

export const trackQuoteRequest = (quoteType: string) => {
  trackEvent('quote_request', {
    event_category: 'Lead Generation',
    event_label: quoteType,
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'Lead Generation',
    event_label: 'Contact Form Submission',
  });
};

export const trackCTAClick = (ctaLocation: string) => {
  trackEvent('cta_click', {
    event_category: 'Engagement',
    event_label: ctaLocation,
  });
};
