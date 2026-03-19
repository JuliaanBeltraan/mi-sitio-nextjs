// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function BlogCard({ title, description, image, slug }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link href={`/blog/${slug}`} className="text-blue-500 font-semibold hover:underline text-sm">
          Leer más →
        </Link>
      </div>
    </div>
  );
}