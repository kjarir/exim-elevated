import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/onion")({
  component: OnionRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "onion");
    return {
      meta: [
        { title: `${cat?.title || "Onion"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian onion export" },
      ],
    };
  },
});

function OnionRoute() {
  const category = categories.find((c) => c.slug === "onion")!;
  return <CategoryPage category={category} />;
}
