export const site = {
  name: 'Hygrid.io',
  tagline: 'Deliver Data to Excel in Seconds.',
  description: 'Write SQL. Send data to your Excel users.',
  primaryColor: '#124b88',
  email: 'info@hygrid.io',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Excel Features', href: '/#excel-features' },
  { label: 'Developer Features', href: '/#developer-features' },
  { label: 'Demo Videos', href: '/demo-videos' },
  { label: 'Get Hygrid', href: '/get-hygrid' },
] as const;

export const excelFeatures = [
  {
    title: 'Run reports directly from any other systems.',
    description:
      'Here you can see every data report. Its already connected to your source systems, and presented in an easy to view display. No dealing with macros — just a one time Add-In is installed.',
    image: '/images/Excel-Hygrid-View.png',
    alt: 'Excel Hygrid View showing connected reports',
  },
  {
    title: 'Run reports as formulas.',
    description:
      'You can run the data report directly from within an Excel formula.',
    image: '/images/Run-Report-As-Formula-2.png',
    alt: 'Running a Hygrid report as an Excel formula',
  },
  {
    title: 'Reports are organized and searchable.',
    description:
      "Hygrid's Report Browser allows you to search and run any report from any of your systems.",
    image: '/images/Searchable-437x321.png',
    alt: 'Searchable report browser in Hygrid',
  },
] as const;

export const excelHighlights = [
  {
    title: 'All pivot tables refreshed after a report is run.',
    description: 'Pivot tables refresh automatically with any Hygrid.io report refresh.',
    image: '/images/Pivot-Tables-Refresh.png',
    alt: 'Pivot tables auto-refresh with Hygrid reports',
  },
  {
    title: 'Lightning fast.',
    description: 'Pull 10,000 rows in milliseconds.',
    icon: 'bolt',
  },
  {
    title: 'No dealing with Macros.',
    description: 'A simple one-time Add-In — no VBA required.',
    icon: 'shield',
  },
] as const;

export const developerFeatures = [
  {
    title: 'Plugs directly into your SQL Database or Restful API',
    description:
      'Connect to any SQL Server, Restful API, Quickbooks or Salesforce.',
    image: '/images/Connect-to-data-source-1.png',
    alt: 'Connect Hygrid to SQL databases and REST APIs',
  },
  {
    title: 'Write SQL with Parameters and Send to Any Excel Users in Seconds',
    description:
      'Enhance Excel as the report writer. Create your own taxonomy of reports that are searchable by users. Create parameters for your reports empowering your users to run their own reports. You can add dropdown lists, combo boxes and date parameters.',
    image: '/images/Create-Report-v2-1.png',
    alt: 'Create parameterized SQL reports in Hygrid',
  },
  {
    title: 'User permissioning. You control who is able to access your data.',
    description:
      'Create permissioning to control who is able to receive data to their Excel.',
    image: '/images/User-permissions.png',
    alt: 'User permission controls in Hygrid',
  },
] as const;

export const demoVideos = [
  {
    id: 'sXIOrY7ffFQ',
    title: 'Setting Up A Hygrid Report',
    category: 'developer' as const,
    description: 'Learn how to set up and configure a Hygrid report from scratch.',
  },
  {
    id: 'cHd72DOSgGU',
    title: 'Hygrid.io — The Cool Way To Use Excel With Your Other Systems',
    category: 'excel' as const,
    description: 'See how Excel users interact with Hygrid to pull live data.',
  },
] as const;
