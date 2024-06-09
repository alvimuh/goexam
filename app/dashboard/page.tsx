import { Header } from "@/components/layout/header";
import { Page } from "@/components/layout/page";
import { MENU_LIST } from "@/lib/menu";
import { trpc } from "@/lib/trpc";

export default async function DemoPage() {
  const hello = trpc.hello.useQuery({ text: "client" });
  console.log({ hello });

  const menu = MENU_LIST["dashboard"].children["dashboard"];
  return (
    <Page>
      <Header title={menu.title} icon={menu.icon} />
    </Page>
  );
}
