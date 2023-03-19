import { component$, useClientEffect$ } from "@builder.io/qwik";
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

export const VercelWebVitals = component$(() => {
  if (!import.meta.env.PROD) return null;

  const analyticsId = import.meta.env.VITE_VERCEL_ANALYTICS_ID;
  useClientEffect$(
    () => {
      if (analyticsId) {
        webVitals({
          path: location.pathname,
          params: location.search,
          analyticsId,
        });
      }
    },
    { eagerness: "load" }
  );

  return null;
});

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    // @ts-ignore
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : "";
}

function sendToAnalytics(metric: any, options: any) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path
  );

  const body = {
    dsn: options.analyticsId, // qPgJqYH9LQX5o31Ormk8iWhCxZO
    id: metric.id, // v2-1653884975443-1839479248192
    page, // /blog/[slug]
    href: location.href, // https://{my-example-app-name-here}/blog/my-test
    event_name: metric.name, // TTFB
    value: metric.value.toString(), // 60.20000000298023
    speed: getConnectionSpeed(), // 4g
  };

  if (options.debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob(
    [new URLSearchParams(body as Record<string, string>).toString()],
    {
      // This content type is necessary for `sendBeacon`
      type: "application/x-www-form-urlencoded",
    }
  );
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export function webVitals(options: any) {
  try {
    getFID((metric) => sendToAnalytics(metric, options));
    getTTFB((metric) => sendToAnalytics(metric, options));
    getLCP((metric) => sendToAnalytics(metric, options));
    getCLS((metric) => sendToAnalytics(metric, options));
    getFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
