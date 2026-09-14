import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/spices")({
  component: SpicesRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "spices");
    return {
      meta: [
        { title: `${cat?.title || "Authentic Spices"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian spices export" },
      ],
    };
  },
});

function SpicesRoute() {
  const category = categories.find((c) => c.slug === "spices")!;
  return <CategoryPage category={category} />;
}
