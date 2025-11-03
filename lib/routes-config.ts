// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Mobile Programming",
    href: "/mobile-programming",
    noLink: true,
    items: [
      {
        title: "Pertemuan 1: Pengantar TypeScript",
        href: "/pertemuan-1",
      },
      {
        title: "Pertemuan 2: TypeScript Lanjutan",
        href: "/pertemuan-2",
      },
      {
        title: "Pertemuan 3: Membuat Project dengan Expo",
        href: "/pertemuan-3",
      },
      {
        title: "Pertemuan 4: Komponen Bawaan React Native",
        href: "/pertemuan-4",
      },
      {
        title: "Pertemuan 5: Styling dengan StyleSheet & Tailwind",
        href: "/pertemuan-5",
      },
      {
        title: "Pertemuan 6: Navigasi Menggunakan Expo Router",
        href: "/pertemuan-6",
      },
      {
        title: "Pertemuan 7: State Management dengan Hooks",
        href: "/pertemuan-7",
      },
      {
        title: "Pertemuan 8: Integrasi API dengan Fetch & Axios",
        href: "/pertemuan-8",
      },
      {
        title: "Pertemuan 9: Menyimpan Data Lokal (AsyncStorage)",
        href: "/pertemuan-9",
      },
      {
        title: "Pertemuan 10: Akses Kamera & Media Library",
        href: "/pertemuan-10",
      },
      {
        title: "Pertemuan 11: Gesture, Animasi, dan Reanimated",
        href: "/pertemuan-11",
      },
      {
        title: "Pertemuan 12: Deployment & Build Aplikasi Expo",
        href: "/pertemuan-12",
      },
      {
        title: "Pertemuan 13: Autentikasi & Manajemen User",
        href: "/pertemuan-13",
      },
      {
        title: "Pertemuan 14: Realtime Database & Push Notification",
        href: "/pertemuan-14",
      },
      {
        title: "Pertemuan 15: Studi Kasus — Aplikasi Presensi",
        href: "/pertemuan-15",
      },
      {
        title: "Pertemuan 16: Ujian Akhir / Final Project Review",
        href: "/pertemuan-16",
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute): Page[] {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    // pastikan href anak tidak double slash
    const temp = {
      ...subNode,
      href: `${node.href}${
        subNode.href.startsWith("/") ? subNode.href : `/${subNode.href}`
      }`,
    };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
