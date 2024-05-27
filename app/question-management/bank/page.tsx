import { Page } from "@/components/layout/page";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Header } from "@/components/layout/header";
import { MENU_LIST } from "@/lib/menu";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  const menu = MENU_LIST["question-management"].children["bank"];
  return (
    <Page>
      <Header
        title={menu.title}
        icon={menu.icon}
        topRightChildren={<Button variant="default">Buat Soal</Button>}
      />
      <DataTable columns={columns} data={data} />
    </Page>
  );
}
