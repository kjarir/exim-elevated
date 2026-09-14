import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/confectionery")({
  component: ConfectioneryRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "confectionery");
    return {
      meta: [
        { title: `${cat?.title || "Confectionery"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian confectionery export" },
      ],
    };
  },
});

function ConfectioneryRoute() {
  const category = categories.find((c) => c.slug === "confectionery")!;
  return <CategoryPage category={category} />;
}
