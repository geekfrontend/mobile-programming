// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "JavaScript & Algorithms",
    href: "/javascript-algorithms",
    noLink: true,
    items: [
      {
        title: "Pertemuan 1: Pengenalan JavaScript & Dasar Algoritma",
        href: "/pertemuan-1",
      },
      {
        title: "Pertemuan 2: Struktur Kontrol - Percabangan",
        href: "/pertemuan-2",
      },
      {
        title: "Pertemuan 3: Struktur Kontrol - Perulangan",
        href: "/pertemuan-3",
      },
      { title: "Pertemuan 4: Fungsi & Scope", href: "/pertemuan-4" },
      { title: "Pertemuan 5: Array & Metode Array", href: "/pertemuan-5" },
      { title: "Pertemuan 6: Object & Manipulasi Data", href: "/pertemuan-6" },
      { title: "Pertemuan 7: Pengenalan OOP", href: "/pertemuan-7" },
      { title: "Pertemuan 8: Asynchronous JavaScript", href: "/pertemuan-8" },
      { title: "Pertemuan 9: Async/Await & Fetch API", href: "/pertemuan-9" },
      {
        title: "Pertemuan 10: Manipulasi String & Regex",
        href: "/pertemuan-10",
      },
      {
        title: "Pertemuan 11: Struktur Data - Stack & Queue",
        href: "/pertemuan-11",
      },
      {
        title: "Pertemuan 12: Struktur Data - Linked List",
        href: "/pertemuan-12",
      },
      { title: "Pertemuan 13: Sorting Algorithms", href: "/pertemuan-13" },
      { title: "Pertemuan 14: Searching Algorithms", href: "/pertemuan-14" },
      { title: "Pertemuan 15: Graph & Tree Basics", href: "/pertemuan-15" },
      { title: "Pertemuan 16: Project Akhir", href: "/pertemuan-16" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
