import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/rice")({
  component: RiceRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "rice");
    return {
      meta: [
        { title: `${cat?.title || "Basmati & Non-Basmati Rice"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian rice export" },
      ],
    };
  },
});

function RiceRoute() {
  const category = categories.find((c) => c.slug === "rice")!;
  return <CategoryPage category={category} />;
}
