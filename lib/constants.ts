// Centralized constants for the app
// Events array is shaped to match components/EventCard.tsx Props
// image paths reference files in public/images

export type EventItem = {
  title: string;
  image: string; // path under /public
  slug: string;
  location: string;
  date: string; // human-readable e.g., "Nov 12, 2025"
  time: string; // human-readable e.g., "09:00 AM — 5:00 PM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "GitHub Universe 2025",
    slug: "github-universe-2025",
    location: "San Francisco, CA, USA",
    date: "Nov 5–6, 2025",
    time: "9:00 AM — 5:30 PM",
  },
  {
    image: "/images/event2.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Dec 1–5, 2025",
    time: "8:30 AM — 6:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "JSConf EU 2026",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "May 16–17, 2026",
    time: "9:30 AM — 5:30 PM",
  },
  {
    image: "/images/event4.png",
    title: "Hack the North 2025",
    slug: "hack-the-north-2025",
    location: "Waterloo, ON, Canada",
    date: "Sep 19–21, 2025",
    time: "48-hour hackathon",
  },
  {
    image: "/images/event5.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands (Hybrid)",
    date: "Jun 11–12, 2026",
    time: "9:00 AM — 6:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "San Francisco, CA, USA",
    date: "Apr 7–9, 2026",
    time: "9:00 AM — 5:00 PM",
  },
];
