import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/salt")({
  component: SaltRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "salt");
    return {
      meta: [
        { title: `${cat?.title || "Salt"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian salt export" },
      ],
    };
  },
});

function SaltRoute() {
  const category = categories.find((c) => c.slug === "salt")!;
  return <CategoryPage category={category} />;
}
