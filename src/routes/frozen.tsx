import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/frozen")({
  component: FrozenRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "frozen");
    return {
      meta: [
        { title: `${cat?.title || "IQF Frozen Items"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian IQF frozen products export" },
      ],
    };
  },
});

function FrozenRoute() {
  const category = categories.find((c) => c.slug === "frozen")!;
  return <CategoryPage category={category} />;
}
