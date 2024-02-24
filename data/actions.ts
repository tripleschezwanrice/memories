"use server";

import { authConfig } from "@/lib/auth";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

export async function newJournal(formData: FormData) {
  const session = await getServerSession(authConfig);
  const email = session?.user?.email;
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();

  console.log(title + " " + content);

  try {
    await sql`
INSERT INTO journals (title, content, email)
VALUES (${title}, ${content}, ${email})
`;
  } catch (err) {
    console.log("some error occured: ", err);
  }

  revalidatePath("/Journals");
  revalidatePath("/Create");
  redirect("/");
}

export async function getJournals() {
  const session = await getServerSession(authConfig);
  const email = session?.user?.email;
  const Journals = await sql`
    SELECT id, title, content, createdAt, updatedAt
    FROM journals 
    WHERE email = ${session?.user?.email}
    ORDER BY createdat DESC`;

  return Journals.rows;
}

export async function getJournalById(id: string) {
  unstable_noStore();
  const journal = await sql`
  SELECT id, title, content, createdAt, updatedAt
  FROM journals
  WHERE id = ${id}`;

  return journal.rows;
}

export async function deleteById(id: string) {
  await sql`
  DELETE FROM journals 
  WHERE id=${id}`;
}

export async function getLast6() {
  const session = await getServerSession(authConfig);
  const email = session?.user?.email;

  const journals = await sql`
  SELECT *
FROM journals
WHERE email = ${email}
ORDER BY createdat DESC
LIMIT 6;
  `;

  return journals.rows;
}

export async function updateJournal(
  id: string,
  journal: { title: string; content: string; createdat: string }
) {
  const timestamp = Date.now();
  const dateObject = new Date(timestamp);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  // Convert the date to a custom formatted string
  const formattedDate = dateObject.toLocaleString("en-US", options);

  await sql`
  UPDATE journals
SET title = ${journal.title}, content =  ${journal.content}, updatedat = ${formattedDate}
WHERE id = ${id};
  `;
  revalidatePath("/Journals");
  revalidatePath("/Create");

  console.log("DONE");
}

export async function deleteJournal(id: string) {
  await sql`
  DELETE from journals
  where id = ${id}
  `;
console.log("deleted")
  revalidatePath("/Journals");
  revalidatePath("/Create");
  redirect("/Journals");
}

export async function stats() {
  const session = await getServerSession(authConfig);
  
  const Data = await sql`
SELECT COUNT(*) AS journal_count
FROM journals
WHERE email = ${session?.user?.email};
  `
  return Data.rows[0].journal_count


}
