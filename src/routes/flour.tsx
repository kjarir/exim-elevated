import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/flour")({
  component: FlourRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "flour");
    return {
      meta: [
        { title: `${cat?.title || "Flour & Cattle Feed"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian flour & grains export" },
      ],
    };
  },
});

function FlourRoute() {
  const category = categories.find((c) => c.slug === "flour")!;
  return <CategoryPage category={category} />;
}
