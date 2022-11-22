import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, excerpt, slug }: Props) => {
  return (
    <Link
      as={`/${slug}`}
      href="/[slug]"
      className="border-black border-2 py-1 px-3 hover:bg-red-200"
    >
      <h3 className="text-3xl mb-3 leading-snug hover:underline">{title}</h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </Link>
  );
};

export default PostPreview;
