export const VercelAnalytics = () => {
  if (!import.meta.env.PROD) return null;

  return <script type="text/partytown" src="/_vercel/insights/script.js" />;
};
