export default function LinkedInEmbed({
  urn,
  title,
}: {
  urn: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper-2">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`}
        title={title}
        loading="lazy"
        allowFullScreen
        className="h-[560px] w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
