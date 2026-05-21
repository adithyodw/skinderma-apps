// lazy-screens.jsx — code-split heavy routes & modals (Vite equivalent of next/dynamic)
import { lazy } from 'react';

export const HomeScreen = lazy(() =>
  import('./screens/Home.jsx').then((m) => ({ default: m.HomeScreen }))
);
export const TreatmentsScreen = lazy(() =>
  import('./screens/Treatments.jsx').then((m) => ({ default: m.TreatmentsScreen }))
);
export const TreatmentDetail = lazy(() =>
  import('./screens/Treatments.jsx').then((m) => ({ default: m.TreatmentDetail }))
);
export const AboutScreen = lazy(() =>
  import('./screens/About.jsx').then((m) => ({ default: m.AboutScreen }))
);
export const JournalScreen = lazy(() =>
  import('./screens/Journal.jsx').then((m) => ({ default: m.JournalScreen }))
);
export const ContactScreen = lazy(() =>
  import('./screens/Contact.jsx').then((m) => ({ default: m.ContactScreen }))
);
export const BookingSheet = lazy(() =>
  import('./screens/Contact.jsx').then((m) => ({ default: m.BookingSheet }))
);
export const IOSDevice = lazy(() =>
  import('./ios-frame.jsx').then((m) => ({ default: m.IOSDevice }))
);
