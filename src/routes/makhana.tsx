import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { categories } from "@/data/site";

export const Route = createFileRoute("/makhana")({
  component: MakhanaRoute,
  head: () => {
    const cat = categories.find((c) => c.slug === "makhana");
    return {
      meta: [
        { title: `${cat?.title || "Makhana / Fox Nuts"} Export | Horizon Exim` },
        { name: "description", content: cat?.blurb || "Indian makhana fox nuts export" },
      ],
    };
  },
});

function MakhanaRoute() {
  const category = categories.find((c) => c.slug === "makhana")!;
  return <CategoryPage category={category} />;
}
