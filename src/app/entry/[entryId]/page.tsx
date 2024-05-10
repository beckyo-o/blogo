"use client"
import { notFound } from 'next/navigation';
import entries from '@/entries/entry.json';
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


export default async function EntryDetailPage({ params }: {
    params: { entryId: string }
}) {
    const entry = entries.find((entry: { id: string }) => entry.id === params.entryId); // Look for entry with id
    if (!entry) {
        notFound();
    }

    return (
        <main>
            <title>{entry.title}</title>
            <div className="max-w-3xl mx-auto min-h-screen justify-center p-10 bg-gray-900">
                <h1 className="text-3xl font-bold mb-4 mt-5">
                    {entry.title}
                </h1>
                <p className="text-gray-600 mb-4">
                    {entry.date}
                </p>

                <div className="prose">
                    {entry.content}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 place-items-center h-56">
                {entry.images.map((image: string | StaticImport) => (
                    <Image src={image} alt='' width={200} height={200} className="dark:invert py-1" />
                ))}
            </div>
        </main>
    );
}
