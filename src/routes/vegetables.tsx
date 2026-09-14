import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/vegetables")({
  component: VegetablesRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "vegetables");
    return {
      meta: [
        { title: `${cat?.title || "Fresh Vegetables"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian fresh vegetables export" },
      ],
    };
  },
});

function VegetablesRoute() {
  const category = categories.find((c) => c.slug === "vegetables")!;
  return <CategoryPage category={category} />;
}
