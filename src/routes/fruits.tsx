import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/fruits")({
  component: FruitsRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "fruits");
    return {
      meta: [
        { title: `${cat?.title || "Fresh Fruits"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian fresh fruits export" },
      ],
    };
  },
});

function FruitsRoute() {
  const category = categories.find((c) => c.slug === "fruits")!;
  return <CategoryPage category={category} />;
}
