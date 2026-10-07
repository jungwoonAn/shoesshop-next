import Detail from "@/components/Detail";

export default async function Page({ params }) {
  const { id } = await params;

  return <Detail id={id} />;
}
