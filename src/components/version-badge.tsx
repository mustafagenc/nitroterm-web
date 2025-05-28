import { fetchCargoVersion } from "@/lib/version";

export default async function VersionBadge() {
  const version = await fetchCargoVersion();

  if (!version) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Version unavailable
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      v{version}
    </span>
  );
}
